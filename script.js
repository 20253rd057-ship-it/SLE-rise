// ===============================
// SLE RISE - MÁQUINA DE RETOS
// ===============================

// ACTIVIDADES
const activities = [

{ name:"CAMINAR", icon:"🚶", action:"Camina" },

{ name:"CORRER", icon:"🏃", action:"Corre" },

{ name:"TROTAR", icon:"🏃‍♂️", action:"Trota" },

{ name:"SALTAR LA CUERDA", icon:"🪢", action:"Salta la cuerda" },

{ name:"SENTADILLAS", icon:"🏋️", action:"Haz sentadillas" },

{ name:"ABDOMINALES", icon:"💪", action:"Haz abdominales" },

{ name:"PLANCHA", icon:"🧘", action:"Haz plancha" },

{ name:"LAGARTIJAS", icon:"🤸", action:"Haz lagartijas" },

{ name:"BURPEES", icon:"🔥", action:"Haz burpees" },

{ name:"JUMPING JACKS", icon:"⭐", action:"Haz jumping jacks" },

{ name:"ZANCADAS", icon:"🦵", action:"Haz zancadas" },

{ name:"ESCALADORES", icon:"⛰️", action:"Haz mountain climbers" },

{ name:"BICICLETA", icon:"🚴", action:"Anda en bicicleta" },

{ name:"PATINAR", icon:"🛼", action:"Patina" },

{ name:"NADAR", icon:"🏊", action:"Nada" },

{ name:"BAILAR", icon:"💃", action:"Baila" },

{ name:"YOGA", icon:"🧘‍♀️", action:"Practica yoga" },

{ name:"PILATES", icon:"🤍", action:"Practica pilates" },

{ name:"ESTIRAMIENTOS", icon:"🙆", action:"Realiza estiramientos" },

{ name:"SUBIR ESCALERAS", icon:"🪜", action:"Sube escaleras" },

{ name:"CAMINATA RÁPIDA", icon:"🚶‍♀️", action:"Realiza una caminata rápida" },

{ name:"TROTAR EN EL LUGAR", icon:"🏃", action:"Trota en tu lugar" },

{ name:"SALTOS", icon:"⬆️", action:"Haz saltos" },

{ name:"SALTOS LATERALES", icon:"↔️", action:"Haz saltos laterales" },

{ name:"SALTOS DE TIJERA", icon:"✂️", action:"Haz saltos de tijera" },

{ name:"SQUAT JUMPS", icon:"🏋️‍♀️", action:"Haz squat jumps" },

{ name:"ELEVACIÓN DE RODILLAS", icon:"🦿", action:"Eleva las rodillas" },

{ name:"TALONES A LOS GLÚTEOS", icon:"🦶", action:"Lleva los talones a los glúteos" },

{ name:"FLEXIONES", icon:"💪", action:"Haz flexiones" },

{ name:"PLANCHA LATERAL", icon:"🧘", action:"Haz plancha lateral" },

{ name:"ESCALAR COLINA", icon:"🏔️", action:"Sube una colina" },

{ name:"CAMINAR CON TU MASCOTA", icon:"🐶", action:"Sal a caminar con tu mascota" },

{ name:"JUGAR FÚTBOL", icon:"⚽", action:"Juega fútbol" },

{ name:"JUGAR BÁSQUETBOL", icon:"🏀", action:"Juega básquetbol" },

{ name:"JUGAR VOLEIBOL", icon:"🏐", action:"Juega voleibol" },

{ name:"TENIS", icon:"🎾", action:"Juega tenis" },

{ name:"BÁDMINTON", icon:"🏸", action:"Juega bádminton" },

{ name:"SUBIR Y BAJAR ESCALONES", icon:"🪜", action:"Sube y baja escalones" },

{ name:"MARCHAR", icon:"🥾", action:"Marcha en tu lugar" },

{ name:"BAILE AERÓBICO", icon:"🎶", action:"Realiza baile aeróbico" },

{ name:"RESPIRACIÓN PROFUNDA", icon:"🌬️", action:"Realiza ejercicios de respiración" },

{ name:"CAMINATA ECOLÓGICA", icon:"🌳", action:"Realiza una caminata ecológica" },

{ name:"TAICHI", icon:"☯️", action:"Practica Tai Chi" },

{ name:"HULA HOOP", icon:"⭕", action:"Usa un aro hula hoop" },

{ name:"EJERCICIOS DE MOVILIDAD", icon:"🤸‍♀️", action:"Realiza ejercicios de movilidad" },

{ name:"EQUILIBRIO", icon:"⚖️", action:"Practica ejercicios de equilibrio" }

];


