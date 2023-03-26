
const columnaA = [
    "La esperanza es el sueño del hombre despierto - Aristoteles",
    "El conocimiento habla, pero la sabiduría escucha-  Jimi Hendrix",
    "Tu actitud, no tu aptitud, determinará tu altitud- Zig Ziglar",
    "Si la montaña no viene a ti, ve tú a la montaña- Mahoma",
    "La vida no se trata de encontrarte a ti mismo, si no de crearte a ti mismo- Bernard Shaw",
    "Todo el que disfruta cree que lo que importa del árbol es el fruto, cuando en realidad es la semilla. He aquí la diferencia entre los que crean y los que disfrutan- Friedrich Nietzsche",
    "La buena conciencia es la mejor almohada para dormir- Sócrates",
    "Estar preparado es importante, saber esperar lo es aún más, pero aprovechar el momento adecuado es la clave de la vida- Arthur Schnitzler",
    "Cada hombre puede mejorar su vida mejorando su actitud- Héctor Tassinari",
    "Sin importar el tamaño de la ciudad o pueblo donde nacen los hombres y mujeres, ellos finalmente, son el tamaño de su obra, de su voluntad de engrandecer y enriquecer a sus hermanos- Ignacio Allende",
];



function generaFrase() {
    const posicionA = Math.floor(Math.random()*columnaA.length);
    
    const frase = `${columnaA[posicionA]}`
    
    return frase;
}

console.log(generaFrase());


function colocaFrase() {
    document.getElementById("frase").innerHTML = generaFrase();
}


colocaFrase();