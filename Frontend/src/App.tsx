import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
import HomePage from './Screens/HomeScreen'
import { MainLayout } from './Layout/MainLayout';
import { NotFoundPage } from './components/NotFoundPage';
import { JobScreen } from './Screens/JobScreen';

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobScreen/>}/>
      <Route path='/addJobs' element={<h1>Add JOB Page</h1>}/>
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