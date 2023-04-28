import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Button from "~/components/button/Button";


export default component$( () => {
  const isVisibleModal = useSignal(false);
  const showModal = $( () => isVisibleModal.value = !isVisibleModal.value );

    return (
        <div class={"h-screen"}>
            <div class={"mt-8"} >
                <h1 class={"text-3xl font-bold"}>Deudas</h1>
                <p class={"text-sm text-primary-500 dark:text-white"}>Ingrese sus deudas</p>
            </div>
        </div>
    );
})


export const head: DocumentHead = {
    title: 'Deudas | BudgetsMap',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };