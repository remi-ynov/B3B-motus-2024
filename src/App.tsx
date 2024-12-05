import { RouterProvider } from 'react-router-dom';
import router from 'src/config/router.tsx';

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
