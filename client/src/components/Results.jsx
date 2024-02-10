import { useEffect } from "react"
import { useResultContext } from "../context/ResultsContextProvider"
import Loading from "./Loading"
import ProfileCard from "./ProfileCard"
import Repositories from "./Repositories"

const Results = () => {
    const { results, repos, isLoading, getResults, searchTerm } = useResultContext()

    useEffect(() => {
        if (searchTerm) {
            getResults(searchTerm)
        }
    }, [searchTerm])

    if (isLoading) return <Loading />
    return (
        <>
            {results.length !== 0 ? (
                <>
                    <ProfileCard results={results} />
                    {repos.map((repo) => (
                        <Repositories key={repo.id} repo={repo} />
                    ))}
                </>
            ) : (
                <p className='w-full text-lg text-center pt-10'>Enter an existing GitHub username</p>
            )}

        </>
    )
}

export default Results
