export class Str {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  beginsWith(substring: string): boolean {
    const begin = this.value.slice(0, substring.length);
    return begin === substring;
  }

  endsWith(substring: string): boolean {
    const end = this.value.slice(0, -1 * substring.length);
    return end === substring;
  }

  ensureEnd(substring: string): Str {
    if (!this.endsWith(substring)) {
      this.value = this.value + substring;
    }
    return this;
  }

  ensureBegin(substring: string): Str {
    if (!this.beginsWith(substring)) {
      this.value = substring + this.value;
    }
    return this;
  }

  contains(substring: string): boolean {
    return this.value.indexOf(substring) > -1;
  }

  test(regex: RegExp): boolean {
    return regex.test(this.value);
  }

  replace(search: string, replace: string): Str {
    this.value = this.value.replace(search, replace);
    return this;
  }

  padding(number: number, substring: string = ' '): Str {
    if (substring.length > 1) {
      throw new Error('Padding substring cannot be longer than 1 character.');
    }
    const padding = number - this.value.length;

    if (padding > 0) {
      this.paddingLeft(Math.ceil(padding / 2), substring);
      this.paddingRight(Math.floor(padding / 2), substring);
    }

    return this;
  }

  paddingLeft(number: number, substring: string = ' '): Str {
    if (substring.length > 1) {
      throw new Error('Padding substring cannot be longer than 1 character.');
    }

    if (number > this.value.length) {
      let value = this.value;
      for (let i = this.value.length; i < number; i += 1) {
        value = substring + this.value;
      }
      this.value = value;
    }
    return this;
  }

  paddingRight(number: number, substring: string = ' '): Str {
    if (substring.length > 1) {
      throw new Error('Padding substring cannot be longer than 1 character.');
    }

    if (number > this.value.length) {
      let value = this.value;
      for (let i = this.value.length; i < number; i += 1) {
        value += substring;
      }
      this.value = value;
    }
    return this;
  }

  times(number: number): Str {
    let value = '';
    for (let i = 0; i < number; i += 1) {
      value += this.value;
    }
    this.value = value;
    return this;
  }

  clone(): Str {
    return new Str(this.value);
  }
}
