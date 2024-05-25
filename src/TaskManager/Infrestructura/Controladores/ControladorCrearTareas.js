import CrearTareas from "../../Aplicacion/CasoUso/CrearTareas"

class ControladorCrearTareas {
    constructor (puerto) {
        this.CasoUso = new CrearTareas (puerto)
    }

    run(tarea){
        return this.CasoUso.run(tarea)
    }
}

export default ControladorCrearTareas;