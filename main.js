const songTitle = document.getElementById("songTitle"),
   fillBar = document.getElementById("fill"),
   pausePlayBtn = document.querySelector('#play img'),
   songPoster = document.querySelector('#image img'),
   bgImg = document.querySelector('#bg img');

const songs = ["Song1.mp3", "Song2.mp3", "Song3.mp3"];
const poster = ["Poster1.jpg", "Poster2.jpg", "Poster3.jpg"];

const song = new Audio();
let currentSong = 0;    // it point to the current song

window.onload = playSong;   // it will call the function playSong when window is load

function playSong() {

   song.src = songs[currentSong];  //set the source of 0th song 

   songTitle.textContent = songs[currentSong]; // set the title of song

   song.play();    // play the song
}

function playOrPauseSong() {
   if (song.paused) {
      song.play();
      pausePlayBtn.setAttribute("src", "Pause.png");
   }
   else {
      song.pause();
      pausePlayBtn.setAttribute("src", "Play.png");
   }
}

song.addEventListener('timeupdate', function () {

   const position = song.currentTime / song.duration;

   fillBar.style.width = position * 100 + '%';
});


function next() {

   currentSong++;
   if (currentSong > 2) {
      currentSong = 0;
   }
   playSong();
   pausePlayBtn.setAttribute("src", "Pause.png");
   songPoster.setAttribute("src", poster[currentSong]);
   bgImg.setAttribute("src", poster[currentSong]);
}

function pre() {

   currentSong--;
   if (currentSong < 0) {
      currentSong = 2;
   }
   playSong();
   pausePlayBtn.setAttribute("src", "Pause.png");
   songPoster.setAttribute("src", poster[currentSong]);
   bgImg.setAttribute("src", poster[currentSong]);
}