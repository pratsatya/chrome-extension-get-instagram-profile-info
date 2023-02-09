// Create background.js
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "scrape"}, function(response) {
            chrome.storage.sync.set({'instagramProfileInfo': response}, function() {
                console.log("Instagram profile info stored in Chrome storage.");
            });
        });
    });
});
