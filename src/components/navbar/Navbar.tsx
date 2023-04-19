import { component$, Slot } from '@builder.io/qwik';


export default component$( () => {
    return (
        <nav class="navbar">
            <div class="mx-2 sm:mx-6 lg:mx-40">
                <div class="relative flex h-16 items-center justify-between">
                    {/* <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        
                    </div> */}
                    <div class="flex flex-1 sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <Slot name="navLogo" />
                        </div>
                        <div class="hidden sm:ml-6 sm:block">
                            <div class="flex space-x-4">
                                <Slot name="navItemsStart" />
                            </div>
                        </div>
                    </div>
                    <div class="sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Slot name="navItemsEnd" />
                    </div>
                </div>
            </div>
           
        </nav>
    );
})