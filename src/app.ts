import 'reflect-metadata';
import userRoutes from './User/infraestructure/adapters/inbound/http/routes/user.routes';

const express = require('express')
const app = express()
const port = 3000

app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})