import React, { useContext } from 'react';
import GlobalContext from "../../contexts/globalContext";
import { Button, Grid, TextField, Typography } from '@mui/material';

export default function Header () {
    const { text, textModifier, makeRequest } = useContext(GlobalContext)

    return(
        <Grid margin={1} display='flex' justifyContent='center' alignItems='center' container spacing={6}>
            <Grid item md={12}>
                <Typography color='white' textAlign='center' variant='h4' fontWeight='bold' >Busque um repositório do GitHub 🧐​</Typography>
            </Grid>
            <Grid item xs={10} md={9}>
                <TextField onChange={e => textModifier(e.target.value)} fullWidth variant='outlined' label="Digite aqui o Repositório que busca" defaultValue={text}/>
            </Grid>
            <Grid  item md={2}>
                <Button size='large' variant='contained' disabled={text === ''} onClick={() => makeRequest()}>Buscar </Button>
            </Grid>
        </Grid>
    )
}