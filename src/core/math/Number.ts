export class Number {
  public value: number;

  constructor(value: number) {
    this.value = value;
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
