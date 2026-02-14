function calculate(t) {
    const [h, m] = t.split(':');
    let n = new Date();
    let d = new Date();
    d.setHours(parseInt(h), parseInt(m), 0, 0);
    if (d <= n) d.setDate(d.getDate() + 1);
    return d.getTime();
}

function generate16CharPassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 16; i++) pass += chars.charAt(Math.floor(Math.random() * chars.length));
    return pass;
}

document.getElementById('gen-pass').addEventListener('click', () => {
    const pass = generate16CharPassword();
    document.getElementById('secret').value = pass;
    document.getElementById('secret').type = "password";
});

document.getElementById('toggle-pass').addEventListener('click', () => {
    const s = document.getElementById('secret');
    s.type = s.type === "password" ? "text" : "password";
});

document.getElementById('secret').addEventListener('input', function() {
    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16);
    }
});

document.getElementById('save').addEventListener('click', () => {
    const url = document.getElementById('url').value.trim();
    const user = document.getElementById('user').value.trim();
    const pass = document.getElementById('pass').value; 
    const secret = document.getElementById('secret').value;
    const time = document.getElementById('time').value;

    if (!url || !user || !pass || !time) {
        alert("Please complete all fields before scheduling.");
        return;
    }

    if (secret.length !== 16) {
        alert("Backup Secret must be exactly 16 characters long.");
        return;
    }

    alert("CRITICAL: Please disable 'Ask where to save each file before downloading' in Chrome Settings -> Downloads to ensure the automation works correctly.");

    let base = url;
    if (!base.startsWith('http')) base = 'https://' + base;
    try { base = new URL(base).origin; } catch(e) {}

    const data = {
        url: base, user, pass, secret, time,
        active: false, locked: true
    };

    chrome.storage.local.set(data, () => {
        chrome.alarms.create("backupAlarm", { when: calculate(time), periodInMinutes: 1440 });
        location.reload();
    });
});

document.getElementById('reset').addEventListener('click', () => {
    chrome.storage.local.clear(() => {
        chrome.alarms.clearAll();
        location.reload();
    });
});

chrome.storage.local.get(['locked', 'time'], (d) => {
    if (d.locked) {
        document.getElementById('setup-form').style.display = 'none';
        document.getElementById('status-zone').style.display = 'block';
        setInterval(() => {
            const diff = calculate(d.time) - new Date().getTime();
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            document.getElementById('countdown').innerText = 
                `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
        }, 1000);
    }
});