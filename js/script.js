// Declaración de variables
let opcion = -1

let cantPalos = 10;
let precPalos = 7500;

let cantRuedas = 50;
let precRuedas = 700;

let cantGuantes = 50;
let precGuantes = 5000;

let cantBotas = 10;
let precBotas = 20000;

let enConstruccion = "En construcción"

// Declaración de funciones
const mostrarTablaStock = (nPalos, nRued, nGuan, nBotas, pPalos, pRued, pGuan, pBotas) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */

  return parseInt(prompt((
    "######## Stock ########" + "\n" +
    "Items    Cantidad    Precio por unidad\n" +
    "Palos    " + nPalos + " uni    $" + pPalos + "\n" +
    "Ruedas    " + nRued + " uni    $" + pRued + "\n" +
    "Guantes    " + nGuan + " uni    $" + pGuan + "\n" +
    "Botas    " + nBotas + " uni    $" + pBotas + "\n\n" +
    "Ingrese 1 para realizar un pedido. 'Cancelar' o ingresar cualquier otra caracter para volver al menú principal."
  )));
}

const mostrarMenuPrincipal = () => {
  /* Se encarga de retornar en forma de tabla el menú principal
  */

  return (
    "######## E-Shop Hockey Sobre Patines ########" + "\n" +
    "Opciones:\n" +
    "1 - Ver Stock" + "\n" +
    "2 - Realizar pedido" + "\n" +
    "0 - Salir" + "\n\n" +
    "Ingrese alguna de las opciones."
  )
}

const menuMostrarProductos = () => {
  /* Se encarga de retornar en forma de tabla el menú principal
  */

  let productoId;

  while (repeat = true) {
    productoId = parseInt(prompt((
      "######## Pedido - Producto ########" + "\n" +
      "IDs:\n" +
      "1 - Palos" + "\n" +
      "2 - Ruedas" + "\n" +
      "3 - Guantes" + "\n" +
      "4 - Botas" + "\n\n" +
      "Ingrese algún ID de producto."
    )))
    if (productoId > 0 && productoId <= 4) {
      return productoId;
    } else {
      mensajeOpcionNoValida();
    }
  }
}

const preguntarCantidad = (producto) => {
  /* Obtiene la cantidad de producto
  */

  let value;

  while (true) {
    value = parseInt(prompt((
      "######## Pedido - Cantidad ########" + "\n" +
      "Ingrese la cantidad de " + producto + ":"
    )));
    if (value > 0) {
      return value;
    } else {
      alert("Error: la cantidad tiene que mayor a 0")
    }
  }
}

const chequearNanEspacioVacio = (mensaje) => {
  /* Se encarga de chequear que no sea NaN o 
  un espacio en blanco, independientemente del
  mensaje mostrado
  */

  let condicion = true;

  while (condicion == true) {
    valor = prompt(mensaje);
    console.log(valor);
    if (valor == "" || valor == null) {
      condicion = true;
      alert("Error: no se ha ingresado ningún valor o se ha clickeado sobre 'Cancelar'");
    } else {
      condicion = false;
    }
  }

  return valor;
}

const preguntarNombres = () => {
  /* Se encarga de preguntar nombres
  */

  valor = 0

  return chequearNanEspacioVacio(
    "######## Pedido - Nombres ########" + "\n" +
    "Ingrese su/s nombre/s:"
  );
}

const preguntarApellidos = () => {
  /* Se encarga de preguntar apellidos
  */

  return chequearNanEspacioVacio(
    "######## Pedido - Apellidos ########" + "\n" +
    "Ingrese su/s apellido/s:"
  )
}

const preguntarDireccion = () => {
  /* Se encarga de preguntar la dirección
  */

  return chequearNanEspacioVacio(
    "######## Pedido - Dirección ########" + "\n" +
    "Ingrese su dirección:"
  )
}

const preguntarEmail = () => {
  /* Se encarga de preguntar el email
  */

  return chequearNanEspacioVacio(
    "######## Pedido - E-mail ########" + "\n" +
    "Ingrese la dirección de su correo:"
  )
}

const emailComprador = () => {
  /* Se encarga de preguntar la dirección
  */
  return (
    "######## Pedido - Dirección ########" + "\n" +
    "Ingrese su dirección:"
  )
}

const preguntarCondicionIva = () => {
  /* Se encarga de preguntar la dirección
  */

  let condicion = -1;

  while (condicion == -1) {
    condicion = parseInt(prompt(
      "######## Pedido - IVA ########" + "\n" +
      "Condiciones frente al IVA:\n" +
      "1 - Exento" + "\n" +
      "2 - No exento" + "\n\n" +
      "Ingrese su condición:"
    ));
    if (!(condicion > 0 && condicion <= 2)) {
      condicion = -1;
      mensajeOpcionNoValida();
    }
  }

  return condicion;
}

