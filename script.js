const INSTAGRAM_URL = "https://www.instagram.com/sle.rise?igsh=MWl2dW8zZ3kwcjVkNw%3D%3D&utm_source=qr";

const activities = [
  { name: "CAMINAR", icon: "🚶", phrase: "Camina" },
  { name: "CORRER", icon: "🏃", phrase: "Corre" },
  { name: "SENTADILLAS", icon: "🏋️", phrase: "Realiza sentadillas" },
  { name: "ESTIRAMIENTOS", icon: "🤸", phrase: "Haz estiramientos" },
  { name: "BAILAR", icon: "💃", phrase: "Baila" },
  { name: "BICICLETA", icon: "🚴", phrase: "Anda en bicicleta" },
  { name: "PLANCHA", icon: "🧘", phrase: "Haz plancha" },
  { name: "ESCALERAS", icon: "🪜", phrase: "Sube escaleras" }
];

const durations = [
  { name: "10 MINUTOS", phrase: "durante 10 minutos" },
  { name: "15 MINUTOS", phrase: "durante 15 minutos" },
  { name: "20 MINUTOS", phrase: "durante 20 minutos" },
  { name: "30 MINUTOS", phrase: "durante 30 minutos" },
  { name: "10 REPETICIONES", phrase: "por 10 repeticiones" },
  { name: "15 REPETICIONES", phrase: "por 15 repeticiones" },
  { name: "20 REPETICIONES", phrase: "por 20 repeticiones" }
];

const conditions = [
  { name: "AL AIRE LIBRE", icon: "🌳", phrase: "al aire libre" },
  { name: "CON MÚSICA", icon: "🎵", phrase: "con música" },
  { name: "CON UN AMIGO", icon: "👥", phrase: "con un amigo" },
  { name: "A TU RITMO", icon: "💜", phrase: "a tu propio ritmo" },
  { name: "POR LA MAÑANA", icon: "🌅", phrase: "por la mañana" },
  { name: "POR LA TARDE", icon: "🌇", phrase: "por la tarde" }
];

const $ = (id) => document.getElementById(id);

const activityText = $("activityText");
const durationText = $("durationText");
const conditionText = $("conditionText");
const activityIcon = $("activityIcon");
const durationIcon = $("durationIcon");
const conditionIcon = $("conditionIcon");
const finalChallenge = $("finalChallenge");
const generateBtn = $("generateBtn");
const completeBtn = $("completeBtn");
const completeMessage = $("completeMessage");
const lever = $("lever");
const completedCount = $("completedCount");
const streakCount = $("streakCount");
const resetProgress = $("resetProgress");
const toast = $("toast");
const menuToggle = $("menuToggle");
const navMenu = $("navMenu");

let isGenerating = false;
let currentChallengeKey = null;

function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function showRandomSlots() {
  const a = randomItem(activities);
  const d = randomItem(durations);
  const c = randomItem(conditions);
  activityText.textContent = a.name;
  durationText.textContent = d.name;
  conditionText.textContent = c.name;
  activityIcon.textContent = a.icon;
  durationIcon.textContent = "⏱️";
  conditionIcon.textContent = c.icon;
}

function generateChallenge() {
  if (isGenerating) return;
  isGenerating = true;
  completeMessage.textContent = "";
  lever.classList.add("active");

  [activityText, durationText, conditionText, activityIcon, durationIcon, conditionIcon]
    .forEach(el => el.classList.add("spinning"));

  const animation = setInterval(showRandomSlots, 95);

  setTimeout(() => {
    clearInterval(animation);

    const a = randomItem(activities);
    const d = randomItem(durations);
    const c = randomItem(conditions);

    activityText.textContent = a.name;
    durationText.textContent = d.name;
    conditionText.textContent = c.name;
    activityIcon.textContent = a.icon;
    durationIcon.textContent = "⏱️";
    conditionIcon.textContent = c.icon;
    finalChallenge.textContent = `${a.phrase} ${d.phrase} ${c.phrase}.`;

    currentChallengeKey = `${a.name}|${d.name}|${c.name}|${new Date().toDateString()}`;

    [activityText, durationText, conditionText, activityIcon, durationIcon, conditionIcon]
      .forEach(el => el.classList.remove("spinning"));

    lever.classList.remove("active");
    isGenerating = false;
  }, 1700);
}

function loadProgress() {
  completedCount.textContent = Number(localStorage.getItem("sleRiseCompleted")) || 0;
  streakCount.textContent = Number(localStorage.getItem("sleRiseStreak")) || 0;
}

function completeChallenge() {
  const today = new Date().toISOString().slice(0, 10);
  const lastChallenge = localStorage.getItem("sleRiseLastChallengeKey");

  if (currentChallengeKey && currentChallengeKey === lastChallenge) {
    completeMessage.textContent = "Este reto ya fue marcado como completado. 💜";
    return;
  }

  let completed = Number(localStorage.getItem("sleRiseCompleted")) || 0;
  completed += 1;
  localStorage.setItem("sleRiseCompleted", completed);

  const lastDate = localStorage.getItem("sleRiseLastDate");
  let streak = Number(localStorage.getItem("sleRiseStreak")) || 0;

  if (!lastDate) {
    streak = 1;
  } else if (lastDate !== today) {
    const previous = new Date(lastDate + "T00:00:00");
    const current = new Date(today + "T00:00:00");
    const diffDays = Math.round((current - previous) / 86400000);
    streak = diffDays === 1 ? streak + 1 : 1;
  }

  localStorage.setItem("sleRiseStreak", streak);
  localStorage.setItem("sleRiseLastDate", today);
  if (currentChallengeKey) localStorage.setItem("sleRiseLastChallengeKey", currentChallengeKey);

  completeMessage.textContent = "¡Excelente! Tu progreso se guardó en este navegador. 💜";
  loadProgress();
}

function resetAllProgress() {
  const ok = confirm("¿Seguro que quieres reiniciar tu progreso?");
  if (!ok) return;
  ["sleRiseCompleted", "sleRiseStreak", "sleRiseLastDate", "sleRiseLastChallengeKey"]
    .forEach(key => localStorage.removeItem(key));
  loadProgress();
  showToast("Progreso reiniciado.");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

generateBtn.addEventListener("click", generateChallenge);
lever.addEventListener("click", generateChallenge);
completeBtn.addEventListener("click", completeChallenge);
resetProgress.addEventListener("click", resetAllProgress);

menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => navMenu.classList.remove("open")));

document.querySelectorAll("[data-toast]").forEach(button => {
  button.addEventListener("click", () => showToast(button.dataset.toast));
});

loadProgress();
