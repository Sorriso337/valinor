import React, { useContext } from "react";
import GlobalContext from "../../contexts/globalContext";
import ItemCard from "../ItemCard";
import { Grid, Skeleton, Typography } from "@mui/material";

export default function RenderItemCard () {
  const { response, loading } = useContext(GlobalContext)

  const numeroRepositoriosFiltradosMensagem = response?.total_count > 0 ?
    `Foram encontrados ${ response.total_count } repositórios com esse filtro`
      :
    "Nenhum repositório encontrado"

  const CardLoading = () =>(
    <Grid item lg={6} md={12}>
      <Skeleton variant="rectangular" width={'100%'} height={118}/>
    </Grid>
  )

  if(loading) return (
    <Grid
      borderRadius={2}
      container
      padding={2}
      spacing={4}
      margin={4}>
        {
          Array(8).fill(0).map(() => <CardLoading />)
        }
    </Grid>
  )

  return (
    <Grid container display='flex'>
      <Grid item xs={12}>
        <Typography
          fontFamily='monospace'
          color='white'
          textAlign='center'
          variant='h5'
          fontWeight='bold'
        >
          { numeroRepositoriosFiltradosMensagem }
        </Typography>
      </Grid>

        {
          response.items?.map((item) => (
            <Grid container item lg={6} md={12}>
              <ItemCard item={item} />
            </Grid>
          ))
        }
        <Grid item marginBottom={4} xs={12}/>
    </Grid>
  );
}