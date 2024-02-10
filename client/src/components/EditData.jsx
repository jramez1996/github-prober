import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useResultContext } from "../context/ResultsContextProvider";
import { Link, useNavigate } from "react-router-dom";

const EditData = () => {
    const { results, repos, postResults } = useResultContext();
    const [data, setData] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        //Since the repos.filter return an array of one object, I need to convert it to object with Object.assing
        setData(
            results.id == id
                ? results
                : Object.assign({}, ...repos.filter((repo) => repo.id == id))
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        postResults(data);
        alert("Data saved");
        navigate("/");
    };

    return (
        //Because of different data from profile info and repository info I had to use ternary operators for displaying inputs and forms
        <form
            onSubmit={handleSubmit}
            className="px-12 pb-10 mt-10 w-11/12 sm:w-2/3 mx-auto"
        >
            <div className="w-full mb-2">
                <label>{data.login ? 'Username' : 'URL'}</label>
                <div className="flex justify-center">
                    {data.login ? (
                        <input
                            type="text"
                            value={data.login}
                            onChange={(e) => setData({ ...data, login: e.target.value })}
                            className="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
                        />
                    ) : (
                        <input
                            type="text"
                            value={data.html_url}
                            onChange={(e) => setData({ ...data, htm_url: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    )}
                </div>
            </div>
            <div className="w-full mb-2">
                <label>Name</label>
                <div className="flex justify-center">
                    <input
                        type="text"
                        value={data.name}
                        onChange={(e) => setData({ ...data, name: e.target.value })}
                        className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                    />
                </div>
            </div>
            <div className="w-full mb-2">
                <label>{data.blog ? 'Blog' : 'Created At'}</label>
                <div className="flex justify-center">
                    {data.blog ? (
                        <input
                            type="text"
                            value={data.blog}
                            onChange={(e) => setData({ ...data, blog: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    ) : (
                        <input
                            type="text"
                            value={data.created_at}
                            onChange={(e) => setData({ ...data, created_at: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    )}
                </div>
            </div>
            <div className="w-full mb-2">
                <label>{data.public_repos ? 'Public repositories' : 'Clone URL'}</label>
                <div className="flex justify-center">
                    {data.public_repos ? (
                        <input
                            type="text"
                            value={data.public_repos}
                            onChange={(e) =>
                                setData({ ...data, public_repos: e.target.value })
                            }
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    ) : (
                        <input
                            type="text"
                            value={data.clone_url}
                            onChange={(e) => setData({ ...data, clone_url: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    )}
                </div>
            </div>
            <div className="w-full mb-2">
                <label>{data.language ? 'Language' : 'ID'}</label>
                <div className="flex justify-center">
                    {data.language ? (
                        <input
                            type="text"
                            value={data.language}
                            onChange={(e) => setData({ ...data, language: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    ) : (
                        <input
                            type="text"
                            value={data.id}
                            onChange={(e) => setData({ ...data, id: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    )}
                </div>
            </div>
            <div className="w-full mb-2">
                <label>{data.bio ? 'Bio' : 'Stargazers Count'}</label>
                <div className="flex justify-center">
                    {data.bio ? (
                        <textarea
                            value={data.bio}
                            onChange={(e) => setData({ ...data, bio: e.target.value })}
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    ) : (
                        <input
                            value={data.stargazers_count}
                            onChange={(e) =>
                                setData({ ...data, stargazers_count: e.target.value })
                            }
                            className="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
                        />
                    )}
                </div>
            </div>

            <p className="text-xs">*Aditional info will be saved to JSON file*</p>
            <button
                type="submit"
                className="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none"
            >
                Save Data
            </button>
            <Link
                to="/"
                className="text-sm text-opacity-100 float-left mt-6 mb-8 hover:text-blue-300 underline"
            >
                Go Back
            </Link>
        </form>
    );
};

export default EditData;
