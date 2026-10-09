(function () {
  'use strict';

  function createEnquiryMailto(fields, language) {
    const ar = language === 'ar';
    const labels = ar
      ? { name: 'الاسم', company: 'الشركة', email: 'البريد الإلكتروني', phone: 'الهاتف', location: 'موقع المشروع', need: 'الخدمة المطلوبة', system: 'النظام', message: 'تفاصيل المشروع' }
      : { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', location: 'Project location', need: 'Service required', system: 'System', message: 'Project details' };
    const body = Object.keys(labels)
      .filter(key => fields[key] && String(fields[key]).trim())
      .map(key => labels[key] + ': ' + String(fields[key]).trim())
      .join('\n\n');
    const subject = (ar ? 'استفسار عن مشروع: ' : 'Project enquiry: ') + (fields.need || 'FIRECO');
    return 'mailto:info@firecots.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { createEnquiryMailto };
  if (typeof document === 'undefined') return;

  const arabic = document.documentElement.lang === 'ar';
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('#main-nav');
  function closeMenu() {
    if (!menu || !nav) return;
    menu.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  }
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const expanded = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(expanded));
      nav.classList.toggle('open', expanded);
    });
    nav.querySelectorAll('a').forEach(anchor => anchor.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    });
  }

  const cards = Array.from(document.querySelectorAll('.project[data-sector]'));
  const filters = Array.from(document.querySelectorAll('[data-filter]'));
  const count = document.querySelector('#projectcount');
  const more = document.querySelector('#moreprojects');
  if (cards.length && filters.length && count && more) {
    let sector = 'All';
    let expanded = false;
    function renderProjects() {
      const matching = cards.filter(card => sector === 'All' || card.dataset.sector === sector);
      const shown = expanded ? matching : matching.slice(0, 9);
      const visible = new Set(shown);
      cards.forEach(card => { card.hidden = !visible.has(card); });
      count.textContent = arabic
        ? 'عرض ' + shown.length + ' من أصل ' + matching.length + ' مرجعًا'
        : 'Showing ' + shown.length + ' of ' + matching.length + ' references';
      more.hidden = shown.length >= matching.length;
      more.textContent = arabic
        ? 'عرض جميع العملاء والمشاريع (' + matching.length + ')'
        : 'Show all ' + matching.length + ' clients & projects';
      filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter.dataset.filter === sector)));
    }
    filters.forEach(filter => filter.addEventListener('click', () => {
      sector = filter.dataset.filter;
      expanded = false;
      renderProjects();
    }));
    more.addEventListener('click', () => {
      expanded = true;
      renderProjects();
    });
    renderProjects();
  }

  const form = document.querySelector('#enquiry');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(form).entries());
    window.location.href = createEnquiryMailto(fields, arabic ? 'ar' : 'en');
  });

  const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .service-card, .system-card, .about-grid, .step, .rating-grid, .contact-copy, .office-card, .service-actions article').forEach(element => {
      element.classList.add('reveal');
      observer.observe(element);
    });
  }
}());
