const Insumo = require('../model/insumo');
//Crear
const Proveedor = require('../model/proveedor')


module.exports.create = async (req, res) => {
    const nominsumo = req.body.nominsumo.trim();
    const preUni = req.body.preUni.trim();      
    const stock = req.body.stock.trim();
    const proveedor = req.body.proveedor.trim();
    try {
        const insumo = new Insumo({
            nominsumo,
            preUni,
            stock,
            proveedor
        });

        await insumo.save();

        return res.redirect('/insumo');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear el insumo',
            error: error.message
        });
    }
}

//Mostrar
module.exports.all = async (req, res) => {
    try {
        const insumo = await Insumo.find().populate('proveedor');
        const proveedor = await Proveedor.find();
        return res.render('insumo', { insumo, proveedor });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error mostrando los insumos'
        });
    }
};


module.exports.delete = async (req, res) => {
    try {
        await Insumo.findByIdAndDelete(req.params.id);
        return res.redirect('/insumo'); 
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar el insumo',
            error: error.message
        });
        
    }
}

module.exports.edit = async (req, res) => {
    
        const id = req.body.idInsumoEditar.trim(); 
        const nominsumo = req.body.nominsumoEditar.trim();
        const preUni = req.body.preUniEditar.trim();
        const stock = req.body.stockEditar.trim();
        const proveedor = req.body.proveedorEditar.trim();

    try {
        await Insumo.findByIdAndUpdate(id, { 
            nominsumo,
            preUni,
            stock,
            proveedor
        
        }, { new: true }); 
        res.redirect('/insumo'); 
    } catch (error) {
        console.error(error); 
        return res.status(500).json({
            message: 'Error actualizando el insumo',
            error: error.message
        });
    }
}