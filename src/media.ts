import {
    css,
    FlattenInterpolation,
    FlattenSimpleInterpolation,
} from 'styled-components';

const mediaSizes = {
    monitor: 1400,
    desktop: 1024,
    tablet: 768,
    mobile: 425,
};

type CustomMedia = {
    custom: (
        size: number,
        literal: FlattenInterpolation<any>,
    ) => TemplateStringsArray;
};

type DeviceMedia = Record<keyof typeof mediaSizes,
    (TemplateStringsArray) => TemplateStringsArray>;

type Media = DeviceMedia & CustomMedia;

export const media = Object.entries(mediaSizes).reduce(
    (dict, [device, size]) => {
        dict[device] = (literals: TemplateStringsArray) => css`
          @media (max-width: ${size}px) {
            ${literals};
          }
        `;
        return dict;
    },
    {
        custom: (size: number, literals: FlattenSimpleInterpolation) => css`
          @media (max-width: ${size}px) {
            ${literals};
          }
        `,
    } as Media,
);