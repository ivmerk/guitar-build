import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { checkAuthAction, logInAction, userRegAction } from '../api-action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: '',
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userRegAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(userRegAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(checkAuthAction.fulfilled, (state, actions) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = actions.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logInAction.fulfilled, (state, actions) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.user = actions.payload;
      })
      .addCase(logInAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});
