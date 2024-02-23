/// <reference types="react" />
interface ListRowProps {
    icon: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
    rightTop?: React.ReactNode;
    rightBottom?: React.ReactNode;
}
declare const ListRow: ({ icon, title, description, rightTop, rightBottom, }: ListRowProps) => import("react/jsx-runtime").JSX.Element;
export default ListRow;
