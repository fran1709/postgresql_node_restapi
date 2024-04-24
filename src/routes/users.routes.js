import {Router} from "express";
import {pool} from '../database.js'

const userRoutes = Router();

// GET
//
userRoutes.get('/users', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users');
    res.json(rows)
})
userRoutes.get('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {rows} = await pool.query('SELECT * FROM users WHERE id=$1',[id]);
    if(rows.length === 0){
        return res.status(404).json({message:'User not found.'})
    }
    res.json(rows)
})

// POST
//
userRoutes.post('/users', async (req, res) => {
    const data = req.body;
    const {rows} = await pool.query('INSERT INTO users (name, email) VALUES($1, $2) RETURNING *',[data.name, data.email])
    return res.json({message:'User created.', rows})
})

// PUT
//
userRoutes.put('/users/:id', (req, res) => {
    const {id} = req.params;
    res.send('Actualizando usuario ' + id)
})

// DELETE
//
userRoutes.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {rows, rowCount} = await pool.query('DELETE FROM users WHERE id=$1 RETURNING *',[id]);
    if(rowCount === 0){
        return res.status(404).json({message:'User not found.'})
    }
    return res.json({message:'User deleted.', rows})
})

export default userRoutes;