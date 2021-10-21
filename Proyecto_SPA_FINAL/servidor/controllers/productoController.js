const Producto = require("../models/Producto");

exports.crearProducto = async (req, res) =>{
    try {
        let producto;

        // Creamos nuestra persona
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerProductos = async (req, res) =>{
    try {

        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        consoler.log(error);
        res.status(500).send("Hubo un error");
    }
}


exports.actualizarProducto = async (req, res) => {
    try {

        const { nombre, apellido, documento, fecha, email, telefono, usuario, password } = req.body;
        let producto = await Producto.findById(req.params.id);

        if(!producto) {
            res.status(404).json({ msg: "No existe la persona" });
        }

        producto.nombre = nombre;
        producto.apellido = apellido;
        producto.documento = documento;
        producto.fecha = fecha;
        producto.email = email;
        producto.telefono = telefono;
        producto.usuario = usuario;
        producto.password = password;

        producto = await Producto.findOneAndUpdate({ _id: req.params.id}, producto, {new: true})
        res.json(producto);

    } catch (error) {
        consoler.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "No existe la persona" });
        }

        res.json(producto);

    } catch (error) {
        consoler.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.eliminarProducto = async (req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "No existe la persona" });
        }
        await Producto.findOneAndRemove({ _id: req.params.id})
        res.json({ msg: 'Persona eliminado con éxito'});

    } catch (error) {
        consoler.log(error);
        res.status(500).send("Hubo un error");
    }
}