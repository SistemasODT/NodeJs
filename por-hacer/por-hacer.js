const fs = require('fs');

let listadoPorHacer = [];

const db = () => {
    let aux = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', aux, (err) => {
        if (err) throw err;
        console.log('Tarea guadada de manera exitosa!');
    });
}

const loadDb = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    loadDb();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);
    db();
    return porHacer;

}

const actualizar = (descripcion) => {
    console.log("Se cargar el archivo JSON");
    loadDb();
    console.log("Inicia recorrido de JSON");
    listadoPorHacer.forEach(element => {
        if (element.descripcion === descripcion) {
            console.log("Se encuentra coincidencia");
            var index = listadoPorHacer.indexOf(element);
            element.completado = !element.completado;
            listadoPorHacer[index] = element;
        }
    });
    console.log("Se guardan cambios en el archivo");
    db();
}

const eliminar = (descripcion) =>  {
    console.log('Inicia metodo eliminar');
    loadDb();
    listadoPorHacer.forEach(element => {
        if (element.descripcion === descripcion) {
            var index = listadoPorHacer.indexOf(element);
            listadoPorHacer.pop(index);
        }
    });
    db();
    console.log('Termina metodo eliminar');
}

const listar = () => {

    console.log("=======Listado por hacer=======");
    try {
        listadoPorHacer = require('../db/data.json');
        listadoPorHacer.forEach(element => {

            console.log(element.descripcion);

        });
    } catch (error) {
        console.log("No existen recordatorios");
    }
    console.log("===============================");
}

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}