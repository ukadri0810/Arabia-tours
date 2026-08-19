const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('enquiry-form');
const note = document.getElementById('form-note');

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const clean = value => String(value || '').trim();

  const message = [
    'NEW ENQUIRY — Arabia World Tours',
    '',
    `Name: ${clean(data.get('name'))}`,
    `Phone: ${clean(data.get('phone'))}`,
    `Journey: ${clean(data.get('journey'))}`,
    `Travelling from: ${clean(data.get('from')) || 'Not provided'}`,
    `Preferred month: ${clean(data.get('month')) || 'Not provided'}`,
    `Travellers: ${clean(data.get('travellers')) || 'Not provided'}`,
    '',
    `Requirements: ${clean(data.get('message')) || 'Not provided'}`
  ].join('\n');

  // 07057 055 526 supplied by the business. WhatsApp uses the international +44 format.
  const whatsappNumber = '447057055526';
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  note.textContent = 'Opening WhatsApp with your enquiry…';
  note.style.color = '#275b4d';

  window.open(url, '_blank', 'noopener,noreferrer');
});

document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      document.querySelectorAll('details[open]').forEach(other => {
        if (other !== detail) other.removeAttribute('open');
      });
    }
  });
});
