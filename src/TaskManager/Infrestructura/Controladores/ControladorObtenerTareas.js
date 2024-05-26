import ObtenerTareas from "../../Aplicacion/CasoUso/ObtenerTareas";

class ControladorObtenerTareas {
    constructor (puerto){
        this.CasoUso = new ObtenerTareas(puerto);
    }

    run(){
        return this.CasoUso.run();
    }
}

export default ControladorObtenerTareas