const toggleBtns = document.querySelectorAll('.starlink-toggle__btn');
const groups = document.querySelectorAll('.starlink-plans__group');

document.querySelector('[data-group="go"]').classList.add('starlink-plans__group--hidden');

toggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    toggleBtns.forEach(b => b.classList.remove('starlink-toggle__btn--active'));
    btn.classList.add('starlink-toggle__btn--active');

    const tab = btn.dataset.tab;
    groups.forEach(group => {
      group.dataset.group === tab
        ? group.classList.remove('starlink-plans__group--hidden')
        : group.classList.add('starlink-plans__group--hidden');
    });
  });
});