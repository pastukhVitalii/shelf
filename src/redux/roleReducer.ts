import {RolesType} from "../types/entities";

export const CHANGE_STATUS = 'SHELF/CHECK_CHECKBOX';
export const CHANGE_ROLE = 'SHELF/CHANGE_ROLE';
export const SET_DEFAULT_ROLE = 'SET/DEFAULT_ROLE';

export type initialStateType = {
    roles: Array<RolesType>
}

const initialState: initialStateType = {
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
            name: "Custom",
            isActiveRole: true,
            disableCheckbox: false,
            checkbox: [
                {id: '011', name: 'Create', checked: true},
                {id: '022', name: 'Update', checked: true},
                {id: '033', name: 'Move', checked: true},
                {id: '044', name: 'Delete', checked: true},
                {id: '055', name: 'View', checked: true},
                {id: '066', name: 'Share', checked: true},
            ]
        },
        {
            id: '5',
            name: "Default",
            isActiveRole: false,
            disableCheckbox: true,
            checkbox: [
                {id: '11', name: 'Create', checked: false},
                {id: '22', name: 'Update', checked: false},
                {id: '33', name: 'Move', checked: false},
                {id: '44', name: 'Delete', checked: false},
                {id: '55', name: 'View', checked: false},
                {id: '66', name: 'Share', checked: false},
            ]
        }
    ]
}

const roleReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                roles: state.roles.map(r => {
                    if (r.id === action.roleId) {
                        return {
                            ...r,
                            checkbox: r.checkbox.map(c => {
                                if (c.id !== action.checkboxId) {
                                    return c
                                } else {
                                    return {...c, checked: action.status}
                                }
                            })
                        }
                    } else {
                        return r
                    }
                })
            }
        case CHANGE_ROLE:
            return {
                ...state,
                roles: [...state.roles.map(r => {
                    if (r.id !== action.roleId){
                        return { ...r, isActiveRole: false}
                    } else {
                        return {...r, isActiveRole: true}
                    }
                })],
            }
        case SET_DEFAULT_ROLE:
            return {
                ...state,
                /* ...state,
                roles: state.roles[+action.defaultRoleId]*/
            }
        default:
            return state
    }
}

export default roleReducer;

// Action

type ActionType = InferActionTypes<typeof actions>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export const actions = {
    checkCheckboxSuccessAC: (status: boolean, roleId: string, checkboxId: string) => ({
        type: CHANGE_STATUS,
        status: !status,
        roleId,
        checkboxId
    } as const),
    changeRoleAC: (roleId: string, role: RolesType) => ({
        type: CHANGE_ROLE,
        roleId,
        role
    } as const),
    setDefaultRoleAC: (defaultRoleId: string) => ({
        type: SET_DEFAULT_ROLE,
        defaultRoleId
    } as const)
}


