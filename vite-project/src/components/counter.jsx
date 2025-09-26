import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [hide, setHide] = useState(false);

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Counter App</h1>

            { !hide && <h2>{count}</h2> }

            <input
                type="number"
                placeholder="Enter the step"
                value={step}
                onChange={(e) => setStep(Number(e.target.value))}
            />

            <button onClick={() => setCount(count + step)}>Increment</button>
            <button onClick={() => setCount(count - step)}>Decrement</button>
            <button onClick={() => setHide(!hide)}>
                {hide ? "Show" : "Hide"} Counter
            </button>
        </>
    );
}
