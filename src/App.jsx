import router from '@/routes';
import '@/styles/main.scss';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
