// find button
const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

//catch click
infoBtns.forEach((btn) => {
  btn.addEventListener('click', showHint);
});

document.addEventListener('click', closeHint);

// finde parent following children and  change class hidden
function showHint(e) {
  e.stopPropagation();
  this.parentNode.querySelector('.info-hint').classList.toggle('hidden');
}

function closeHint() {
  infoHints.forEach((item) => {
    item.classList.add('hidden');
    item.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}
