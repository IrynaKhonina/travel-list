import { useState } from "react";

type Props = {};

export const Form = (props: Props) => {
    const [description, setDescription] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(5);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() }; // Исправлено создание newItem
        setDescription(""); // Сброс поля описания
        setQuantity(1); // Сброс количества
    };

    return (
        <form className="add-form" onSubmit={submitHandler}>
            <h3>What do you need for your 😍 trip</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.currentTarget.value))}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
            />
            <button>Add</button>
        </form>
    );
};