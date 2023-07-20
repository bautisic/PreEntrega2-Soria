const numeroPersonas = parseInt(prompt("Ingresar número de personas"));

const personas = [];

for (let contador = 1; contador <= numeroPersonas; contador++) {
    const nombre = prompt(`Ingresar nombre de la persona #${contador}:`);
    const edad = parseInt(prompt(`Ingresar edad de ${nombre}:`));

    const persona = { nombre, edad };
    personas.push(persona);
}

const personasMenoresDeEdad = [];
const personasAdultas = [];

personas.forEach((persona) => {
    if (persona.edad < 18) {
        personasMenoresDeEdad.push(persona.nombre);
    } else {
        personasAdultas.push(persona.nombre);
    }
});

console.log("Personas Menores de Edad:", personasMenoresDeEdad.join(", "));
console.log("Personas Adultas:", personasAdultas.join(", "));