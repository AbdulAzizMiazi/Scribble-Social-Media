import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Comments from './Comments';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 15,
    },
    btn: {
        textDecoration: 'none',
    },
});

//my customized style
const myCarStyle ={
    margin: '0%',
    marginBottom: '5px',
    padding: '3%', 
    paddingTop: '5%',
};


const PostProfile = () => {
    
    const classes = useStyles();

    const {id} = useParams();
    const [selectedPost, setSelectedPost] = useState({});

    //Loading data from API for selected item using id
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSelectedPost(data))
    },[])   
    let {title, body, userId} = selectedPost; 
    
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    //controlling undefine data
    if (title === undefined || body === undefined || userId === undefined) {
        title = `Loading...`;
        body = `Loading...`;
        userId = `Loading...`
    }

    return (
        <div>
            <Grid container >
                <Grid item xs={12}>
                    <Card className={classes.root} style={myCarStyle}>
                        <CardContent>
                            <Typography variant="h4" component="h2">
                                
                                {
                                    capitalizeFirstLetter(`${title}`)
                                }.
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                user id: {userId}
                            </Typography>
                            <Typography component="p" style={{fontSize: '20px'}}>
                                {
                                    capitalizeFirstLetter(`${body}`)
                                }.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Link to="/" className={classes.btn}> 
                                <Button variant="contained" color="primary">back to home</Button> 
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
          <Comments key={id} id={id}/>
        </div>
    );
};

export default PostProfile;