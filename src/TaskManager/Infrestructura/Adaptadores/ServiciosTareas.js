class ServiciosTareas {
    ObtenerTareas() {
        console.log("Obteniendo tareas...");
        return "Obtenido";
    }

    CrearTareas(tarea) {
        console.log(`Creando tarea: ${tarea}`);
        return "Creado";
    }

    ActualizarTareas(id, nombre, completado) {
        console.log(`Actualizando tarea ${id} con nombre ${nombre} y estado ${completado}`);
        return 'Actualizado';
    }

    EliminarTareas(id) {
        console.log(`Eliminando tarea con id ${id}`);
        return 'Eliminado';
    }
}

export default ServiciosTareas;