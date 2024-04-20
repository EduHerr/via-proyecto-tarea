const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./src/routes/api.js');

//Inicializacion
const app = express();
const server = http.createServer(app);

//Configuraciones
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', apiRoutes);

//Arranque
server.listen(app.get('port'), () => {
	console.log('Servidor iniciado en el puerto: ', app.get('port'));
});
