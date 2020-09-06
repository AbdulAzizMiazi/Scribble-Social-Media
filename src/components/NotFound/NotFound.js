import React from 'react';
import img from './404_v2.webp';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const myStyle ={
    position: 'relative',
    left: '50%',
    top: '5%',
    transform: 'translate(-50%)',
    width: '50%',
}
const myBtn = {
    textDecoration: 'none',
    position: 'relative',
    left: '45%',
    transform: 'translate(-50%)',
}

const NotFound = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <img src={img} alt="" style={myStyle}/>
                <br/>
                <Link to="/" style={myBtn}> 
                    <Button variant="contained" color="secondary">back to home</Button> 
                </Link>
            </Grid>
        </Grid>
    );
};

export default NotFound;