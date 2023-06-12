import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { GuitarCard } from './types/guitar-card.type';
import { guitarCards } from './cards-sample_for_delete';

const cards:GuitarCard[] = guitarCards;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <React.StrictMode>
    <App
      cards = {cards}
    />
  </React.StrictMode>,
);
