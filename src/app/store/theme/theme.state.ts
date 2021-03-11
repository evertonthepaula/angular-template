import { Action, Selector, State } from '@ngxs/store';

// ACTIONS
import { SetTheme } from './theme.actions';

// SERVICES

// MODELS

@State({
  name: 'theme',
  defaults: {
    name: '',
  }
})
export class ThemeState {
  constructor() { }

  @Selector()
  static getName(state): string {
    return state.name;
  }

  @Action(SetTheme)
  SetTheme({ patchState }, { name }) {
    patchState({ name: name });
  }
}
