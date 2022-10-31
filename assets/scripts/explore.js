// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis
  const dropdown = document.getElementById('voice-select');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.value = voices[i].lang;
      option.innerHTML = voices[i].name;
      dropdown.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  const button = dropdown.nextElementSibling;
  button.addEventListener('click', (event) => {
    const textbox = document.getElementById('text-to-speak');
    const text = textbox.value;
    const utterThis = new SpeechSynthesisUtterance(text);
    const list = dropdown.options;
    const selectedOption = list[list.selectedIndex].value;
    const img = textbox.previousElementSibling;

    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].lang === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.addEventListener('end', (event) => {
      img.src = 'assets/images/smiling.png';
    });
    synth.speak(utterThis);
    img.src = 'assets/images/smiling-open.png';
  });
}