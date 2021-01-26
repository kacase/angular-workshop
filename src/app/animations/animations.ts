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
    /**You Code should go into these brackets, you do not need to connect it the component, taht has already been done for you */
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

/* export function list_animation() {
  return trigger('list_animation', [
    transition('void => *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateX(200px)' }),
          stagger(1000, [
            animate('1s', style({ opacity: 1, transform: 'None' })),
          ]),
        ],
        { optional: true }
      ),
    ]),
    transition('* => void', [
      query(
        ':leave',
        [
          style({ opacity: 1, transform: 'None' }),
          stagger(1000, [
            animate(
              '0.5s',
              style({ opacity: 0, transform: 'translateX(-200px)' })
            ),
          ]),
        ],
        { optional: true }
      ),
    ]),
  ]);
} */
