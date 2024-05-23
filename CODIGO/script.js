function myFunction(x) {
    x.classList.toggle("change");
    if($("#menu").position().left <0){
        $("#menu").animate({
            left: '0px'
        });
    }
    else{
        $("#menu").animate({
            left: '-100vw'
        });
    }

  }

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.producto');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}
  