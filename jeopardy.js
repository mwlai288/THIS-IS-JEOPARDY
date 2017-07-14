// BUTTONS-MODALS and SCORE //
// FIRST PROBLEM //

var scoreBoard = [];
var currentScore = [];
var points = [100, 200, 300, 400, 500];



$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal1').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close'); 
    $('.key').on('click',function(){

    console.log(points[0]+scoreBoard);
    // scoreBoard[0] += points[0]; 
    scoreBoard.push(points[0] += points[0]);
      alert('You are correct!');
   });
       
 $('.modal1').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close'); 
    $('.keya').on('click',function(){
      console.log(scoreBoard[0]-points[0] + ' total');
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
      console.log(points[1]);
      alert('You are correct!');
   });
       
 $('.modal2').modal();
    $('#modal2').modal('open');
    $('#modal2').modal('close'); 
    $('.key2').on('click',function(){
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
      console.log(points[2]);
      alert('You are correct!');
   });
       
 $('.modal3').modal();
    $('#modal3').modal('open');
    $('#modal3').modal('close'); 
    $('.key3').on('click',function(){
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
      console.log(points[3])
      alert('You are correct!');
   });
       
 $('.modal4').modal();
    $('#modal4').modal('open');
    $('#modal4').modal('close'); 
    $('.key4').on('click',function(){
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
      console.log(points[4]);
      alert('You are correct!');
   });
       
 $('.modal5').modal();
    $('#modal5').modal('open');
    $('#modal5').modal('close'); 
    $('.key5').on('click',function(){
      alert('Sorry, you are wrong.');
   });

    
});



// SCOREBOARD//
// USE SCORE FROM COLUMN ONE TO PUSH SCORE INTO scoreBoard ARRAY //























// ]