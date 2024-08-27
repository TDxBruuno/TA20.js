document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.getElementById("imagen");

  imagen.addEventListener("mouseover", function () {
    imagen.src = "otra_imagen.jpg";
  });

  imagen.addEventListener("mouseout", function () {
    imagen.src = "imagen_original.jpg";
  });
});
