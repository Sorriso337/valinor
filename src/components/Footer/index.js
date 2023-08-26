import { Grid, Typography } from "@mui/material";
import React from "react";
import GitHub from "../../assets/github.png";
import In from "../../assets/in.png";

export default function Footer () {

    return(
        <Grid position='fixed' bottom={0} container padding={1} display='flex' justifyContent='space-between'  style={{backgroundColor: '#24292F'}}>
            <Grid item>
                <Typography color='white' variant='h6' fontWeight='bold'>
                    © - Gabriel Silva dos Santos
                </Typography>
            </Grid>
            <Grid item>
                <img style={{ cursor: 'pointer', margin: '0 4px' }} onClick={ () => window.open("https://github.com/Sorriso337", "_blank" ) } alt='' src={GitHub} />
                <img style={{ cursor: 'pointer', margin: '0 4px' }} onClick={ () => window.open("https://www.linkedin.com/in/gabriel-silva-8a7461198", "_blank" ) } alt='' src={In} />
            </Grid>
        </Grid>

    )
}