// DURACIONES / CANTIDADES
const durations = [
  {
    name: "5 MINUTOS",
    text: "durante 5 minutos"
  },
  {
    name: "10 MINUTOS",
    text: "durante 10 minutos"
  },
  {
    name: "15 MINUTOS",
    text: "durante 15 minutos"
  },
  {
    name: "20 MINUTOS",
    text: "durante 20 minutos"
  },
  {
    name: "30 MINUTOS",
    text: "durante 30 minutos"
  },
  {
    name: "45 MINUTOS",
    text: "durante 45 minutos"
  },
  {
    name: "10 REPETICIONES",
    text: "por 10 repeticiones"
  },
  {
    name: "15 REPETICIONES",
    text: "por 15 repeticiones"
  },
  {
    name: "20 REPETICIONES",
    text: "por 20 repeticiones"
  },
  {
    name: "30 REPETICIONES",
    text: "por 30 repeticiones"
  }
];


// CONDICIONES
const conditions = [
  {
    name: "AL AIRE LIBRE",
    icon: "🌳",
    text: "al aire libre"
  },
  {
    name: "CON MÚSICA",
    icon: "🎵",
    text: "escuchando tu música favorita"
  },
  {
    name: "CON UN AMIGO",
    icon: "👥",
    text: "con un amigo"
  },
  {
    name: "EN CASA",
    icon: "🏠",
    text: "desde casa"
  },
  {
    name: "A TU RITMO",
    icon: "💜",
    text: "a tu propio ritmo"
  },
  {
    name: "POR LA MAÑANA",
    icon: "🌅",
    text: "por la mañana"
  },
  {
    name: "POR LA TARDE",
    icon: "🌇",
    text: "por la tarde"
  },
  {
    name: "CON BUENA POSTURA",
    icon: "✅",
    text: "manteniendo una buena postura"
  },
  {
    name: "RITMO MODERADO",
    icon: "⚡",
    text: "a un ritmo moderado"
  },
  {
    name: "SIN DISTRACCIONES",
    icon: "🎯",
    text: "sin distracciones"
  }
];


// ===============================
// ELEMENTOS DEL HTML
// ===============================

const activityIcon =
  document.getElementById("activityIcon");

const activityText =
  document.getElementById("activityText");

const durationIcon =
  document.getElementById("durationIcon");

const durationText =
  document.getElementById("durationText");

const conditionIcon =
  document.getElementById("conditionIcon");

const conditionText =
  document.getElementById("conditionText");

const finalChallenge =
  document.getElementById("finalChallenge");

const generateBtn =
  document.getElementById("generateBtn");

const lever =
  document.getElementById("lever");

const completeBtn =
  document.getElementById("completeBtn");

const completeMessage =
  document.getElementById("completeMessage");

const completedCount =
  document.getElementById("completedCount");

const streakCount =
  document.getElementById("streakCount");

const resetProgress =
  document.getElementById("resetProgress");


// ===============================
// PROGRESO
// ===============================

let completed =
  Number(localStorage.getItem("sleCompleted")) || 0;

let streak =
  Number(localStorage.getItem("sleStreak")) || 0;

completedCount.textContent = completed;
streakCount.textContent = streak;


// ===============================
// VARIABLES
// ===============================

let spinning = false;

let currentChallenge = null;


// ===============================
// FUNCIÓN ALEATORIA
// ===============================

function randomItem(array) {

  const randomIndex =
    Math.floor(Math.random() * array.length);

  return array[randomIndex];
}


