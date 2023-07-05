import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name:'user',
  initialState:{
    userDtls:{
      id:null,
      name:null,
      email:null,
      phno:null,
      address:{
        hno:null,
        street:null,
        city:null,
        state:null,
        country:null
      }
    }
  },
  reducers:{
    addUserDtls:(state, action) =>{
      state.userDtls = { ...state.userDtls, ...action.payload }
    },
    // for nested objects we use like this to update
    addUserAddress:(state, action)=>{
      state.userDtls.address = { ...state.userDtls.address, ...action.payload }
    },
    setJustName:(state, action)=>{
      state.userDtls = { ...state.userDtls, ...action.payload }
    }
  }
})


// for dispatch
export const {addUserDtls, addUserAddress, setJustName} = userSlice.actions;

// for configure store
export default userSlice.reducer;