let ancientWords=localStorage.getItem('newWords');
let words=JSON.parse(ancientWords);
let colors=["#B3FFC5","#FFE375","#92ECEC","#33D6F5","#7FB1FE","#FBCCB5"];
let failures=1;
let hitSound=new Audio('sounds/hitSound.wav');
let failSound= new Audio('sounds/failSound.wav');
let loserSound=new Audio('sounds/loseSound.wav');
let winnerSound=new Audio('sounds/winnerSound.wav');
let keypad=document.getElementsByClassName("key");
let pos=Math.round(Math.random()*(words.length-1));
let word=[];
let usedChar=[];
let clue=document.getElementsByClassName("clue");
let body=document.getElementsByTagName("body");

clue[0].textContent=words[pos].pista; //Agregando pista
body[0].addEventListener("keyup", e=>{
write(e.key.toUpperCase());
});
//Añadir numero de letras 
function addChild(){
    let father=document.getElementById("letters");
    const fragment=document.createDocumentFragment();
    for( let x=0; x<words[pos].cadena.length; x++){
        const sons=document.createElement('LI');
        sons.style.marginRight="4px";
        sons.className="cadena";
        sons.style.borderBottom="solid "+colors[Math.round(Math.random()*5)];
        sons.style.color=colors[Math.round(Math.random()*5)];
        fragment.appendChild(sons);
    }
    father.appendChild(fragment);
}
//Funcion click
function oclick(e){
    write(e.target.id);
}
//Añadir evento click a todo el teclado
for(let x=0; x<keypad.length;x++){
    keypad[x].addEventListener('click',oclick);
}
//Funcion que muestra cuando se gana una partida
function win(){
 if(word.toString()===words[pos].cadena.split("").toString()){
    document.getElementById("winner").style.display="block";
    winnerSound.play();
 }
}
//Funcion escribir, escribe mientras se da click y verifica si hay concidencia de caracteres
function write(letter){
    let characters=document.getElementsByClassName("cadena");
    let bol=true;
    for(let x=0; x<characters.length;x++){
        if(letter===words[pos].cadena[x]){
            characters[x].textContent=letter;
            word[x]=letter;
            bol=false;
            document.getElementById(letter).removeAttribute("class");
            document.getElementById(letter).className="used";
        }
     }
     if(!bol) hitSound.play();
     win();
     disappearKey(letter);
     drawHang(bol, letter);
}
function drawHang(flag, letter){
    if(flag && !usedChar.includes(letter)){
        document.getElementById(letter).removeAttribute("class");
        document.getElementById(letter).className="fail-used";
        usedChar.push(letter);
        failures++;
        if(failures===9){ 
            document.getElementById("window").style.display="block";
            document.getElementById("window").style.filter="drop-shadow(4px 4px 3px black)";
            document.getElementById("palabra-secreta").textContent="La palabra era "+words[pos].cadena;
            loserSound.play();
        }
        let hang=document.getElementsByClassName("fondo");
        hang[0].style.background='url("img/'+failures.toString()+'.png") center';
        hang[0].style.backgroundSize="100% 100%";
        failSound.play();
     }      
}
function disappearKey(letter){
      for(let x=0; x<keypad.length;x++){
        if(keypad[x].getAttribute("id")===letter){
           document.getElementById(letter).disabled="false";
        }
      }
}
addChild();