import { FlashMessage } from '../../interfaces/flash_message.interface';
import { actionType, createActionConstantsMap } from '../../utils/redux';

export default createActionConstantsMap('userButtons', {
  SEND_FLASH_MESSAGE: actionType<FlashMessage>()
});