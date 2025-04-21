const coordenadaFija = [21.426868801769462, 39.84303394569408];

// Función para convertir grados a radianes de internet
function GradosaRadianes(grados) {
  return (grados * Math.PI) / 180;
}

function CalcularDistancia(coord1, coord2) {
  const R = 6371;
  const dLat = GradosaRadianes(coord2[0] - coord1[0]);
  const dLon = GradosaRadianes(coord2[1] - coord1[1]);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(GradosaRadianes(coord1[0])) *
      Math.cos(GradosaRadianes(coord2[0])) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function mostrarMenu() {
  let opcion = prompt(
    "1. Ingresar coordenadas\n" +
      "2. No sabes cual es tu longitud o latitud?\n" +
      "3. Salir\n\n"
  );
  if (opcion === "1") {
    let latitud = parseFloat(prompt("Ingresa la latitud:"));
    let longitud = parseFloat(prompt("Ingresa la longitud:"));

    let coordenadaUsuario = [latitud, longitud];

    let distancia = CalcularDistancia(coordenadaFija, coordenadaUsuario);

    alert(
      `La distancia desde tu ubicación hasta la mezquita es de ${distancia.toFixed(
        2
      )} km.`
    );
    mostrarMenu();
  } else if (opcion === "3") {
    alert("bye");
  } else if (opcion === "2") {
    alert(
      "Abre el link y dale click derecho sobre tu ubicacion \n https://www.google.com/maps"
    );
    mostrarMenu();
  } else {
    alert("Invalido");
    mostrarMenu();
  }
}

mostrarMenu();
