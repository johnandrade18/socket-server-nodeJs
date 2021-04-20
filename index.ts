import express from 'express';
import Server from "./classes/server";
import router from "./routes/routes";
import cors from 'cors';

const server = new Server();

//configuracion para capturar los datos en formato json
server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json());

//Configuracion de los cors
server.app.use(cors({ origin: true, credentials: true}));

//Configuracion de la rutas
server.app.use('/', router );


//Inicializacion del servidor en el puerto configurado
server.start(() =>{
    console.log(`Servidor en el puerto ${server.port}`);
})