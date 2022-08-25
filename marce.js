

function playSound (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
    // console.log(audio);
    audio.play();

    const keyAnimation = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    keyAnimation.classList.add("playing");
    setTimeout(function(){ 
        keyAnimation.classList.remove("playing");                
    }, 100);
}

document.addEventListener("keydown", playSound);