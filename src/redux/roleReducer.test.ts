import roleReducer, {actions, initialState, initialStateType} from "./roleReducer";

const startStates: initialStateType = initialState;

test('Admin should be active', () => {
    const endState = roleReducer(startStates, actions.changeRoleAC('1'));
    expect(endState.roles[0].isActiveRole).toBe(true);
});

test('Move should be false in Developer', () => {
    // @ts-ignore
    const endState = roleReducer(startStates, actions.checkCheckboxAC(true, '4', '033'));
    // @ts-ignore
    expect(endState.roles[3].checkbox[2].checked).toBeFalsy();
});

test('Move should be true in Developer', () => {
    // @ts-ignore
    const endState = roleReducer(startStates, actions.checkCheckboxAC(false, '4', '033'));
    // @ts-ignore
    expect(endState.roles[3].checkbox[2].checked).toBeTruthy();
});


