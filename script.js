function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelector(`#page-${page}`)?.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    window.scrollTo(0, 0);
    window.location.hash = page;
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    navigateTo(window.location.hash.substring(1) || 'inicio');
});

window.addEventListener('hashchange', () => navigateTo(window.location.hash.substring(1)));

const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

form?.addEventListener('submit', e => {
    e.preventDefault();
    msg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
    msg.className = 'form-message success';
    form.reset();
    setTimeout(() => msg.className = 'form-message', 5000);
});

const btn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

btn?.addEventListener('click', () => {
    nav?.classList.toggle('nav-open');
});
