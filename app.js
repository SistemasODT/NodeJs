const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

console.log(argv);
let comando = argv._[0];
console.log(comando);

switch (comando) {
    case "listar":
        console.log("Comando para listar tareas");
        porHacer.listar();
        break;

    case "crear":
        console.log("Comando para crear tareas");
        porHacer.crear(argv.descripcion);
        break;

    case "eliminar":
        console.log("Comando para eliminar tareas");
        porHacer.eliminar(argv.descripcion);
        break;

    case "actualizar":
        console.log("Comando para actualizar el estatus");
        porHacer.actualizar(argv.descripcion);
        break;
    default:
        console.log("Comando no reconocido");
        break;
}