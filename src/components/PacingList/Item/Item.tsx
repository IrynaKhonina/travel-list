type ItemProps = {
    item: {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
    };
};

export const Item = ({ item }: ItemProps) => {
    return (
        <li>
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description} {/* Исправлено с guantity на quantity */}
            </span>
            <button>❌</button>
        </li>
    );
};