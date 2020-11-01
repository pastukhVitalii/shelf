import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {ControlPanel, PropsType} from "./ControlPanel";
import {roles} from "../Dropdown/Dropdown.stories";

export default {
    title: 'Example/ControlPanel',
    component: ControlPanel,
};

export const ControlPanelSimple = (props: PropsType) => {
const [role, setRole] = useState('2')
    return <>
        <ControlPanel name={'User'} roleId={'idRole2352165'} isActive={true}
                      checkboxes={[{
                          id: 'idCheckbox3645632',
                          checked: true,
                          name: 'move'
                      }]}
                      changeStatus={action('status')}
                      changeRole={setRole}
                      disableCheckbox={false} roles={roles} activeRole={roles[0]}/>
    </>
}

