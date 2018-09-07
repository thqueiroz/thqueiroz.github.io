
function formatatempo(segs) {
//function por Augusto Claro
//augustoclaro1@hotmail.com
//www.seven3d.com.br
min = 0;
hr = 0;
/*
if hr < 10 then hr = "0"&hr
if min < 10 then min = "0"&min
if segs < 10 then segs = "0"&segs
*/
while(segs>=60) {
if (segs >=60) {
segs = segs-60;
min = min+1;
}
}

while(min>=60) {
if (min >=60) {
min = min-60;
hr = hr+1;
}
}

if (hr < 10) {hr = "0"+hr}
if (min < 10) {min = "0"+min}
if (segs < 10) {segs = "0"+segs}
fin = hr+":"+min+":"+segs
return fin;
}
var segundos = 0; //inicio do cronometro
var hours;
var minuts;
var seconds;
function conta() {
segundos++;
document.getElementById("counter").innerHTML = formatatempo(segundos);
}

function inicia(){
interval = setInterval("conta();",1000);
tempo = new Date();
hours = tempo.getHours();
minuts = tempo.getMinutes();
seconds = tempo.getSeconds();
}

function para(){

var seg = segundos;
var minutos = min;
var horas = hr;
while(seg>=60) {
  if (seg >=60) {
    seg = seg-60;
  
  }
}

while(minutos>=60) {
  if (minutos >=60) {
    minutos = minutos-60;
    horas = horas+1;
  }
}

now = new Date();
var navegador;
verifica = GetBrowserInfo();
if(verifica == 1) {
  navegador = "Opera";
} else if (verifica == 2) {
  navegador = "Firefox";
} else if (verifica == 3) {
  navegador = "Google Chrome";
} else if (verifica == 4) {
  navegador = "Safari";
} else if (verifica == 5) {
  navegador = "Internet Explorer";
}

var mobile;
var acesso;
mobile = detectar_mobile();

if(mobile){
  acesso = "Voce está acessando por um Celular ou Tablet";
} else {
  acesso = "Voce está acessando por um Computador";
} 

document.getElementById('tempoLogado').value =  minutos + ` Minutos ` + seg + ` Segundos`;
document.getElementById('horaInicio').value = hours + " Hora(s) " + minuts + " Minuto(s) " + seconds + " Segundo(s) " + " Em " +  now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear();
document.getElementById('navegador').value = navegador;
document.getElementById('acesso').value = acesso;
segundos = 0;
document.getElementById("counter").innerHTML = formatatempo(segundos);
clearInterval(interval);
}

function zera(){
clearInterval(interval);
segundos = 0;
document.getElementById("counter").innerHTML = formatatempo(segundos);
vCont = 0;
window.onload();
}

var vCont = 0;
function contarClicks() {
    vCont ++;
    document.getElementById('contador').value = vCont;
  }

  function GetBrowserInfo() {
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
   
    var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
   
    var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
    var isIE = /*@cc_on!@*/false || !!document.documentMode;   // At least IE6
    if (isOpera) {
        return 1;
    }
    else if (isFirefox) {
        return 2;
    }
    else if (isChrome) {
        return 3;
    }
    else if (isSafari) {
        return 4;
    }
    else if (isIE) {
        return 5;
    }
    else {
        return 0;
    }
}

function detectar_mobile() { 
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
     return true;
   }
  else {
     return false;
   }
 }
