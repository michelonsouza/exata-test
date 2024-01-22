import {
  Mutation as XMutation,
  Action as XAction,
  Getter as XGetter,
} from 'vuex';

import { Nps } from '@/models';

export interface NpsState {
  npss: Nps[];
}

export type Mutation = XMutation<NpsState>;
export type Action = XAction<NpsState, NpsState>;
export type Getter = XGetter<NpsState, any>;

export enum ActionEnums {
  // GETTERS
  GETTER_NPSS = 'nps/GETTER_NPSS',
  // ACTIONS
  ACTION_ADD_TO_NPS_LIST = 'nps/ACTION_ADD_TO_NPS_LIST',
  ACTION_REMOVE_FROM_NPS_LIST = 'nps/ACTION_REMOVE_FROM_NPS_LIST',
  // MUTATION
  MUTATE_ADD_TO_NPS_LIST = 'nps/MUTATE_ADD_TO_NPS_LIST',
  MUTATE_REMOVE_FROM_NPS_LIST = 'nps/MUTATE_REMOVE_FROM_NPS_LIST',
}

export type Actions = {
  [ActionEnums.ACTION_ADD_TO_NPS_LIST]: Action;
  [ActionEnums.ACTION_REMOVE_FROM_NPS_LIST]: Action;
};

export type Mutations = {
  [ActionEnums.MUTATE_ADD_TO_NPS_LIST]: Mutation;
  [ActionEnums.MUTATE_REMOVE_FROM_NPS_LIST]: Mutation;
};

export type Getters = {
  getNpss: Getter;
};
