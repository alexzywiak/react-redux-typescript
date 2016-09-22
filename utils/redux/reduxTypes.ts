import * as Redux from 'redux';
import { RootState } from './rootState';

export interface Action<TPayload> extends Redux.Action {
  type: string;
  payload: TPayload;
}

export interface Dispatch extends Redux.Dispatch<RootState> {
  (action: Action<any> | Thunk): RootState;
}

export interface Thunk {
  (dispatch: Dispatch, getState?: () => RootState): void;
}