const confirmarCompra = (productoId, productoQty, ivaComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador) => {
  /* Se encarga de retornar en forma de tabla todos los productos
  */

  let condicionIva = " | IVA exento";

  if (ivaComprador == 2) {
    condicionIva = " | incluye IVA";
  }

  return parseInt(prompt((
    "######## Confirmar compra ########" + "\n" +
    productoQty + " uni de " + convierteIdNombre(productoId) + " | Pre. uni: $" + precioProducto(productoId) + condicionIva + " | Precio final: $" + precioFinal + "\n" +
    "A nombre de: " + apellidosComprador + ", " + nombresComprador + ".\n" +
    "Dirección de entrega: " + direccionComprador + ". E-mail: " + emailComprador + ".\n\n" +
    "Ingrese 1 para confirmar la compra. Cualquier otro valor o click en 'Cancelar' cancelará la compra."
  )));
}

const chequearStock = (stock, cantSolicitada) => {
  /* Algoritmo que chequea si hay stock suficiente, caso contrario lo advierte 
  y devuelve true
  */

  if (stock - cantSolicitada >= 0) {
    return false;
  } else {
    alert("Error: cantidad pedida supera el stock de " + stock + " unidades");
  }

  return true;
}

const convierteIdNombre = (id) => {
  /* Devuelve el nombre que corresponde al ID del producro
  */

  switch (id) {
    case 1:
      return "Palos";
    case 2:
      return "Ruedas";
    case 3:
      return "Guantes"
    case 4:
      return "Botas"
    default:
      return "Producto Desconocido"
  }
}

const precioProducto = (productoId) => {
  /* Devuelve el precio por unidad del producto según
  su ID
  */

  switch (productoId) {
    case 1:
      return precPalos;
    case 2:
      return precRuedas;
    case 3:
      return precGuantes;
    case 4:
      return precBotas;
    default:
      alert("Error")
      return 0;
  }
}

const calcularPrecioFinal = (productoId, productoQty, ivaComprador) => {
  /* Algoritmo que se encarga de calcular el precio final, que puede ser
  con o sin el IVA del 21%
  */

  let precioFinal = productoQty * precioProducto(productoId);

  if (ivaComprador == 2) {
    return precioFinal * 1.21;
  }

  return precioFinal;
}

const graciasCompra = () => {
  /* Mensaje de gracias por la compra
  */

  alert("Muchas gracias por su compra!");
}

const compraCancelada = () => {
  /* Mensaje de compra cancelada
  */

  alert("Atención: Compra cancelada!");
}

const descontarStock = (productoId, productoQty) => {
  switch (productoId) {
    case 1:
      cantPalos = cantPalos - productoQty;
      break;
    case 2:
      cantRuedas = cantRuedas - productoQty;
      break;
    case 3:
      cantGuantes = cantGuantes - productoQty;
      break;
    case 4:
      cantBotas = cantBotas - productoQty;
      break;
    default:
      alert("Error");
      break;

  }
}


const menuPrincipalPedido = () => {
  /* Se encarga del proceso de tomar el pedido */
  let repeat = true;
  let productoId;
  let productoQty;
  let nombresComprador;
  let apellidosComprador;
  let emailComprador;
  let ivaComprador;
  let precioFinal;
  let confirmaCompra;

  while (repeat == true) {

    productoId = menuMostrarProductos();
    productoQty = preguntarCantidad(convierteIdNombre(productoId));

    switch (productoId) {
      case 1:
        repeat = chequearStock(cantPalos, productoQty);
        break;
      case 2:
        repeat = chequearStock(cantRuedas, productoQty);
        break;
      case 3:
        repeat = chequearStock(cantGuantes, productoQty);
        break;
      case 4:
        repeat = chequearStock(cantBotas, productoQty);
        break;
      default:
        alert("Error: producto no encontrado o clickeado 'Cancelar'");
        break;
    }
  }

  nombresComprador = preguntarNombres();
  apellidosComprador = preguntarApellidos();
  direccionComprador = preguntarDireccion();
  emailComprador = preguntarEmail();
  ivaComprador = preguntarCondicionIva();
  precioFinal = calcularPrecioFinal(productoId, productoQty, ivaComprador);
  confirmaCompra = confirmarCompra(productoId, productoQty, ivaComprador, precioFinal, nombresComprador, apellidosComprador, direccionComprador, emailComprador);
  if (confirmaCompra == 1) {
    descontarStock(productoId, productoQty);
    graciasCompra();
  } else {
    compraCancelada();
  }

  return -1;
}

const mensajeOpcionNoValida = () => {
  alert("Error por opción no valida ingresada o por haber clickeado sobre el botón 'Cancelar'");
}

// Main
console.log("Inicio");
// opcion = parseInt(prompt(mostrarTablaStock(cantPalos, cantRuedas, cantGuantes, cantBotas, precPalos, precRuedas, precGuantes, precBotas)));
// opcion = 0;
while (opcion != 0) {
  opcion = parseInt(prompt(mostrarMenuPrincipal()))

  switch (opcion) {
    case 0:
      alert("Saliendo... Gracias por su visita.");
      break;
    case 1:
      opcion = mostrarTablaStock(cantPalos, cantRuedas, cantGuantes, cantBotas, precPalos, precRuedas, precGuantes, precBotas);
      if (opcion == 1) {
        menuPrincipalPedido();
      } else {
        opcion = -1;
      }
      break;
    case 2:
      opcion = menuPrincipalPedido();
      break;
    default:
      mensajeOpcionNoValida();
      break;
  }
}

console.log("Fin");


