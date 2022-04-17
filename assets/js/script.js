window.onload = function() {
  
  const audio = document.querySelector('audio')
  audio.volume = 0.1;

  const cocoSuicida = document.querySelectorAll('.coco_suicida');
  cocoSuicida.forEach(coco => coco.addEventListener('click', cocoAlSuelo));

  const quitasol = document.querySelector('.umbrella_top');
  quitasol.addEventListener('click', cambiaColorQuitasol);

  function cocoAlSuelo(e) {
    document.querySelector('#drop-sound').currentTime = 0;
    document.querySelector('#drop-sound').play();
    e.target.style.transform = 'translateY(38px)';
  }

  function cambiaColorQuitasol(e) {
    const nuevoColor = document.querySelectorAll('.umbrella_top1');
    nuevoColor.forEach(e => e.classList.toggle('sun-umbrella-cambia-color'))
  }
}
