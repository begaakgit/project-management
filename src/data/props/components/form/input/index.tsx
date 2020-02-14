
export interface IPropsInput {
    values: (object)[]
}


export const propsInput: IPropsInput = {
    values: [
        {
            label: "Name",
            type: "text",
            placeholder: "Name",
            name: "name",
            id: "name"
        },
        {
            label: "Role",
            type: "text",
            placeholder: "Role",
            name: "role"
        },
        {
            label: "Teams",
            type: "text",
            placeholder: "",
            name: "team"
        },
        {
            label: "Chose File",
            type: "file",
            placeholder: "",
            name: "file"
        }
    ]


}
