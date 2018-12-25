interface VectorInterface {
  add(vector: VectorInterface): VectorInterface;
  substract(vector: VectorInterface): VectorInterface;
  distance(vector: VectorInterface): number;
}

interface NumberInterface {
  add(number: number): NumberInterface;
  substract(number: number): NumberInterface;
  multiply(number: number): NumberInterface;
  divide(number: number): NumberInterface;
  toUSD(): string;
  toEUR(): string;
}
