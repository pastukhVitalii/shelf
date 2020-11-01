import roleReducer, {actions, initialState, initialStateType} from "./roleReducer";

const startStates: initialStateType = initialState;

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

