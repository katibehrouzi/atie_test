'use client'

import { FC, useEffect } from "react";
import { selectForkList } from "@/redux/features/forkList.selector";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { forkListActions } from "@/redux/features/forkList.slice";

const UserRepoListUi: FC<{
    resData : any[]
}> = (props) => {
    const dispatch = useAppDispatch()
    const reposList = useAppSelector(selectForkList)

    useEffect(() => {
        if(reposList.length <= 0){
            dispatch(forkListActions.setField(props.resData))
        }
    }, [props.resData, reposList])

    const dayFormat = (date: string | null | undefined): string => {
        if (date) {
         const newDate = new Date(date)
         const options: {
             year?: "numeric" | "2-digit" | undefined;
             month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
             day?: "numeric" | "2-digit" | undefined;
 
         } = {
             year: "numeric",
             month:"2-digit",
             day:"2-digit"
             }
         return newDate.toLocaleDateString("en-US", options)
        }
        else return "-" 
        
     }

    const sortByForks = () => {
        const forkListCopy = [... props.resData]
        if (forkListCopy.length > 1) {
            const userRepoSort = forkListCopy.sort((repo1, repo2) => repo1.forks_count! - repo2.forks_count!)
            dispatch(forkListActions.setField(userRepoSort))
        }
    }

    const sortByStars = () => {
        const forkListCopy = [... props.resData]
        if (forkListCopy.length > 1) {
            const userRepoSort = forkListCopy.sort((repo1, repo2) => repo1.stargazers_count! - repo2.stargazers_count!)
            dispatch(forkListActions.setField(userRepoSort))
        }
    }

    const sortByDate = () => {
        const forkListCopy = [... props.resData]
        if (forkListCopy.length > 1) {
            const userRepoSort = forkListCopy.sort((repo1, repo2) => new Date(repo1.updated_at!).getDate() - new Date(repo2.updated_at!).getDate())
            dispatch(forkListActions.setField(userRepoSort))
        }
    }

    return (
        <>
            <div className="grid grid-cols-5 pb-2 border-b border-b-blue-500">
                <div className="col-span-2 md:text-lg font-bold text-blue-500">
                    Repo Name
                </div>
                <div className="md:text-lg font-bold text-blue-500 cursor-pointer" onClick={() => sortByForks()}>
                    Forks
                </div>
                <div className="md:text-lg font-bold text-blue-500 cursor-pointer" onClick={() => sortByStars()}>
                    Star
                </div>
                <div className="md:text-lg font-bold text-blue-500 cursor-pointer" onClick={() => sortByDate()}>
                    Last Update
                </div>
            </div>
            {(reposList.length > 0) ? reposList.map((repo => {
                return (
                    <div className="grid grid-cols-5" key={repo.id}>
                        <div className="col-span-2">
                            {repo.name}
                        </div>
                        <div>
                            {repo.forks_count}
                        </div>
                        <div>
                            {repo.stargazers_count}
                        </div>
                        <div>
                            {dayFormat(repo.updated_at)}
                        </div>
                        
                    </div>
                )
            })) : props.resData.map((repo => {
                return (
                    <div className="grid grid-cols-5" key={repo.id}>
                        <div className="col-span-2">
                            {repo.name}
                        </div>
                        <div>
                            {repo.forks_count}
                        </div>
                        <div>
                            {repo.stargazers_count}
                        </div>
                        <div>
                            {dayFormat(repo.updated_at)}
                        </div>
                        
                    </div>
                )
            }))
            }
        
        </>
    )
}

export default UserRepoListUi