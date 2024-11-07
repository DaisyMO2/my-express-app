const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
res.send('Daisy!');
});

let students =[
    {id: 1, name: 'John', age: 20},
    {id: 2, name: 'Jane', age: 21},
    {id: 3, name: 'Bob', age: 22},
    {id: 4, name: 'Alice', age: 23},
    {id: 5, name: 'Mike', age: 24},
];

app.get(`/list_of_friends_by_id/:`,(request,response)=>{
    console.log("logging request params",request,response);
    console.log("use value from end",request.params.students_id);
    return request.send("sending nothing back")
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});

 const bodyParser = require('body-parser');
 app.use(bodyParser.json());

 