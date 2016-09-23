import { Action, Reducer, TypedActionHandler, TypedActionHandlerMap } from './';

interface GetInitialState<T> {
    (): T;
}

export function createReducer<TState>(initialState: TState|GetInitialState<TState>, handlers: TypedActionHandler<TState, any>[]): Reducer<TState> {
  const handlerMap = handlers.reduce((acc, handler) => {
    return Object.assign(acc, { [handler.actionType]: handler });
  }, {} as TypedActionHandlerMap<TState>);
  const getInitialState = typeof initialState === 'function' ? initialState : () => initialState;

  return (state: TState, action: Action<any>) => {
    if (typeof state === 'undefined') {
      state = getInitialState();
    }

    const handler = handlerMap[action.type];
    return handler ? handler(state, action) : state;
  };
}