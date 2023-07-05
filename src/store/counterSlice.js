import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name:'user',
  initialState:{
    counter:{
        value:0
    }
  },
  reducers:{
    increment:(state, action) =>{
      state.value +=1;
    },
    // for nested objects we use like this to update
    decreament:(state, action)=>{
      state.value -=1;
    }
  }
})


// for dispatch
export const {increment, decreament} = counterSlice.actions;

// for configure store
export default counterSlice.reducer;