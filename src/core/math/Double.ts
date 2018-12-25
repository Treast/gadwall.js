import { Num } from './Num';

export class Double extends Num {
  constructor(value: number) {
    super(value);
  }

  clone() {
    return new Double(this.value);
  }
}
