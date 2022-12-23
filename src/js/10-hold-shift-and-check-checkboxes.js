const checkboxes = document.querySelectorAll('input[type=checkbox]');
let checkedBox;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === checkedBox) inBetween = !inBetween;
      if (inBetween) checkbox.checked = true;
    });
  }

  checkedBox = this;
}
