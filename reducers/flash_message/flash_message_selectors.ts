import { createStateSelector } from '../../utils/redux';

export const getFlashMessage = createStateSelector((state) => state.flashMessage);