export enum AppRoute {
  Main = '/',
  Registration = '/registration',
  AddItem = '/additem',
  EditItem = '/edititem/:id',
  Error = '/error',
  ProductList = '/products',
  Product = '/product',
}

export enum NameSpace {
  Data = 'DATA',
  Cards = 'CARDS',
  User = 'USER',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Cards = '/cards',
  Login = '/auth/login',
  Check = '/auth/check',
  Reg = '/auth/register',
}

export const DEFAULT_CARDS_COUNT = 7;

export const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
