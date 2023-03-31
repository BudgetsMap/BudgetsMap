import { $, component$, Slot, useContext, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { getColorPreference, setPreference } from '~/components/toggle-theme/Toggle-theme';
import Navbar from '~/components/navbar/Navbar';

import { GlobalStore } from '~/core/context';

import type { NavItemsMenuI } from '~/core/interfaces/menu';

export default component$(() => {

  const pathname = useLocation().url.pathname;

  const state = useContext(GlobalStore);

  useVisibleTask$(() => {
    state.theme = getColorPreference();
    setPreference(state.theme);
  });
  
  const onClick$ = $(() => {

    state.theme = state.theme === 'light' ? 'dark' : 'light';
    console.log(state.theme)
    setPreference(state.theme);
  });

  const navItems: NavItemsMenuI[] = [
    {name:'Inicio', route:'/'},
    {name:'Blog', route:'/blog/'},
    {name: 'Roadmap', route:'/roadmap/'},
    {name: 'Iniciar sesión', route:'/login/'},
    {name: 'Comenzar', route:'/register/'},
  ]

  return (
    <div class="bg-white dark:bg-primary-900">
      <Navbar>
          <div q:slot='navLogo' class={""}>
            <span class={"font-bold text-lg text-primary dark:text-white"}>BudgetsMap</span>
          </div>
          <div q:slot='navItemsEnd' class={"flex flex-none items-center justify-center"}>
            {
              navItems.map( (navItem) => 
              <Link key={navItem.route} href={navItem.route} class={{'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
              )
            }
            <button class={"text-primary-800 dark:text-white mx-2"} onClick$={onClick$}>
              <span class="material-symbols-outlined text-2xl p-2 hover:text-primary-500 dark:hover:text-primary-200">
                {
                  state.theme === 'light' ? 'dark_mode' : 'light_mode'
                }
              </span>
            </button>       
          </div>
          <div q:slot='navItemsMobile'>
          {
            navItems.map( (navItem) => 
            <Link key={navItem.route} href={navItem.route}  class={{ 'block': true,'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
            )
          }
            <button class={"text-primary-900 mx-2 dark:text-primary-100 rounded-lg"} onClick$={onClick$}>
              <span class="material-symbols-outlined">
              {
                state.theme === 'light' ? 'dark_mode' : 'light_mode'
              }
              </span>
            </button>  
                 
          </div>
        </Navbar>
      
      <div class="mx-auto sm:px-6 lg:px-40">
        <Slot />
      </div>
    </div>
  );
});
