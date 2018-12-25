export class Str {
  public value: string;

  constructor(value: string) {
    this.value = value;
  }

  beginsWith(character: string): boolean {
    return true;
  }

  endsWith(character: string): boolean {
    return true;
  }

  ensureEnd(character: string): Str {
    return this;
  }

  ensureBegin(character: string): Str {
    return this;
  }

  contains(substring: string): boolean {
    return true;
  }

  test(regex: RegExp): boolean {
    return true;
  }

  replace(search: string, replace: string): Str {
    return this;
  }

  clone(): Str {
    return new Str(this.value);
  }
}
