// we encapsulate everything to avoid polluting global scope
(function() {
  // when we receive a message from browser action
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "clicked_browser_action") {
        console.log('add ui');
        addUI();
      }
    }
  );

  function scanForImages() {
    // we get all images
    var imgs = document.getElementsByTagName('img');
    // we get all links
    var links = document.getElementsByTagName('a');

  }

  function addUI() {
    // we create div overlay
    var overlay = document.createElement("div");
    overlay.setAttribute("id", "pinpict_overlay");
    
    // we add div element to body
    document.body.appendChild(overlay);


  }

  function removeUI() {
    document.getElementByID("pinpict_overlay").remove();
  }
})(this);


