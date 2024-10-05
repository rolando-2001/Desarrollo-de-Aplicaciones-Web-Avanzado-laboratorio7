const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const insumoSchema = new Schema({
    nominsumo: String,
    preUni: Number, 
    stock: Number,
    proveedor: { 
        type: Schema.Types.ObjectId, 
        ref: 'TB_PROVEEDOR' 
    }
}, { versionKey: false });

module.exports = mongoose.model('TB_INSUMO', insumoSchema);
