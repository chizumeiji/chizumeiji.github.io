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

async function copy_() {
    const p = document.querySelector("#discord");
    const clone = p.cloneNode(true);
    clone.querySelectorAll("img").forEach(img => img.remove());
    const text = clone.textContent.trim();

    if (text === "Discord") {
        await navigator.clipboard.writeText("chizumeiji");
        p.innerHTML = '<img src="./path/discord.ico" class="logo"> скопировано ✓';
        await sleep(2000);
        p.innerHTML = '<img src="./path/discord.ico" class="logo"> Discord';
    }
}

document.addEventListener('mousemove', (event) => {
    const hovered_tg = event.target.closest('#telegram');
    const hovered_ds = event.target.closest('#discord, #discordimg');
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
    const hovered_html = event.target.closest('#html');
    const hovered_css = event.target.closest('#css');
    const hovered_js = event.target.closest('#js');
    const hovered_json = event.target.closest('#json');
    const hovered_aio = event.target.closest('#aio');
    const hovered_pil = event.target.closest('#pil');
    const hovered_cv2 = event.target.closest('#cv2');
    const hovered_ffmpeg = event.target.closest('#ffmpeg');
    const hovered_bash = event.target.closest('#bash');
    const hovered_asyncio = event.target.closest('#asyncio');

    if (hovered_tg) {
        document.querySelector('#title').innerHTML = 'телеграм';
        document.querySelector('#icon').setAttribute('href', './path/telegram.png');
    } else if (hovered_ds) {
        document.querySelector('#title').innerHTML = 'дискорд';
        document.querySelector('#icon').setAttribute('href', './path/discord.ico');
    } else if (hovered_py) {
        document.querySelector('#title').innerHTML = 'питон';
        document.querySelector('#icon').setAttribute('href', './path/python.png');
    } else if (hovered_linux) {
        document.querySelector('#title').innerHTML = 'I USE ARCH BTW';
        document.querySelector('#icon').setAttribute('href', './path/arch.png');
    } else if (hovered_fapi) {
        document.querySelector('#title').innerHTML = 'фастапи бекенд';
        document.querySelector('#icon').setAttribute('href', './path/fastapi.png');
    } else if (hovered_sqlite) {
        document.querySelector('#title').innerHTML = 'SQLite';
        document.querySelector('#icon').setAttribute('href', './path/sqlite.png');
    } else if (hovered_potgre) {
        document.querySelector('#title').innerHTML = 'PostgreSQL';
        document.querySelector('#icon').setAttribute('href', './path/postgresql.png');
    } else if (hovered_pyro) {
        document.querySelector('#title').innerHTML = 'пирограм (Fork)';
        document.querySelector('#icon').setAttribute('href', './path/pyrogram.png');
    } else if (hovered_web) {
        document.querySelector('#title').innerHTML = 'реквесты';
        document.querySelector('#icon').setAttribute('href', './path/globe-b.webp');
    } else if (hovered_git) {
        document.querySelector('#title').innerHTML = 'Гит';
        document.querySelector('#icon').setAttribute('href', './path/git.png');
    } else if (hovered_bs) {
        document.querySelector('#title').innerHTML = 'красивый суп';
        document.querySelector('#icon').setAttribute('href', './path/globe-b.webp');
    } else if (hovered_html) {
        document.querySelector('#title').innerHTML = 'html';
        document.querySelector('#icon').setAttribute('href', './path/html.png');
    } else if (hovered_css) {
        document.querySelector('#title').innerHTML = 'css';
        document.querySelector('#icon').setAttribute('href', './path/css.png');
    } else if (hovered_js) {
        document.querySelector('#title').innerHTML = 'js';
        document.querySelector('#icon').setAttribute('href', './path/js.png');
    } else if (hovered_me) {
        document.querySelector('#title').innerHTML = 'меня зовут так';
        document.querySelector('#icon').setAttribute('href', './favicon.png');
    } else if (hovered_json) {
        document.querySelector('#title').innerHTML = 'JSON';
        document.querySelector('#icon').setAttribute('href', './path/json.png');
    } else if (hovered_aio) {
        document.querySelector('#title').innerHTML = 'AIOgram';
        document.querySelector('#icon').setAttribute('href', './path/aio.webp');
    } else if (hovered_pil) {
        document.querySelector('#title').innerHTML = 'Pillow';
        document.querySelector('#icon').setAttribute('href', './path/pil.png');
    } else if (hovered_cv2) {
        document.querySelector('#title').innerHTML = 'OpenCV';
        document.querySelector('#icon').setAttribute('href', './path/cv2.png');
    } else if (hovered_ffmpeg) {
        document.querySelector('#title').innerHTML = 'FFMPEG';
        document.querySelector('#icon').setAttribute('href', './path/ffmpeg.png');
    } else if (hovered_bash) {
        document.querySelector('#title').innerHTML = 'BASH';
        document.querySelector('#icon').setAttribute('href', './path/bash.png');
    } else if (hovered_asyncio) {
        document.querySelector('#title').innerHTML = 'AsyncIO';
        document.querySelector('#icon').setAttribute('href', './path/python.png');
    } else {
        document.querySelector('#title').innerHTML = 'резюме';
        document.querySelector('#icon').setAttribute('href', './favicon.png');
    }
});

let angle = 120;

setInterval(() => {
    angle = (angle + 1) % 360;
    document.documentElement.style.setProperty('--bg-angle', `${angle}deg`);
}, 200);

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('header.card, section.card, .resume-header h1, .resume-header h2, .contact-info h3, .contact-info p, main h3, article, #skills h4, article h4, .sub-heading, .date, ul li');
    
    let index = 0;
    elements.forEach(element => {
        element.style.setProperty('--animation-delay', `${index * 0.07}s`);
        index++;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0,
        rootMargin: '0px'
    });
    index = 0
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
        if (isInViewport) {
            element.classList.add('visible');
        }
        else {
            element.style.setProperty('--animation-delay', `${index * 0.07}s`);
            index++
        }
        observer.observe(element);
    });
});