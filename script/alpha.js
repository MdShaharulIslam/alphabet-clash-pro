



function play(){
    const homesection = document.getElementById('home-screen');
   
   homesection.classList.add('hidden');
    // console.log(homesection);
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
    continueGame()
}

function continueGame(){
const alphabet=getARandomAlphabet();
// console.log('random Alphabet', alphabet);
const currentAlphabetElement= document.getElementById('current-alphabet');
currentAlphabetElement.innerText=alphabet;

setBackgroundColor(alphabet);

}