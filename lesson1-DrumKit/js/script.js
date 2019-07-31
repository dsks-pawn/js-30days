const data = [
    {
        "key": 65,
        "shortcut": "A",
        "href": "sounds/clap.wav",
        "title": "clap"
    },
    {
        "key": 83,
        "shortcut": "S",
        "href": "sounds/hihat.wav",
        "title": "hihat"
    },
    {
        "key": 68,
        "shortcut": "D",
        "href": "sounds/kick.wav",
        "title": "kick"
    },
    {
        "key": 70,
        "shortcut": "F",
        "href": "sounds/openhat.wav",
        "title": "openhat"
    },
    {
        "key": 71,
        "shortcut": "G",
        "href": "sounds/boom.wav",
        "title": "boom"
    },
    {
        "key": 72,
        "shortcut": "H",
        "href": "sounds/ride.wav",
        "title": "ride"
    },
    {
        "key": 74,
        "shortcut": "J",
        "href": "sounds/snare.wav",
        "title": "snare"
    },
    {
        "key": 75,
        "shortcut": "K",
        "href": "sounds/tom.wav",
        "title": "tom"
    },
    {
        "key": 76,
        "shortcut": "L",
        "href": "sounds/tink.wav",
        "title": "tink"
    }
]
// render data
let stringButton = ""
let stringAudio = ""
data.forEach(element => {
    stringButton += `
    <div data-key="${element.key}" class="key">
        <kbd>${element.shortcut}</kbd>
        <span class="sound">${element.title}</span>
    </div>`
})
data.forEach(element => {
    stringAudio += `<audio data-key="${element.key}" src="${element.href}"></audio>`
})
document.getElementById("render-button").insertAdjacentHTML("beforeend", stringButton)
document.getElementById("render-audio").insertAdjacentHTML("beforeend", stringAudio)

// handling
window.addEventListener('keydown', e => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
    key.classList.add("playing");
})

function removeTransition(e) {
    if (e.propertyName !== "transform") return
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key")
keys.forEach(e => {
    e.addEventListener('transitionend', removeTransition)
})