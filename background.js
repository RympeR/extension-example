chrome.runtime.onInstalled.addListener(()=>{
    console.log("installed");
})
chrome.bookmarks.onCreated.addListener(() => {
    // alert('saved')
})
chrome.bookmarks.onRemoved.addListener((e) => {
    // console.log(chrome.bookmarks.get(e))
})
