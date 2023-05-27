const jsonServer = require("json-server");
const server  = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const cors = require('cors');
require("dotenv").config()
server.use(cors());
server.use(middleware);
server.use(router);
let PORT = 4500;
server.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})