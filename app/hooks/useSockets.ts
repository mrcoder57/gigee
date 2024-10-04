import { useEffect } from 'react';
import { io } from 'socket.io-client';



export const useSocket = () => {
  useEffect(() => {
    const socketInstance = io(); // Create socket instance
    socketInstance.on('connect', () => {
      console.log("Socket connected");

      socketInstance.on("send_notification", (data) => {
        console.log("Notification received:", data);
        socketInstance.emit("receive_notification", data);
      });
    });

    return () => {
      socketInstance.disconnect(); // Clean up on component unmount
    };
  }, []); // Correctly place the dependency array here

  // Function to send notifications

 
};
