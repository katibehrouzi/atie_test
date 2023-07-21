'use client'
import { selectForkList } from "@/redux/features/forkList.selector";
import { forkListActions } from "@/redux/features/forkList.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

const UserRepoSort: FC<{
    repoListSort : any[]
    onRepoListSort: Dispatch<SetStateAction<any[]>>
}> = (props) => {
    // const dispatch = useAppDispatch()
    // const reposList = useAppSelector(selectForkList)

    const sortByForks = () => {
        const userRepoSort1 = props.repoListSort.sort((repo1, repo2) => repo1.forks_count! - repo2.forks_count!)
        // dispatch(forkListActions.setField(userRepoSort))
        }

    // const sortByStars = () => {
    //     console.log('star')
    //     const userRepoSort1 = props.repoListSort.sort((repo1, repo2) => repo1.stargazers_count! - repo2.stargazers_count!)
    //     console.log(userRepoSort1)
    //     props.onRepoListSort(userRepoSort1)

    // }
    

    return (
        <>
            <div className="grid grid-cols-5 pb-2 border-b border-b-blue-500">
                <div className="col-span-2 md:text-lg font-bold text-blue-500">
                    Repo Name
                </div>
                <div className="md:text-lg font-bold text-blue-500 cursor-pointer" onClick={() => sortByForks()}>
                    Forks
                </div>
                <div className="md:text-lg font-bold text-blue-500 cursor-pointer">
                    Star
                </div>
                <div className="md:text-lg font-bold text-blue-500 cursor-pointer">
                    Last Update
                </div>
            </div>
        
        </>
    )
}

export default UserRepoSort