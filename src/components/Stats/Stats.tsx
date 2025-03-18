import React from "react";

interface StatsProps {
    items: {
        id: number;
        description: string;
        quantity: number;
        packed: boolean;
    }[];
}

export default function Stats({ items }: StatsProps) {
    if (!items.length)
        return (
            <p className="stats">
                <em>Start adding some items to your packing list 🚀</em>
            </p>
        );

    const numItems = items.length;
    const packedItems = items.reduce((acc, ele) => acc + (ele.packed ? 1 : 0), 0);
    const percentage = Math.round((packedItems / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage !== 100
                    ? `💼 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`
                    : "You got everything! Ready to go"}
            </em>
        </footer>
    );
}