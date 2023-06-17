import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';
import { GuitarCard } from '../types/guitar-card.type';
import { UserResponse } from '../types/user-responce-type';
import { User } from '../types/user.type';
import { UserRegistrationResponse } from '../types/user-registration-responce.type';
import { CardData } from '../types/card-data';

export const loadCardsAction = createAsyncThunk<
  GuitarCard[],
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadCards', async (_arg, { extra: api }) => {
  const { data } = await api.get<GuitarCard[]>(APIRoute.Cards);
  return data;
});

export const postCardAction = createAsyncThunk<
  GuitarCard,
  CardData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/postCard',
  async (
    {
      title,
      description,
      picture,
      typeOfGuitar,
      postDate,
      article,
      numberOfStrings,
      price,
    },
    { extra: api }
  ) => {
    const { data } = await api.post<GuitarCard>(APIRoute.Cards, {
      title,
      description,
      picture,
      typeOfGuitar,
      postDate,
      article,
      numberOfStrings,
      price,
    });
    return data;
  }
);

export const userRegAction = createAsyncThunk<
  UserRegistrationResponse,
  User,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/registration', async ({ email, name, password }, { extra: api }) => {
  const { data } = await api.post<UserRegistrationResponse>(APIRoute.Reg, {
    email,
    name,
    password,
  });
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
    data: { accessToken, name },
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(accessToken);
  return name;
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
    data: { name },
  } = await api.get<UserResponse>(APIRoute.Check);
  return name;
});
