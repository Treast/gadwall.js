import { MNumber } from './MNumber';

export class Double extends MNumber {
  constructor(value: number) {
    super(value);
  }

  clone() {
    return new Double(this.value);
  }
}
