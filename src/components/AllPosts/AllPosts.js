import React, { useState, useEffect } from 'react';
import ShowAllPosts from '../ShowAllPosts/ShowAllPosts';
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";



const myStyle = {
    margin:"auto 10%"
} 

const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([]);

    //loading all posts from the api
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPosts(data))
    },[])

    const [dense] = React.useState(false);

    return (
        <div style={{marginTop: '5%'}}>
        <Grid container>
            <Grid item xs={12}>
                <div style={myStyle}>
                    <List dense={dense}>
                    {/**Displaying all posts*/}
                    {
                        allPosts.map(eachPost =><ShowAllPosts key={eachPost.id} post={eachPost} /> )
                    }
                    </List>
                </div>
            </Grid>
        </Grid>
        </div>
    );
};

export default AllPosts;