import { Search } from './Search'
import { Link, Route, Routes } from 'react-router-dom'
import { useResultContext } from "../context/ResultsContextProvider"

const Navbar = ({ darkTheme, setDarkTheme }) => {
    const { logout } = useResultContext()

    return (
        <div className="p-3 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link to='/' className='text-2xl bg-gray-900 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900'>
                    GitHub Prober
                </Link>

                <div>
                    <button type='button' onClick={logout} className='text-xl mx-2 bg-gray-500 dark:text-gray-900 rounded-md px-2 py-1 hover:shadow-lg hover:bg-red-600'>Logut</button>
                    <button type='button' onClick={() => setDarkTheme(!darkTheme)} className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg'>
                        {darkTheme ? 'Light 💡' : 'Dark 🌙'}
                    </button>
                </div>

            </div>
            <Routes>
                <Route path='/' element={<Search />} />
            </Routes>

        </div>
    )
}

export default Navbar