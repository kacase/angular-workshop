import {
  trigger,
  style,
  transition,
  animate,
  query,
  state,
  stagger,
  animateChild,
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

export const slideInAnimation = trigger('routeAnimations', [
  transition('Home <=> Details', [
    style({ position: 'relative' }),
    /** Common ground for all html elements */
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    /**place element to enter so far left it is unseen */
    query(':enter', [style({ left: '-100%' })]),
    /**animate the child animations */
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('4s ease-out', style({ left: '100%' }))]),
      query(':enter', [animate('4s ease-out', style({ left: '0%' }))]),
    ]),
    /**animate the child animations */
    query(':enter', animateChild()),
  ]),
]);
