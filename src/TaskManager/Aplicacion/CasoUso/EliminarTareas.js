class EliminarTareas{
    constructor (puerto){
        this.puerto = puerto;
    }

    run(id){
        return this.puerto.EliminarTareas(id);
    }
}

export default EliminarTareas;