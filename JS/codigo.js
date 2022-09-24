
let pis=localStorage.getItem('newWords');
let nuevasPalabras=JSON.parse(pis);
let pista=document.getElementById("pista");
let entrada=document.getElementById("entrada");
function acentos(cadena){
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 ]/g,"");  
}
function verificar(a){
 let e=true;  
 for(let x=0;x<nuevasPalabras.length; x++){
    if(a===nuevasPalabras[x].cadena){
        e=false;
        alert("la palabra "+a+" ya existe");
        pista.value=entrada.value="";
    }
 }
 return e;
}

entrada.addEventListener("keyup", e=>{
    entrada.value=acentos(entrada.value.toUpperCase());
});
pista.addEventListener("keyup", e=>{
    pista.value=acentos(pista.value.toUpperCase());
});
function ingresarPalabra(){
let espacio=/ /;
 if(pista.value==="" || entrada.value==="") alert("Tienes campos vacios");
 if(espacio.test(entrada.value))  alert("la palabra nueva no puede contener espacios")

  if(pista.value!="" && entrada.value!="" && !espacio.test(entrada.value) && verificar(entrada.value)){  
   nuevasPalabras.push({pista: pista.value, cadena: entrada.value});
   localStorage.setItem('newWords',JSON.stringify(nuevasPalabras));
   alert(entrada.value+" ingresado con exito");
   document.getElementById("cancelar").textContent="Regresar";
   pista.value=entrada.value="";
  }
 
}
let aceptar=document.getElementById("aceptar");
aceptar.onclick=ingresarPalabra;
