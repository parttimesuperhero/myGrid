const amScroll = require('amscroll');

let scroller = new amScroll({
  'selector': '.sticky'
});
window.addEventListener('scroll', scroller.scroller, false);
