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
  Login = '/login/auth',
  Check = '/login/check',
}
