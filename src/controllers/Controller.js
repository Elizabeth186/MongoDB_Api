const Products = require('../models/productos');

//list all items
exports.list = async(req, res) =>{
    try{
    const productos = await Products.find({});
    res.json(productos);
    }catch(error){
        console.log(error);
        res.send(error);
        next();
    }
};

exports.show = async(req, res, next) =>{
    try{
        const productos = await Products.findOne({id: req.params.id});
        if(!productos){
            res.status(404).json({message: "Item not finded"});
        }
        res.json(productos);

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }
};

exports.add = async(req, res) =>{
    const stadium = new Products(req.body);

    try{
        await stadium.save();
        res.json({message: "Added new stadium"});
        }catch(error){
            console.log(error);
            res.send(error);
            next();
        }
};

exports.update = async (req, res, next) =>{
    try{
        const productos = await Products.findOneAndUpdate(
            {id: req.params.id},req.body
        );
        res.json({message: "Updated stadium"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "Error"});
        next();
    }

};

exports.delete = async (req, res, next) =>{
    try{
        const productos = await Products.findOneAndDelete({id: req.params.id});
        res.json({message: "Deleted stadium"});

    }catch(error){
        console.log(error);
        res.status(400).json({message: "El Cliente no existe"});
        next();
    }
};