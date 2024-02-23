import { Component } from 'react';
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
export declare class DeliveryStatusLabel extends Component<{
    history: HistoryItem;
}> {
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
