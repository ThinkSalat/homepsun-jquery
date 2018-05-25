const DOMNodeCollection = require('./dom_node_collection.js');


window.$l = function(selector) {
  if (selector instanceof Function) {  
    setInterval( function () {
    if ( document.readyState !== 'complete' ) return;
    clearInterval( tid );       
    // do your work
    }, 100 );
  }
let selections;
if (selector instanceof HTMLElement) {
  selections = selector;
  // selections = Array.from(selector);
} else {
  selections = Array.from(document.querySelectorAll(selector));
}
return new DOMNodeCollection(selections);
};
