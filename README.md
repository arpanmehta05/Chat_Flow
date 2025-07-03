# 💬 ChatFlow - Real-Time WebSocket Chat Application

A modern, ultra-sleek real-time chat application built with **WebSockets**, **React**, and **TypeScript**. Features room-based messaging with a beautiful black and white UI design.

![ChatFlow Preview](https://img.shields.io/badge/Status-Active-green) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue) ![React](https://img.shields.io/badge/React-18-blue) ![WebSocket](https://img.shields.io/badge/WebSocket-Native-yellow)

## ✨ Features

- 🚀 **Real-time messaging** using WebSockets
- 🏠 **Room-based chat** - Join different chat rooms
- 🎨 **Ultra-modern UI** - Sleek black and white design
- ⚡ **Instant message delivery** - No page refreshes needed
- 📱 **Responsive design** - Works on all screen sizes
- 🔧 **TypeScript** - Full type safety
- 🎭 **Glass morphism effects** - Modern backdrop blur
- ✨ **Smooth animations** - Professional user experience

## 🏗️ Project Structure

```
Chat-App/
├── Backend/                    # WebSocket Server
│   ├── src/
│   │   └── index.ts           # Main server file
│   ├── package.json
│   ├── tsconfig.json
│   └── nodemon.json           # Development configuration
│
├── frontend/                   # React Client
│   ├── src/
│   │   ├── App.tsx            # Main chat component
│   │   ├── main.tsx           # React entry point
│   │   └── index.css          # Global styles + animations
│   ├── package.json
│   └── vite.config.ts         # Vite configuration
│
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Chat-App
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### 🏃‍♂️ Running the Application

#### Option 1: Development Mode (Recommended)

1. **Start the Backend Server** (Terminal 1)
   ```bash
   cd Backend
   npm run dev
   ```
   The WebSocket server will start on `ws://localhost:8080`

2. **Start the Frontend** (Terminal 2)
   ```bash
   cd frontend
   npm run dev
   ```
   The React app will start on `http://localhost:5173`

#### Option 2: Production Mode

1. **Build and Start Backend**
   ```bash
   cd Backend
   npm run build
   npm start
   ```

2. **Build and Preview Frontend**
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

## 🔧 How It Works

### Backend Architecture

The backend is a **Node.js WebSocket server** built with the `ws` library:

```typescript
// Key components:
- WebSocket Server on port 8080
- Room-based message routing
- User connection management
- JSON message parsing with error handling
```

#### Message Types

1. **Join Room**
   ```json
   {
     "type": "join",
     "payload": {
       "room": "room-name"
     }
   }
   ```

2. **Send Message**
   ```json
   {
     "type": "chat",
     "payload": {
       "message": "Hello everyone!"
     }
   }
   ```

### Frontend Architecture

The frontend is a **React application** with TypeScript:

```typescript
// Key features:
- WebSocket connection management
- Real-time message updates
- Room joining functionality
- Modern UI with Tailwind CSS
```

#### State Management

- `socket` - WebSocket connection instance
- `Message` - Array of received messages
- `currentRoom` - Currently joined room name
- `inputRef` & `roomRef` - Input field references

## 🎨 UI Features

- **Glass Morphism Design** - Backdrop blur effects
- **Smooth Animations** - CSS keyframes and transitions
- **Responsive Layout** - Mobile-friendly design
- **Professional Typography** - Balanced font sizes
- **Interactive Elements** - Hover effects and focus states

## 📡 WebSocket Events

### Client → Server

| Event Type | Description | Payload |
|------------|-------------|---------|
| `join` | Join a chat room | `{ room: string }` |
| `chat` | Send a message | `{ message: string }` |

### Server → Client

| Event Type | Description | Data |
|------------|-------------|------|
| `message` | Receive chat message | Raw message string |
| `error` | Connection/parsing error | Error details |

## 🛠️ Development Scripts

### Backend
```bash
npm run dev     # Start development server with nodemon
npm run build   # Compile TypeScript to JavaScript
npm start       # Run production build
```

### Frontend
```bash
npm run dev     # Start Vite development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 🧪 Testing the Application

1. **Open multiple browser tabs** to `http://localhost:5173`
2. **Join the same room** from different tabs
3. **Send messages** and watch them appear in real-time
4. **Try different rooms** to test isolation

## 🎯 Core Technologies

- **Backend**: Node.js, TypeScript, WebSocket (`ws` library)
- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **Development**: Nodemon, ts-node for hot reloading

## 🔮 Future Enhancements

- [ ] User authentication and usernames
- [ ] Message persistence with database
- [ ] File/image sharing
- [ ] Emoji reactions
- [ ] Typing indicators
- [ ] Message timestamps
- [ ] Dark/Light theme toggle
- [ ] Message search functionality

## 🐛 Troubleshooting

### Common Issues

1. **Connection Refused**
   - Ensure backend server is running on port 8080
   - Check if port is already in use

2. **Messages Not Appearing**
   - Verify WebSocket connection in browser dev tools
   - Check backend console for parsing errors

3. **Build Errors**
   - Ensure all dependencies are installed
   - Verify Node.js version compatibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for learning WebSocket technology**

*Enjoy real-time messaging with ChatFlow!* 🚀