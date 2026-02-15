const sleep = (ms) => new Promise(res => setTimeout(res, ms));

let isBackupInProgress = false;
let isWaitingForDownload = false;

async function generateIdentityFile(fileName, secret) {
    
    const baseName = fileName.replace(/\.wbk$/i, '');
    const textFileName = `PASSROWD ${baseName}.txt`;

    
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    const hourStr = hours.toString(); 
    const dateStr = `${year}/${month}/${day}, ${hourStr}:${minutes}:${seconds} ${ampm}`;

    const border = "-".repeat(98);
    const text1 = "Created by Wallix Bastion Auto Backup Chrome Extention";
    const text2 = "by sMohammad14 (@github)";

    
    function createLine(label, value, leftLen) {
        
        const spaces = 97 - leftLen - value.length;
        return `| ${label}: ${value}${' '.repeat(spaces)}|`;
    }

    const lineFileName = createLine("File Name", fileName, 13); 
    const linePassword = createLine("Password", secret, 12);    
    const lineStartDate = createLine("Start Date", dateStr, 14); 

    
    const centerLine1 = `|${' '.repeat(21)}${text1}${' '.repeat(21)}|`;
    const centerLine2 = `|${' '.repeat(36)}${text2}${' '.repeat(36)}|`;

    const content = `${border}\n${centerLine1}\n${border}\n${lineFileName}\n${linePassword}\n${lineStartDate}\n${border}\n${centerLine2}\n${border}`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = textFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

async function startEngine() {
    const store = await chrome.storage.local.get(['url', 'user', 'pass', 'secret', 'active']);
    if (!store.active) {
        return;
    }

    if (isWaitingForDownload) {
        await monitorForDownloadLink(store);
        return;
    }

    if (isBackupInProgress) {
        await monitorForDownloadLink(store);
        return;
    }

    await sleep(15000);
    
    if (isWaitingForDownload) {
        return;
    }
    
    const currentPath = window.location.pathname;
    const baseUrl = store.url;
    
    if (currentPath.includes("/ui/system/backup-restore") || currentPath.includes("/configs/backup/")) {
        await performBackup(store);
    } 
    else if (currentPath.includes("/ui/login")) {
        await performLogin(store);
        
        await sleep(15000);
        
        if (isWaitingForDownload) {
            return;
        }
        
        const newPath = window.location.pathname;
        
        if (newPath.includes("/configs/backup/") || newPath.includes("/ui/system/backup-restore")) {
            await performBackup(store);
        } 
        else {
            window.location.href = baseUrl + "/ui/system/backup-restore";
            
            await sleep(15000);
            await performBackup(store);
        }
    }
}

async function performLogin(store) {
    const u = document.getElementsByName("userName")[0];
    const p = document.getElementsByName("password")[0];
    
    if (u && p) {
        u.value = store.user; 
        u.dispatchEvent(new Event('input', { bubbles: true }));
        
        await sleep(5000);
        
        p.value = store.pass; 
        p.dispatchEvent(new Event('input', { bubbles: true }));
        
        await sleep(5000);
        
        const loginButton = Array.from(document.querySelectorAll('button, input[type="submit"], a')).find(el => {
            const text = (el.innerText || el.value || '').trim().toLowerCase().replace(/\s+/g, '');
            return text === 'login' || text === 'login';
        });
        
        if (loginButton) {
            loginButton.click();
        }
    }
}

async function performBackup(store) {
    if (isWaitingForDownload) {
        await monitorForDownloadLink(store);
        return;
    }
    
    const iframe = document.getElementById('djangoIframe');
    if (!iframe) {
        return;
    }

    const getIframeDoc = () => {
        try { return iframe.contentDocument || iframe.contentWindow.document; } 
        catch (e) { return null; }
    };

    let doc = getIframeDoc();
    if (!doc) {
        return;
    }

    const s1 = doc.getElementById('id_secret1');
    
    const createButton = Array.from(doc.querySelectorAll('button, input[type="submit"], a, [role="button"]')).find(el => {
        const text = (el.innerText || el.value || el.textContent || '').trim().toLowerCase();
        return text.includes('create');
    });

    if (s1) {
        s1.focus(); 
        s1.value = store.secret;
        s1.dispatchEvent(new Event('input', { bubbles: true }));
        
        await sleep(5000);
        
        if (isWaitingForDownload) {
            return;
        }
        
        const s2 = doc.getElementById('id_secret2');
        if (s2) {
            s2.disabled = false; 
            s2.focus(); 
            s2.value = store.secret;
            s2.dispatchEvent(new Event('input', { bubbles: true }));
        }
        
        await sleep(5000);
        
        if (isWaitingForDownload) {
            return;
        }
        
        if (createButton) {
            isBackupInProgress = true;
            isWaitingForDownload = true;
            createButton.click();
            
            await monitorForDownloadLink(store);
        } else {
            return;
        }
    }
}

async function monitorForDownloadLink(store) {
    let attempts = 0;
    const maxAttempts = 720;
    
    isWaitingForDownload = true;
    
    return new Promise((resolve) => {
        const checkDL = setInterval(() => {
            attempts++;
            
            const iframe = document.getElementById('djangoIframe');
            if (!iframe) return;
            
            try {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                if (!doc) return;

                const allLinks = doc.querySelectorAll('a');
                const wbkLink = Array.from(allLinks).find(link => 
                    link.href && link.href.toLowerCase().includes('.wbk')
                );

                if (wbkLink) {
                    const fullUrl = wbkLink.href;
                    const fileName = fullUrl.split('/').filter(Boolean).pop() || "backup.wbk";

                    chrome.runtime.sendMessage({ action: "DOWNLOAD_FILE", url: fullUrl, filename: fileName });
                    generateIdentityFile(fileName, store.secret);
                    
                    clearInterval(checkDL);
                    chrome.storage.local.set({ active: false });
                    
                    isBackupInProgress = false;
                    isWaitingForDownload = false;

                    setTimeout(() => {
                        chrome.runtime.sendMessage({ action: "CLOSE_TAB" });
                        resolve();
                    }, 10000);
                }

                if (attempts >= maxAttempts) {
                    clearInterval(checkDL);
                    
                    isBackupInProgress = false;
                    isWaitingForDownload = false;
                    
                    resolve();
                }
            } catch (e) {
            }
        }, 5000);
    });
}

startEngine();
