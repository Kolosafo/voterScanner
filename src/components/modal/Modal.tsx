/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';
import { FC, ReactElement } from 'react';
import { Overlay } from './styles';

type Props = {
  onBackdropClick: () => void;
  children: ReactElement;
};
const Modal: FC<Props> = ({ onBackdropClick, children }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <div style={{ width: '600px', display: 'flex', justifyContent: 'center' }} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Overlay>,
    document.getElementById('modal-root')!,
  );
};

export default Modal;
