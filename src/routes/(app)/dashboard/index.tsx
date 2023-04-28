import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";



export default component$( () => {
  // const isVisibleModal = useSignal(false);
  // const showModal = $( () => isVisibleModal.value = !isVisibleModal.value );

    return (
        <div class={"h-screen"}>
          <div class={"mt-8"}>
            <h1 class={"text-3xl font-bold"}>Dashboard</h1>
            <p class={"text-sm text-primary-500 dark:text-white"}>En este formulario, por favor ingrese sus ingresos mensuales. Incluya su salario mensual y cualquier otro ingreso adicional que tenga.</p>
          </div>
        </div>
    );
});


export const head: DocumentHead = {
    title: 'Dashboard | BudgetsMap',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };
