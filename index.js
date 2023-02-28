var element = document.getElementById('Dark-mode');
var light_styles = 'light.css';
var dark_styles  = 'dark.css';

var theme = 'light';

function Darkmode()
{
    if (theme == 'light') {
        theme = 'dark';
        element.setAttribute('href', dark_styles);
        document.getElementById("b1").style.display = "none"
        document.getElementById("b2").style.display = "block"
    } else {
        theme = 'light';
        element.setAttribute('href', light_styles);
        document.getElementById("b1").style.display = "block"
        document.getElementById("b2").style.display = "none"
    }
}

var bot = "verdadero"

function mostrar1()
{
    if(bot == "verdadero") {
        bot = "falso";
        document.getElementById("carta1").style.display = "flex"
    } else {
        bot = "verdadero";
        document.getElementById("carta1").style.display = "none"
    }
}

function mostrar2()
{
    if(bot == "verdadero") {
        bot = "falso";
        document.getElementById("carta2").style.display = "flex"
    } else {
        bot = "verdadero";
        document.getElementById("carta2").style.display = "none"
    }
}

function mostrar3()
{
    if(bot == "verdadero") {
        bot = "falso";
        document.getElementById("carta3").style.display = "flex"
    } else {
        bot = "verdadero";
        document.getElementById("carta3").style.display = "none"
    }
}