import { Deserializable } from 'src/app/shared/models/deserializable.model';

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
}
