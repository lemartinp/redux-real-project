import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = { logged: false }

const loginSlice = createSlice({
    name: 'login',
    initialState: initialLoginState,
    reducers: {
        login(state) {
            state.logged = true;
        },
        logout(state) {
            state.logged = false;
        }
    }
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;