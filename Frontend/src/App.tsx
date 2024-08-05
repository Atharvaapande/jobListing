import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
import HomePage from './Screens/HomeScreen'
import { MainLayout } from './Layout/MainLayout';
import { NotFoundPage } from './components/NotFoundPage';
import { JobScreen } from './Screens/JobScreen';
import { SingelJob } from './Screens/SingelJob';
import { jobLoder } from './components/SingelJobPage';
import { AddJobScreen } from './Screens/AddJobScreen';

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobScreen/>}/>
      <Route path='/jobs/:id' element={<SingelJob/>} loader={jobLoder}/>
      <Route path='/addJobs' element={<AddJobScreen/>}/>
      <Route path='*' element={<NotFoundPage/>}></Route>
    </Route>
  )
  );
  return (
    <RouterProvider router={Router}>

    </RouterProvider>
  )
}

export default App;