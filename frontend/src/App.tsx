import { useEffect, useRef, useState } from "react";

function App() {
  const [Message, setMessage] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const roomRef = useRef<HTMLInputElement>(null);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [currentRoom, setCurrentRoom] = useState<string>("");
  
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (event) => {
      setMessage((m) => [...m, event.data]);
    };
  }, []);

  const joinRoom = () => {
    const room = roomRef.current?.value;
    if (room && socket) {
      socket.send(
        JSON.stringify({
          type: "join",
          payload: { room },
        })
      );
      setCurrentRoom(room);
      if (roomRef.current) roomRef.current.value = '';
    }
  };

  const sendMessage = () => {
    const message = inputRef.current?.value;
    if (message && socket) {
      socket.send(
        JSON.stringify({
          type: "chat",
          payload: { message },
        })
      );
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Sophisticated animated background grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-800/50"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 flex flex-col h-screen">
        {/* Ultra-modern header */}
        <header className="backdrop-blur-2xl bg-black/40 border-b border-white/20 shadow-2xl">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-black text-sm">C</span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full animate-ping"></div>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white tracking-tight">
                    Chat<span className="text-gray-400">Flow</span>
                  </h1>
                  <p className="text-xs text-gray-400 font-medium">Ultra-modern messaging</p>
                </div>
              </div>
              
              {currentRoom && (
                <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-3 shadow-xl">
                  <div className="relative">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
                  </div>
                  <span className="text-white font-semibold tracking-wide text-sm">ROOM: {currentRoom.toUpperCase()}</span>
                </div>
              )}
            </div>
            
            <div className="flex gap-6 max-w-lg">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  ref={roomRef} 
                  placeholder="Enter room name..."
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all duration-500 font-medium text-sm"
                  onKeyPress={(e) => e.key === 'Enter' && joinRoom()}
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
              </div>
              <button
                onClick={joinRoom}
                className="px-6 py-3 bg-white text-black font-semibold rounded-2xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none border-2 border-transparent hover:border-white/20 tracking-wide text-sm"
              >
                JOIN
              </button>
            </div>
          </div>
        </header>

        {/* Premium messages area */}
        <main className="flex-1 overflow-hidden relative">
          <div className="h-full overflow-y-auto px-8 py-8 scroll-smooth">
            <div className="max-w-5xl mx-auto space-y-6">
              {Message.length === 0 ? (
                <div className="text-center mt-40">
                  <div className="relative mx-auto mb-8 w-20 h-20">
                    <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                      <span className="text-3xl">💬</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-xl"></div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Welcome to ChatFlow</h3>
                  <p className="text-gray-400 text-sm font-medium">Join a room and experience the future of messaging</p>
                </div>
              ) : (
                Message.map((msg, index) => (
                  <div 
                    key={index} 
                    className="group animate-fade-in-up opacity-0"
                    style={{ 
                      animationDelay: `${index * 0.15}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="relative">
                      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1">
                        <div className="flex items-start space-x-4">
                          <div className="relative flex-shrink-0">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xl">
                              <span className="text-black font-bold text-sm">U</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full border-2 border-white"></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white text-sm font-medium leading-relaxed break-words">{msg}</div>
                            <div className="flex items-center space-x-2 mt-3">
                              <div className="text-xs text-gray-400 font-mono bg-white/5 px-2 py-1 rounded-lg">
                                {new Date().toLocaleTimeString()}
                              </div>
                              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                              <div className="text-xs text-gray-500 font-medium">Message #{index + 1}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </main>

        {/* Futuristic input area */}
        <footer className="backdrop-blur-2xl bg-black/40 border-t border-white/20 shadow-2xl">
          <div className="max-w-5xl mx-auto px-8 py-6">
            <div className="flex gap-6">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  ref={inputRef} 
                  placeholder="Type your message..."
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white text-sm placeholder-gray-400 focus:outline-none focus:border-white/60 focus:bg-white/20 transition-all duration-500 font-medium pr-12"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="text-gray-400 text-lg">⏎</div>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-transparent pointer-events-none"></div>
              </div>
              <button
                onClick={sendMessage}
                className="px-8 py-4 bg-white text-black font-semibold rounded-2xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus:outline-none border-2 border-transparent hover:border-white/20 tracking-wide text-sm"
              >
                SEND
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
