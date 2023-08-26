import { Chip, Grid, Typography } from "@mui/material";
import React from "react";

export default function ItemCard ({ item }) {

  const mensagensLinguagem = item.language || "Sem linguagem principal"

  return (
    <Grid
      onClick={() => window.open(item.html_url, "_blank")}
      style={{cursor:'pointer',backgroundColor: '#666', flexDirection:'center', alignItems:'center', border: '0.5px groove gray'}}
      margin={4}
      borderRadius={2}
      padding={2}
      item
      container
      xs={12}>
        <Grid item xs={2}>
          <img alt='' src={ item.owner.avatar_url } style={{width:90, height:90, borderRadius: 90}}/>
        </Grid>
        <Grid zeroMinWidth item xs={10}>
          <Typography fontFamily='sans-serif' variant='h3' style={{color:'white'}}>{ item.name }</Typography>
          <Typography marginLeft={1} marginBottom={1} color='#CCC'>{ item.description }</Typography>
          <Chip style={{marginLeft:16}} color='primary' label={mensagensLinguagem} />
          <Chip style={{marginLeft:16}} color='warning' label={`⭐: ${ item.stargazers_count }`}/>
        </Grid>
    </Grid>
  );
}