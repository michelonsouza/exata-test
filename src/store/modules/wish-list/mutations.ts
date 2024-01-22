/* eslint-disable no-param-reassign */
import { Character } from '@/models';
import { encryptStorage } from '@/utils';

import { Mutations, ActionEnums } from './types';

export const mutations: Mutations = {
  [ActionEnums.MUTATE_ADD_TO_WISH_LIST]: (state, character: Character) => {
    state.characters.push(character);
    encryptStorage.setItem('whish-list', state.characters);
  },
  [ActionEnums.MUTATE_REMOVE_FROM_WISH_LIST]: (state, character: Character) => {
    state.characters = state.characters.filter(c => c.id !== character.id);
    encryptStorage.setItem('whish-list', state.characters);
  },
};
