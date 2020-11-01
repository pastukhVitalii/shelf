import React, {useState} from 'react';
import {CheckboxType, RolesType} from "../../types/entities";
import {Checkboxes} from "../Checkboxes/Checkboxes";
import {Dropdown} from "../Dropdown/Dropdown";
import css from './ControlPanel.module.css'
import selectorImg from '../../materials/collapse-arrow.svg'
import Button from "../Button/Button";

export type PropsType = {
    name: string
    changeRole: (roleId: string) => void
    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
    roleId: string
    checkboxes: Array<CheckboxType>
    disableCheckbox: boolean
    isActive: boolean
    roles: Array<RolesType>
    activeRole: RolesType
}

export const ControlPanel = (props: PropsType) => {

    let [showItems, toggleItems] = useState(false);

    const sendSata = () => {
        const newObj = {
            name: props.activeRole.name,
            checkboxes: props.activeRole.checkbox
        }
        const json = JSON.stringify(newObj);
        alert("SAVE DATA " + json)
    }
    return (
        <div className={css.container}>
            <div className={css.select}>
                <div className={css.activeUser} onClick={() => toggleItems(!showItems)}>
                    {props.name}
                    <div><img src={selectorImg} alt="arrow"/></div>
                </div>
                <div className={css.blockItems}>{showItems ?
                    <Dropdown name={props.name} roleId={props.roleId} changeRole={props.changeRole}
                              isActive={props.isActive} roles={props.roles} showItems={showItems}
                              toggleItems={toggleItems}/> : ''}</div>
            </div>
            <div>
                <h4>Folders</h4>
                <Checkboxes isActive={props.isActive} roleId={props.roleId} disable={props.disableCheckbox}
                            checkboxes={props.checkboxes} changeStatus={props.changeStatus}/>
            </div>
            <div>
                <h4>Gems</h4>
                <Checkboxes isActive={props.isActive} roleId={props.roleId} disable={props.disableCheckbox}
                            checkboxes={props.checkboxes} changeStatus={props.changeStatus}/>
            </div>

            <Button btnName={'SAVE'} small={true} type={"primary"} onClick={sendSata}/>
        </div>
    );
};



