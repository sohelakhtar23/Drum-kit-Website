const sounds = {"w": "crash.mp3", "a": "kick-bass.mp3", "s": "snare.mp3", "d": "tom-1.mp3", "j": "tom-2.mp3", "k": "tom-3.mp3", "l": "tom-4.mp3"};


// Detecting Button press

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var sound = this.innerHTML;
                
        sound_buttonAnimation(sound);
    });
}

// Detecting Keyboard press

document.addEventListener("keydown", function(e){
    var key = e.key;
    if(key in sounds){
        sound_buttonAnimation(key);
    }
    else {
        console.log("key not present");
    }
})


function sound_buttonAnimation(key) {
    var audio = new Audio("sounds/" + sounds[key]);
    audio.play();

    var activeBtn = document.querySelector("." + key);
    activeBtn.classList.add("pressed");

    setTimeout(() =>{activeBtn.classList.remove("pressed")}, 100)
}




// 4. Passing Functions as Arguments
/*
    function add(a, b){
        return a+b;
    }
    function sub(a, b){
        return a-b;
    }

    function calculator(a, b, operator){
        console.log(operator(a, b));
    }
*/

// 12. Understanding Callbacks and How to Respond to Events

/*  function anotherEventListener(typeOfEvent, callback) {
        var eventThatHappened = {
            event: "click",
            button: "left",
            duration: 2 
        }

        if(eventThatHappened.event === typeOfEvent){
            callback(eventThatHappened);
        }
    }
    
    debugger;
    anotherEventListener("click", function(e) {
        console.log(e);
    });
*/
