# Welcome to the MERN practices project where client and server will separte

### _A MERN repository with

In this repository I will practices in a MERN (MongoDB, Express.js,and Node.js) project. For self practice imporve skill set.

### Dependency
 - node version: >=v12.0.0

#### Server commands

```sh
cd server
npm i
npm run db:up
npm start
```

## Scripts

| Project | Command           | Task                                                 |
| ------- | ----------------- | ---------------------------------------------------- |
| server  | `npm start`       | go to server directory and run command               |
| server  | `npm i`           | Install server side dependencies                     |
| server  | `npm run db:up`   | Start the database in a docker container             |
| server  | `npm run db:seed` | Seed number product                                  |
| server  | `:seed:category`  | Seed category                                        |

#### API enpoint

| API         | method          | Endpoint                                             |
| ----------- | --------------- | ---------------------------------------------------- |
| products    | `get`           | http://localhost:5100/api/products                   |
| products    | `post`          | http://localhost:5100/api/products                   |
| products    | `get`           | http://localhost:5100/api/products/{id}              |
| products    | `put`           | http://localhost:5100/api/products/{id}              |
| products    | `delete`        | http://localhost:5100/api/products{id}               |
| categories  | `get`           | http://localhost:5100/api/products                   |
| categories  | `post`          | http://localhost:5100/api/categories                 |
| categories  | `get`           | http://localhost:5100/api/categories/{id}            |
| categories  | `put`           | http://localhost:5100/api/categories/{id}            |
| categories  | `delete`        | http://localhost:5100/api/categories{id}             |
