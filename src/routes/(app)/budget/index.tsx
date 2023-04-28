import { $, component$, useSignal } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import Button from "~/components/button/Button";
import Card from "~/components/card/Card";
import Input from "~/components/input/Input";
import Modal from "~/components/modal/Modal";


export const useLogin = routeAction$(async ( ) => {

    return {
        success: true,
      };
})

export default component$( () => {
    const action = useLogin()
    const isVisibleModal = useSignal(false);
    const openModal = $( ()=> isVisibleModal.value = !isVisibleModal.value );
    return (
        <div class={"h-screen"}>
            <div class={"mt-8"} >
                <h1 class={"text-3xl font-bold"}>Presupuestos</h1>
                <p class={"text-sm text-primary-500 dark:text-white"}>En este formulario, por favor ingrese sus ingresos mensuales. Incluya su salario mensual y cualquier otro ingreso adicional que tenga.</p>
                <div class={"grid grid-cols-1 justify-items-center gap-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}>
                    <Card title="Hello Card" content="This is a description in a card component">
                        <div q:slot='card-actions' class={"grid place-items-center"}>
                            <Button class={"btn-primary"}>Nuevo presupuesto</Button>
                        </div>
                    </Card>
                </div>
                <Modal isVisible={isVisibleModal.value} onClose={openModal}>
                  <div q:slot="modal-content">
                    <Form>
                      <div class={"py-2 px-8"}>
                        <Input placeholder="Nombre Presupuesto" label="Nombre del presupuesto" type="text" />
                      </div>
                    </Form>
                  </div>
                </Modal>
                

                {/* <Form class={"m-6"} action={action}>
                    <Input label='Nombre del presupuesto' placeholder='Nombre del presupuesto'type="number" name='revenue' value={action.formData?.get('email')}/>
                    <Input label='Salario mensual' placeholder='Salario mensual'type="number" name='revenue' value={action.formData?.get('email')}/>
                    
                    <div class="mt-6">
                        <Button class="btn-secondary w-full mx-0" type='submit'>Iniciar sesión</Button> 
                        
                    </div>
                    {action.value?.message &&  <div class="mt-2"><Alert severity='danger' text={action.value.message} /></div>}
                </Form> */}
            </div>
        </div>
    );
})

export const head: DocumentHead = {
    title: 'Presupuesto | BudgetsMap',
    meta: [
      {
        name: 'description',
        content: 'Qwik site description',
      },
    ],
  };