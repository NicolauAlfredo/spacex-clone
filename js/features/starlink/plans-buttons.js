function setActive(tab) {
  document.querySelectorAll('.starlink-toggle__btn').forEach(btn => {
    btn.classList.remove('starlink-toggle__btn--active');
  });
  event.currentTarget.classList.add('starlink-toggle__btn--active');
}