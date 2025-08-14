import express from 'express'
import connectToDatabase from './db.js'

const app = express()
const port = 3000

app.use(express.json())

let db;

app.listen(port, async () => {
    console.log(`server is running at port ${port}`)
    db = await connectToDatabase('bank-db')
})

app.get('/test-api', (req, res) => {
    res.send("api is up!!")
})

/*
API 1: Insert Account in Database

http method -> post
url -> "/create-account"
request -> body {
                'accountNo': '123ABC',
                'userName': 'dheeraj',
                'userNo': 12312213
            }
response -> status = 201, body = {"msg": "account inserted successfully"}
*/
app.post('/create-account', async (req, res) => {
    try {
        let userAccountData = req.body;
        console.log(`request body ${JSON.stringify(userAccountData)}`)
        await db.collection('account').insertOne(userAccountData);
        res.status(201).json({
            msg: 'account inserted successfully'
        })
    } catch (error) {
        res.status(500).send({
            error: error.message
        })
    }
})


/*
API 2: Read All Account From Database

http method -> get
url -> '/read-all-account'
request -> body none
response -> status = 200    body = [
                                    {
                                        'accountNo': '123ABC',
                                        'userName': 'dheeraj',
                                        'userNo': 12312213
                                    },
                                    {
                                        'accountNo': '123ABC',
                                        'userName': 'dheeraj',
                                        'userNo': 12312213
                                    }
                                ]
*/
app.get('/read-all-account', async (req, res) => {
    try {
        let allAccounts = await db.collection('account').find().toArray();
        res.status(200).json(allAccounts);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

/*
API 3: Read Account acccoutNo from Database

http method -> get
url -> '/read-account'
request -> body none, params {'accountNo': '123ABC'}
response -> status = 200    body = {
                                        'accountNo': '123ABC',
                                        'userName': 'dheeraj',
                                        'userNo': 12312213
                                    }
*/
app.get('/read-account', async (req, res) => {
    try {
        let userAccountNo = req.query.accountNo;
        console.log(`User account no ${userAccountNo} typeof ${typeof userAccountNo}`)
        let result = await db.collection('account').findOne({ 'accountNo': userAccountNo })
        if (result == null) {
            res.status(404).json({ msg: 'account not found' })
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

/*
API 4: Update Account by Account No

http method -> patch
url -> '/update-account'
request -> params {'accountNo': '123ABC'}, body {
                                                'userName': 'my new name'
                                                'userAge': 26
                                            }
response -> status = 201    body = {msg: 'account updated successfully}
*/
app.patch('/update-account', async (req, res) => {
    let userAccountNo = req.query.accountNo;
    let userNewData = req.body;
    console.log(`updating accountNo ${userAccountNo} body ${JSON.stringify(userNewData)}`)
    let result = await db.collection('account').updateOne({ accountNo: userAccountNo }, { $set: userNewData })
    if (result.matchedCount == 0) {
        res.status(404).json({ msg: 'account not found' })
    }
    res.status(201).json({ msg: 'account updated successfully' })
})

/*
API 5: Delete Account by Account No

http method -> delete
url -> '/delete-account'
request -> params {'accountNo': '123ABC'}, body none
response -> status = 201    body = {msg: 'account deleted successfully}
*/
app.delete('/delete-account', async (req, res) => {
    let userAccountNo = req.query.accountNo;
    console.log(`delete accountNo ${userAccountNo}}`)
    let result = await db.collection('account').deleteOne({ accountNo: userAccountNo })
    if (result.deletedCount == 0) {
        res.status(404).json({ msg: 'account not found' })
    }
    res.status(201).json({ msg: 'account deleted successfully' })
})