import { useState, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1000;
  width: 400px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

interface UseDemoModalResult {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  Modal: React.FC;
}

export function useDemoModal(): UseDemoModalResult {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = useCallback((content: ReactNode) => {
    setModalContent(content);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setModalContent(null);
  }, []);

  const Modal: React.FC = () => {
    if (!showModal) return null;

    return createPortal(
      <>
        <BackgroundOverlay onClick={closeModal} />
        <ModalContainer>{modalContent}</ModalContainer>
      </>,
      document.body,
    );
  };

  return { openModal, closeModal, Modal };
}
