import * as React from 'react';
import {RolesType} from "../../types/entities";
import css from './Dropdown.module.css';

export type PropsType = {
    name: string
    roleId: string
    changeRole: (roleId: string) => void
    roles: Array<RolesType>
    isActive: boolean
    showItems: boolean
    toggleItems: (showItems: boolean) => void
};

export const Dropdown = (props: PropsType) => {

    const onChangeRole = (id: string) => {
        props.changeRole(id);
        props.toggleItems(false);
    }

    return (
        <div className={css.items}>
            {props.roles?.map(r => <div key={r.id}
                                       className={css.item + ' ' + (props.roleId === r.id ? css.selected : '')}
                                       onClick={() => onChangeRole(r.id)}>{r.name}</div>)}
        </div>
    );
};