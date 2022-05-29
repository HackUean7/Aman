particlesJS.load('plex', 'js/data.json', function() {
  console.log('callback - particles.js config loaded');
});
var typed = new Typed('.greet', {
  strings: ["Hello","Namaste"," Asalaam Alaikum","Hola","01001000 01100101 01101100 01101100 01101111"],
  	typeSpeed: 60,
    backSpeed: 50,
    backDelay: 5000,
    showCursor:0
});


