import React, { useState } from "react";
import Item from "../Items/Items";

interface PackingListProps {
    items: {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
    }[];
    deleteItem: (id: number) => void;
    handleToggleItem: (id: number) => void;
    deleteAll: () => void;
}

export default function PackingList({
                                        items,
                                        deleteItem,
                                        handleToggleItem,
                                        deleteAll,
                                    }: PackingListProps) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems = items.slice();

    if (sortBy === "description") {
        sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    function handleSort(e: React.ChangeEvent<HTMLSelectElement>) {
        setSortBy(e.target.value);
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        deleteItem={deleteItem}
                        handleToggleItem={handleToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={handleSort}>
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={deleteAll}>Clear List</button>
            </div>
        </div>
    );
}