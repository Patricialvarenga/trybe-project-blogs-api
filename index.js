const express = require('express');

const usersRoute = require('./routes/usersRoute');
const loginRoute = require('./routes/loginRoute');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoute);
app.use('/login', loginRoute);

app.listen(3000, () => console.log('ouvindo porta 3000!'));