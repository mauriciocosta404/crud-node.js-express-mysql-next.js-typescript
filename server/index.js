const express=require('express');
const app=express();
const PORT=process.env.PORT || 3001;
const mysql=require('mysql');
const cors=require('cors');
const { request } = require('express');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'crudGames'
});

app.use(cors());
app.use(express.json());

app.post('/register',(request,response)=>{
    const {name,price,category}=request.body;
    let SQL="INSERT INTO games(name,price,category) values(?,?,?)";

    db.query(SQL,[name,price,category],(err,result)=>{
        console.log(err)
    });
    //return response.send('');
});

app.get('/getGames',(request,response)=>{
    let SQL="SELECT * FROM games";

    db.query(SQL,(err,result)=>{
        err?console.log(err):response.send(result);
    })
});

app.put('/edit',(request,response)=>{
    const {idGame,name1,price1,category1}=request.body;

    const SQL='UPDATE games set name=?,price=?,category=? WHERE id=?';

    db.query(SQL,[name1,price1,category1,idGame],(err)=>{
        err?console.log(err):response.send({message:'update'});
    });
});

app.delete('/delet/:id',(request,response)=>{
    const {id}=request.params;

    const SQL=`DELETE FROM games WHERE id=?`;
    db.query(SQL,[id],(err)=>{
        err?console.log(err):response.send({message:'deleted'});
    });
}); 

app.listen(PORT,()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
})