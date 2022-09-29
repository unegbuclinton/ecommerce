import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';

function App() {
  return (
    <Router>
      <Routing />
      <Toaster
        toastOptions={{
          duration: 2500,
          style: {
            background: '#000',
            color: '#fff',
          },

          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
    </Router>
  );
}

export default App;
