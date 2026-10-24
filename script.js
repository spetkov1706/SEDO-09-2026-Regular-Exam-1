document.addEventListener('DOMContentLoaded', function () {
  var input = document.getElementById('color-input');
  var applyBtn = document.getElementById('apply-btn');
  var resetBtn = document.getElementById('reset-btn');
  var box = document.getElementById('box');

  if (!input || !applyBtn || !resetBtn || !box) {
    console.error('Homepage elements not found.');
    return;
  }

  applyBtn.addEventListener('click', function () {
    box.style.backgroundColor = input.value.trim();
  });

  resetBtn.addEventListener('click', function () {
    input.value = '';
    box.style.backgroundColor = '';
  });
});