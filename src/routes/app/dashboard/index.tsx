import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


export default component$( () => {
    return (
        <div>Dashboar Page</div>
    );
})



export const head: DocumentHead = {
    title: 'Dashboard | BudgetsMap',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };