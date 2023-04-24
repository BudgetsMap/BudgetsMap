import { $, Slot, component$, useStyles$ } from '@builder.io/qwik';
import styles from "./Modal.css?inline";

export type ModalProps = {
    title?:string;
    content?: string;
    isVisible?: boolean;
    onClose?(): void;
}

export default component$( ({title, content, isVisible, onClose}:ModalProps) => {
    useStyles$(styles);

    const handlerOnClose = $((e:any) => {
        if(e.target.id === 'wrapper-modal') onClose();
    })

    const handlerOnCloseEsc = $((e:any) => {
        if(e.keyCode === 27) onClose();
    });

    return (
        <div class={`fixed flex modal ${isVisible ? 'block': 'hidden'}`} onClick$={handlerOnClose} onKeyPress$={handlerOnCloseEsc} id='wrapper-modal'>
             <div class={"w-[600px]"}>
                <div class={"bg-white dark:bg-primary-500 p-2 rounded-lg"}>
                    <button class={"btn-secondary"} onClick$={onClose}> Close </button>
                    {title ? <h1 class={"text-xl"}>{title}</h1>:<Slot name="modal-title"/>}
                    {content ? <p>{content}</p>:<Slot name="modal-content"/>}
                </div>
            </div>
        </div>
    );
} )