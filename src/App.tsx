import React from 'react';
import './App.css';
import Dropdown from "./Dropdown";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {RolesType} from "./types/entities";
import {actions} from "./redux/roleReducer";


function App() {

    const roles = useSelector<AppStateType, Array<RolesType>>(state => state.userRole.roles);

    const dispatch = useDispatch()

    const changeStatus = (checked: boolean, roleId: string, checkboxId: string) => {
        dispatch(actions.checkCheckboxSuccessAC(checked, roleId, checkboxId))
    }
    const changeRole = (roleId: string, role: RolesType) => {
        dispatch(actions.changeRoleAC(roleId, role))
    }

    return (
        <div className="App">
            {roles.map(r => <Dropdown key={r.id} role={r} name={r.name} roleId={r.id} checkboxes={r.checkbox}
                                      changeRole={changeRole} changeStatus={changeStatus} isActive={r.isActiveRole} disableCheckbox={r.disableCheckbox}/>)}
        </div>
    );
}

export default App;
