import { Nps } from '@/models';

import { Actions, ActionEnums } from './types';

export const actions: Actions = {
  [ActionEnums.ACTION_ADD_TO_NPS_LIST]: ({ commit }, data: Nps) => {
    commit(ActionEnums.ACTION_ADD_TO_NPS_LIST, data);
  },
  [ActionEnums.ACTION_REMOVE_FROM_NPS_LIST]: ({ commit }, data: Nps) => {
    commit(ActionEnums.MUTATE_REMOVE_FROM_NPS_LIST, data);
  },
};
