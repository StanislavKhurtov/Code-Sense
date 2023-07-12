import React, {ChangeEvent, useMemo, useState} from "react";

export default {
    title: 'useMemo',
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let b = 0
            while (b < 1000000) {
                const fakeValue = Math.random();
                b++;
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return (
        <div>
            <input value={a} onChange={(e: ChangeEvent<HTMLInputElement>) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e: ChangeEvent<HTMLInputElement>) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a : {resultA}
            </div>
            <div>
                Result for b : {resultB}
            </div>
        </div>
    );
};


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS Sect")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);


export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Stas', "Fedor", "Eblan", "Vasia"])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf("a") > 1)
    }, [users])

    const addUsers = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getFullYear()]
        setUsers(newUsers);
    }

    return <div>
        <button onClick={() => setCounter(counter + 1)}>{counter}</button>
        <button onClick={() => addUsers()}>add Users</button>
        {counter}
        <Users users={newArray}/>
    </div>
}

