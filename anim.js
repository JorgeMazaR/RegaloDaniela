// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { "text": "Kiss me hard before you go", time: 17-2 },
    { "text": "Summertime sadness", time: 22 -2},
    { "text": "I just wanted you to know", time: 26 -2},
    { "text": "That baby, you're the best", time: 30 -2},
    { "text": "I got my red dress on tonight", time: 33 -2},
    { "text": "Dancin' in the dark, in the pale moonlight", time: 37 -2},
    { "text": "Done my hair up real big, beauty queen style", time: 42 -2},
    { "text": "High heels off, I'm feelin' alive", time: 46 -2},
    { "text": "Oh, my God, I feel it in the air", time: 52 },
    { "text": "Telephone wires above are sizzlin' like a snare", time: 55 },
    { "text": "Honey, I'm on fire, I feel it everywhere", time: 60 },
    { "text": "Nothin' scares me anymore", time: 64 },
    { "text": "Kiss me hard before you go", time: 69 },
    { "text": "Summertime sadness", time: 73 },
    { "text": "I just wanted you to know", time: 77 },
    { "text": "That baby, you're the best", time: 81 },
    { "text": "I got that summertime, summertime sadness", time: 86 },
    { "text": "S-s-summertime, summertime sadness", time: 90 },
    { "text": "Got that summertime, summertime sadness", time: 96 },
    { "text": "Oh, oh, oh, oh", time: 99 },
    { "text": "I'm feelin' electric tonight", time: 102 },
    { "text": "Cruisin' down the coast, goin' 'bout 99", time: 106 },
    { "text": "Got my bad baby by my heavenly side", time: 110 },
    { "text": "I know if I go, I'll die happy tonight", time: 115 },
    { "text": "Oh, my God, I feel it in the air", time: 120 },
    { "text": "Telephone wires above are sizzlin' like a snare", time: 123 },
    { "text": "Honey, I'm on fire, I feel it everywhere", time: 127 },
    { "text": "Nothin' scares me anymore", time: 132 },
    { "text": "Kiss me hard before you go", time: 136 },
    { "text": "Summertime sadness", time: 141 },
    { "text": "I just wanted you to know", time: 146 },
    { "text": "That baby, you're the best", time: 150 },
    { "text": "I got that summertime, summertime sadness", time: 154 },
    { "text": "S-s-summertime, summertime sadness", time: 159 },
    { "text": "Got that summertime, summertime sadness", time: 163 },
    { "text": "Oh, oh, oh, oh", time: 167 },
    { "text": "Think I'll miss you forever", time: 171 },
    { "text": "Like the stars miss the sun in the mornin' sky", time: 175 },
    { "text": "Later's better than never", time: 180 },
    { "text": "Even if you're gone, I'm gonna drive", time: 183 },
    { "text": "I got that summertime, summertime sadness", time: 193 },
    { "text": "S-s-summertime, summertime sadness", time: 197 },
    { "text": "Got that summertime, summertime sadness", time: 202 },
    { "text": "Oh, oh, oh, oh", time: 206 },
    { "text": "Kiss me hard before you go", time: 210 },
    { "text": "Summertime sadness", time: 213 },
    { "text": "I just wanted you to know", time: 218 },
    { "text": "That baby, you're the best", time: 222 },
    
]


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);