/* eslint-disable symbol-description */
import { InjectionKey } from 'vue';

import { createStore, Store, useStore as baseUseStore, ModuleTree } from 'vuex';

import { whishList, WishListState } from './modules';

export type State = {
  whishList: WishListState;
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules: {
    whishList,
  } as unknown as ModuleTree<State>,
});

export function useStore() {
  return baseUseStore(key);
}
