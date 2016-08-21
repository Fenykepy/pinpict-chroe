// when we receive a message from browser action
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "clicked_browser_action") {
      // we list all images in current page
      var imgs = document.getElementsByTagName('img');
      for (var i=0, l=imgs.length; i < l; i++) {
        console.log(imgs[i].src);
      }     
    }
  }
);

