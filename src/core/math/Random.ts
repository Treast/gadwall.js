import { Vector2 } from '../geometry/Vector2';
import { Vector3 } from '../geometry/Vector3';
import { Vector4 } from '../geometry/Vector4';
import { Color } from '../graphic/Color';

export class Random {
  static intBetween(fromNumber: number, toNumber: number): number {
    return Math.floor(this.floatBetween(fromNumber, toNumber));
  }

  static floatBetween(fromNumber: number, toNumber: number): number {
    return Math.random() * (toNumber - fromNumber) + fromNumber;
  }

  static vector2(maxX: number, maxY: number, minX: number = 0, minY: number = 0): Vector2 {
    const x = this.intBetween(minX, maxX);
    const y = this.intBetween(minY, maxY);
    return new Vector2(x, y);
  }

  static vector3(maxX: number, maxY: number, maxZ: number, minX: number = 0, minY: number = 0, minZ: number = 0): Vector3 {
    const x = this.intBetween(minX, maxX);
    const y = this.intBetween(minY, maxY);
    const z = this.intBetween(minZ, maxZ);
    return new Vector3(x, y, z);
  }

  static vector4(maxX: number, maxY: number, maxZ: number, maxW: number,
                 minX: number = 0, minY: number = 0, minZ: number = 0, minW: number = 0): Vector4 {
    const x = this.intBetween(minX, maxX);
    const y = this.intBetween(minY, maxY);
    const z = this.intBetween(minZ, maxZ);
    const w = this.intBetween(minW, maxW);
    return new Vector4(x, y, z, w);
  }

  static color(): Color {
    const red = this.intBetween(0, 256);
    const green = this.intBetween(0, 256);
    const blue = this.intBetween(0, 256);
    return new Color(red, green, blue);
  }
}
