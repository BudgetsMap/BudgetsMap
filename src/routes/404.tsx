import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  return (
    <div class="bg-white">
      <div class="mx-auto">
         Error! Pagina no econtrada
      </div>
    </div>
  );
});
export const head: DocumentHead = {
    title: '404 error',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };