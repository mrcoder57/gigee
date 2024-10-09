import { io } from 'socket.io-client';

 export const socketInstance = io();

 socketInstance.on("connect",
    ()=>{
        console.log('Socket connected:', socketInstance.connected);
    }
 )