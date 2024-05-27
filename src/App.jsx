// import { RouterProvider } from 'react-router-dom';
import { AppProvider } from './provider/app';
import { AppRoutes } from './routes';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
      {/* <RouterProvider router={AppRoutes} /> */}
    </AppProvider>
  );
}

export default App;
