particlesJS.load('plex', 'js/data.json', function() {
  console.log('callback - particles.js config loaded');
});
var typed = new Typed('.greet', {
  strings: ["Hello","Hola"," Asalaam Alaikum","Namaste","Hello"],
  	typeSpeed: 60,
    backSpeed: 50,
    backDelay: 5000,
    showCursor:0
});


