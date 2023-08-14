import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, logoutUserThunk, refreshUserThunk, registerUserThunk } from './operations';

const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    token: null,
    authentificated: false,
};

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(registerUserThunk.pending, handlePending)
            .addCase(registerUserThunk.rejected, handleRejected)
            .addCase(registerUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authentificated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(loginUserThunk.pending, handlePending)
            .addCase(loginUserThunk.rejected, handlePending)
            .addCase(loginUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authentificated = true;
                state.userData = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(refreshUserThunk.pending, handlePending)
            .addCase(refreshUserThunk.rejected, handleRejected)
            .addCase(refreshUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authentificated = true;
                state.userData = action.payload;
            })
            .addCase(logoutUserThunk.pending, handlePending)
            .addCase(logoutUserThunk.rejected, handleRejected)
            .addCase(logoutUserThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.authentificated = false;
                state.userData = null;
                state.token = null;
            })
    ,
});

export const authReducer = authSlice.reducer;