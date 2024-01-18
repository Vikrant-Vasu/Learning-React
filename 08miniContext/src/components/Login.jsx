import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div style={styles.container}>
    <h2 style={styles.heading}>Login</h2>
    <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
        placeholder="Username"
    />
    <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        placeholder="Password"
    />
    <button style={styles.button} onClick={handleSubmit}>
        Submit
    </button>
</div>
);
  };

const styles = {
container: {
backgroundColor: '#fff',
padding: '20px',
borderRadius: '8px',
boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
},
heading: {
textAlign: 'center',
color: '#333',
},
input: {
width: '100%',
padding: '10px',
margin: '8px 0',
boxSizing: 'border-box',
border: '1px solid #ccc',
borderRadius: '4px',
},
button: {
backgroundColor: '#4caf50',
color: 'white',
padding: '10px 15px',
border: 'none',
borderRadius: '4px',
cursor: 'pointer',
width: '100%',
},
};
export default Login;