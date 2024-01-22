import { Character } from '@/models';
import { encryptStorage } from '@/utils';

import type { WishListState } from './types';

const prevState = encryptStorage.getItem<Character[]>('whish-list') || [];

export const state: WishListState = {
  characters: prevState,
};
