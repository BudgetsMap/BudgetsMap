import { component$, Slot } from '@builder.io/qwik';
import type { QwikIntrinsicElements } from '@builder.io/qwik';

export type ButtonProps = QwikIntrinsicElements['button'];

export default component$( (props: ButtonProps) => {
    return (
      <button class={"btn-secondary"} {...props}>
        <Slot />
      </button>
    );
  }
);