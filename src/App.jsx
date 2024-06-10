import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './provider/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <RouterProvider router={AppRoutes} />
    </AppProvider>
  );
}

export default App;
