import { Link } from "react-router-dom"

const ProfileCard = ({ results }) => {
    return (
        <div className="border w-80 md:w-96 relative flex flex-col mx-auto shadow-lg m-5">
            <div className="w-full flex m-3 ml-4 text-black dark:text-white">
                <img className="w-28 h-28 p-1 bg-white rounded-full" src={`${results.avatar_url}`} alt="" />
                <div className="title mt-9 ml-3 font-bold flex flex-col">
                    <div className="break-words">{results.name}</div>
                    <div className="font-semibold text-sm italic dark">{results.login}</div>
                </div>
            </div>
            <div className="absolute bottom-0 font-bold right-0 text-xs text-gray-900 dark:text-gray-300 space-x-0 my-3.5 mr-3">
                <a href={`${results.html_url}`} target="_blank" rel="noreferrer" className="border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Profile</a>
                <Link to={`/editdata/${results.id}`} className="add border rounded-r-2xl rounded-l-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">Save Data</Link>
            </div>
        </div>
    )
}

export default ProfileCard
