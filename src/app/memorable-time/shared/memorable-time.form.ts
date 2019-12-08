import { FormGroup, FormControl, Validators } from '@angular/forms';

export class MemorableTimeForm extends FormGroup {

    constructor() {
      super({
        description: new FormControl(null, [Validators.required]),
        date: new FormControl(null, [Validators.required]),
        time: new FormControl(null, [Validators.required]),
        action: new FormControl(null, [Validators.required])
      });
    }
  }