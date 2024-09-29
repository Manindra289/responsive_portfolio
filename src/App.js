
import './App.css';
import BlogPage from './components/BlogPage/BlogPage';
import Project from './components/Project/Project';
import ProfilePage from './components/ProfilePage/ProfilePage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='min-h-[100vh]'>
    {/* <div className='acc2'>
          <div className='nav' >
            <NavBar/>
          </div>
    </div> */}
     <div className='absolute top-3 w-[100%]'>
        <div className='flex justify-center'>
          <NavBar/>
        </div>
      </div>
    {/* <HomePage/> */}
    <Routes>
      <Route path='/' element={<Project/>}/>
      <Route path='/Blogs' element={<BlogPage/>}/>
      <Route path='/Projects' element={<ProjectPage/>}/>
      <Route path='/Profile' element = {<ProfilePage/>}/>
    </Routes>
    </div>
    
  );
}

export default App;
