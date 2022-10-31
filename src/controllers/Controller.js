const Products = require('../models/productos');

//listando json
exports.list = async(req, res) =>{
    try{
    const producto = await Products.find({});
    res.json(producto);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};
//mostrando un registro
exports.show = async(req, res, next) =>{
    try{
        const producto = await Products.findOne({id: req.params.id});
        if(!producto){
            res.status(404).json({message: "Item not finded"});
        }
        res.json(producto);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

//agregando un registro
exports.add = async(req, res) =>{
    const producto = new Products(req.body);

    try{
        await producto.save();
        res.json({message: "Producto Agregado"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

//actualizando un registro
exports.update = async (req, res, next) =>{
    try{
        const producto = await Products.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Producto Actualizado"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

//eliminando un producto
exports.delete = async (req, res, next) =>{
    try{
        const producto = await Products.findOneAndDelete({id: req.params.id});
        res.json({message: "Producto eliminado"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El producto no existe"});
        next();
    }
};