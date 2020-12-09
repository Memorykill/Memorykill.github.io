(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();

        $.material.init();
        
        $('.header-bg').scrolly({bgParallax: true});
        

        $('#particles').particleground({
            dotColor: '#ebebeb',
            lineColor: '#ebebeb',
            density: 7000
        });
    });


    jQuery(window).load(function(){

        $(".preloader").fadeOut(500);
    });


}(jQuery));	