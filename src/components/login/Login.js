import React, { useEffect, useState } from 'react'
import { useSnippylyClient } from '../../context/SnippylyContext';
import './login.css'

const Users = [
    {
        userId: '1',
        name: 'Derek C',
        email: 'derek@test.com',
        contacts: [
            {
                userId: '2',
                name: 'George M',
                email: 'george@test.com',
            }
        ]
    },
    {
        userId: '2',
        name: 'George M',
        email: 'george@test.com',
        contacts: [
            {
                userId: '1',
                name: 'Derek C',
                email: 'derek@test.com',
            }
        ]
    }
]
function Login() {
    const [selectedUser, setSelectedUser] = useState(null);
    const users = Users;
    const { client } = useSnippylyClient();
    useEffect(() => {
        // If user is logged in then set it to selected user state
        if (localStorage.getItem('user')) {
            setSelectedUser(localStorage.getItem('user'));
        }
    }, [])
    useEffect(() => {
        if (selectedUser && client) {
            identifySnippyly();
        }
    }, [selectedUser && client])
    const identifySnippyly = async () => {
        if (client) {
            client.identify(selectedUser).then((res) => {
                // User auth successful with Snippyly
            }).catch((err) => {
                // Failed to authenticate user with Snippyly
            });
        }
    }
    const signIn = (user) => {
        localStorage.setItem('user', user);
        setSelectedUser(user);
    }
    const signOut = async () => {
        if (client) {
            await client.signOutUser();
        }
        localStorage.removeItem('user');
        window.location.reload();
    }
   

    return (
        <div className='login-bar'>
            <div>
                {selectedUser ?
                    <div>
                        <span>Hi, {selectedUser.name}</span>
                        <button className='login-btn' onClick={() => signOut()}>Sign Out</button>
                    </div>
                    :
                    <div>
                        <span>User:</span>
                        {users.map((user) => {
                            return (
                                <button key={user.userId} className='login-btn' onClick={() => signIn(user)}>{user.name}</button>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Login;