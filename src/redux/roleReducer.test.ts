import roleReducer, {actions, initialStateType} from "./roleReducer";

const startStates: initialStateType = {
    roles: [
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
        }
    ]
}

test('role should changed', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('1'));
    expect(endState.roles[0].name).toBe('Admin')
})