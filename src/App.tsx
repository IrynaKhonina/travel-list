import { useState } from "react";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import Stats from "./components/Stats/Stats";
import PackingList from "./components/PacingList/PackingList";

interface Item {
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
}

function App() {
    const [items, setItems] = useState<Item[]>([]);

    function deleteItem(id: number) {
        setItems((items) => items.filter((ele) => ele.id !== id));
    }

    function onAddItems(newItem: Item) {
        setItems((items) => [...items, newItem]);
    }

    function handleToggleItem(id: number) {
        setItems((items) =>
            items.map((ele) =>
                ele.id === id
                    ? {
                        ...ele,
                        packed: !ele.packed,
                    }
                    : { ...ele }
            )
        );
    }

    function handleDelete() {
        const confirmation = window.confirm(
            "Are you sure you want to delete all items?"
        );
        if (confirmation) setItems([]);
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={onAddItems} />
            <PackingList
                items={items}
                deleteItem={deleteItem}
                handleToggleItem={handleToggleItem}
                deleteAll={handleDelete}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;