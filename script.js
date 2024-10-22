let box = document.querySelector(".box");
let button = document.querySelector("button");

const speakFun = (input) => {
    let speakInput = new SpeechSynthesisUtterance(input);
    // speakInput.rate = 1;
    // speakInput.pitch = 5;
    // speakInput.volume = 4;
    // speakInput.lang = 'hi-IN'
    window.speechSynthesis.speak(speakInput);
}
window.onload = () => {
    // speakFun("Hello World")
    greetingFunc()
}

const greetingFunc = () => {
    let date = new Date();
    let hour = date.getHours();

    if (hour >= 0 && hour < 12) {
        speakFun("Good Morning, Sir How Can I help You")
    }
    else if (hour >= 12 && hour < 16) {
        speakFun("Good AfterNoon, Sir How Can I help You")
    }
    else {
        speakFun("Good Evening, Sir How Can I help You")
    }

}






if ('webkitSpeechRecognition' in window) {
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.lang = "en-US"
    recognition.onresult = (e) => {
        let spokenText = (e.results[0][0].transcript)
        handleCommands(spokenText.toLowerCase());

        button.classList.remove("btn-box")
        button.innerHTML = ` <i class="fa-solid fa-microphone-lines-slash"></i>`;
    }

}
else {
    alert("Your browser does not support this effect")
}

// recognition.onspeechend =() =>{
//     recognition.stop();
// }

button.onclick = () => {
    button.classList.add("btn-box")
    button.innerHTML = `<i class="fa-solid fa-microphone-lines"></i>`
    recognition.start();
}

const handleCommands = (command) => {
    console.log(command)
    if (command.includes("hello")) {
        speakFun("Hello Sir How Can I help you")
    }
    else if (command.includes("who are you")) {
        speakFun("i am a Virtual Assistant, Developed by shahzaib safdar ")
    }
    else if (command.includes("open google") || command.includes("open google chrome")) {
        speakFun("opening Google");
        window.open("https://www.google.com")
    }
    else if (command.includes("open facebook")) {
        speakFun("opening ...Facebook")
        window.open("https://www.facebook.com")
    }
    else if (command.includes("open whatsapp") || command.includes("open WhatsApp")) {
        speakFun("Opening...Whatsapp")
        window.open("https://www.whatsapp.com")
    }
    else if(command.includes("open instagram")){
        speakFun("opening ... instagram")
        window.open("https://www.instagram.com")
    }

    else if (command.includes("open code with harry youtube channel")) {
        speakFun("Opening... code with harry youtube channel")
        window.open("https://www.youtube.com/@CodeWithHarry/playlists")
    }

    else if(command.includes("open calculator")||command.includes("calculator")){
        speakFun("Opening...calculator");
        window.open("calculator://")
    }

    else if(command.includes("tell me time") || command.includes("time")){

        let time = new Date().toLocaleString(undefined,{hour:'numeric',minute:'numeric'})
        speakFun(time)
    }

    else if(command.includes("tell me date")||command.includes("date")){
        let date  = new Date().toLocaleString(undefined,{day:'numeric',month:'long'});
        speakFun(date)
    }
    else{
        speakFun(`This is what i found on internet regarding ${command}`)
        window.open(`https://www.google.com/search?q=${command}`)
    }

}




