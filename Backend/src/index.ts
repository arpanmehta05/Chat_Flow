import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
interface user {
  socket: WebSocket;
  room: string;
}
let allSockets: user[] = [];

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket: ws,
        room: parsedMessage.payload.room,
      });
    }
    if (parsedMessage.type === "chat") {
      const currentUserRoom = allSockets.find((x) => x.socket === ws);
      for (let i = 0; i < allSockets.length; i++) {
        if (allSockets[i].room === currentUserRoom?.room) {
          allSockets[i].socket.send(parsedMessage.payload.message);
        }
      }
    }
  });
  ws.on("disconnect", () => {});
});

console.log("WebSocket server is running on ws://localhost:8080");
