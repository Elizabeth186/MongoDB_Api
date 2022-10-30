const { Router } = require('express');
const router = Router();
const productosController = require('../controllers/Controller');

//routes
router.get('/api/test', (req, res) => {
    const data = {
        "id": "1",
        "name": "API is working"
    }
    res.json(data);
});

router.get('/api/list', productosController.list);

router.get('/api/list/:id',productosController.show);

router.post('/api/list', productosController.add);

router.put('/api/list/:id', productosController.update);

router.delete('/api/list/:id', productosController.delete);


module.exports = router;