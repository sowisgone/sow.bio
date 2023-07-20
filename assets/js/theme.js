
function themeApply() {
    var clrCyanTxt, clrCyanTxtShadow, clrBg, clrBgTippy;
    var themeCounter = localStorage.getItem('theme');

    if (themeCounter === '2') {
        // purple
        clrCyanTxt = '#903ace';
    clrCyanTxtShadow = '#70219e';
    clrBg = '#160d1a';
    clrBgTippy = '#1c1324';
    clrBgCard = '#1e1224';
    bgImage = 'url("../img/bg_purple.svg")';
} else if (themeCounter === '1') {
    // ciano
    clrCyanTxt = '#3ac4ce';
    clrCyanTxtShadow = '#219a9e';
    clrBg = '#0d1a1a';
    clrBgTippy = '#132424';
    clrBgCard = '#102020';
    bgImage = 'url("../img/bg_cyan.svg")';
} else {
    // vermelho
    clrCyanTxt = '#cb6154';
    clrCyanTxtShadow = '#b73d2a';
    clrBg = '#1b1b1a';
    clrBgCard = '#121213';
    clrBgTippy = '#1b1b1a';
    bgImage = 'url("../img/bg_red.svg")';
}

document.documentElement.style.setProperty('--clr-cyan-txt', clrCyanTxt);
document.documentElement.style.setProperty('--clr-cyan-txt-shadow', clrCyanTxtShadow);
document.documentElement.style.setProperty('--clr-bg', clrBg);
document.documentElement.style.setProperty('--clr-bg-tippy', clrBgTippy);
document.documentElement.style.setProperty('--bg-img', bgImage);
document.documentElement.style.setProperty('--clr-card', clrBgCard);
}

function themeSwitcher() {
var themeCounter = localStorage.getItem('theme');

if (themeCounter === '2') {
    localStorage.setItem('theme', '0');
} else if (themeCounter === '1') {
    localStorage.setItem('theme', '2');
} else {
    localStorage.setItem('theme', '1');
}

themeApply();
}

function load() {
var el = document.getElementById("theme");
el.addEventListener("click", themeSwitcher, false);

// Verifica se o localStorage está disponível
if (typeof(Storage) !== "undefined") {
// Verifica se o tema já está definido no localStorage
 if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', '2'); // Define o tema padrão como "0"
    }
}

themeApply(); // Aplica o tema ao carregar a página
}


document.addEventListener("DOMContentLoaded", load, false);
