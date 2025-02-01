import '../../App.css';
import { Item } from './Item/Item';

type ItemType = {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
};

type PackingListProps = {
    items: ItemType[]; // Принимаем items через пропсы
};

export const PackingList = ({ items }: PackingListProps) => {
    return (
        <div>
            <ul className="list">
                {items.map((item) => (
                    <Item key={item.id} item={item} /> // Передаём item в компонент Item
                ))}
            </ul>
        </div>
    );
};