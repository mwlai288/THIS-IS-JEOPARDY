// BUTTONS-MODALS and SCORE //


var currentScore = 0;
var points = [100, 200, 300, 400, 500];

// Make a global variable for a playerScore;
//When a player gets answer correct playerScore += amount of points 


// FIRST PROBLEM //


$(function(){

   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal1').modal();
    $('#modal1').modal('open');
    $('#modal1').modal('close')
    $('.key').on('click',function(){
    $(this).attr('disabled','disabled');
    $('#scoreboard').html('Score: ' + currentScore);
         alert('You are correct!');
    $('.key').event
   });
       
    $('.keya').on('click',function(){
      $(this).attr('disabled','disabled');
      console.log(currentScore -= points[0]);
    // scoreBoard[0] += points[0]; 
    // scoreBoard.push(points[0] += points[0]);
    $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.') ;
   });
  
  // * DISABLE BUTTON AFTER 1 CLICK * //

});



// SECOND PROBLEM //

$(function(){
   $('#modal2').modal('open');
   $('#modal2').modal('close');
   $('.keyb').on('click',function(){
   $(this).attr('disabled','disabled');
    console.log(currentScore += points[1]);
   $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
       
 $('.modal2').modal();
 $('.key2').on('click',function(){
 $(this).attr('disabled','disabled');
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
       $(this).attr('disabled','disabled');
     console.log(currentScore += points[2]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   }); 
    $('.key3').on('click',function(){
       $(this).attr('disabled','disabled');
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
       $(this).attr('disabled','disabled');
       console.log(currentScore += points[3]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   }); 
    $('.key4').on('click',function(){
       $(this).attr('disabled','disabled');
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
       $(this).attr('disabled','disabled');
      console.log(currentScore += points[4]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
    $('.key5').on('click',function(){
     $(this).attr('disabled','disabled');
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
       $(this).attr('disabled','disabled');
      console.log(currentScore += points[0]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
    $('.key6').on('click',function(){
       $(this).attr('disabled','disabled');
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
       $(this).attr('disabled','disabled');
      console.log(currentScore += points[1]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   }); 
    $('.key7').on('click',function(){
       $(this).attr('disabled','disabled');
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
    $('.key8').on('click',function(){
      console.log(currentScore -= points[2]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });
    
});

// NINTH QUESTION //

$(function(){
    $('.modal9').modal();
    $('#modal9').modal('open');
    $('#modal9').modal('close'); 
    $('.keyi').on('click',function(){
      console.log(currentScore += points[3]);
       $('#scoreboard').html('Score: ' + currentScore)
      alert('You are correct!');
   });
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
    $('.key10').on('click',function(){
      console.log(currentScore -= points[4]);
      $('#scoreboard').html('Score: ' + currentScore)
      alert('Sorry, you are wrong.');
   });
    
});













































