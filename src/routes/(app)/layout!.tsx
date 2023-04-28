import { $, component$, Slot, useContext, useVisibleTask$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

import { GlobalStore } from '~/core/context';
import { getColorPreference, setPreference } from '~/components/toggle-theme/Toggle-theme';
import Navbar from '~/components/navbar/Navbar';
import AvatarNavbar from '~/components/avatar-navbar/Avatar-navbar';

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
    setPreference(state.theme);
  });

  const navItems: NavItemsMenuI[] = [
    {name:'Dashboard', route:'/dashboard/'},
    {name:'Presupuestos', route:'/budget/'},
    {name:'Deudas', route:'/debt/'},
  ]

  return (
    <div class="bg-white dark:bg-primary-600">
      <Navbar>
          <div q:slot='navLogo' class={""}>
            <Link href='/' class={"font-bold text-lg text-primary-500 dark:text-white"}>Budgets<span class={"text-secondary-500"}>Map</span></Link>
          </div>
          <div q:slot='navItemsStart' class={"flex flex-none items-center justify-center"}>
          {
              navItems.map( (navItem) => 
              <Link key={navItem.route} href={navItem.route} class={{'nav-link':true, 'active-nav-item': pathname.startsWith(navItem.route)}}>{navItem.name}</Link>
              )
            }
          </div>
          <div q:slot='navItemsEnd' class={"flex flex-none items-center justify-center"}>
            <AvatarNavbar altText='Koke Carpintero' imageSrc='https://lh3.googleusercontent.com/a/AGNmyxZebZyz6P1df6ZfP9oEmGr4ousX1cqZDuznnYwP=s576'>
              <div q:slot='avatar-options'>
              <button onClick$={onClick$}>
                <span class="material-symbols-outlined text-2xl icon">
                  {
                    state.theme === 'light' ? 'dark_mode' : 'light_mode'
                  }
                </span>
                </button>   
              </div>
            </AvatarNavbar>
     
          </div>
        </Navbar>
      
      <div class="mx-6 lg:mx-40 text-primary-500 dark:text-white">
        <Slot />
      </div>
      {/* <Footer /> */}
    </div>
  );
});
