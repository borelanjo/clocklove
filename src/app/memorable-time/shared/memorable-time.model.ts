import { Deserializable } from 'src/app/shared/models/deserializable.model';
import { MemorableTimeForm } from './memorable-time.form';

export class MemorableTime implements Deserializable {

    public description: string;
    public date: Date;
    public action: string;

    constructor(
    ) { }

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }

    deserializeFromForm(form: MemorableTimeForm): this {
        return this.deserialize({
            description: form.get('description').value,
            date: new Date(form.get('date').value),
            action: form.get('action').value
        });
    }
}
