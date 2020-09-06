import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      width: '100%'
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
    }
  });

const ShowAllPosts = ({post}) => {
    const {title, body, userId, id} = post;
    const goTo = `/post/${id}`;
    const classes = useStyles();

    //capitalizing First Letter Of A String
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <ListItem className={classes.pos}>   
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {
                                capitalizeFirstLetter(`${title}`)
                            }.
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            user id: {userId}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {
                                capitalizeFirstLetter(`${body}`)
                            }.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to={goTo} className={classes.btn}> 
                            <Button variant="contained" color="primary">view more</Button> 
                        </Link>
                    </CardActions>
                </Card>
            </ListItem>
        </>
    );
};

export default ShowAllPosts;