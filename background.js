chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === "backupAlarm") {
        const data = await chrome.storage.local.get(['url']);
        if (data.url) {
            await chrome.storage.local.set({ active: true });
            chrome.tabs.create({ url: data.url + "/ui/system/backup-restore" });
        }
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "DOWNLOAD_FILE") {
        chrome.downloads.download({
            url: request.url,
            filename: request.filename,
            conflictAction: "uniquify"
        });
    }
    if (request.action === "CLOSE_TAB") {
        chrome.tabs.remove(sender.tab.id);
    }
});