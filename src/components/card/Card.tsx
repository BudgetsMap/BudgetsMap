import { Slot, component$} from "@builder.io/qwik";

export type InputProps = {
    title?:string;
    description?: string;
}

export default component$( ({title, description}: InputProps) => {
    return(
        <div class="max-w-sm p-6 bg-white border border-primary-500 rounded-lg shadow-lg dark:bg-primary-700 dark:border-primary-600">
            {title ? 
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-800 dark:text-white">{title}</h5>
                </a>
                : 
                <Slot name="card-title" />
            }
            {description ? <p class="mb-3 font-normal text-gray-700 dark:text-gray-500">{description}</p> : <Slot name="card-desc"/>}
            <Slot name="card-actions" />
        </div>
    );
})