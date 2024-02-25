import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { Upload } from './components/Upload';
import { Signup } from './components/Signup';
import { AuthProvider } from './context/auth';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Clickedproject } from './components/Clickedproject';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={
        <PrivateRoute>
      <Navbar/>
      <Home/>
        </PrivateRoute>
    } />
      <Route  path="/login" element={
        <PublicRoute>
      <Login/>
        </PublicRoute>
      } />
      <Route  path="/signup" element={
        <PublicRoute>
      <Signup/>
        </PublicRoute>
    } />
      <Route path="/upload" element={
                <PrivateRoute>
                <Navbar/>
                <Upload/>
                  </PrivateRoute>
    } />
      <Route path="/projects/:projectId" element={
                <PrivateRoute>
                <Navbar/>
                <Clickedproject/>
                  </PrivateRoute>
    } />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
