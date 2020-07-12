const argv = require('yargs').command('crear', 'Crea un nuevo elemento', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea a crear.'
    }
}).
command('actualizar', 'Actualiza un elemento', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Actualiza una tarea.'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Actualiza el estado de una tarea a completado.'
    }
}).command('eliminar', 'Elimina una tarea', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Elimina una tarea.'
    }
}).command('listar', 'Lista las tareas', {
    todas: {
        alias: 'a',
        desc: 'lista todas las tareas.'
    }
}).help().argv;

module.exports = {
    argv
};