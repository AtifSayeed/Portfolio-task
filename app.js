$(document).ready(function(){

    $(window).scroll(function(){
        if(this.scrollY > 200){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

if (this.scrollY > 500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show")
}

    });

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});


    var typed = new Typed(".typing-1",{
        strings:[
            "Designer","Developer","Freelancer"
        ],
        typespeed: 80,
        backspeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings:[
            "Designer","Developer","Freelancer"
        ],
        typespeed: 80,
        backspeed: 100,
        loop: true
    });
});