var menuBtn = document.getElementById('menuIcon'),
   nav = document.getElementById('nav');
   head = document.getElementById('head');
   activated = 0;

menuBtn.addEventListener('click', function (){
   toggleClass(menuBtn, 'active');
   toggleClass(nav, 'active');
   toggleClass(head, 'active');
});

window.onscroll = function() {
  console.log(activated);
  if (window.scrollY > 10 && activated == 0) {
    toggleClass(head, 'scrolled');
    toggleClass(nav, 'scrolled');
    activated = 1;
  } else if (window.scrollY < 10 && activated == 1) {
    toggleClass(head, 'scrolled');
    toggleClass(nav, 'scrolled');
    activated = 0;
  }
};

function toggleClass(el, ourClass){
   var classes = el.className;
   if (classes.indexOf(ourClass) > -1){
     el.className = classes.replace(ourClass, '');
   } else {
     el.className = classes + ' ' + ourClass;
   }
}
