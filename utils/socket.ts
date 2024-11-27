import { io } from "socket.io-client";

export const socketInstance = io();

socketInstance.on("connect", () => {
  console.log("Socket connected:", socketInstance.connected);
});
export let testMessage: string = '';
socketInstance.on('test', (data: { message: string }) => {
  console.log('test', data.message);
  testMessage = data.message;
});
type NotificationData = {
  message: string;
  userId: string;
  targetUserId: string;
  link: string;
};
export const sendNotification = async (notificationData: NotificationData) => {
  await socketInstance.emit(
    "send_notification",
    notificationData,
    (acknowledgment: any) => {
      console.log(
        "Notification sent successfully:",
        acknowledgment,
        notificationData
      );
    }
  );
};
