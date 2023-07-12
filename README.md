# TODOs
 backend of the app using microservices architecture

## How to install
1. clone repo
2. run mongodb server localhost:27017
3. execute npm i --save
4. npm run dev

## Support functionalities
* [GET] http://localhost:3000/todos - query for todos with optional filters
* [GET] http://localhost:3000/todos/:todoId - query for specific todo
* [POST] http://localhost:3000/todos -
  *  body: {
     "note": string,
     "notify"?: string (ISO8601 format: "2023-07-12T08:12:30.000Z")
     }
* [PUT] http://localhost:3000/todos/:todoId -
  * body: {
    "note": string,
    "notify?": string (ISO8601 format: "2023-07-12T08:12:30.000Z")
    }
* [DELETE] http://localhost:3000/todos/:todoId
