import { FlashMessageState } from './flash_message_state.interface';
import flashMessageActionTypes from '../../actions/user_buttons/action_types';
import { createActionHandler, createReducer } from '../../utils/redux';

const handleAction = createActionHandler<FlashMessageState>();

const handleFlashMessageSent = handleAction(flashMessageActionTypes.SEND_FLASH_MESSAGE, (state, action) => {
    const { message, color } = action.payload;
    return Object.assign({}, state, {
        flashMessage: {
            message,
            color
        }
    });
});

const initialState: FlashMessageState = {flashMessage: {message: '', color: ''}};

export const flashMessageReducer = createReducer(initialState, [
    handleFlashMessageSent
]);
