import { ACTION_TYPES } from '../../shared/constants';
import { IAction } from '../action-interface';
import { ProviderProfileState } from '../state-interface';

const initialState: ProviderProfileState = {
  Degrees: [],
  Description: '',
  Id: '',
  Languages: [],
  Name: '',
  PictureName: '',
  PictureURL: '',
  Title: '',
};

export default function providerProfileReducer(
  state = initialState,
  action: IAction,
) {
  switch (action.type) {
    case ACTION_TYPES.CLEAR_PROVIDER_PROFILE:
      return initialState;
    case ACTION_TYPES.SAVE_PROVIDER_PROFILE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
