export interface Source {
    source: string;
    title: string;
    description: string;
    language: string;
    source_type?: string;
}
type Props = {
    sources: Source[];
};
export default function SourceContainer(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
