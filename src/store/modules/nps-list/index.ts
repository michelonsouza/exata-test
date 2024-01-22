import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state';

export type { NpsState } from './types';

export const npsList = {
  state,
  actions,
  getters,
  mutations,
};
