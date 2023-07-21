import { ReactElement } from "react";

export type AsyncFC = (props:{params:{username: string}}) => Promise<ReactElement<any, any>>

export interface RepoListI  {
    forkList: any[]
}

