import React, { useState } from 'react';
import LoginForm from './components/LoginForms';
import { useNavigate } from 'react-router-dom';


function SignUP() {


    const [data, setUser] = useState({ userid: "", password: "" });
    const [error, setError] = useState(""); 
    const navigate = useNavigate();
        const handleClick = () => {

            //apiCall(data);
            navigate('/home/dashboard')

        }

    const Login = details => {
        console.log(details);
     
       
    }

    const Logout = () => {
        setUser({ userid: "", password: "" });
    }
    const myStyles = {
        backgroundImage: "url(/images/bg.jpg)",
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: "0 15px 15px 15px"
  
    };


    return (
        <div className="App" style ={myStyles}>
            {
                (data.userid != "") ? (
                    <div className="welcome" >
                        
                        <button onCkick={Logout}>Logout</button>
                    </div>
                ) : (
                    <LoginForm Login={Login} error={error} />
                )
            }
        </div>
    );
}

export { SignUP };