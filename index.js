// import express from 'express';
// import bodyParser from 'body-parser';
// const app = express()

// const todos = [
//     {
//         id: 1,
//         text: 'learn React',
//         completed: true
//     },
//     {
//         id: 2,
//         text: 'learn Redux',
//         completed: true
//     },
//     {
//         id: 3,
//         text: 'learn react native',
//         completed: false
//     }
// ];

// function logger(req, res, next) {
//     console.log(`${req.method} ${req.path}`);
//     next();
// }

// app.use(logger);
// app.use(bodyParser.json());



// // app.get("/", (res, req, next) => {
// //     res.json({ message: "hello world" })
// // });

// // app.get("/api/todos", (res, req) => {
// //     return res.status(200).json({
// //         success: true,
// //         error: null,
// //         data: {
// //             todos: todos
// //         }
// //     })
// // });

// app.get("/api/todos", (res, req) => res.json(todos));

// app.listen(4001, () => console.log("server started at port 4001"));



// import express from 'express';
// import bodyParser from 'body-parser';

// const app = express();

// const todos = [
//     {
//         id: 1,
//         text: 'Learn React',
//         completed: true
//     },
//     {
//         id: 2,
//         text: 'Learn Redux',
//         completed: false
//     },
//     {
//         id: 3,
//         text: 'Learn GraphQL',
//         completed: false
//     }
// ];

// // response structure
// /**
//  * {
//  *  success: Boolean,
//  *  error: String,
//  *  data: Object
//  * }
//  */

// function logger(req, res, next) {
//     console.log(`${req.method} ${req.path} `);
//     next();
// }

// app.use(logger);
// app.use(bodyParser.json());


// // Routing layer
// // instance.httpmethod(path, callback(req, res))
// app.get("/", (req, res, next) => {
//     res.json({ message: "Hello World" })
// });

// app.get("/api/todos", (req, res) => {
//     return res.status(200).json({
//         success: true,
//         error: null,
//         data: {
//             todos: todos
//         }
//     })
// });

// app.post("/api/todos", (req, res) => {
//     const text = req.body.text;
//     if (!text) {
//         return res.status(400).json({
//             success: false,
//             error: "You must provide todo",
//             data: null
//         })
//     }

//     const newTodo = {
//         id: todos.length + 1,
//         text: text,
//         completed: false
//     }

//     todos.push(newTodo);

//     return res.status(201).json({
//         success: true,
//         error: null,
//         data: {
//             todo: newTodo
//         }
//     })

//     // console.log(req.body);
// })



// // start the server
// // app.listen(PORT, function[optional])

// // http://localhost:4000/api/todos
// // 1. write api to delete a todo
// // 2. Create react app and integrate these apis
// app.listen(4000, () => console.log('Server started on port 4000'));

// // middleware





// form newly starting node js class s4

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()

//object for todo list
let todos = [
    {
        id: 1,
        text: 'Learn react',
        completed: true
    },
    {
        id: 2,
        text: 'Learn redux',
        completed: false
    },
    {
        id: 3,
        text: 'Learn native',
        completed: false
    },
];
//routes in express

function logger(req, res, next) {
    console.log(`Middleware - ${req.method}${req.path}`);
    next(); //starts the flow from middleware.
}
app.use(logger);//middleware in use of function.
app.use(bodyParser.json());//body parser is used to access the json in postman's body.
app.use(cors());

app.get("/", (req, res, next) => {
    console.log(`${req.method}${req.path}`);
    res.json({ message: "hello world this is node js " })
})

// get api

// app.get("/api/todos",(req, res)=>res.json(todos))  ----1st

app.get("/api/todos", (req, res) => {
    console.log(`${req.method}${req.path}`);
    return res.status(200).json({
        success: true,
        error: null,
        data: {
            todos: todos
        }
    })
})

// app.post("/api/todos", (req, res) => {
//     req.body.text;

//     const text = req.body.text;
//     if (!text) {
//         return res.status(400).json({
//             success: false,
//             error: "you must provide a todo here",
//             data: null
//         })
//     }

//     const newTodo = {
//         id: todos.length + 1,
//         text: text,
//         completed: false
//     }

//     todos.push(newTodo);

//     return res.status(201).json({
//         success: true,
//         error: null,
//         data: {
//             todo: newTodo
//         }
//     })
//     // console.log(req.body);
// })

//post api
app.post("/api/todos", (req, res) => {

    const text = req.body.text;

    if (!text) {
        return res.status(400).json({
            success: false,
            error: "give the proper todo",
            data: null
        })
    }

    const newTodo = {
        id: todos.length + 1,
        text: text,
        completed: false
    }

    todos.push(newTodo)

    return res.status(201).json({
        success: true,
        error: null,
        data: {
            todo: newTodo
        }
    })
})


//delete api 
app.post("/api/todoss", (req, res) => {
    const id = req.body.id

    let index = todos.filter(item => item.id !== id)
    todos = index
    // todos.splice(index, 1)


    return res.status(200).json({
        success: true,
        error: null,
        data: todos
    })
})



app.listen(4000, () => console.log("the server will start on port 4000 "));