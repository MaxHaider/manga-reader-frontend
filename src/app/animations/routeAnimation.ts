import {trigger, transition, query, style, animate, group, animateChild, state, stagger} from "@angular/animations";

export const routeAnimation = trigger('routeAnimation', [
  transition('loginPage => selectionPage', [
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':leave', style({ zIndex: 100 })),
    query(':enter', style({ transform: 'translateY(-100%)'})),


    group([
      query(':leave', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)'})),
      ])),
      query(':enter', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)'})),
      ]))
    ])
  ]),

  transition('selectionPage => loginPage', [
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':leave', style({ zIndex: 100 })),
    query(':enter', style({ transform: 'translateX(-100%)' })),

    group([
      query(':leave', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)'})),
      ])),
      query(':enter', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0%)'})),
      ]))
    ])
  ]),

  transition('selectionPage => mainPage', [
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':leave', style({ zIndex: 100 })),
    query(':enter', style({ transform: 'translateX(-100%)' })),

    group([
      query(':leave', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)'})),
      ])),
      query(':enter', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0%)'})),
      ]))
    ])
  ]),

  transition('mainPage => selectionPage', [
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query(':leave', style({ zIndex: 100 })),
    query(':enter', style({ transform: 'translateX(100%)' })),

    group([
      query(':leave', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)'})),
      ])),
      query(':enter', group([
        animate('1s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0%)'})),
      ]))
    ])
  ])
]);
