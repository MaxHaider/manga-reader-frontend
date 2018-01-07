"use strict";
var animations_1 = require("@angular/animations");
exports.routeAnimation = animations_1.trigger('routeAnimation', [
    animations_1.transition('loginPage => selectionPage', [
        animations_1.group([
            animations_1.query(':enter', [
                animations_1.style({
                    opacity: 0
                }),
                animations_1.animate('0.5s', animations_1.style({
                    opacity: 1
                })),
                animations_1.animateChild()
            ]),
            animations_1.query(':leave', [
                animations_1.animate('0.5s', animations_1.style({
                    opacity: 0
                })),
                animations_1.animateChild(),
                animations_1.style({
                    display: 'none'
                })
            ]),
        ])
    ]),
]);
//# sourceMappingURL=animation.js.map