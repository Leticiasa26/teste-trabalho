import mysql, {Connection, ConnectionOptions} from 'mysql2/promise';
import fastify, {FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import cors from '@fastify/cors';

const app = fastify ();

app.register ( cors );
app.get ('/', async ( request: FastifyRequest, reply: FastifyReply ) => {

    reply.send ( "O Fastify está funcionando" )

})
