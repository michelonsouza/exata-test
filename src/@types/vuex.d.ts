import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

import { User } from '@/models';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface State {
    user: User;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}