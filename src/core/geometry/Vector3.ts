export class Vector3 implements VectorInterface {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(vector: Vector3): Vector3 {
    this.x += vector.x;
    this.y += vector.y;
    this.z += vector.z;
    return this;
  }

  substract(vector: Vector3): Vector3 {
    this.x -= vector.x;
    this.y -= vector.y;
    this.z -= vector.z;
    return this;
  }

  distance(vector: Vector3): number {
    const sum = Math.pow(vector.x - this.x, 2) + Math.pow(vector.y - this.y, 2) + Math.pow(vector.z - this.z, 2);
    return Math.sqrt(sum);
  }

  clone(): Vector3 {
    return new Vector3(this.x, this.y , this.z);
  }
}
