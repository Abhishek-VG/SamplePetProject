import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, CardHeader, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../util/constants';


const Login = () => {


    const [data, setData] = React.useState({
        userid: "",
        password: "",
        repassword: "",
        
    });
    
    const handleChange = (event) => {
        const { id, value } = event.target
        setData({
            ...data,
            [id]: value,
          });
       
    };
    
    const navigate = useNavigate();

    const handleClick = () => {
        if (Object.values(data).some((evry) => !evry)) {
            console.log("password",data.password)
          alert("fill all the fields");
        } 
         else if((data.password) !== (data.repassword))
        {
            alert("passwords not match");
        } else {
          apiCall(data);
          navigate("/signup");
        }
        
    };


   

    

    const apiCall = (data) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(LOGIN, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
            })

            .catch(error => console.log('error', error));
    }


    return <Grid container={true} justifyContent="center">
        <Grid item={true} md={6} xs={12}>
            <Paper elevation={3} style={{ padding: "0 15px 15px 15px" }}>
                <CardHeader
                    title="Register Page"
                    style={{ backgroundColor: "#1875d1", margin: "0 -15px 10px -15px", height: "10px", color: "white", textAlign: "center" }}
                />
                <br />
                <TextField
                    id="userid"
                    label="User id"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}

                />
                <br />
                <br />
                <TextField
                    id="password"
                    label="password"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}

                />
                <br />
                <br />
                <TextField
                    id="repassword"
                    label="re enter password"
                    fullWidth
                    variant="outlined"
                    onChange={handleChange}

                />
                <br />
                

                <br />
                <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    //onClick={handleClick}
                    onClick={() => {
                        handleClick();
                    }}
                >
                    SignUp
                </Button>
            </Paper>
        </Grid>
    </Grid>
}

export { Login };