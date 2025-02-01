import './App.css';
import { Logo } from './components/Logo/Logo';
import { Stats } from './components/Stats/Stats';
import { Form } from './components/Form/Form';
import {PackingList} from "./components/PacingList/PackingList";

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
    { id: 3, description: 'Charger', quantity: 1, packed: false },
];

function App() {
    return (
        <div className="App">
            <Logo />
            <Form />
            <PackingList items={initialItems} /> {/* Передаём initialItems в PackingList */}
            <Stats />
        </div>
    );
}

export default App;