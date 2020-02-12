import { Component } from 'react'
import * as React from 'react'
import { IPropsForm } from '../../../data/props/components/form/auth/form'

interface StateForm{
value:(object)[]
}

export class FormAuth extends Component<IPropsForm,StateForm> {
    constructor(props) {
        super(props)

       
    }
    
    FormType = {
        Input: "input",
        Select: "select",
        TextArea: "textarea",
        Button: "button",
    }

    public render() {
  
        
        // let form_dom:(object)[]


        //  {this.props.values.map((value, index) => {
        //                         return (
        //                             <li key={index} className="nav-item active">
        //                                 <a className="nav-link" href={value['link']} >{value['title']}<span className="sr-only">(current)</span></a>
        //                             </li>
        //                         )
        //                     })}

        // this.props.values.forEach(item => {
        //     switch (item.fieldtype) {
        //         case this.FormType.Input:
        //             form_dom.push(<span  key={Math.random()} className={item['col']}>
        //                 <label >{item['label']}</label>
        //                 <input type={item['type']} className={item['className']} placeholder={item['placeholder']} />
        //             </span>)
        //             break;
        //         case this.FormType.Select:
        //             form_dom.push(
        //                 <span  key={Math.random()} className={`input-inside type-2 with-select ${item.col}`}>
        //                     <label >{item.label}</label>
        //                     <select className={item[]} {item.className} name="" id="">
        //                         {item.option.map(option =>
        //                             <option key={Math.random()} value={option.value}>{option.text}</option>
        //                         )}
        //                     </select>
        //                 </span>
        //             )
        //             break;
        //         case this.FormType.TextArea:
        //             form_dom.push(
        //                 <span  key={Math.random()} className={`input-inside type-2  ${item.col}`} >
        //                     <label >{item.label}</label>
        //                     <textarea name={item.name} className={item.className} id="" placeholder={item.placeholder} cols={item.cols} rows={item.rows}></textarea>
        //                 </span>
        //             )
        //             break;
        //         case this.FormType.Button:
        //             form_dom.push(
        //                 <span  key={Math.random()} className={`submit-btn ${item.col}`}>
        //                     <button className={item.className} type={item.type}>
        //                         <Link className="defaultcolor" to={item.route} >
        //                             <li >{item.label}</li>
        //                         </Link>
        //                     </button>
        //                 </span>
        //             )
        //         default:
        //             break;
        //     }

        // });


        return (
            <form key={Math.random()}  action={this.props.action} method={this.props.method}>
                {this.props.children}
            </form>

        )
    }
}



// this is formdynamic







// this component accept the data having formate and render input select textarea and button
// data: {
//     action: "post",
//     form: [
//         {
//             fieldtype: "input",
//             label: "COMPANY NAME",
//             type: "text",
//             placeholder: "",
//             className: "xyz"
//         },
//         {
//             fieldtype: "select",
//             label: "CATEGORIE(S)",
//             className: "xyz",
//             option: [
//                 {
//                     value: `1`,
//                     text: "Add a category"
//                 },
//                 {
//                     value: `2`,
//                     text: "Add a category"
//                 },
//                 {
//                     value: `3`,
//                     text: "Add a category"
//                 }
//             ]
//         },
//         {
//             fieldtype: "textarea",
//             label: "COMPANY PRESENTATION",
//             className: "xyz",
//             name: "companyPresentation",
//             cols: "30",
//             rows: 10
//         },
//         {
//             fieldtype: "button",
//             type: "submit",
//             label: "Save",
//             className: "round-btn",
//         }

//     ]
// }