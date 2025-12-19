// ---------------------------
// Preguntas y respuestas
// ---------------------------
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["París", "Londres", "Madrid", "Berlín"],
        correcta: "París"
    },
    {
        pregunta: "¿Cuál es el planeta más cercano al Sol?",
        respuestas: ["Mercurio", "Venus", "Tierra", "Marte"],
        correcta: "Mercurio"
    },
    {
        pregunta: "¿Cuánto es 12 x 12?",
        respuestas: ["144", "121", "132", "124"],
        correcta: "144"
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote'?",
        respuestas: ["Miguel de Cervantes", "Shakespeare", "Gabriel García Márquez", "Pablo Neruda"],
        correcta: "Miguel de Cervantes"
    },
    {
        pregunta: "¿Cuál es el océano más grande?",
        respuestas: ["Pacífico", "Atlántico", "Índico", "Ártico"],
        correcta: "Pacífico"
    }
];

// ---------------------------
// Frases motivadoras
// ---------------------------
const frases = [
    "Aprender es el primer paso hacia el éxito.",
    "Cada día es una nueva oportunidad para mejorar.",
    "Nunca dejes de aprender, el conocimiento es poder.",
    "El esfuerzo de hoy es la recompensa de mañana."
];

let puntaje = 0;
let preguntaActual = 0;

// ---------------------------
// Elementos DOM
// ---------------------------
const preguntaEl = document.getElementById("pregunta");
const respuestasEl = document.getElementById("respuestas");
const puntajeEl = document.getElementById("puntaje");
const siguienteBtn = document.getElementById("siguiente-btn");
const fraseEl = document.getElementById("frase");

// ---------------------------
// Funciones
// ---------------------------
function mostrarPregunta() {
    const actual = preguntas[preguntaActual];
    preguntaEl.textContent = actual.pregunta;
    respuestasEl.innerHTML = "";

    // Mezclar respuestas
    const respuestasMezcladas = actual.respuestas.sort(() => Math.random() - 0.5);

    respuestasMezcladas.forEach(resp => {
        const btn = document.createElement("button");
        btn.textContent = resp;
        btn.addEventListener("click", () => seleccionarRespuesta(resp));
        respuestasEl.appendChild(btn);
    });
}

function seleccionarRespuesta(resp) {
    const correcta = preguntas[preguntaActual].correcta;
    if(resp === correcta){
        puntaje += 10;
        alert("¡Correcto!");
    } else {
        alert(`Incorrecto. La respuesta correcta es: ${correcta}`);
    }
    puntajeEl.textContent = `Puntaje: ${puntaje}`;
}

function siguientePregunta() {
    preguntaActual++;
    if(preguntaActual >= preguntas.length){
        preguntaActual = 0; // Reinicia el juego automáticamente
        alert("¡Juego terminado! Se reinicia automáticamente.");
    }
    mostrarPregunta();
}

// Mostrar frase motivadora aleatoria
function mostrarFrase() {
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    fraseEl.textContent = aleatoria;
}

// ---------------------------
// Inicialización
// ---------------------------
window.onload = function() {
    mostrarPregunta();
    mostrarFrase();
};

siguienteBtn.addEventListener("click", siguientePregunta);
