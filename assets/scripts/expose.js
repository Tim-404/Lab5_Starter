// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectBar = document.getElementById("horn-select");
  const img = selectBar.previousElementSibling;
  const audio = document.getElementsByClassName("hidden")[0]
  selectBar.addEventListener('change', (event) => {
    const list = event.target.options;
    switch (list[list.selectedIndex].value) {
      case 'select':
        img.src = 'assets/images/no-image.png'
        audio.src = ''
        break;
      case 'air-horn':
        img.src = 'assets/images/air-horn.svg'
        audio.src = 'assets/audio/air-horn.mp3'
        break;
      case 'car-horn':
        img.src = 'assets/images/car-horn.svg'
        audio.src = 'assets/audio/car-horn.mp3'
        break;
      case 'party-horn':
        img.src = 'assets/images/party-horn.svg'
        audio.src = 'assets/audio/party-horn.mp3'
        break;
    }
  });

  const playButton = audio.previousElementSibling;
  playButton.addEventListener('click', (event) => {
    audio.play();
  });

  const volumeControl = document.getElementById("volume");
  volumeControl.addEventListener('change', (event) => {
    const picture = volumeControl.nextElementSibling
    const volume = volumeControl.value;
    if (volume < 1) {
      picture.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      picture.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      picture.src = 'assets/icons/volume-level-2.svg';
    } else {
      picture.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = volume / volumeControl.max
  });
}