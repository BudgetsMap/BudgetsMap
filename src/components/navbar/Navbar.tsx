import { component$, Slot } from '@builder.io/qwik';


export default component$( () => {
    return (
        <nav class="sticky top-0 z-10 bg-white dark:bg-primary-900 backdrop-filter backdrop-blur-lg bg-opacity-20 border-b border-primary-800 border-opacity-20">
            <div class="mx-auto px-2 sm:px-6 lg:px-40">
                <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Open menu with btn */}
                </div>
                <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <Slot name="navLogo" />
                    </div>
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <Slot name="navItemsStart" />
                        </div>
                    </div>
                </div>
                    <div class="pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Slot name="navItemsEnd" />
                    </div>
                </div>
            </div>
            <div class="sm:hidden" id="mobile-menu">
                <div class="space-y-1 px-2 pt-2 pb-3">
                    <Slot name="navItemsMobile" />
                </div>
            </div>
        </nav>
    );
})