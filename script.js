const toggleSwitch = document.querySelector('#checkbox');
const htmlElement = document.documentElement;
const sleep = ms => new Promise(r => setTimeout(r, ms))

function switchTheme() {
    if (toggleSwitch.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.querySelector('#bsimg').setAttribute('src', './path/bs-w.png');
        document.querySelector('#req').setAttribute('src', './path/globe-w.webp');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        document.querySelector('#bsimg').setAttribute('src', './path/bs-b.png');
        document.querySelector('#req').setAttribute('src', './path/globe-b.webp');
    }
}

toggleSwitch.addEventListener('change', switchTheme);

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        toggleSwitch.checked = true;
    }
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        htmlElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    }
}

document.addEventListener('mousemove', (event) => {
    const hovered_tg = event.target.closest('#telegram');
    const hovered_ds = event.target.closest('#discord');
    const hovered_py = event.target.closest('#python');
    const hovered_linux = event.target.closest('#linux');
    const hovered_fapi = event.target.closest('#fastapi');
    const hovered_pyro = event.target.closest('#pyrogram');
    const hovered_sqlite = event.target.closest('#sqlite');
    const hovered_potgre = event.target.closest('#postgre');
    const hovered_web = event.target.closest('#requests');
    const hovered_me = event.target.closest('#meiji');
    const hovered_git = event.target.closest('#git');
    const hovered_bs = event.target.closest('#bs');

    if (hovered_tg) {
        document.querySelector('#title').innerHTML = 'телеграм';
        document.querySelector('#icon').setAttribute('href', './path/telegram.png');
    }
    else if (hovered_ds) {
        document.querySelector('#title').innerHTML = 'дискорд';
        document.querySelector('#icon').setAttribute('href', './path/discord.ico');
    }
    else if (hovered_py) {
        document.querySelector('#title').innerHTML = 'питон';
        document.querySelector('#icon').setAttribute('href', './path/python.png');
    }
    else if (hovered_linux) {
        document.querySelector('#title').innerHTML = 'I USE ARCH BTW';
        document.querySelector('#icon').setAttribute('href', './path/arch.png');
    }
    else if (hovered_fapi) {
        document.querySelector('#title').innerHTML = 'фастапи бекенд';
        document.querySelector('#icon').setAttribute('href', './path/fastapi.png');
    }
    else if (hovered_pyro) {
        document.querySelector('#title').innerHTML = 'пирограм (Fork)';
        document.querySelector('#icon').setAttribute('href', './path/pyrogram.png');
    }
    else if (hovered_sqlite) {
        document.querySelector('#title').innerHTML = 'SQLite';
        document.querySelector('#icon').setAttribute('href', './path/sqlite.png');
    }
    else if (hovered_potgre) {
        document.querySelector('#title').innerHTML = 'PostgreSQL';
        document.querySelector('#icon').setAttribute('href', './path/potgresql.png');
    }
    else if (hovered_web) {
        document.querySelector('#title').innerHTML = 'реквесты';
        document.querySelector('#icon').setAttribute('href', './path/globe-b.png');
    }
    else if (hovered_git) {
        document.querySelector('#title').innerHTML = 'Гит';
        document.querySelector('#icon').setAttribute('href', './path/git.png');
    }
    else if (hovered_bs) {
        document.querySelector('#title').innerHTML = 'красивый суп';
        document.querySelector('#icon').setAttribute('href', './path/globe-b.png');
    }
    else if (hovered_me) {
        document.querySelector('#title').innerHTML = 'меня зовут так';
        document.querySelector('#icon').setAttribute('href', './favicon.png');
    }
    else {
        document.querySelector('#title').innerHTML = 'резюме';
        document.querySelector('#icon').setAttribute('href', './favicon.png');
    }
});


let angle = 120;

  setInterval(() => {
    angle = (angle + 1) % 360;
    document.documentElement.style.setProperty('--bg-angle', `${angle}deg`);
  }, 200);