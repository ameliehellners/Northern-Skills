var menuBtn = document.getElementById('menuIcon'),
   nav = document.getElementById('nav');
   head = document.getElementById('head');
   scrollActive = 0;

menuBtn.addEventListener('click', function (){
   toggleClass(menuBtn, 'active');
   toggleClass(nav, 'active');
   toggleClass(head, 'active');
});

window.onscroll = function() {
  scrolling(head, 'fixed', '50');
};

function scrolling(obj, customClass, y) {
  if (window.scrollY > y && scrollActive === 0) {
    toggleClass(obj, customClass);
    scrollActive = 1;
  } else if (window.scrollY < y && scrollActive === 1) {
    toggleClass(obj, customClass);
    scrollActive = 0;
  }
}

function toggleClass(el, ourClass){
   var classes = el.className;
   if (classes.indexOf(ourClass) > -1){
     el.className = classes.replace(ourClass, '');
   } else {
     el.className = classes + ' ' + ourClass;
   }
}
