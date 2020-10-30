import React from 'react';
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {RolesType} from "./types/entities";

/*type PropsType = {
    name: string
}*/

const Dropdown = () => {
    const roles = useSelector<AppStateType, Array<RolesType>>(state => state.role.roles);
    return (
        <div>
            <select>
                {roles.map(r => <option key={r.id}>{r.name}</option>)}
            </select>
        </div>
    );
};

export default Dropdown;

