const Proveedor = require('../model/proveedor')

//Mostrar
module.exports.mostrar = async (req, res) => {
    try {
        const proveedor = await Proveedor.find(); 
        return res.render('provedor', { proveedor }); 
    } catch (error) {
        console.error(error); 
        return res.status(500).json({
            message: 'Error mostrando los clientes'
        });
    }
};


module.exports.crear = async (req, res) => {
    try {
        const provedor = new Proveedor({
            nombrecia: req.body.nombrecia,
        });
        await provedor.save();
        return res.redirect('proveedor');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear al cliente',
            error: error.message
        });
    }
};


module.exports.eliminar = async (req, res) => {
    try {
        
        await Proveedor.findByIdAndDelete(req.params.id); // 
        return res.redirect('/proveedor');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al eliminar al cliente',
            error: error.message 
        });
    }


}

module.exports.editar = async (req, res) => {
    const {id_editar:id,nombre_editar } = req.body;
     const nombrecia = nombre_editar.trim();
    try {
         await Proveedor.findByIdAndUpdate(id.trim(), { nombrecia }, { new: true }); 
        res.redirect('/proveedor'); 
    } catch (error) {
        console.error(error); 
        return res.status(500).json({
            message: 'Error actualizando al Cliente',
            error: error.message
        });
    }
}