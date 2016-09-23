import * as Redux from 'redux';
import { RootState } from './rootState';

export type Reducer<T> = Redux.Reducer<T>;

export interface Action<TPayload> extends Redux.Action {
  payload: TPayload;
  type: string;
}

export interface Dispatch extends Redux.Dispatch<RootState> {
  (action: Action<any>): RootState;
}

export interface ActionType<TPayload> extends String {
  payloadType: TPayload;
}

export interface ActionCreator<TPayload> {
  (payload: TPayload): Action<TPayload>;
  payload?: TPayload;
}

export interface ActionTypeMap {
  [key: string]: ActionType<any>;
}

export interface ActionCreatorMap {
  [key: string]: ActionCreator<any>;
}

export interface SelectorWithoutProps<TResults> {
  (state: RootState): TResults;
}

export interface ActionHandler<TState, TPayload> {
  (state: TState, actionType: Action<TPayload>): TState;
}

export interface TypedActionHandler<TState, TPayload> extends ActionHandler<TState, TPayload> {
  actionType: string;
}

export interface TypedActionHandlerMap<TState> {
  [key: string]: TypedActionHandler<TState, any>;
}