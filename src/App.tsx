import React from 'react';
import './App.css';
import Dropdown from "./Dropdown";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {RolesType} from "./types/entities";
import {Checkbox} from "./Components/Checkbox";

function App() {

    const roles = useSelector<AppStateType, Array<RolesType>>(state => state.role.roles);

    return (
        <div className="App">
            <Dropdown/>
            {roles.map(r => {
                return (
                    <>
                        {r.checkbox.map(checkbox => <Checkbox name={checkbox.name} checked={checkbox.checked}
                                                              disable={r.disable} roleId={r.id} checkboxId={checkbox.id}/>)}
                    </>
                )
            })}
        </div>
    );
}

export default App;
