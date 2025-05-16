import ThemeProvider from '@/components/ThemeProvider';
import router from '@/routes';
import '@/styles/main.scss';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
