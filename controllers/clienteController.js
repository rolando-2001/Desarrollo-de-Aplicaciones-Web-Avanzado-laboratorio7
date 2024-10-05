const Cliente = require('../model/clientes')

//Mostrar
module.exports.mostrar = async (req, res) => {
    try {
        const clientes = await Cliente.find(); // Usa await aquí
        return res.render('index', { clientes }); // Renderiza la vista con los clientes
    } catch (error) {
        console.error(error); // Puedes registrar el error en la consola
        return res.status(500).json({
            message: 'Error mostrando los clientes'
        });
    }
};

//Crear
module.exports.crear = async (req, res) => {
    try {
        const cliente = new Cliente({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            direccion: req.body.direccion
        });

        await cliente.save(); // Usamos async/await para simplificar el manejo de promesas

        return res.redirect('/');
    } catch (error) {
        return res.status(500).json({
            message: 'Error al crear al cliente',
            error: error.message // Enviamos un detalle del error en caso de necesitarlo
        });
    }
};


//Editar

module.exports.editar = async (req, res) => {
    const id = req.body.id_editar.trim();
    const nombre = req.body.nombre_editar;
    const apellidos = req.body.apellidos_editar;
    const direccion = req.body.direccion_editar;
    console.log(id);

    try {
        await Cliente.findByIdAndUpdate(id, { nombre, apellidos, direccion }, { new: true }); // Usa await y new: true para devolver el documento actualizado
        res.redirect('/'); // Redirige a la ruta deseada
    } catch (error) {
        console.error(error); // Log del error en consola
        return res.status(500).json({
            message: 'Error actualizando al Cliente',
            error: error.message
        });
    }
};

//Borrar
module.exports.borrar = async (req, res) => {
    try {
        const id = req.params.id; // Obtén el ID de los parámetros de la solicitud
       
        await Cliente.findByIdAndDelete(id); // Cambia a findByIdAndDelete
        res.redirect('/'); // Redirige a la ruta deseada
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al borrar el cliente' }); // Manejo del error
    }
};
