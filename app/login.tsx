import LoginForm from '../components/Login';

const LoginPage: React.FC = () => {
  const handleLogin = (username: string, password: string) => {
    // Aquí debes implementar la lógica de autenticación, como enviar los datos al servidor
    console.log('Logging in with:', username, password);
    // Puedes redirigir al usuario a la página principal después del inicio de sesión exitoso
  };

  return (
    <div>
      <h1>My Task - Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
