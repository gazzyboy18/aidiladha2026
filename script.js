const audio = document.getElementById('bgAudio');
const btn = document.getElementById('audioBtn');
let isPlaying = false;

btn.addEventListener('click', () => {
  if (!isPlaying) {
    audio.play().then(() => {
      isPlaying = true;
      btn.textContent = 'Pause';
    }).catch(err => {
      console.log('Audio play blocked:', err);
    });
  } else {
    audio.pause();
    isPlaying = false;
    btn.textContent = 'Play';
  }
});
