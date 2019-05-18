$(function movimiento() {
  $('a').on('click', function(e) {
    e.preventDefault();
    var desplazamiento = $(this).attr('href');
    $('body,html').stop(true, true).animate({
      scrollTop: $(desplazamiento).offset().top
    }, 1000);
  });
});

window.addEventListener('DOMContentLoaded', function() {
  principal()
  mezclar()
});

var uno = undefined,
  dos = undefined,
  acierto = 0

function conmutar(obj) {
  obj.classList.toggle('opacidad')
  obj.classList.add('open')

  if (uno == undefined)
    uno = obj
  else {
    dos = obj
    if (dos.src == uno.src) {
      alert('Correcto!')
      uno.onclick = null
      dos.onclick = null
      acierto++
      uno = undefined
      dos = undefined
    } else {
      alert('Error!')
      uno.classList.remove('open')
      uno.classList.remove('opacidad')
      dos.classList.remove('open')
      dos.classList.remove('opacidad')
      uno = undefined
      dos = undefined
    }
    if (acierto == 3) {
      alert('Enhorabuena! Has completado el juego.')
      alert('Pulsa el botón JUGAR para iniciar una nueva partida.')
      reiniciar()
    }
  }
}

function reiniciar() {
  uno = undefined
  dos = undefined
  acierto = 0
  var img = document.querySelectorAll('img')
  for (var i = 0; i < img.length; i++) {
    img[i].classList.add('opacidad')
    img[i].classList.toggle('opacidad')
    img[i].click = function() {
      conmutar(this)
    }
  }
  principal()
  mezclar()
  activar()
}

function jugar() {
  var img = document.querySelectorAll('img')
  for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
      conmutar(this)
    }
    img[i].classList.toggle('opacidad')
    desactivar()
  }
}

function desactivar() {
  document.getElementById("jugar").disabled = true;
  return true;
}

function activar() {
  document.getElementById("jugar").disabled = false;
  return false;
}

function principal() {
  uno = undefined
  dos = undefined
  acierto = 0
  var img = document.querySelectorAll('img')
  for (var i = 0; i < img.length; i++) {
    img[i].classList.toggle('opacidad')
  }
}

function mezclar() {
  var array = new Array()
  array[0] = 'http://i.imgsafe.org/59a4049.png'
  array[1] = 'http://i.imgsafe.org/59a4049.png'
  array[2] = 'http://i.imgsafe.org/6d5ca4d.png'
  array[3] = 'http://i.imgsafe.org/6d5ca4d.png'
  array[4] = 'http://i.imgsafe.org/80bffcc.png'
  array[5] = 'http://i.imgsafe.org/80bffcc.png'
  array_desordenado = [],
    num_elementos = array.length
  console.log('array ordenado: ' + array)

  for (i = 0; i < num_elementos; i++) {
    var itemaleat = Math.round(Math.random() * (array.length - 1))
    console.log('item eliminado: ' + itemaleat + '/' + array.length)
    console.log(array);
    array_desordenado[i] = array[itemaleat]
    array.splice(itemaleat, 1)
  }
  console.log('array desorden: ', array_desordenado)

  document.getElementById('img1').src = array_desordenado[0]
  document.getElementById('img2').src = array_desordenado[1]
  document.getElementById('img3').src = array_desordenado[2]
  document.getElementById('img4').src = array_desordenado[3]
  document.getElementById('img5').src = array_desordenado[4]
  document.getElementById('img6').src = array_desordenado[5]
}