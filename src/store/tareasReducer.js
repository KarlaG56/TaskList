// src/TaskManager/store/tareasReducer.js
const initialState = {
    tareas: []
};

const tareasReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGREGAR_TAREA':
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            };
        case 'ELIMINAR_TAREA':
            return {
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            };
        case 'ACTUALIZAR_TAREA':
            return {
                ...state,
                tareas: state.tareas.map(tarea =>
                    tarea.id === action.payload.id ? action.payload : tarea
                )
            };
        case 'OBTENER_TAREAS':
            return {
                ...state,
                tareas: action.payload
            };
        default:
            return state;
    }
};

export default tareasReducer;
