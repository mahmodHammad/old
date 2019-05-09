// alert("hello")
$("#go").click(function () {
    //build function to check  the winner
  function iscomplete() {
    if(iscomplet==false){
        iscomplet=true;
    }else{
        place="second"
    }
  }
    //get width of racetracec
    var carwidth=$("#car1").width();
    var racetrack=$(window).width()-carwidth;
    var racetime1=Math.floor((Math.random()*5000)+1);
    var racetime2=Math.floor((Math.random()*5000)+1);

var iscomplet = false;
var place='first';

$('#car1').animate({
    left:racetrack
},racetime1,function () {
    iscomplete();

    $('#raceInfo1 span').text('finished in ' + place +"place at "+ racetime1 +"milliseconds");
    } )

    $('#car2').animate({
        left:racetrack
    },racetime2,function () {
        iscomplete();

        $('#raceInfo2 span').text('finished in ' + place +"place at "+ racetime2 +"milliseconds");
    } )

    $("#rest").click(function(){
        $('.car').css('left',"0");
        $(".raceInfo span").text(+'<br>');
    })
})




