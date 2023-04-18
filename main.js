let personas = [
    {
        nombre: "Brian",
        apellido: "Melo",
        edad: 17,
        sexo: "M"
    },
    {
        nombre: "Katherin",
        apellido: "Ayala",
        edad: 18,
        sexo: "F"
    }
];

let obtenerDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(personas);
        }, 1000);
    });
};

obtenerDatos().then((datos) => console.log(datos));