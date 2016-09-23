import { createActionCreator } from '../../utils/redux';
import actionTypes from './action_types';

export const sendFlashMessage = createActionCreator(actionTypes.SEND_FLASH_MESSAGE);
