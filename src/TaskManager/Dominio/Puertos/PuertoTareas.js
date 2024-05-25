const { define } = require('implements');

const PuertoTareas = define({
    ObtenerTareas: 'function',
    CrearTareas: 'function',
    ActualizarTareas: 'function',
    EliminarTareas: 'function'
});

module.exports = PuertoTareas;