$(document).ready(function(){   
    
    var header = $('header').click(function(){
        alert($(window).scrollTop());
    })


    function aboutAreaAnimation(){

        let aboutArea = $('#about-area');
        let aboutAreaOffset = aboutArea.offset();
        let stop = 0;
        aboutArea.css({display:'none'})
                
        $(window).scroll(function(e){
            let scroll = $(window).scrollTop();
            if(scroll > 205 && stop == 0){
                aboutArea.css({display:'block'})
                aboutArea.addClass('animated fadeInLeft')
                stop = 1;
            }
        })
    }
    aboutAreaAnimation();

    function productsAreaAnimation(){

        let productsArea = $('#products-area');
        let productsAreaOffset = productsArea.offset();
        let stop = 0;
        productsArea.css({display:'none'});

        $(window).scroll(function(e){
            let scroll = $(window).scrollTop();
            if(scroll > 882 && stop == 0){
                productsArea.css({display: 'block'});
                productsArea.addClass('animated fadeInRight')
                stop = 1;
            }
        })
    }
    productsAreaAnimation();

    function softwareAreaAnimation(){

        let softwareArea = $('#software-area');
        let softwareAreaOffset = softwareArea.offset();
        let stop = 0;
        softwareArea.css({display:'none'});

        $(window).scroll(function(e){
            let scroll = $(window).scrollTop();
            if(scroll > 1464 && stop == 0){
                softwareArea.css({display: 'block'});
                softwareArea.addClass('animated zoomIn')
                stop = 1;
            }
        })
    }
    softwareAreaAnimation();

    function consultationAreaAnimation(){

        let consultationArea = $('#consultation-area');
        let consultationAreaOffset = consultationArea.offset();
        let stop = 0;
        consultationArea.css({display:'none'});

        $(window).scroll(function(e){
            let scroll = $(window).scrollTop();
            if(scroll > 2082 && stop == 0){
                consultationArea.css({display: 'block'});
                consultationArea.addClass('animated zoomIn');
                stop = 1;
            }
        })
    }
    consultationAreaAnimation();
    
})