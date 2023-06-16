import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';

export const getLogIn = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
