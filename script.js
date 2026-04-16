function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  const displayHours = String(hours % 12 || 12).padStart(2, "0");

  document.getElementById("time").textContent =
    `${displayHours}:${minutes}:${seconds}`;
  document.getElementById("ampm").textContent = ampm;
}

setInterval(updateTime, 1000);
updateTime();
