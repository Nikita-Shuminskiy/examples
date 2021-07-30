import React, {useState} from 'react';

const UsersSecret = (props: { user: Array<string> }) => {
    return (
        <div>
            {props.user.map((t, i) => {
                return <div key={i}>{t}</div>
            })}
        </div>
    );
};
const Users = React.memo(UsersSecret)


const NewCounter = (props: { counter: number }) => {
    return <div>
        {props.counter}
    </div>
}

export function ReactMemoF() {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(['React', 'HTML', 'CSS', 'Angular'])
    const addBook = () => {
        const newBook = [...user, 'JS' + new Date().getTime()]
        setUser(newBook)
    }
    console.log(user)
    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Counter</button>
            <button onClick={addBook}>add user</button>
            <NewCounter counter={counter}/>
            <Users user={user}/>
        </div>
    );
};
