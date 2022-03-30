import MasterView from './components/MasterView'
import { ThemeProvider, Typography, Button } from '@mui/material';
import theme
 from './styles/theme';
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <MasterView />
      </ThemeProvider>
    </div>
  );
} 

export default App;
