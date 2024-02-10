import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import EditData from "./components/EditData"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Results from "./components/Results"
import { useResultContext } from "./context/ResultsContextProvider"


const App = () => {
  const [darkTheme, setDarkTheme] = useState(true)
  const { checkCookie, user } = useResultContext()

  useEffect(() => {
    (async function () {
      try {
        await checkCookie()
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);


  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-black dark:text-gray-200 min-h-screen'>
        {user ? <>
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Routes>
            <Route path='/editdata/:id' element={<EditData />} />
            <Route path='/' element={<Results />} />
          </Routes>
        </>
          : (<Login />)}
        <Footer />
      </div>
    </div>
  )
}

export default App
