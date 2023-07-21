import { RepoListI } from "@/types/shareTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: RepoListI = {
    forkList: []
}

export const forkListSlice = createSlice({
    name: "forkList",
    initialState,
    reducers: {
        setField: (state, action: PayloadAction<any[]>) => {
            state.forkList = action.payload
        },
    },
})

export const forkListActions = forkListSlice.actions

export default forkListSlice.reducer