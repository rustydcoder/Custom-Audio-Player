const fillBar = document.getElementById("fill"),
   pausePlayBtn = document.querySelectorAll('.play img'),
   songPoster = document.querySelector('#image img'),
   bgImg = document.querySelector('#bg img');

const songs = ["Song1.mp3", "Song2.mp3", "Song3.mp3"];
const poster = ["Poster1.jpg", "Poster2.jpg", "Poster3.jpg"];

const song = new Audio();

pausePlayBtn.forEach((btn, i) => {
   btn.addEventListener('click', function () {
      changePoster(i)
      song.src = songs[i];
      togglePlay(song)
   })
})

song.addEventListener('timeupdate', function () {

   const position = song.currentTime / song.duration;

   fillBar.style.width = position * 100 + '%';
});

function changePoster(i) {
   bgImg.setAttribute('src', poster[i])
   songPoster.setAttribute('src', poster[i])
}

var isPlaying = false;

function togglePlay(s) {
   if (isPlaying) {
      s.pause()
   } else {
      s.play();
   }
};
song.onplaying = function () {
   isPlaying = true;
};
song.onpause = function () {
   isPlaying = false;
};