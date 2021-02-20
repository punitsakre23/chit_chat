import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = 'db56e73a-c4f6-45c8-9ff0-456ac3f92848';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() =>
                new Audio(
                    'https://chat-engine-assets.s3.amazonaws.com/click.mp3'
                ).play()
            }
        />
    );
};

export default App;
