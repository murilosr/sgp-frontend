import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'ui',
    initialState: {
        "sidebarOpen": true
    },
    reducers: {
      sidebarToggle(state, action) {
          state.sidebarOpen = !state.sidebarOpen;
          console.log("teste");
      },
      sidebarOpen(state, action) {
          state.sidebarOpen = true;
      },
      sidebarClose(state, action) {
          state.sidebarOpen = false;
      },
    },
  })
  
  // Extract the action creators object and the reducer
  const { actions, reducer } = UISlice
  // Extract and export each action creator by name
  export const { sidebarToggle, sidebarOpen, sidebarClose } = actions
  // Export the reducer, either as a default or named export
  export default reducer