var last_yt_tab;
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    tab_url = changeInfo.url;
    yt_regex = tab_url.match("https:\/\/www\.youtube\.com\/shorts\/(.*)");
    if(yt_regex != null && yt_regex.length == 2){
      last_yt_tab = tabId;
      chrome.tabs.sendMessage(tabId,{"ytshortid": "NS"});
    }
  }
}
chrome.tabs.onUpdated.addListener(handleUpdated);