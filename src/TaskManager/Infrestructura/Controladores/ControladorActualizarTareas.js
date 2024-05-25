import ActualizarTareas from "../../Aplicacion/CasoUso/ActualizarTareas";

class ControladorActualizarTareas {
    constructos(puerto) {
        this.CasoUso = new ActualizarTareas(puerto)
    }

    run(id, nombre, completado) {
        return this.CasoUso.run(id, nombre, completado)
    }
}

export default ControladorActualizarTareas;

