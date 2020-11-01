import roleReducer, {actions, initialState, initialStateType} from "./roleReducer";

// const startStates: initialStateType = initialState;
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
        },
        {
            id: '2',
            name: "Member",
            isActiveRole: false,
            disableCheckbox: true,
            checkbox: [
                {id: '111', name: 'Create', checked: false},
                {id: '222', name: 'Update', checked: false},
                {id: '333', name: 'Move', checked: false},
                {id: '444', name: 'Delete', checked: false},
                {id: '555', name: 'View', checked: true},
                {id: '666', name: 'Share', checked: true},
            ]
        },
        {
            id: '3',
            name: "User",
            isActiveRole: false,
            disableCheckbox: true,
            checkbox: [
                {id: '1111', name: 'Create', checked: true},
                {id: '2222', name: 'Update', checked: true},
                {id: '3333', name: 'Move', checked: false},
                {id: '4444', name: 'Delete', checked: false},
                {id: '5555', name: 'View', checked: true},
                {id: '6666', name: 'Share', checked: true},
            ]
        },
        {
            id: '4',
            name: "Developer",
            isActiveRole: true,
            disableCheckbox: false,
            checkbox: [
                {id: '011', name: 'Create', checked: true},
                {id: '022', name: 'Update', checked: true},
                {id: '033', name: 'Move', checked: true},
                {id: '044', name: 'Delete', checked: true},
                {id: '055', name: 'View', checked: true},
                {id: '066', name: 'Share', checked: true},
            ],
            checkboxGems: [
                {id: 'g011', name: 'Create', checked: true},
                {id: 'g022', name: 'Update', checked: true},
                {id: 'g033', name: 'Move', checked: true},
                {id: 'g044', name: 'Delete', checked: true},
                {id: 'g055', name: 'View', checked: true},
                {id: 'g066', name: 'Share', checked: true},
            ]
        },
    ]
}
// Admin

test('role name should be Admin', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC(''));
    expect(endState.roles[0].name).toBe('Admin');
});

test('role name should be changed on Developer', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('4'));
    expect(endState.roles[3].name).toBe('Developer');
});

test('Admin can everything', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('1'));
    expect(endState.roles[0].checkbox[0]?.checked).toBeTruthy();
    expect(endState.roles[0].checkbox[1]?.checked).toBeTruthy();
    expect(endState.roles[0].checkbox[2]?.checked).toBeTruthy();
    expect(endState.roles[0].checkbox[3]?.checked).toBeTruthy();
    expect(endState.roles[0].checkbox[4]?.checked).toBeTruthy();
    expect(endState.roles[0].checkbox[5].checked).toBeTruthy();
});

test('checkboxes should be disabled in Admin', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('1'));
    expect(endState.roles[0].disableCheckbox).toBeTruthy();
});

// Member

test('Member can view and share', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('2'));
    expect(endState.roles[1].checkbox[4]?.checked).toBeTruthy()
    expect(endState.roles[1].checkbox[5]?.checked).toBeTruthy()
});

// User

test('User can not move and delete', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('3'));
    expect(endState.roles[2].checkbox[2]?.checked).toBeFalsy();
    expect(endState.roles[2].checkbox[3]?.checked).toBeFalsy();
});

// Developer

test('Developer can not move and delete', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('4'));
    expect(endState.roles[2].checkbox[2]?.checked).toBeFalsy();
    expect(endState.roles[2].checkbox[3]?.checked).toBeFalsy();
});

test('Developer should be have checkboxGems', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('4'));
    expect(endState.roles[3].checkboxGems?.length).toBe(6);
});


