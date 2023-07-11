import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}
const NewMessageCounter = (props: any) => {
    return <div>{props.count}</div>
}


const Users = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}
export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Stas', "Fedor", "Eblan"])

    return <div>
        <button onClick={()=> setCounter(counter+1)}>{counter}</button>
        <NewMessageCounter count={counter} />
        <Users users={users} />
    </div>
}
