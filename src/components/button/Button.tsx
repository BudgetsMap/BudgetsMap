import { component$, QwikIntrinsicElements, Slot } from '@builder.io/qwik';

export type ButtonProps = QwikIntrinsicElements['button'];

export default component$( (props: ButtonProps) => {
    return (
      <button {...props}>
        <Slot />
      </button>
    );
  }
);