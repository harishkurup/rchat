import {ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="adbef93a-160c-4f23-a749-324b2107adce"
      userName="harry"
      userSecret="123456"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    />
      
    
  );
}

export default App;
