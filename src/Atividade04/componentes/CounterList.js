import { useState } from "react";

const initialCounters = [0, 0, 0];

export default function CounterList() {
    const [counters, setCounters] = useState(initialCounters);

    function handleIncrementClick(index) {
        const nextCounters = counters.map((c, i) => {
            return i === index ? c + 1 : c;
        });
        setCounters(nextCounters);
    }

    return (
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() => handleIncrementClick(i)}>+1</button>
                </li>
            ))}
        </ul>
    );
}