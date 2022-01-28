import { configureStore } from '@reduxjs/toolkit'
import UIReducer from './slices/ui';

const store = configureStore({
    reducer: {
        ui: UIReducer
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store