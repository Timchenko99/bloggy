import GlobalStyle from './styles/global';
import IndexRouter from './routes';
import { Box } from './components/index'

const App = () => {
  return (
    <Box>
      <GlobalStyle />
      <IndexRouter />
    </Box>
  );
}

export default App;
