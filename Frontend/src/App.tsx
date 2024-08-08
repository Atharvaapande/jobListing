import {createBrowserRouter,RouterProvider,createRoutesFromElements, Route} from 'react-router-dom'
import HomePage from './Screens/HomeScreen'
import { MainLayout } from './Layout/MainLayout';
import { NotFoundPage } from './components/NotFoundPage';
import { JobScreen } from './Screens/JobScreen';
import SingelJob from './Screens/SingelJob';
import { jobLoder } from './components/SingelJobPage';
import { AddJobScreen } from './Screens/AddJobScreen';
import { UpdateJobScreen } from './Screens/UpdateJobScreen';


interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  _id: string;
}

interface UpdatedJob {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
}


function App() {

  //Add Job
  const addJob = async(newJob:object) =>{
    const res = await fetch('http://localhost:3001/addNewJobs',{
      method: 'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newJob)
    })
    return;
  }

  //Update Job
  const updateJob = async(updatedJobs:UpdatedJob) =>{
    const res = await fetch(`http://localhost:3001/jobUpdate/${updatedJobs.id}`,{
      method: 'PUT',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(updatedJobs)
    })
    return;
  }

  const Router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobScreen/>}/>
      <Route path='/jobs/:id' element={<SingelJob/>} loader={jobLoder}/>
      <Route path='/addJobs' element={<AddJobScreen addFunction={addJob}/>}/>
      <Route path='/updateJobs/:id' element={<UpdateJobScreen updateFunction={updateJob}/>} loader={jobLoder}/>
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