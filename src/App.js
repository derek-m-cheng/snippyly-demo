import React from 'react';
import { Navbar, Feature, Login} from './components';
import './App.css';
//New
import { useEffect, useState } from 'react';
import { Snippyly } from '@snippyly/sdk';
import { SnippylyContext } from './context/SnippylyContext';
//End

function App() {
    const [client, setClient] = useState(null);
    useEffect(() => {
        init();
    }, [])
    const init = async() => {
        const client = await Snippyly.init("qVTAPxHqayTzfBfaev8r");
        console.log("snippyly client", client);
        setClient(client);
        client.setDocumentId('1');
    }

    return (
        <SnippylyContext.Provider value={{ client }}>
            <div className="App">
                <snippyly-cursor></snippyly-cursor>
                <snippyly-comments></snippyly-comments>
                <snippyly-tags></snippyly-tags>
                <div className = "gradient__bg">
                    <snippyly-presence></snippyly-presence>
                    <Login />
                    <Navbar />
                    <snippyly-comment-tool></snippyly-comment-tool>
                    <snippyly-comments-sidebar></snippyly-comments-sidebar>
                </div>
                <Feature />
            </div>
        </SnippylyContext.Provider>
      )
}

export default App
