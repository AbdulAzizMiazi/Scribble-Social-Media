import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      margin: '10px 5%'
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

//customized styles for all images of comments
const imgStyle = {
    borderRadius:"50%",
    position: "relative",
    left: "50%",
    transform: "translate(-50%)"
}
//customized style for cards
const CardContentStyle = {
    padding: "10px 5%"
}


const Comments = ({id}) => {
    const classes = useStyles();
    const postId = id;
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState([]);

    //calling api of selected post for its comments
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])

    const numComment = comments.length;

    //collecting objects for images
    useEffect(()=>{
        const picUrl = `https://randomuser.me/api/?results=5`;
        fetch(picUrl)
        .then(res => res.json())
        .then(data => (setImages(data.results)))
    },[]);

    //injecting image urls inside every comments' objects
    if(images.length > 0){
        for (let i = 0; i < comments.length; i++) {
            const element = images[i].picture.large
            comments[i].image = element;
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <h2 style={{marginLeft: '2%', color: 'gray'}}>{numComment} Comments:</h2>

            <List className={classes.root}>
            {
                comments.map(eachComment => {
                    return(
                        <ListItem>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                <Card>
                                    <CardContent style={CardContentStyle}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={3}>
                                                <div>
                                                    <img src={eachComment.image} alt="" style={imgStyle} />
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <Typography variant="h5" component="h2">
                                                    {
                                                        capitalizeFirstLetter(`${eachComment.name}`)
                                                    }.
                                                </Typography>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    email: <small>{eachComment.email}</small>
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {
                                                        capitalizeFirstLetter(`${eachComment.body}`)
                                                    }.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                                </Grid>
                            </Grid>
                        </ListItem> 
                        )
                    })
                }
                </List>
            </div>
        );
    };
    export default Comments;