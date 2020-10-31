export type RolesType = {
    id: string
    name: string
    isActiveRole: boolean
    checkbox: Array<CheckboxType>
    disableCheckbox: boolean
}

export type CheckboxType = {
    id: string
    name: string
    checked: boolean
}
