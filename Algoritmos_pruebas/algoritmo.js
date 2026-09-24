// Valida una cédula: solo dígitos, entre 6 y 10 caracteres
function validarCedula(cedula) {
  return /^\d{6,10}$/.test(cedula);
}

// Calcula el copago según el tipo de afiliado
function calcularCopago(valor, tipo) {
  if (tipo === "A") return valor * 0.10; // Cotizante
  if (tipo === "B") return valor * 0.20; // Beneficiario
  if (tipo === "C") return valor * 0.05; // Subsidiado
  return "Tipo inválido";
}

// Pruebas
console.log(validarCedula("12345678"));   // true
console.log(validarCedula("12"));         // false
console.log(calcularCopago(100000, "A")); // 10000
console.log(calcularCopago(100000, "B")); // 20000