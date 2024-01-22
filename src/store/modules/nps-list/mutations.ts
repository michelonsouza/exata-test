/* eslint-disable no-param-reassign */
import { Nps } from '@/models';
import { encryptStorage } from '@/utils';

import { Mutations, ActionEnums } from './types';

export const mutations: Mutations = {
  [ActionEnums.MUTATE_ADD_TO_NPS_LIST]: (state, nps: Nps) => {
    state.npss.push(nps);
    encryptStorage.setItem('nps-list', state.npss);
  },
  [ActionEnums.MUTATE_REMOVE_FROM_NPS_LIST]: (state, nps: Nps) => {
    state.npss = state.npss.filter(c => c.id !== nps.id);
    encryptStorage.setItem('whish-list', state.npss);
  },
};
