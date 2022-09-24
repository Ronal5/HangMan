let aux=localStorage.getItem('newWords');
let palabras;
if(aux===null){
    palabras=[
        {pista: "ANIMAL", cadena: "PERRO"} ,{pista: "ANIMAL", cadena: "GALLINA"},{pista: "ANIMAL", cadena: "GATO"} ,{pista: "ANIMAL", cadena: "CABALLO"},
        {pista: "ANIMAL", cadena: "TORO"} ,{pista: "ANIMAL", cadena: "VACA"},{pista: "ANIMAL", cadena: "OVEJA"} ,{pista: "ANIMAL", cadena: "LORO"},
        {pista: "DEPORTES", cadena: "CICLISMO"},{pista: "DEPORTES", cadena: "GOLF"},{pista: "DEPORTES", cadena: "NATACION"},{pista: "DEPORTES", cadena: "TENIS"},
        {pista: "DEPORTES", cadena: "BADMINTON"},{pista: "DEPORTES", cadena: "FUTBOL"},{pista: "DEPORTES", cadena: "BASKETBALL"},{pista: "DEPORTES", cadena: "BASEBALL"}
        
    ];
}
else{
    palabras=JSON.parse(aux);
}
localStorage.setItem('newWords',JSON.stringify(palabras));