import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';
import React from 'react';

const CloseButton: React.FC = () => (
  <Popover.Button
    className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100"
    title="Fechar formulário"
  >
    <X weight="bold" className="w-4 h-4" />
  </Popover.Button>
);

export { CloseButton };
