// BUTTONS-MODALS and SCORE //
// FIRST PROBLEM //

var currentScore = 0;
var points = [100, 200, 300, 400, 500];

// Make a global variable for a playerScore;
//When a player gets answer correct playerScore += amount of points 

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal1').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close'); 
    $('.key').on('click',function(){
    // scoreBoard[0] += points[0]; 
    console.log(currentScore += points[0]);
    $('#scoreboard').html('Score: ' + currentScore);
         alert('You are correct!');
   });
       
 $('.modal1').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close'); 
    $('.keya').on('click',function(){
      console.log(currentScore -= points[0]);
    // scoreBoard[0] += points[0]; 
    // scoreBoard.push(points[0] += points[0]);
    $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.') ;
   });
  

});

//     setTimeOut(function() {
//     $( ".modal1" ).modal( "close" )
// }, 5000);

// SECOND PROBLEM //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal2').modal();
    $('#modal2').modal('open');
    $('#modal2').modal('close'); 
    $('.keyb').on('click',function(){
      console.log(currentScore += points[1]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal2').modal();
    $('#modal2').modal('open');
    $('#modal2').modal('close'); 
    $('.key2').on('click',function(){
      console.log(currentScore -= points[1]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });

    
});

// THIRD PROBLEM //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal3').modal();
    $('#modal3').modal('open');
    $('#modal3').modal('close'); 
    $('.keyc').on('click',function(){
      console.log(currentScore += points[2]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal3').modal();
    $('#modal3').modal('open');
    $('#modal3').modal('close'); 
    $('.key3').on('click',function(){
      console.log(currentScore -= points[2]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });

    
});

// FOURTH PROBLEM //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal4').modal();
    $('#modal4').modal('open');
    $('#modal4').modal('close'); 
    $('.keyd').on('click',function(){
      console.log(currentScore += points[3]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal4').modal();
    $('#modal4').modal('open');
    $('#modal4').modal('close'); 
    $('.key4').on('click',function(){
      console.log(currentScore -= points[3]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
});

// FIFTH PROBLEM //
    
});

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal5').modal();
    $('#modal5').modal('open');
    $('#modal5').modal('close'); 
    $('.keye').on('click',function(){
      console.log(currentScore += points[4]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal5').modal();
    $('#modal5').modal('open');
    $('#modal5').modal('close'); 
    $('.key5').on('click',function(){
      console.log(currentScore -= points[4]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });

    
});


// SIXTH QUESTION //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal6').modal();
    $('#modal6').modal('open');
    $('#modal6').modal('close'); 
    $('.keyf').on('click',function(){
      console.log(currentScore += points[0]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal6').modal();
    $('#modal6').modal('open');
    $('#modal6').modal('close'); 
    $('.key6').on('click',function(){
      console.log(currentScore -= points[0]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });


});


// SEVENTH QUESTION //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal7').modal();
    $('#modal7').modal('open');
    $('#modal7').modal('close'); 
    $('.keyg').on('click',function(){
      console.log(currentScore += points[1]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal7').modal();
    $('#modal7').modal('open');
    $('#modal7').modal('close'); 
    $('.key7').on('click',function(){
      console.log(currentScore -= points[1]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });
    
});


// EIGHTH QUESTION //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal8').modal();
    $('#modal8').modal('open');
    $('#modal8').modal('close'); 
    $('.keyh').on('click',function(){
      console.log(currentScore += points[2]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal8').modal();
    $('#modal8').modal('open');
    $('#modal8').modal('close'); 
    $('.key8').on('click',function(){
      console.log(currentScore -= points[2]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });
    
});

// NINTH QUESTION //

$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal9').modal();
    $('#modal9').modal('open');
    $('#modal9').modal('close'); 
    $('.keyi').on('click',function(){
      console.log(currentScore += points[3]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal9').modal();
    $('#modal9').modal('open');
    $('#modal9').modal('close'); 
    $('.key9').on('click',function(){
      console.log(currentScore -= points[3]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });
    
});


// TENTH QUESTION //  

$(function(){

    $('.modal10').modal();
    $('#modal10').modal('open');
    $('#modal10').modal('close'); 
    $('.keyj').on('click',function(){
      console.log(currentScore += points[4]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal10').modal();
    $('#modal10').modal('open');
    $('#modal10').modal('close'); 
    $('.key10').on('click',function(){
      console.log(currentScore -= points[4]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });
    
});













