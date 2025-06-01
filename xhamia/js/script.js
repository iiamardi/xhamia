$(document).ready(function() {
     
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

     
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

 
window.addEventListener('load', function() {
  const splash = document.getElementById('splash-screen');
  const mainContent = document.getElementById('main-content');
  
   
  setTimeout(function() {
    splash.classList.add('slide-out');
    
     
    setTimeout(function() {
      mainContent.classList.remove('d-none');
      splash.style.display = 'none';
    }, 500); 
  }, 1000);  
});

