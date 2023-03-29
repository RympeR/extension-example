chrome.bookmarks.onMoved.addListener((e) => {
    alert('Bookmark Moved')
})

chrome.runtime.onMessage.addListener((request, sender, resp) =>{
    console.log('request', request);
    console.log('sender', sender);
    console.log('resp', resp());
})
