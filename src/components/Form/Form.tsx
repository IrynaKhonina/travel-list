type Props = {};

export const Form = (props: Props) => {
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className="add-form" onSubmit={submitHandler}>
            <h3>What do you need for your 😍 trip</h3>
            <select>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="Item..." />
            <button>Add</button>
        </form>
    );
};