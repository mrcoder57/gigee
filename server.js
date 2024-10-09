const { createServer } = require("node:http");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    handler(req, res);
  });

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    // Listen for the 'send_notification' event from the client
    socket.on("send_notification", (data) => {
      console.log("Notification received:", data);

      // Emit the notification to all connected clients
      io.emit("receive_notification", data);
    });

    // Handle client disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });

  // Handle errors
  httpServer.once("error", (err) => {
    console.error(err);
    process.exit(1);
  });

  // Start the server
  httpServer.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
