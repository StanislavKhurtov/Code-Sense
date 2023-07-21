import React, {useMemo, useState} from "react";
import {Select} from "./Select";
import {HelpsToReactMemo} from "../../stories/UseMemoUseCallback.stories";


export default {
    title: 'Select',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return (
        <div>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
            />
        </div>
    )
}
export const WithoutValue = () => {

    const [value, setValue] = useState(null)
    return (
        <div>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}
            />
        </div>
    )
}
type ItemProps = {
    value:string
    title:string
    country:string
}




export const HelpsToReactMemoWithoutValueFilter = () => {
    const [belarusValue, setBelarusValue] = useState(null);
    const [russiaValue, setRussiaValue] = useState(null);
    const [ukraineValue, setUkraineValue] = useState(null);

    const [item, setItem] = useState<Array<ItemProps>>([
        { value: '1', title: 'Minsk', country: 'Belarus' },
        { value: '2', title: 'Moscow', country: 'Russia' },
        { value: '3', title: 'Kiev', country: 'Ukraine' },
        { value: '4', title: 'Odessa', country: 'Ukraine' },
        { value: '5', title: 'Penza', country: 'Russia' },
        { value: '6', title: 'Gomel', country: 'Belarus' },
    ]);

    const filteredItemsByCountry = useMemo(
        () => ({
            belarus: item.filter((el) => el.country !== 'Belarus'),
            russia: item.filter((el) => el.country !== 'Russia'),
            ukraine: item.filter((el) => el.country !== 'Ukraine'),
        }),
        [item]
    );

    return (
        <div className={'selectItems'}>
            <Select onChange={setBelarusValue} value={belarusValue} items={filteredItemsByCountry.belarus} />
            <Select onChange={setRussiaValue} value={russiaValue} items={filteredItemsByCountry.russia} />
            <Select onChange={setUkraineValue} value={ukraineValue} items={filteredItemsByCountry.ukraine} />
        </div>
    );
};

