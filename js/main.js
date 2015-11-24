var menuBtn = document.getElementById('menuIcon'),
   nav = document.getElementById('nav');
   head = document.getElementById('head');
   scrollActive = 0;

menuBtn.addEventListener('click', function (){
   toggleClass(menuBtn, 'active');
   toggleClass(nav, 'active');
   toggleClass(head, 'active');
});

// Scroll event
window.onscroll = function() {
  scrolling(head, 'fixed', '20');
};

// Touch event
document.ontouchmove = function(event) {
  scrolling(head, 'fixed', '20');
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

//Google Maps Script

     function initialize() {
        var mapCanvas = document.getElementById('map');
        var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9 "},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5 "},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff "},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff "},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff "},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff "},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5 "},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede "},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff "},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333 "},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2 "},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe "},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe "},{"lightness":17},{"weight":1.2}]}];
        var mapOptions = {
          center: new google.maps.LatLng(59.3317425, 18.0844124),
          styles: styles,
          zoom: 15,
          disableDefaultUI: true,
          scrollwheel: false

        };
       var map = new google.maps.Map( document.getElementById('map') , mapOptions);

        var myLatlng = new google.maps.LatLng(59.3317425, 18.0844124);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: "Strandvägen 20, 112 25 Stockholm"
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize); 

