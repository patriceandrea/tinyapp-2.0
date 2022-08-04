export type User = {
  id: number;
  email: string;
  password: string;
}

export type AnonymousUserType = {
  id: number | null;
  email: string | null;
  password: string | null;
}

export const AnonymousUser: AnonymousUserType = {
  id: null,
  email: null,
  password: null
}
