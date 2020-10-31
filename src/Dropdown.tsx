import React from 'react';
import {CheckboxType, RolesType} from "./types/entities";
import {Checkboxes} from "./Components/Checkboxes/Checkboxes";

type PropsType = {
    name: string
    changeRole: (roleId: string, role: RolesType) => void
    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
    role: RolesType
    roleId: string
    checkboxes: Array<CheckboxType>
    disableCheckbox: boolean
    isActive: boolean
}

const Dropdown = (props: PropsType) => {

    const onChangeRole = () => {
        props.changeRole(props.roleId, props.role)
    }
    return (
        <div>
            <div>
                <div style={{backgroundColor: 'yellow'}} onClick={onChangeRole}>{props.name}</div>
            </div>
            <div>
                <Checkboxes checkboxes={props.checkboxes} changeStatus={props.changeStatus}
                            disable={props.disableCheckbox}
                            roleId={props.roleId} isActive={props.isActive}/>
            </div>
        </div>
    );
};

export default Dropdown;

