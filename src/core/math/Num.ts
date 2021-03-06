export class Num implements NumberInterface {
  public value: number;

  constructor(value: number) {
    this.value = value;
  }

  add(value: number): Num {
    this.value += value;
    return this;
  }

  substract(value: number): Num {
    this.value -= value;
    return this;
  }

  multiply(value: number): Num {
    this.value *= value;
    return this;
  }

  divide(value: number): Num {
    this.value /= value;
    return this;
  }

  toUSD(): string {
    return this.value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  toEUR(): string {
    return this.value.toLocaleString('en-GB', {
      style: 'currency',
      currency: 'EUR',
    });
  }
}
