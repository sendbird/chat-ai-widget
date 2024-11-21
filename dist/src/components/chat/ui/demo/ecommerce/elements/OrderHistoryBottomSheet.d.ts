interface Item {
    image: string;
    name: string;
    price: number;
    quantity: number;
}
interface HistoryItem {
    id: string;
    items: Item[];
    date: string;
    status: string;
}
declare const OrderHistoryBottomSheet: ({ historyList, bottomSheetOpen, setBottomSheetOpen, }: {
    historyList: HistoryItem[];
    bottomSheetOpen: boolean;
    setBottomSheetOpen: (value: boolean) => void;
}) => import("react/jsx-runtime").JSX.Element;
export default OrderHistoryBottomSheet;
