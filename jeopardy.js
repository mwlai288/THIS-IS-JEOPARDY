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
      alert('Sorry, you are wrong.');
   });

  
});

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



// SCOREBOARD//
// USE SCORE FROM COLUMN ONE TO PUSH SCORE INTO scoreBoard ARRAY //























// ]