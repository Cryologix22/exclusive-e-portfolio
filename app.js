// template_zvzhzor
// service_irube1r
// S4kEfR5JI-OC2Qg-_

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading')
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  emailjs
  .sendForm(
    'service_irube1r',
    'template_zvzhzor',
    event.target,
    'S4kEfR5JI-OC2Qg-_'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--success";
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me directly on beatnic22@gmail.com"
    );
  })
}