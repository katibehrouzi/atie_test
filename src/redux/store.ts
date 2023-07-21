import { configureStore } from "@reduxjs/toolkit";

import forkListReduser from './features/forkList.slice'

const store = configureStore({
    reducer: {
        forkListReduser: forkListReduser
    },
})

export default store