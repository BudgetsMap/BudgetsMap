import { $, component$, useContext, useOnDocument, useSignal, useStyles$, useVisibleTask$ } from '@builder.io/qwik';

import { GlobalStore } from '~/core/context';
import { getColorPreference, setPreference } from '../toggle-theme/Toggle-theme';

import { IcBaselineArrowDropDown, IcOutlineDarkMode, IcOutlineLightMode, IcOutlineSettings } from '../icons/icons';
import stylesAvatarNavbar from './Avatar-navbar.css?inline'

export type ToggleAvatarProps = {
    imageSrc?: string;
    altText: string;
}

export default component$( ({imageSrc, altText}:ToggleAvatarProps) => {
    useStyles$(stylesAvatarNavbar);
    const state = useContext(GlobalStore);
    useVisibleTask$(() => {
      state.theme = getColorPreference();
      setPreference(state.theme);
    });
    
    const onChangeTheme = $(() => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      setPreference(state.theme);
    });

    const isOpenDropdown = useSignal(false);

    const onCloseDropdown = $( () => !isOpenDropdown.value)
    
    useOnDocument('keyup', $((event)=>{
      const key = event as KeyboardEvent
      if(key.code === 'Escape') onCloseDropdown()
    }));
    
    return (
        <div class="avatar-navbar">
        <button
          class="flex items-center text-sm"
          onClick$={() => isOpenDropdown.value = !isOpenDropdown.value}>
          <img
            class="w-10 h-10 rounded-full md:mr-3"
            src={imageSrc}
            alt={altText}
          />
          <span class="hidden md:inline-block dark:text-white font-semibold text-primary-500">{altText}</span>
          <IcBaselineArrowDropDown class={"text-xl text-primary-500 dark:text-white"} />
        </button>
        {isOpenDropdown.value && (
          <div class="absolute z-10 right-0 mt-5 w-44 bg-white shadow-lg overflow-hidden dark:bg-primary-500" q:slot='avatar-options'>
            <a preventdefault:click class="avatar-option cursor-pointer" onClick$={onChangeTheme}>
              
              {
                state.theme === 'light' ?  
                <IcOutlineLightMode class={"mr-2 dark:text-white text-xl"} /> : 
                <IcOutlineDarkMode class={"mr-2 dark:text-white text-xl"} />
              }
              DarkMode 
            </a>  
            <a href="#" class="avatar-option">
            <IcOutlineSettings class={"mr-2 dark:text-white text-xl"} />
            Settings
            </a>
          </div>
        )}
      </div>
    )
})