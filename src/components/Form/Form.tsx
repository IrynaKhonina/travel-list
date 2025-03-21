import React, { useState } from "react";

interface FormProps {
    onAddItems: (item: { id: number; description: string; quantity: number; packed: boolean }) => void;
}

export default function Form({ onAddItems }: FormProps) {
    const [quantity, setQuantity] = useState(1);
    const [description, setDescription] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (description === "") return;
        const newItem = { id: Date.now(), description, quantity, packed: false };

        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((ele) => (
                    <option value={ele} key={ele}>
                        {ele}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>ADD</button>
        </form>
    );
}