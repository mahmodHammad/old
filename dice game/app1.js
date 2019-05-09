// in the name of  allah we start 
var scores , roundScore , activePlayer,gameplaying ;
init()
var past=[] 
document.querySelector('.btn-roll').addEventListener('click',function(){
	if(gameplaying){
		var  dice = Math.floor(Math.random()*6 +1) 
		past.push(dice)
		if(past[past.length-2]==6&&past[past.length-1]==6){
			//alert('losar')
			scores[activePlayer]=0
			roundScore=0


			document.querySelector('#score-'+activePlayer).textContent=0
			nextplayer()

		}
		var diceDOM	=document.querySelector('.dice')
		diceDOM.style.display='block'
		diceDOM.src='dice-'+dice+'.png'
	 
		if (dice!==0){
			roundScore+=dice;
			document.querySelector('#current-'+activePlayer).textContent=roundScore
		}
		else{
			nextplayer()
		}	
	}
})

document.querySelector('.btn-hold').addEventListener('click',function(){
	if(gameplaying){
		scores[activePlayer]+=roundScore;

		document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer]

		if(scores[activePlayer]>=100){
			document.querySelector('#name-' + activePlayer).textContent='winner'
			document.querySelector('.dice').style.display='none' 
			document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')
			document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active')
			gameplaying=false
		}	
		else{
			nextplayer()
		}
	}
})

document.querySelector('.btn-new').addEventListener('click',init)


function init(){
	scores=[0,0];
	roundScore=0;
	activePlayer=1;
	document.querySelector('.dice').style.display='none'
	document.getElementById('score-0').textContent='0'
	document.getElementById('score-1').textContent='0'
	document.getElementById('current-0').textContent='0'
	document.getElementById('current-1').textContent='0'
	document.getElementById('name-0').textContent='player 1'
	document.getElementById('name-1').textContent='player 2'
	document.querySelector('.player-0-panel').classList.remove('winner')
	document.querySelector('.player-1-panel').classList.remove('winner')
	document.querySelector('.player-0-panel').classList.remove('active')
	document.querySelector('.player-1-panel').classList.remove('active')
	document.querySelector('.player-1-panel').classList.add('active')
	gameplaying=true
	past=[]
}

function nextplayer(){
	activePlayer===0?activePlayer=1 :activePlayer=0;
	roundScore=0;
	document.getElementById('current-0').textContent='0'
	document.getElementById('current-1').textContent='0'
	document.querySelector('.player-0-panel').classList.toggle('active')
	document.querySelector('.player-1-panel').classList.toggle('active')
	document.querySelector('.dice').style.display="none"
	past=[]
}

