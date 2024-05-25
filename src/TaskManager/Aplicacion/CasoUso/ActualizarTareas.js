class ActualizarTareas {
    constructor(puerto){
        this.puerto = puerto;
    }

    run(id, nombre, completado) {
        return this.puerto.ActualizarTareas(id, nombre, completado)
    }
}

export default ActualizarTareas;