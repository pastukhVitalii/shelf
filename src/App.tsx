import React from 'react';
import css from './App.module.css';
import {ControlPanel} from "./Components/ControlPanel/ControlPanel";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {RolesType} from "./types/entities";
import {actions} from "./redux/roleReducer";

function App() {

    const roles = useSelector<AppStateType, Array<RolesType>>(state => state.userRole.roles);
    const activeRoleArr = roles.filter(r => r.isActiveRole);
    const activeRole = activeRoleArr[0];

    const dispatch = useDispatch();

    const changeStatus = (checked: boolean, roleId: string, checkboxId: string) => {
        dispatch(actions.checkCheckboxSuccessAC(checked, roleId, checkboxId))
    }

    const changeRole = (roleId: string) => {
        dispatch(actions.changeRoleAC(roleId))
    }

    return (
        <div className={css.app}>
            <ControlPanel name={activeRole.name} changeRole={changeRole} changeStatus={changeStatus}
                          roleId={activeRole.id} checkboxes={activeRole.checkbox}
                          disableCheckbox={activeRole.disableCheckbox} isActive={activeRole.isActiveRole}
                          roles={roles} activeRole={activeRole}/>
        </div>
    );
}

export default App;
