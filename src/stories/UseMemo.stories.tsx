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
    console.log("USERS Secret")
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

const Users = React.memo(UsersSecret);


export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Stas', "Fedor", "Eblan", "Vasia"])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf("a") > -1)
    }, [users])

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}

        <Users users={newArray}/>
    </div>
}


export const LikesUseCallback = () => {
    console.log("likesUseCallback")
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', "JS", "CSS", "HTML"])

    const newArray = useMemo(() => {
        return books.filter(el => el.toLowerCase().indexOf("a") > -1)
    }, [books])

    const addBook = () => {
        setBooks([...books, 'Angular' + new Date().getTime()])
    }

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={()=> addBook()}>add book</button>
        {counter}
        <Book books={newArray}/>
    </div>
}


const BooksSecret = (props: { books: Array<string> }) => {
    console.log("Books Secret")
    return <div>{props.books.map((book, i) => <div key={i}>{book}</div>)}</div>
}

const Book = React.memo(BooksSecret);