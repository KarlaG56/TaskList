import EliminarTareas from "../../Aplicacion/CasoUso/EliminarTareas";

class ControladorEliminarTareas{
    constructor (puerto){
        this.CasoUso = new EliminarTareas(puerto);
    }

    run(id){
        return this.CasoUso.run(id);
    }
}

export default ControladorEliminarTareas;


