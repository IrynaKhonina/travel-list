import React from "react";

interface ItemProps {
    item: {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
    };
    deleteItem: (id: number) => void;
    handleToggleItem: (id: number) => void;
}

export default function Item({ item, deleteItem, handleToggleItem }: ItemProps) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => handleToggleItem(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
            <button onClick={() => deleteItem(item.id)}>❌</button>
        </li>
    );
}