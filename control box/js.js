$('#left').click(function () {
    $('.box').animate({
        left:'-=40px',
        fontSize:'+=1px'
    },function () {
    }
    );
})
$('#right').click(function () {
    $('.box').animate({
            left:'+=40px',
            fontSize:'-=1px'
        },function () {
        }
    );
})


$('#right').click(function () {
    $('p').animate({
            left:'+=40px',
            fontSize:'-=1px'
        },function () {
        }
    );
})


$('#up').click(function () {
    $('.box').animate({
            top:'-=40px',
            opacity:'+=.2'
        },function () {
        }
    );
})
$('#down').click(function () {
    $('.box').animate({
            top:'+=40px',
            opacity:'-=.2'
        },function () {
        }
    );
})


$("p").css({
    "background":"red",
    "color":"#fff",
    "width":"200px",
    "height":"200px",
    "borderRadius":"209%"


})