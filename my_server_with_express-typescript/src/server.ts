import express, { Request, Response } from "express";
import { Pool } from "pg";

const app = express()
const port = 5000

const pool = new Pool({
    connectionString: `postgresql://neondb_owner:npg_8sIVoU7AOTXM@ep-fancy-cherry-ah76sfl6-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`
})

app.use(express.json())
















app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!--------------')
})
app.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    // console.log(req);

    res.status(201).json({
        success: true,
        message: "Api is working"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
