import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../reducers/auth-reducer'
import homeReducer from '../reducers/home-reducer'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        home: homeReducer
    },
})

