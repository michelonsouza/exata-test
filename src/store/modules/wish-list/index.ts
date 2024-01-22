import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { state } from './state';

export type { WishListState } from './types';

export const whishList = {
  state,
  actions,
  getters,
  mutations,
};
