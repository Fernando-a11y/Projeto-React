
const today = new Date();
function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
        ).format(date);
        
    }
    
    export default function TodoList(){
        const nome = 'Gregorio Y. Zara';
        return(
            <>
            <h1>{nome}'s To Do List</h1>
            <h1>{formatDate(today)}</h1>
            </>
        );
    }