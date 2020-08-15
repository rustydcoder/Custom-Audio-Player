const fillBar = document.getElementById("fill"),
   buttons = document.querySelectorAll('.play'),
   songPoster = document.querySelector('#image img'),
   bgImg = document.querySelector('#bg img');


const songs = ["Song1.mp3", "Song2.mp3", "Song3.mp3"];
const poster = ["Poster1.jpg", "Poster2.jpg", "Poster3.jpg"];

const song = new Audio();
let index = 0, temp;

[...buttons].forEach((btn, i) => {
   song.src = songs[index];

   btn.addEventListener('click', () => {
      temp = index
      index = i
      changePoster(i);

      if (temp !== index) {
         song.src = songs[index];
         buttons[temp].firstElementChild.src = 'Play.png'
      }

      if (song.paused) {
         song.play()
         btn.firstElementChild.src = 'Pause.png'
      } else {
         song.pause()
         btn.firstElementChild.src = 'Play.png'
      }

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