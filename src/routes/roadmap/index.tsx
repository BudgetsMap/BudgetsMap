import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";


export default component$( () => {
    return (
        <div class={"h-screen"}>
            <div class={"mt-8"}>
            <h1 class={"text-3xl font-bold"}>RoadMap</h1>
                <p class={"text-sm text-primary-500 dark:text-white"}>En este formulario, por favor ingrese sus ingresos mensuales. Incluya su salario mensual y cualquier otro ingreso adicional que tenga.</p>
            </div>
        </div>
    );
})


export const head: DocumentHead = {
    title: 'RoadMap | BudgetsMap',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };
