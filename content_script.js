
(function(){

  Element.prototype.highlightMeAndClose = function(){
    var current_background = this.style['background-color'];
    if(current_background == undefined || current_background == '') current_background = '#fff';
    var el = this;
    setTimeout(function(){
      el.style['background-color'] = '#ffc';
    }, 200);
    setTimeout(function(){
      el.style['background-color'] = current_background;
    }, 400);
    setTimeout(function(){
      el.style['background-color'] = '#ffc';
    }, 600);
    setTimeout(function(){
      el.style['background-color'] = current_background;
    }, 800);
    setTimeout(function(){
      el.style.display = 'none';
      console.log('[Web Modifier] EL Removed');
    }, 5000);
  }

  console.log('[Web Modifier] Lighbox Blocker content script injected');

  if(document.location.href.indexOf('https://www.facebook.com') === 0
    &&
    document.getElementById('pagelet_growth_expanding_cta') !== null
    &&
    document.getElementById('pagelet_growth_expanding_cta') !== undefined
  ) {
    console.log('[Web Modifier] Found facebook lightbox');
    document.getElementById('pagelet_growth_expanding_cta').highlightMeAndClose();
  }

  if(document.location.href.indexOf('https://www.facebook.com') === 0
    &&
    document.getElementById('dialog_0') !== null
    &&
    document.getElementById('dialog_0') !== undefined
  ) {
    console.log('[Web Modifier] Found facebook login force dialog');
    document.getElementById('dialog_0').highlightMeAndClose();
  }

  if(document.location.href.indexOf('https://www.youtube.com') === 0) {
    console.log('[Web Modifier] Found Youtube. Injecting Listener');
      window.addEventListener('load', (event) => {

      console.log('[Web Modifier] Executing Listener ')

      var tries = 0;
      var t = setInterval(function () {

        //document.querySelector("paper-button[aria-label='Nein danke']").click()
/*
            if(document.getElementsByTagName("paper-toggle-button")[0].hasAttribute('pressed') || document.getElementsByTagName("paper-toggle-button")[0].hasAttribute('checked')) {
              document.getElementsByTagName("paper-toggle-button")[0].click();
            }
*/
        console.log("Trying Kinomodus");
        if(document.querySelector(".ytp-size-button[title='Kinomodus (t)']") != undefined) {
            document.querySelector(".ytp-size-button[title='Kinomodus (t)']").click()
        } else {
          tries += 1;
        }
        if(tries >= 50)  clearInterval(t);
      }, 200);
    });
  }
  console.log(document.location.href)



  if(
      document.location.href.indexOf('https://www.google.com') === 0 ||
      document.location.href.indexOf('https://www.google.de') === 0) {
    console.log('[Web Modifier] Found Google. Injecting Listener');
      window.addEventListener('load', (event) => {
          console.log('[Web Modifier] Executing Listener ')
          var tries = 0;
          var t = setInterval(function () {
              console.log("Polling")
              if (document.getElementById("xe7COe") != undefined) {
                clearInterval(t);
                document.getElementById("xe7COe").remove();
                document.getElementsByTagName("body")[0].style["overflow"]="initial";

              }else {
                  tries += 1;
              }
              if(tries >= 50)  clearInterval(t);

            }, 100);

    });
  }
  if(
      document.location.href.indexOf('https://consent.google.com') === 0 ||
      document.location.href.indexOf('https://consent.google.de') === 0 ||
      document.location.href.indexOf('https://consent.youtube.com') === 0 ||
      document.location.href.indexOf('https://consent.youtube.de') === 0) {
    console.log('[Web Modifier] Found Consnet Google. Injecting Listener');
      window.addEventListener('load', (event) => {
          console.log('[Web Modifier] Executing Listener ');
          var tries = 0;
          var t = setInterval(function () {
              console.log("Polling")
              if (document.querySelector("button") != undefined) {
                clearInterval(t);
                document.querySelector("button").click();
              } else {
                  tries += 1;
              }
              if(tries >= 50)  clearInterval(t);

            }, 100);

    });
  }
})();







