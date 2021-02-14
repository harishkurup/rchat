import {ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {

  if(!localStorage.getItem('username')) {
    return <LoginForm /> 
  }

  return (
    <ChatEngine 
      height="100vh"
      projectID="ADD YOUR PROJECT ID FROM https://chatengine.io/projects"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

    />
      
    
  );
}

export default App;
