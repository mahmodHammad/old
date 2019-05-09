//adjust slider height


var winh = $(window).height(), 
upperbar = $('.upper-bar').innerHeight() ,
 navh = $('.navbar').innerHeight();

 $('.slider , .carousel-item').height(winh-(upperbar+navh));

 //shuffel pics

 $(".featured ul li").on('click',function(){
     $(this).addClass('active').siblings().removeClass('active'); //siblings() is the all exept this
     if($(this).data('class')==='all'){
         $('.sizer .col-sm-6').css('opacity' ,'.95') ;
     } else{
        $('.sizer .col-sm-6').css('opacity' ,'.051') ;
        $($(this).data('class')).parent().css('opacity',1);
     }

 })