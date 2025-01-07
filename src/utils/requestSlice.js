import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: [],
  reducers: {
    addConnectionRequests: (state, action) => {
      return action.payload;
    },
    updateConnectionRequests: (state, action) => {
      const filteredRequests = state.filter(
        (request) => request._id !== action.payload._id
      );
      console.log(state)
      console.log(filteredRequests)
      return filteredRequests;
    },
  },
});


export const {addConnectionRequests,updateConnectionRequests} = requestSlice.actions;
export default requestSlice.reducer;