// ===============================
// MOSTRAR VALORES TEMPORALES
// ===============================

function randomAnimation() {

  const activity = randomItem(activities);

  const duration = randomItem(durations);

  const condition = randomItem(conditions);


  activityIcon.textContent =
    activity.icon;

  activityText.textContent =
    activity.name;


  durationIcon.textContent =
    "⏱️";

  durationText.textContent =
    duration.name;


  conditionIcon.textContent =
    condition.icon;

  conditionText.textContent =
    condition.name;
}


// ===============================
// GENERAR RETO
// ===============================

function generateChallenge() {

  if (spinning) {
    return;
  }

  spinning = true;

  completeMessage.textContent = "";


  // Animación palanca
  lever.classList.add("active");


  // Animación de carretes
  activityIcon.classList.add("spinning");
  activityText.classList.add("spinning");

  durationIcon.classList.add("spinning");
  durationText.classList.add("spinning");

  conditionIcon.classList.add("spinning");
  conditionText.classList.add("spinning");


  const animation =
    setInterval(randomAnimation, 100);


  // Después de 2 segundos termina
  setTimeout(() => {

    clearInterval(animation);


    const activity =
      randomItem(activities);

    const duration =
      randomItem(durations);

    const condition =
      randomItem(conditions);


    activityIcon.textContent =
      activity.icon;

    activityText.textContent =
      activity.name;


    durationIcon.textContent =
      "⏱️";

    durationText.textContent =
      duration.name;


    conditionIcon.textContent =
      condition.icon;

    conditionText.textContent =
      condition.name;


    currentChallenge = {
      activity,
      duration,
      condition
    };


    finalChallenge.textContent =
      `${activity.action} ${duration.text} ${condition.text}.`;


    // Quitar animación
    activityIcon.classList.remove("spinning");
    activityText.classList.remove("spinning");

    durationIcon.classList.remove("spinning");
    durationText.classList.remove("spinning");

    conditionIcon.classList.remove("spinning");
    conditionText.classList.remove("spinning");


    lever.classList.remove("active");

    spinning = false;

  }, 2000);
}


// ===============================
// BOTÓN GENERAR
// ===============================

generateBtn.addEventListener(
  "click",
  generateChallenge
);


// ===============================
// PALANCA
// ===============================

lever.addEventListener(
  "click",
  generateChallenge
);


// ===============================
// COMPLETAR RETO
// ===============================

completeBtn.addEventListener(
  "click",
  function () {

    if (!currentChallenge) {

      completeMessage.textContent =
        "Primero genera un reto. 💜";

      return;
    }


    completed++;

    streak++;


    localStorage.setItem(
      "sleCompleted",
      completed
    );

    localStorage.setItem(
      "sleStreak",
      streak
    );


    completedCount.textContent =
      completed;

    streakCount.textContent =
      streak;


    completeMessage.textContent =
      "¡Excelente! Completaste tu reto. 💜🔥";


    currentChallenge = null;
  }
);


// ===============================
// REINICIAR PROGRESO
// ===============================

resetProgress.addEventListener(
  "click",
  function () {

    const confirmReset =
      confirm(
        "¿Seguro que deseas reiniciar tu progreso?"
      );


    if (confirmReset) {

      completed = 0;

      streak = 0;


      localStorage.setItem(
        "sleCompleted",
        0
      );

      localStorage.setItem(
        "sleStreak",
        0
      );


      completedCount.textContent = 0;

      streakCount.textContent = 0;


      alert(
        "Tu progreso fue reiniciado."
      );
    }
  }
);


// ===============================
// MENÚ PARA CELULAR
// ===============================

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


if (menuToggle && navMenu) {

  menuToggle.addEventListener(
    "click",
    function () {

      navMenu.classList.toggle("open");

    }
  );


  const navLinks =
    navMenu.querySelectorAll("a");


  navLinks.forEach(link => {

    link.addEventListener(
      "click",
      function () {

        navMenu.classList.remove("open");

      }
    );

  });

}
