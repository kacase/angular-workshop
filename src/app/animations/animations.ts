import {
  trigger,
  style,
  transition,
  animate,
  query,
  state,
  group,
} from '@angular/animations';

export function card_animation() {
  return trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)', opacity: 1 })),
    transition('void =>*', [
      style({ transform: 'rotateY(-70deg)', opacity: 0 }),
      animate(1000, style({ transform: 'rotateY(0deg)', opacity: 1 })),
    ]),
    transition('* => void', [
      animate(1000, style({ transform: 'rotateY(-70deg)', opacity: 0 })),
    ]),
  ]);
}

export const slider = trigger('routeAnimations', [
  transition(':increment', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ right: '-100%' })]),
    group([
      query(':leave', [animate('600ms ease', style({ right: '100%' }))]),
      query(':enter', [animate('600ms ease', style({ right: '0%' }))]),
    ]),
  ]),
  transition(':decrement', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    query(':enter', [style({ left: '-100%' })]),
    group([
      query(':leave', [animate('600ms ease', style({ left: '100%' }))]),
      query(':enter', [animate('600ms ease', style({ left: '0%' }))]),
    ]),
  ]),
]);
