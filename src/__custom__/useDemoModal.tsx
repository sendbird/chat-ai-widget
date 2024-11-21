import { useState, useCallback, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  z-index: 1000;
  width: 80%;
  max-height: 500px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

interface UseDemoModalResult {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  Modal: React.FC;
}

export function useDemoModal({
  targetContainer,
}: {
  targetContainer: HTMLElement | DocumentFragment;
}): UseDemoModalResult {
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

  useEffect(() => {
    if (targetContainer instanceof HTMLElement) {
      const originalPosition = targetContainer.style.position;
      if (originalPosition !== 'relative' && originalPosition !== 'absolute' && originalPosition !== 'fixed') {
        targetContainer.style.position = 'relative';
      }
      return () => {
        targetContainer.style.position = originalPosition;
      };
    }
  }, [targetContainer]);

  const Modal: React.FC = () => {
    if (!showModal) return null;

    return createPortal(
      <>
        <BackgroundOverlay onClick={closeModal} />
        <ModalContainer>{modalContent}</ModalContainer>
      </>,
      targetContainer ?? document.body,
    );
  };

  return { openModal, closeModal, Modal };
}
