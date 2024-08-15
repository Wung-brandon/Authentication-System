import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; // Change this line to use named import
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthToken] = useState(() => 
        localStorage.getItem("authTokens") 
            ? JSON.parse(localStorage.getItem("authTokens")) 
            : null
    );

    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens") 
            ? jwtDecode(localStorage.getItem("authTokens")) 
            : null
    );

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            setAuthToken(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            navigate("/");
            Swal.fire({
                title: "Login Successfull!",
                toast: true,
                icon: "success",
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
              });
        } else {
            // alert("Something went wrong: " + response.status);
            Swal.fire({
                title: "Email or Password does not exists!",
                toast: true,
                icon: "error",
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
              });
        }
    };

    const registerUser = async (email, username, password, confirm_password) => {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, username, password, confirm_password }),
        });

        const data = await response.json();
        console.log(data)

        if (response.status === 201) {
            navigate("/login");
            Swal.fire({
                title: "Registration Successfull, Login now!",
                toast: true,
                icon: "success",
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
              });
        } else {
            Swal.fire({
                title: "An error occured!",
                toast: true,
                icon: "error",
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false
              });

        }
    };

    const logoutUser = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
        Swal.fire({
            title: "Logout Successfull!",
            toast: true,
            icon: "success",
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false
          });
    };

    const contextData = {
        user,
        setUser,
        authTokens,
        setAuthToken,
        loginUser,
        registerUser,
        logoutUser,
    };

    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens]);

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};
