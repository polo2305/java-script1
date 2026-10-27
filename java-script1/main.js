// --- 1. CAPTURA DE DATOS (Mínimo 3 datos con prompt) ---
// Usamos const para variables que no van a cambiar su tipo de referencia 
// y let si tuviéramos que reasignarlas (cumpliendo con la regla de NO usar var).
const nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?");
const anioActualInput = prompt("¿En qué año estamos?");
const anioNacimientoInput = prompt("¿En qué año naciste?");

// --- 2. PROCESAMIENTO E INFORMACIÓN ---
// Convertimos los datos capturados (que vienen como string) a tipo number usando parseInt
const anioActual = parseInt(anioActualInput);
const anioNacimiento = parseInt(anioNacimientoInput);

// Operación aritmética simple (cálculo de edad aproximada)
const edadCalculada = anioActual - anioNacimiento;

// Transformación de texto concatenando variables con strings
const mensajeBienvenida = "Bienvenido/a, " + nombreUsuario + ". Es un gran gusto tenerte por aquí.";
const mensajeEdad = "Basado en los años ingresados, este año estás cumpliendo (o cumplirás) aproximadamente " + edadCalculada + " años.";

// --- 3. SALIDA DE DATOS ---
// Mostramos los resultados mediante alertas y por consola
alert(mensajeBienvenida);
alert(mensajeEdad);

// Registro detallado en la consola del navegador
console.log("--- REGISTRO DE DATOS DE LA PRE-ENTREGA ---");
console.log("Usuario:", nombreUsuario);
console.log("Año de nacimiento:", anioNacimiento);
console.log("Año actual:", anioActual);
console.log("Edad calculada:", edadCalculada);