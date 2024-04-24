import {Router} from "express";

const userRoutes = Router();

// GET
//
userRoutes.get('/users', (req, res) => {
    res.send('Obteniendo usuarios...')
})
userRoutes.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Obteniendo usuario ' + id)
})

// POST
//
userRoutes.post('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Creando usuario ' + id)
})

// PUT
//
userRoutes.put('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Actualizando usuario ' + id)
})

// DELETE
//
userRoutes.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Eliminando usuario ' + id)
})

export default userRoutes;