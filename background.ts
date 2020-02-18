chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#c7ae6b'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
       //   pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  })
  chrome.extension.onMessage.addListener(
    function (request, sender,sendResponce){
      console.log(request.content);
    }
  );
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, { }, function(response) {
      console.log(response);
    });
  });
