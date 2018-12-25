import { Num } from './Num';

export class Int extends Num implements NumberInterface {
  constructor(value: number) {
    super(value);
    this.formatValue();
  }

  private formatValue() {
    this.value = Math.round(this.value);
  }

  add(value: number): Int {
    super.add(value);
    this.formatValue();
    return this;
  }

  substract(value: number): Int {
    super.substract(value);
    this.formatValue();
    return this;
  }

  multiply(value: number): Int {
    super.multiply(value);
    this.formatValue();
    return this;
  }

  divide(value: number): Int {
    super.divide(value);
    this.formatValue();
    return this;
  }

  isEven(): boolean {
    return this.value % 2 === 0;
  }

  isOdd(): boolean {
    return this.value % 2 === 1;
  }

  isMultipleOf(number: number): boolean {
    return this.value % number === 0;
  }

  getDivisorsOf(): number[] {
    const divisors = [];
    for (let i = 1; i <= this.value; i += 1) {
      if (this.value % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }

  clone() {
    return new Int(this.value);
  }
}
