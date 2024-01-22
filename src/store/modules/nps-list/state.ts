import { Nps } from '@/models';
import { encryptStorage } from '@/utils';

import type { NpsState } from './types';

const prevState = encryptStorage.getItem<Nps[]>('nps-list') || [];

export const state: NpsState = {
  npss: prevState,
};
