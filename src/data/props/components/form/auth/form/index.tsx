
export interface IPropsForm {
    method: string,
    action: string,
    values: (object)[]
}


export const propsForm: IPropsForm = {
    method: "",
    action: "post",
    values: [
        {
            fieldtype: "input",
            label: "COMPANY NAME",
            type: "text",
            placeholder: "",
            className: "xyz"
        },
        {
            fieldtype: "select",
            label: "CATEGORIE(S)",
            className: "xyz",
            option: [
                {
                    value: `1`,
                    text: "Add a category"
                },
                {
                    value: `2`,
                    text: "Add a category"
                },
                {
                    value: `3`,
                    text: "Add a category"
                }
            ]
        },
        {
            fieldtype: "textarea",
            label: "COMPANY PRESENTATION",
            className: "xyz",
            name: "companyPresentation",
            cols: "30",
            rows: 10
        },
        {
            fieldtype: "button",
            type: "submit",
            label: "Save",
            className: "round-btn",
        },
    ]

}
