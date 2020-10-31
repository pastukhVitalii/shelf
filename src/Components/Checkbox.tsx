import * as React from 'react';

type PropsType = {
    name: string
    checked: boolean
    disable: boolean
    roleId: string
    checkboxId: string

    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
};

/*
type StateType = {
    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
};

type CommonType = PropsType & StateType
*/

export const Checkbox = (props: PropsType) => {
    console.log('render')

    const onChangeStatus = () => {
        props.changeStatus(props.checked, props.roleId, props.checkboxId)
    }

    return (
        <div>
            <label>
                <input type={'checkbox'} checked={props.checked} disabled={props.disable} onChange={onChangeStatus}/>
                {props.name}
            </label>
        </div>
    );
};


