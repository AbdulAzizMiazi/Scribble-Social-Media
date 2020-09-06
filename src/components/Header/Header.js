import React from 'react';
import './Header.css';
import Grid from '@material-ui/core/Grid';

const Header = () => {
    return (
        <>
            <nav class="headerPart">
                <h3>Welcome to our community</h3>
                <h1>Scribble-Media</h1>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia provident laboriosam ipsa consequuntur, cupiditate sunt maxime ducimus et iure praesentium? Unde quas reiciendis suscipit beatae aperiam? Quis similique odit debitis, qui quae aliquid corporis, dicta, nam mollitia impedit tenetur voluptas atque quasi quo repellendus. Iste laborum praesentium possimus, sapiente architecto quibusdam.</p>
                    </Grid>
                </Grid>
                
            </nav>
        </>
    );
};

export default Header;