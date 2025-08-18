import express from 'express'
import connectToDatabase from './db.js'

const app = express()
const port = 3000
let db;

app.use(express.json())

app.listen(port, async () => {
    db = await connectToDatabase('todo-project-db')
    console.log(`todo app backend server started at port ${port}`)
})

app.get('/test', (req, res) => {
    res.send('API is up!!')
})

app.post('/create-todo', async (req, res) => {
    try {
        let body = req.body;
        await db.collection('todo').insertOne(body);
        res.status(201).json({ msg: "todo inserted successfully" })
    } catch (error) {
        res.status(500).json({ msg: "internal server occur" })
    }
})

app.get('/read-todos', async (req, res) => {
    try {
        let todoList = await db.collection('todo').find().toArray();
        res.status(200).json(todoList)
    } catch (error) {
        res.status(500).json({ msg: "internal server occur" })
    }
})

app.get('/read-todo', async (req, res) => {
    try {
        let queryTodoId = req.query.todoId;
        let todo = await db.collection('todo').findOne({ 'todoId': queryTodoId })
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({
            msg: "internal server occur",
            error: error.message
        })
    }
})

