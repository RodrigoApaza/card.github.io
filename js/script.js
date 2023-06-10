let fechaActual = new Date();

let dia = fechaActual.getDate();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

const boton = document.getElementById('boton');
const textoOculto = document.getElementById('texto-oculto');    
let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];

document.getElementById('fecha').innerText = dia+" de "+meses[mes]+" de "+anio;

boton.addEventListener('click', function () {

    if (!textoOculto.classList.contains("desoculto")) {
        textoOculto.classList.add('desoculto');
        textoOculto.style.display = "block";
        boton.style.display = "none";
    }
});


window.addEventListener("load", function() {
    var progress = document.getElementById("progreso");
    var duration = 10000; // Duración de la animación en milisegundos
    var startValue = 0; // Valor inicial
    var endValue = 100; // Valor final
    var interval = duration / (endValue - startValue); // Intervalo de actualización
  
    function animateProgress() {
      var currentValue = startValue;
      var timer = setInterval(function() {
        currentValue++;
        progress.value = currentValue;
        if (currentValue >= endValue) {
          clearInterval(timer);
          animateProgress(); // Llamada recursiva para repetir la animación
        }
      }, interval);
    }
  
    animateProgress(); // Iniciar la animación al cargar la página
  });
