// Create content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action == "scrape") {
        let profileInfo = {
            username: document.querySelector('a[class="-nal3"]').innerText,
            profilePicture: document.querySelector('img[class="_6q-tv"]').src,
            followers: document.querySelector('span[class="g47SY "]').innerText,
            following: document.querySelector('a[class="_81NM2"]').innerText
        };
    
        sendResponse(profileInfo);
    }
});