class CrearTareas {
    constructor(puerto){
        this.puerto = puerto
    }

    run(tarea){
        return this.puerto.CrearTareas(tarea)
    }
}

export default CrearTareas;