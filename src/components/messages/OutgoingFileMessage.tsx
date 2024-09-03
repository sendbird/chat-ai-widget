import { FileMessage } from '@sendbird/chat/message';
import { useState } from 'react';
import styled from 'styled-components';

import Icon, { IconTypes } from '@uikit/ui/Icon';
import Label from '@uikit/ui/Label';
import Loader from '@uikit/ui/Loader';

import { useConstantState } from '../../context/ConstantContext';
import { META_ARRAY_ASPECT_RATIO_KEY } from '../../utils/getImageAspectRatio';
import { formatCreatedAtToAMPM } from '../../utils/messageTimestamp';
import { BodyComponent, BodyContainer, DefaultSentTime } from '../MessageComponent';

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

  // TODO: Refactor
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          width: '100%',
          gap: 4,
        }}
      >
        {!hasMessageBubble && preview && (
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>
          </div>
        )}
        <div style={{ maxWidth: 244, display: 'flex', flex: 1 }}>{preview}</div>
      </div>

      {(hasMessageBubble || type === 'unknown') && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: '100%',
            gap: 4,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <DefaultSentTime>{formatCreatedAtToAMPM(message.createdAt, dateLocale)}</DefaultSentTime>
          </div>
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

const ImagePreview = ({ message }: Props) => {
  const [fileUrl] = useState(() =>
    message.messageParams?.file instanceof File ? URL.createObjectURL(message.messageParams?.file) : message.url,
  );
  const aspectRatio = message.metaArrays.find((it) => it.key === META_ARRAY_ASPECT_RATIO_KEY)?.value?.[0];
  return <ImageWithPlaceholder src={fileUrl} alt={'file preview'} aspectRatio={aspectRatio ?? '1'} />;
};

// TODO: Refactor
const PDFPreview = ({ message }: Props) => {
  return (
    <div className={'sendbird-message-input--file'}>
      <div className={'pdf'} style={{ flex: 1 }}>
        <div className={'pdf-icon'}>
          <Icon type={IconTypes.FILE_DOCUMENT} width={'24px'} height={'24px'} />
        </div>
        <div className={'pdf-info'}>
          <Label type={'BUTTON_1'} className={'pdf-name'} title={message.name}>
            {message.name}
          </Label>
          <Label type={'CAPTION_3'} className={'pdf-type'}>
            {'PDF'}
          </Label>
        </div>
      </div>
    </div>
  );
};

// TODO: Refactor
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
  .sendbird-theme--light & {
    background-color: var(--sendbird-dark-background-100);
  }
  .sendbird-theme--dark & {
    background-color: var(--sendbird-dark-background-400);
  }
`;

const StyledImage = styled.img<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${(props) => (props.loaded ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;
`;

const Placeholder = styled.div<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.loaded ? 'none' : 'block')};
`;

const ImageWithPlaceholder = ({ src, alt, aspectRatio }: { src: string; alt: string; aspectRatio: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageContainer ratio={aspectRatio}>
      {!loaded && (
        <Loader>
          <Icon type={'SPINNER'} fillColor={'ON_BACKGROUND_3'} />
        </Loader>
      )}
      <Placeholder loaded={loaded}></Placeholder>
      <StyledImage src={src} alt={alt} loaded={loaded} onLoad={() => setLoaded(true)} />
    </ImageContainer>
  );
};
