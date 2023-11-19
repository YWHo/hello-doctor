import { ACTION_TYPES } from '../../shared/constants';
import { ProviderProfileState } from '../state-interface';

export interface ClearProviderProfileAction {
  type: ACTION_TYPES.CLEAR_PROVIDER_PROFILE;
}

export interface SaveProviderProfileAction {
  type: ACTION_TYPES.SAVE_PROVIDER_PROFILE;
  payload: ProviderProfileState;
}
