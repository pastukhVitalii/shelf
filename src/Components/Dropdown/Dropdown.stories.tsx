import React from 'react';

import {Dropdown, PropsType,} from "./Dropdown";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
};

let roles = [
    {
        id: '1',
        name: "Admin",
        isActiveRole: false,
        disableCheckbox: true,
        checkbox: [
            {id: '11', name: 'Create', checked: true},
            {id: '22', name: 'Update', checked: true},
            {id: '33', name: 'Move', checked: true},
            {id: '44', name: 'Delete', checked: true},
            {id: '55', name: 'View', checked: true},
            {id: '66', name: 'Share', checked: true},
        ]
    },
    {
        id: '2',
        name: "Member",
        isActiveRole: false,
        disableCheckbox: true,
        checkbox: [
            {id: '111', name: 'Create', checked: false},
            {id: '222', name: 'Update', checked: false},
            {id: '333', name: 'Move', checked: false},
            {id: '444', name: 'Delete', checked: false},
            {id: '555', name: 'View', checked: true},
            {id: '666', name: 'Share', checked: true},
        ]
    },
    {
        id: '3',
        name: "User",
        isActiveRole: false,
        disableCheckbox: true,
        checkbox: [
            {id: '1111', name: 'Create', checked: true},
            {id: '2222', name: 'Update', checked: true},
            {id: '3333', name: 'Move', checked: false},
            {id: '4444', name: 'Delete', checked: false},
            {id: '5555', name: 'View', checked: true},
            {id: '6666', name: 'Share', checked: true},
        ]
    },
    {
        id: '4',
        name: "Custom",
        isActiveRole: true,
        disableCheckbox: false,
        checkbox: [
            {id: '011', name: 'Create', checked: true},
            {id: '022', name: 'Update', checked: true},
            {id: '033', name: 'Move', checked: true},
            {id: '044', name: 'Delete', checked: true},
            {id: '055', name: 'View', checked: true},
            {id: '066', name: 'Share', checked: true},
        ]
    },
]

export const DropdownTest = (props: PropsType) => <Dropdown
    name={'User'} roleId={'22'} changeRole={action('click')} toggleItems={action('chenge role')} showItems={true}
    isActive={true} roles={roles}/>
