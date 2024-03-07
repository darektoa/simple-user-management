import { TModal } from './types';
import Confirm from './Confirm';
import ModalComponent from './Modal';

const Modal = ModalComponent as TModal;

Modal.Confirm = Confirm;

export default Modal;
