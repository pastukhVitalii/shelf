import * as React from 'react';
import {useDispatch} from "react-redux";
import {actions} from "../redux/roleReducer";

type PropsType = {
    name: string
    checked: boolean
    disable: boolean
    roleId: string
    checkboxId: string
};

/*
type StateType = {
    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
};

type CommonType = PropsType & StateType
*/

export const Checkbox = (props: PropsType) => {

    const dispatch = useDispatch()

    const changeStatus = () => {
    dispatch(actions.checkCheckboxSuccessAC(props.checked, props.roleId, props.checkboxId))
    }

    return (
        <div>
            <label>
                <input type={'checkbox'} checked={props.checked} disabled={props.disable} onChange={changeStatus}/>
                {props.name}
            </label>
        </div>
    );
};


