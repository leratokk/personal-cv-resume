const btnToggleHeaderNav = document.querySelector('.btn--toggle-header-nav');
const headerNavAnchorsAll = document.querySelectorAll('.a-header-nav');

btnToggleHeaderNav.addEventListener('click', () => {
    document.body.classList.toggle('header-nav--open');
});

for (const headerNavAnchor of headerNavAnchorsAll) {
    headerNavAnchor.addEventListener('click', () => {
        document.body.classList.toggle('header-nav--open');
    });
}

// headerNavAnchorsAll.forEach(headerNavAnchor => {
//     headerNavAnchor.addEventListener('click', () => {
//         document.body.classList.toggle('header-nav--open');
//     });
// })
