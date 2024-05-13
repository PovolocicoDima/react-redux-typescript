export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface IUserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

interface FetchUsersAction {
  type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersActionSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUsersActionError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export type UserActon =
  | FetchUsersAction
  | FetchUsersActionSuccess
  | FetchUsersActionError;
