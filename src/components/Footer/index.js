import { Grid, Pagination, Typography } from "@mui/material";
import React, { useContext } from "react";
import GitHub from "../../assets/github.png";
import In from "../../assets/in.png";
import GlobalContext from "../../contexts/globalContext";

export default function Footer () {

    const { page, setPage, response, loading } = useContext(GlobalContext)

    const handlePageChange = (event, value) => {
        setPage(value)
    }

    return(
        <Grid position='fixed' bottom={0} container padding={1} display='flex' justifyContent='space-between'  style={{backgroundColor: '#24292F'}}>
            <Grid item>
                <Typography color='white' variant='h6' fontWeight='bold'>
                    © - Gabriel Silva dos Santos
                </Typography>
            </Grid>
            {
                !loading && !!response.total_count &&
                <Grid item>
                    <Pagination
                        page={page}
                        onChange={handlePageChange}
                        variant="outlined"
                        color='primary'
                        shape="rounded"
                        count={Math.round(response.total_count / 29 ) || 1 } />
                </Grid>
            }
            <Grid item>
                <img style={{ cursor: 'pointer', margin: '0 4px' }} onClick={ () => window.open("https://github.com/Sorriso337", "_blank" ) } alt='' src={GitHub} />
                <img style={{ cursor: 'pointer', margin: '0 4px' }} onClick={ () => window.open("https://www.linkedin.com/in/gabriel-silva-8a7461198", "_blank" ) } alt='' src={In} />
            </Grid>
        </Grid>

    )
}
