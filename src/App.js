import Header from './components/Header';
import Footer from './components/Footer';
import RenderItemCard from './components/RenderItemCard';
import GlobalStyles from './styles/GlobalStyles';
import { Grid } from '@mui/material';

const App = () => {
  return (
    <Grid container id='root'>
      <GlobalStyles/>
        <Header/>
        <RenderItemCard />
        <Footer />
    </Grid>
  );
}

export default App;
