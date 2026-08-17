// ---------- Dark/Light toggle ----------
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ---------- Filtro de projetos por tecnologia ----------
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const filterEmpty = document.querySelector('.filter-empty');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');

    const filter = btn.dataset.filter;
    let visibleCount = 0;
    projectCards.forEach((card) => {
      const matches = filter === 'todos' || card.dataset.tech.split(' ').includes(filter);
      card.hidden = !matches;
      if (matches) visibleCount++;
    });
    filterEmpty.hidden = visibleCount > 0;
  });
});

// ---------- Botão voltar ao topo ----------
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.hidden = window.scrollY < 400;
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- Validação do formulário de contato ----------
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function setError(fieldId, message) {
  document.getElementById(`erro-${fieldId}`).textContent = message;
}

function validateForm(data) {
  let valid = true;

  if (!data.nome.trim()) {
    setError('nome', 'Informe seu nome.');
    valid = false;
  } else {
    setError('nome', '');
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim());
  if (!emailOk) {
    setError('email', 'Informe um e-mail válido.');
    valid = false;
  } else {
    setError('email', '');
  }

  if (!data.mensagem.trim()) {
    setError('mensagem', 'Escreva uma mensagem.');
    valid = false;
  } else {
    setError('mensagem', '');
  }

  return valid;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = {
    nome: form.nome.value,
    email: form.email.value,
    mensagem: form.mensagem.value,
  };

  if (!validateForm(data)) {
    formStatus.textContent = '';
    return;
  }

  const subject = encodeURIComponent(`Contato via portfólio — ${data.nome}`);
  const body = encodeURIComponent(`${data.mensagem}\n\n— ${data.nome} (${data.email})`);
  window.location.href = `mailto:rafalves106@icloud.com?subject=${subject}&body=${body}`;

  formStatus.textContent = 'Cliente de e-mail aberto com sua mensagem. Obrigado pelo contato!';
  form.reset();
});
