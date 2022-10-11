import { RouterProvider } from 'react-router-dom';

import { router } from './Utilities/Routes';




function App() {
  return (
    <div >
   <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
