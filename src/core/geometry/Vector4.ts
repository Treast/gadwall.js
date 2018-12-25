export class Vector4 implements VectorInterface {
  public x: number;
  public y: number;
  public z: number;
  public w: number;

  constructor(x: number, y: number, z: number, w: number) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }

  add(vector: Vector4): Vector4 {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    this.w += vector.w;
    return this;
  }

  substract(vector: Vector4): Vector4 {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
    this.w -= vector.w;
    return this;
  }

  distance(vector: Vector4): number {
    const sum = Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2) + Math.pow(vector.z - this.z, 2)
      + Math.pow(vector.w - this.w, 2);
    return Math.sqrt(sum);
  }

  clone(): Vector4 {
    return new Vector4(this.x, this.y, this.z, this.w);
  }
}
