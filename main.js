/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
window.open('index.html');

//chrome.app.runtime.onLaunched.addListener(function () {
//   //Center window on screen.
//  var screenWidth = screen.availWidth;
//  var screenHeight = screen.availHeight;
//  var width = 1000;
//  var height = 800;

//  chrome.app.window.create('index.html', {
//    bounds: {
//      width: width,
//      height: height,
//      left: Math.round((screenWidth-width)/2),
//      top: Math.round((screenHeight-height)/2)
//    }
//  });
//});
