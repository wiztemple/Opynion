const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modalBtn = document.getElementById('modalBtn');
const detailsBtn = document.querySelector('.details-btn');
const closeBtn = document.querySelector('.closeBtn');

function openModal() {
  modal.style.display = 'block';
}

function openModal2() {
  modal2.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}
function eventListener() {
  modalBtn.addEventListener('click', openModal);
  detailsBtn.addEventListener('click', openModal2)
  closeBtn.addEventListener('click', closeModal);
}

eventListener();

// credit to Tommy Hodgins for this function

document.addEventListener('input', (event) => {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoIncrease(event.target);
}, false)

const autoIncrease = (field) => {
  // Reset field height
  field.style.height = 'inherit';
  let computed = window.getComputedStyle(field);
  // Calculate the height
  let height = parseInt(computed.getPropertyValue('border-top-width'), 10)
    + parseInt(computed.getPropertyValue('padding-top'), 10) + field.scrollHeight
    + parseInt(computed.getPropertyValue('padding-bottom'), 10)
    + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
  field.style.height = height + 'px';
}