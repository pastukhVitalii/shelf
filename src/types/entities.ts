export type RolesType = {
    id: string
    name: string
    checkbox: Array<CheckboxType>
    disable: boolean
}

export type CheckboxType = {
    id: string
    name: string
    checked: boolean
}
