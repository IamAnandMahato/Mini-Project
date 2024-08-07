document.getElementById('speak-button').addEventListener('click', () => {
  const text = document.getElementById('text-input').value;
  if (text.trim() !== '') {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);

    // Start wave animation
    const wave = document.getElementById('wave');
    wave.style.display = 'block';

    speech.onend = () => {
      // Stop wave animation when speech ends
      wave.style.display = 'none';
    };
  } else {
    alert('Please enter some text.');
  }
});
