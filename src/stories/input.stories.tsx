import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
}

export const UncontrolledInput = () => {
    return (
        <input/>
    );
};

export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState("");

    return (
        <>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setValue(e.currentTarget.value)}/> - {value}
        </>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value: {value}
        </>
    );
};

export const ControlledInputWithFixedValue = () => {
    return (
        <input value={'it-incubator'}/>
    );
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={onChange}/>
    );
};

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" checked={parentValue} onChange={onChange}/>
    );
};

export const ControlledSelect = () => {

    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={onChange}>
            <option>none</option>
            <option value="1">value1</option>
            <option value="2">value2</option>
            <option value="3">value3</option>
            <option value="4">value4</option>
            <option value="5">value5</option>
            <option value="6">value6</option>
        </select>
    );
};


