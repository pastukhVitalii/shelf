import {RolesType} from "../types/entities";

export const CHANGE_STATUS = 'SHELF/CHECK_CHECKBOX';

export type initialStateType = {
    roles: Array<RolesType>
    // folders: Array<FoldersType>
}

const initialState: initialStateType = {
    roles: [
        {
            id: '1',
            name: "Admin",
            disable: true,
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
            name: "Custom",
            disable: false,
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

const roleReducer = (state: initialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_STATUS:
            return {
                ...state,
                roles: state.roles.map(r => {
                    if (r.id !== action.roleId) {
                        return r
                    } else {
                        return {
                            ...r, checkbox: r.checkbox.map(c => {
                                if (c.id !== action.checkboxId) {
                                    return c
                                } else {
                                    return {...c, checked: !action.status}
                                }

                            })
                        }
                    }
                })
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
        status,
        roleId,
        checkboxId
    } as const)
}


