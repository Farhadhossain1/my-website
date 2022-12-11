import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';

function App() {
  useEffect( () =>{
    AOS.init();
    AOS.refresh();
  },[])
  return (
    <div className="max-w-[1280px] mx-auto">
            <RouterProvider router={router}></RouterProvider>
            
    </div>
  );
}

export default App;
