import { createSelector } from 'reselect';
import { SelectorWithoutProps } from './reduxTypes';

export function createStateSelector<TResults>(selector: SelectorWithoutProps<TResults>): SelectorWithoutProps<TResults> {
  return selector;
}