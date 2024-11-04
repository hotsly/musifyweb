function playSong(song) {
  const audio = document.getElementById('audio');
  const source = document.getElementById('audio-source');
  source.src = song; // Set the source of the audio
  audio.load(); // Load the new audio source
  audio.play(); // Play the audio
}

function pauseSong() {
  const audio = document.getElementById('audio');
  audio.pause(); // Pause the audio
}