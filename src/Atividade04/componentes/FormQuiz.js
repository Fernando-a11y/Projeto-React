import { useState } from "react";

export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    if (status === 'success') {
        return <h1>Isso mesmo!</h1>;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>Quiz da Cidade</h2>
            <p>
                Em qual cidade existe um outdoor que transforma ar em água potável?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={answer}
                    onChange={handleTextareaChange}
                    disabled={status === 'submitting'} 
                />
                <br />
                <button
                    disabled={
                        answer.length === 0 || status === 'submitting'
                    }
                >
                    Enviar
                </button>
                {error !== null && (
                    <p className="error">{error.message}</p> 
                )}
            </form>
        </>
    );
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Tente novamente!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
