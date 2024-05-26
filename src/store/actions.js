// src/TaskManager/store/actions.js
export const agregarTarea = (tarea) => ({
    type: 'AGREGAR_TAREA',
    payload: tarea
});

export const eliminarTarea = (id) => ({
    type: 'ELIMINAR_TAREA',
    payload: id
});

export const actualizarTarea = (tarea) => ({
    type: 'ACTUALIZAR_TAREA',
    payload: tarea
});

export const obtenerTareas = (tareas) => ({
    type: 'OBTENER_TAREAS',
    payload: tareas
});
