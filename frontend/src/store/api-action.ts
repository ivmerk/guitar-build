import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { GuitarCard } from '../types/guitar-card.type';

export const loadCardsAction = createAsyncThunk<
  GuitarCard[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadFilms', async (_arg, { extra: api }) => {
  const { data } = await api.get<GuitarCard[]>(APIRoute.Cards);
  return data;
});

export const logInAction = createAsyncThunk<
  string,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ login: email, password }, { extra: api }) => {
  const {
    data: { accessToken },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(accessToken);
  return accessToken;
});

export const checkAuthAction = createAsyncThunk<
  string,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const {
    data: { email },
  } = await api.get<UserData>(APIRoute.Login);
  return email;
});
