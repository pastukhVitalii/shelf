import * as React from 'react';
import {CheckboxType} from "../../types/entities";
import {Checkbox} from "../Checkbox/Checkbox";
import css from './Checkboxes.module.css'

type PropsType = {
    checkboxes: Array<CheckboxType> | undefined
    roleId: string
    disable: boolean
    isActive: boolean
    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
};

export const Checkboxes = React.memo((props: PropsType) => {

    return (
        <div className={css.checkboxesBlock}>
            {props.isActive ? props.checkboxes?.map(c => {
                return <Checkbox key={c.id} name={c.name} checked={c.checked} roleId={props.roleId} checkboxId={c.id}
                                 changeStatus={props.changeStatus} disable={props.disable}/>
            }) : ''}
        </div>
    );
});


