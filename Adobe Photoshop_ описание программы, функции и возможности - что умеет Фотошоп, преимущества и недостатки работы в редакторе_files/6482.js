// const popup = document.querySelector('#popup');
// const links = document.querySelectorAll('a[href="#popup"]');
const closeBtn = document.querySelector('.close_pop');

// links.forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         popup.style.display = 'block';
//         console.log('popup click');
//     });
// });

// closeBtn.addEventListener('click', () => {
//     popup.style.display = 'none';
// });

// const firstButton = document.getElementById('first-room');
const firstFloor = document.getElementById('first-floor');
const link = document.querySelector('a[href="#popup"]');

const secondFloor = document.getElementById('second-floor');

link.addEventListener('click', (event) => {
    firstFloor.src = 'https://forms.yandex.ru/surveys/13474393.6b35f90f2b0935e66d6ecd64e41562b065da10b8/?lpc_url=http%3A%2F%2Fpraktikum.yandex.ru%2Fblog%2Fdigest-block%2Fdidgest&iframe=1&lang=ru'; // укаываем ссылку на iframe
    event.preventDefault();
    popup.style.display = 'block';
    console.log('popup click');
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    firstFloor.src = 'null';
});