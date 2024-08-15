import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import CustomNavbar from "./pages/NavbarPage";
import HomePage from "./pages/Home_Page";
import RegisterPage from "./pages/Register_page";
import DashboardPage from "./pages/Dashboard_Page";
import LoginPage from "./pages/Login_Page";

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={<PrivateRoute><DashboardPage /></PrivateRoute>} 
          />
        </Routes>
      </AuthProvider>
    </Router>

  );
}

export default App;
