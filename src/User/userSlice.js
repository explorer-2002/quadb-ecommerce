import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user : {
        name:'',
        role:'',

    }
}

const userSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
       addUser(state, action){
        state.user.name = action.payload.name;
        state.user.role = action.payload.role;
       },

       removeUser(state){
        state.user.name = '';
        state.user.role = '';
       }

    }
})

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;