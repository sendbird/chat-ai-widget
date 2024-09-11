import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { FileMessage } from '@sendbird/chat/message';
import { useState } from 'react';

import { useConstantState } from '../../context/ConstantContext';
import { Icon } from '../../foundation/components/Icon';
import { Label } from '../../foundation/components/Label';
import { Loader } from '../../foundation/components/Loader';
import { META_ARRAY_ASPECT_RATIO_KEY } from '../../utils/getImageAspectRatio';
import { formatCreatedAtToAMPM } from '../../utils/messageTimestamp';
import { BodyComponent, BodyContainer, DefaultSentTime } from '../MessageComponent';
import { FileViewer } from '../ui/FileViewer';

type Props = {
  message: FileMessage;
};

export const OutgoingFileMessage = ({ message }: Props) => {
  const { dateLocale } = useConstantState();

  const hasMessageBubble = !!message.message;
  const type = (() => {
    if (message.type.startsWith('image/')) return 'image';
    if (message.type.startsWith('application/pdf')) return 'pdf';
    return 'unknown';
  })();
  const preview = (() => {
    if (type === 'image') {
      return <ImagePreview message={message} />;
    }
    if (type === 'pdf') {
      return <PDFPreview message={message} />;
    }
  })();
  const renderTimestamp = () => {
    return (
      <div className={timestampContainer}>
        <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>
      </div>
    );
  };

  return (
    <div className={container}>
      <div className={bubbleContainer}>
        {!hasMessageBubble && preview && renderTimestamp()}
        <div className={previewContainer}>{preview}</div>
      </div>

      {(hasMessageBubble || type === 'unknown') && (
        <div className={bubbleContainer}>
          {renderTimestamp()}
          <BodyContainer style={{ maxWidth: 244 }}>
            <BodyComponent>
              <div className="sendbird-word">{message.message || 'Unknown file type'}</div>
            </BodyComponent>
          </BodyContainer>
        </div>
      )}
    </div>
  );
};

const container = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;
const bubbleContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  gap: 4px;
`;
const previewContainer = css`
  display: flex;
  flex: 1;
  max-width: 244px;
`;
const timestampContainer = css`
  display: flex;
  align-items: flex-end;
`;

const ImagePreview = ({ message }: Props) => {
  const [viewer, setViewer] = useState(false);
  const [fileUrl] = useState(() =>
    message.messageParams?.file instanceof File ? URL.createObjectURL(message.messageParams?.file) : message.url,
  );
  const aspectRatio = message.metaArrays.find((it) => it.key === META_ARRAY_ASPECT_RATIO_KEY)?.value?.[0];
  return (
    <>
      <ImageWithPlaceholder
        src={fileUrl}
        alt={'file preview'}
        aspectRatio={aspectRatio ?? '1'}
        onClick={() => setViewer(true)}
      />
      {viewer && <FileViewer message={message} onClose={() => setViewer(false)} />}
    </>
  );
};

// TODO: Refactor
const PDFPreview = ({ message }: Props) => {
  return (
    <div className={'sendbird-message-input--file'}>
      <div className={'pdf'} style={{ flex: 1 }}>
        <div className={'pdf-icon'}>
          <Icon type={'file-document'} size={24} />
        </div>
        <div className={'pdf-info'}>
          <Label type={'button1'} className={'pdf-name'} title={message.name}>
            {message.name}
          </Label>
          <Label type={'caption3'} className={'pdf-type'}>
            {'PDF'}
          </Label>
        </div>
      </div>
    </div>
  );
};

const ImageContainer = styled.div<{ ratio: string }>`
  width: 100%;
  height: auto;
  aspect-ratio: ${(props) => props.ratio};
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  .sendbird-theme--light & {
    background-color: var(--sendbird-dark-background-100);
  }
  .sendbird-theme--dark & {
    background-color: var(--sendbird-dark-background-400);
  }
`;

const StyledImage = styled.img<{ loaded: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  inset-block-start: 0;
  inset-inline-start: 0;
  object-fit: cover;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  transition: opacity 0.5s ease;
`;

const ImageWithPlaceholder = ({
  src,
  alt,
  aspectRatio,
  onClick,
}: {
  src: string;
  alt: string;
  aspectRatio: string;
  onClick?: () => void;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageContainer ratio={aspectRatio} onClick={onClick}>
      {!loaded && (
        <Loader size={26}>
          <Icon type={'spinner'} color={'onbackground3'} size={26} />
        </Loader>
      )}
      <StyledImage loaded={loaded} src={src} alt={alt} onLoad={() => setLoaded(true)} />
    </ImageContainer>
  );
};
