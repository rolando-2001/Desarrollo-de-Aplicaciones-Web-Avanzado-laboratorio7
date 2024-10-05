const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema para el proveedor (TB_PROVEEDOR)
const proveedorSchema = new Schema({
    nombrecia: String
}, { versionKey: false });

module.exports = mongoose.model('TB_PROVEEDOR', proveedorSchema);
