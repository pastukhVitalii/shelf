import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {ControlPanel, PropsType} from "./ControlPanel";
import {roles} from "../Dropdown/Dropdown.stories";

export default {
    title: 'Example/ControlPanel',
    component: ControlPanel,
};

export const SimpleControlPanel = (props: PropsType) => {

    const [isChecked, changeStatus] = useState(false);

    return <>
        <ControlPanel name={'User'} roleId={'idRole2352165'} isActive={true}
                      checkboxes={[{
                          id: 'idCheckbox3645632',
                          checked: isChecked,
                          name: 'move'
                      }]}
                      changeStatus={() => changeStatus(!isChecked)}
                      changeRole={action('change role')}
                      disableCheckbox={false} roles={roles} activeRole={roles[0]} />
    </>
}

