import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import Button from '~/components/button/Button';
import { Link } from '@builder.io/qwik-city';
import Button from '~/components/button/Button';

export default component$(() => {
  return (
    <div class="bg-white dark:bg-primary-900 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center h-screen">
        <div class="text-primary-800  dark:text-white">
          <h1 class="text-3xl md:text-6xl font-bold"><span class="text-secondary-500 italic">Presupuestar</span> nunca fue tan <span class="text-secondary-500 italic">fácil</span>.</h1>
      
          <p class="text-primary-800 dark:text-white my-8 text-lg">Con <span class={"font-bold underline"}>Budgets</span><span class={"text-secondary-500 font-bold underline"}>Map</span>, puedes tomar el control de tus finanzas y trabajar hacia un <span class={"text-secondary-500 font-bold"}>futuro financiero</span> más sólido y estable.</p>
          <Link href='/app/dashboard/'>
            <Button class={"btn-secondary"}>Comenzar</Button>
          </Link>
        </div>
        <div class="relative mx-2">
          <div class="relative z-10">
          <img class="rounded-md shadow-md transition-all" src='https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='home-image' />
          </div>
          <div class="bg-gray-100 dark:bg-primary-700 absolute bottom-5 top-5 left-5 w-full h-full rounded-md shadow-md"></div>
          
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Incio | BudgetsMap',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
