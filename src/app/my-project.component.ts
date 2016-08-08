import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'my-project',
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class MyProjectComponent {

}