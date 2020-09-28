var switching_playeres = 0;
var gameOn = true;

var image = document.querySelector('.dice');

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameOn){
    
    var dice = Math.floor(Math.random()* 6 )+1;
    var content = Number(document.querySelector("#current-" + switching_playeres).textContent);
    document.querySelector("#current-" + switching_playeres).textContent = content +  dice;
    
        image.style.display = 'block';
        image.src = 'dice-' + dice + '.png';
        
    
    if(dice === 1){
        document.querySelector('.player-0-panel').classList.toggle('active');
    
    document.querySelector('.player-1-panel').classList.toggle('active');
        
        if(switching_playeres === 1){
            switching_playeres = 0;
            document.querySelector("#current-" + switching_playeres).textContent = 0;
        
        }else{

            switching_playeres = 1;
            document.querySelector("#current-" + switching_playeres).textContent = 0;
        }
    }
    
    }
    
});

document.querySelector('.btn-rules').addEventListener('click',function(){
    location.href = 'Rules.html';
});


document.querySelector('.btn-hold').addEventListener('click',function(){
    
    if(gameOn){
        
    var content = Number(document.querySelector('#score-'+switching_playeres).textContent)
    document.querySelector('#score-'+switching_playeres).textContent = content +
        Number(document.querySelector('#current-'+switching_playeres).textContent);
    
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    
        
    //WINNNING CONDITION
        
        
    if(Number(document.querySelector('#score-'+switching_playeres).textContent) >= 100 ){
    
    document.querySelector('#name-'+switching_playeres).textContent = 'WINNER!!!';
        gameOn = false;
    document.getElementById('name-'+switching_playeres).style.color = '#EB4D4D';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-'+ switching_playeres +'-panel').classList.add('active');
    
}
    
    
    switching_playeres === 1 ? switching_playeres = 0 : switching_playeres = 1;
        
    if(gameOn){

    document.querySelector('.player-0-panel').classList.toggle('active');
    
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    }
    }
    
});



document.querySelector('.btn-new').addEventListener
('click',function(){
    
    gameOn = true;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    switching_playeres = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.getElementById('name-0').style.color = '#222';
    document.getElementById('name-1').style.color = '#222';
    
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
});


