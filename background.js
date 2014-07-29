chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'jquery.min.js'
  });
  chrome.tabs.executeScript({
    code: '$("#onegoogbar").hide(); $("#vr-nav").hide(); $("#nav").hide();'
  });
});
