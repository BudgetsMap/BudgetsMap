import { component$} from "@builder.io/qwik";
import type { QwikIntrinsicElements } from "@builder.io/qwik";

export type BudgetsMapInputProps = {
    label:string;
    placeholder: string;
}
export type HTMLInputProps = QwikIntrinsicElements['input'];

export type InputProps = BudgetsMapInputProps & HTMLInputProps;

export default component$( (props: InputProps) => {
    return(
    <div>
        <label class="label-input">{props.label}</label>
        <input 
            {...props}
            class="input" />
    </div>
    );
})