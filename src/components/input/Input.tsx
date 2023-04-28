import {type QwikIntrinsicElements, component$, useStyles$} from "@builder.io/qwik";
import styleInput from './Input.css?inline'
export type BudgetsMapInputProps = {
    label:string;
    placeholder: string;
}
export type HTMLInputProps = QwikIntrinsicElements['input'];

export type InputProps = BudgetsMapInputProps & HTMLInputProps;

export default component$( (props: InputProps) => {
    useStyles$(styleInput)
    return(
    <div>
        <label class="label-input">{props.label}</label>
        <input 
            {...props}
            class="input" />
    </div>
    );
})