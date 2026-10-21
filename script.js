// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = Number(counter.dataset.target);
  let current = 0;
  let direction = 1;

  function animateCounter() {
    counter.textContent = current + "+";

    current += direction;

    if (current > target) {
      direction = -1;
      current = target - 1;
    }

    if (current < 0) {
      direction = 1;
      current = 1;
    }

    setTimeout(animateCounter, 50);
  }

  animateCounter();
});