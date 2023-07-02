import React, {useState} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value?: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false);
    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => setActive(!active);
    const onItemClick = (value:any) => {
        props.onChange(value)
        toggleItems()
    }


    return (
        <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
            {active && <div className={s.menu}>
                {props.items.map(el => <div
                    key={el.value}
                    onClick={()=> {
                        onItemClick(el.value)
                    }}
                >{el.title}</div>)}
            </div>}
        </div>

    );
};

