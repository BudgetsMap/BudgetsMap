import { Slot, component$} from "@builder.io/qwik";

export type CardProps = {
    title?:string;
    content?: string;
}

export default component$( ({title, content}: CardProps) => {
    return(
        <div class="max-w-sm rounded-sm p-6 bg-white shadow-lg dark:bg-primary-800">
            {title ? 
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary-500 dark:text-white">{title}</h5>
                </a>
                : 
                <Slot name="card-title" />
            }
            {content ? <p class="mb-3 text-primary-500 text-opacity-70 dark:text-white dark:text-opacity-90">{content}</p> : <Slot name="card-desc"/>}
            <Slot name="card-actions" />
        </div>
    );
})