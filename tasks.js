const button = document.getElementById('btn');
const box = document.getElementById('box');
const input = document.getElementById('input');
const select = document.getElementById('select');
const form = document.getElementById('form');
const dragItem = document.getElementById('dragItem');
const dropZone = document.getElementById('dropZone');

/* 1. click */
button.addEventListener('click', () => {
  console.log('Button clicked');
});

/* 2. dblclick */
box.addEventListener('dblclick', () => {
  console.log('Double clicked');
});

/* 3. mouseover */
box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'yellow';
});

/* 4. mouseout */
box.addEventListener('mouseout', () => {
  box.style.backgroundColor = 'white';
});

/* 5. mousemove */
document.addEventListener('mousemove', e => {
  console.log(`X:${e.clientX} Y:${e.clientY}`);
});

/* 6. mousedown */
document.addEventListener('mousedown', () => {
  console.log('Mouse down');
});

/* 7. mouseup */
document.addEventListener('mouseup', () => {
  console.log('Mouse up');
});

/* 8. keydown */
document.addEventListener('keydown', e => {
  console.log('Key down:', e.key);
});

/* 9. keyup */
document.addEventListener('keyup', e => {
  console.log('Key up:', e.key);
});

/* 10. keypress (deprecated) */
document.addEventListener('keypress', e => {
  console.log('Key press:', e.key);
});

/* 11. focus */
input.addEventListener('focus', () => {
  console.log('Input focused');
});

/* 12. blur */
input.addEventListener('blur', () => {
  console.log('Input blurred');
});

/* 13. change */
select.addEventListener('change', () => {
  console.log('Select changed:', select.value);
});

/* 14. input */
input.addEventListener('input', () => {
  console.log('Typing:', input.value);
});

/* 15. submit */
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log('Form submitted');
});

/* 16. scroll */
window.addEventListener('scroll', () => {
  console.log('Scrolling');
});

/* 17. resize */
window.addEventListener('resize', () => {
  console.log('Window resized');
});

/* 18. contextmenu */
document.addEventListener('contextmenu', e => {
  e.preventDefault();
  console.log('Right click');
});

/* 19. drag */
dragItem.addEventListener('drag', () => {
  console.log('Dragging');
});

/* 20. drop */
dropZone.addEventListener('dragover', e => e.preventDefault());

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  console.log('Dropped');
});
