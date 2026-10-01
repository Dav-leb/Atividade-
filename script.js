const temperatura = document.getElementById("temperatura");
const resultado = document.getElementById("resultado");
converter.addEventListener("click", function() {
  const valor = Number(temperatura.value);
  const fahrenheit = (valor * 9 / 5) + 32;
  resultado.textContent = fahrenheit;

                           });
