function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelector(`#page-${page}`)?.classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });

    window.scrollTo(0, 0);
    window.location.hash = page;
}

const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');
const btn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

// Navegação desktop e mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(link.dataset.page);
        nav?.classList.remove('nav-open'); // Fecha menu mobile ao clicar
    });
});

// Abrir/fechar menu mobile
btn?.addEventListener('click', () => {
    nav?.classList.toggle('nav-open');
});

// Inicializa página
window.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.hash.substring(1) || 'inicio');
});

// Atualiza navegação ao mudar hash
window.addEventListener('hashchange', () => {
    navigateTo(window.location.hash.substring(1));
});

// Formulário de contato
form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email) {
        msg.textContent = 'Por favor, preencha os campos obrigatórios.';
        msg.className = 'form-message error';
        return;
    }
    msg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    msg.className = 'form-message success';
    form.reset();
    setTimeout(() => msg.className = 'form-message', 5000);
});
