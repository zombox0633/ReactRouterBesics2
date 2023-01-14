import React,{useState} from 'react';
import { Route,Routes,NavLink,Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Error from './components/Error';

import { AppCenter, DivNavLink } from './components/Style';

function App() {

  let activeClassName = ["LinkActiveA","LinkActiveB","LinkActiveC","LinkActiveD"]

  //useState
  const [loggedIn, setLoggedIn] = useState(null)
  // console.log(loggedIn);

  //function
  function handleLogin(){
    setLoggedIn(true)
  }
  function handleLogout(){
    setLoggedIn(false)
  }

  return (
    <AppCenter>
      <div className='ContentCanter'>
        <header>
          <h1>Hello World</h1>
        </header>
        <DivNavLink>
            {/* NavLink แต่ต่างจาก Link สามารถใช้คำสั่งเงื่อนไขได้ เช่น ({isActive }) => isActive ? activeClassName(ต้องสามารถตัวแปรมารับ css ที่จะใช้):undefined */}
            <NavLink className={({isActive}) => isActive ? activeClassName[0]:undefined } to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? activeClassName[1]:undefined } to="/about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? activeClassName[2]:undefined } to="/contact">Contact</NavLink>
            <NavLink className={({isActive}) => isActive ? activeClassName[3]:undefined } to="/dashboard">Navigate</NavLink>
        </DivNavLink>
        <div>
          <Routes>
            {/* การส่งค่าโดยใช้ props login={handleLogin} */}
            {/* *1 loggedIn? ถ้ามีการ login หรือ loggedIn เป็นจริง ไป Navigate  to='/dashboard ถ้าไม่ไป Home.jsx*/}
            <Route path="/"
            element={loggedIn? <Navigate to='/dashboard'/>:<Home login={handleLogin}/>}/>
            <Route path="/about"
            element={<About/>}/>
            <Route path="/contact"
            element={<Contact/>}/>
            {/* Navigate(นำทาง) เป็นเหมือนการสร้าง Route โดยใช้ตัว Navigate เป็น element และสามารถกำหนดเส้นทางไปต่อได้*/}
            {/* state={ข้อมูล} เป็นการส่งข้อมูลไปยัง path ที่ต้องการ to='/path ที่ต้องการ' */}
            {/* *2 เมือ loggedIn? *1 เป็นจริงจะทำการเช็คว่า loggedIn?*2 เป็นจริงหรือไม่ ถ้าจริงเข้าหน้า Dashboard.jsx ถ้าไม่ไปหน้า Home และส่งค่า state ไปด้วย */}
            <Route path="/dashboard"
            element={loggedIn? <Dashboard logout={handleLogout} />:<Navigate to='/' state={"From Navigate Page"}/>}>
            {/* <Route>.<Route/>.</Route> การทำ Route ซ้อน Route */}
            {/* /dashboard/settings */}
              <Route path='settings'
              element={<p>This is the nested settings route</p>}/>
            </Route>
            <Route path="/profile">
              {/* การระบุ path โดยใช้ :userId */}
              {/* /profile/userId */}
              <Route path=':userId'
              element={<Profile/>}/>
            </Route>
            {/* Route path="*" คือการกำหนดการเข้า path ที่ไม่มีใน Routes จะเข้า path นี้ */}
            <Route path="*"
            element={<Error/>}/>
          </Routes>
        </div>
      </div>
    </AppCenter>
  );
}

export default App;
