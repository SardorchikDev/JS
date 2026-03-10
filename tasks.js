const main = document.getElementById('main');
const keyEl = document.getElementById('key');
const codeEl = document.getElementById('code');
const keyCodeEl = document.getElementById('keyCode');
const ctrlEl = document.getElementById('ctrl');
const altEl = document.getElementById('alt');
const shiftEl = document.getElementById('shift');
const metaEl = document.getElementById('Mod');
window.addEventListener('keydown', (e) => {
  main.textContent = e.code;
  keyEl.textContent = e.key;
  codeEl.textContent = e.code;
  keyCodeEl.textContent = e.keyCode;
  ctrlEl.textContent = e.ctrlKey;
  altEl.textContent = e.altKey;
  shiftEl.textContent = e.shiftKey;
  metaEl.textContent = e.metaKey;
});
