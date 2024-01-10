import { useState } from 'react';
import styles from '../styles/Login.module.css';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    onLogin(username, password);
  };

  return (
    <div className={styles.container}>
    <div className={styles.form}>
      <div className={styles.title}>Welcome Back!</div>
      <label className={styles.label}>
        Username:
        <input className={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className={styles.label}>
        Password:
        <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className={styles.button} onClick={handleLogin}>
        Login
      </button>
    </div>
  </div>
  );
};

export default LoginForm;
