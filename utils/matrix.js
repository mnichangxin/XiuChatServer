class Matrix4 {
  /**
   * 
   * @param {*} matObj 根据一个矩阵生成一个复刻版的
   */
  constructor(matObj) {
    if (matObj && matObj instanceof Matrix) {
      this.elements = matObj.mat.map(item => item);
    } else {
      this.elements = new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ]);
    }
  }
  setTranslate(x, y, z) {
    m[0] = 1; m[4] = 0; m[8] = 0;  m[12] = x;
    m[1] = 1; m[5] = 0; m[9] = 0;  m[13] = y;
    m[2] = 1; m[6] = 0; m[10] = 0; m[14] = z;
    m[3] = 1; m[7] = 0; m[11] = 0; m[12] = 1;
    return this;
  }
  translate() {
    return this.concat(
      new Matrix4().setTranslate(...arguments)
    );
  }
  rotate(angel, x, y, z) {
    
  }
  concat(matObj) {
    const om = matObj.elements;
    const m = this.elements;
    for (let i = 0; i < 4; i ++) {
      const m0i = m[i * 4], 
            m1i = m[i * 4 + 1], 
            m2i = m[i * 4 + 2], 
            m3i = m[i * 4 + 3];

      m[i * 4]     = m0i * om[0] + m1i * om[4] + m2i * om[8]  + m3i * om[12];
      m[i * 4 + 1] = m0i * om[1] + m1i * om[5] + m2i * om[9]  + m3i * om[13];
      m[i * 4 + 2] = m0i * om[2] + m1i * om[6] + m2i * om[10] + m3i * om[14];
      m[i * 4 + 3] = m0i * om[3] + m1i * om[7] + m2i * om[11] + m3i * om[15];
    }
    return this;
  }
  multiply() {
    return this.concat(...arguments);
  }
  setLookAt(ex, ey, ez, lx, ly, lz, upx, upy, upz) {
    const up = new Vector4(upx, upy, upz);
    // 计算相机的基向量 u v w
    const u = new Vector4(lx - ex, ly - ey, lz - ez).normalize();
    const v = Vector4.crossproduct(u, up).normalize();
    const w = Vector4.crossproduct(v, u).normalize();

    const m = this.elements;

    m[0] = v.x;  m[4] = v.y;  m[8]  = v.z;  m[12] = 0;
    m[1] = w.x;  m[5] = w.y;  m[9]  = w.z;  m[13] = 0;
    m[2] = -u.x; m[6] = -u.y; m[10] = -u.z; m[14] = 0;
    m[3] = 0;    m[7] =   0;  m[11] = 0;    m[15] = 1;

    return this.translate(-ex, -ey, -ez);
  }
}

Matrix4.inverseMatrix = function(matObj) {

}

class Vector4 {
  constructor(x, y, z, w = 1) {
    if (x || y || z || w) {
      this.elements = {
        x, y, z, w
      }
    } else {
      this.elements = {
        x: 1, y: 1, z: 1, w: 1
      };
    }
  }
  multiply(vector) {
    const { elements } = vector;
    this.elements.x = this.elements.x * elements.x;
    this.elements.y = this.elements.y * elements.y;
    this.elements.z = this.elements.z * elements.z;
    return this;
  }
  normalize() {
    const { x, y, z } = this.elements;s
    let r = x*x + y*y + z*z;

    this.elements.x /= r;
    this.elements.y /= r;
    this.elements.z /= r;
    return this;
  }
}

Vector4.crossproduct = function(v1, v2) {
  v1 = v1.elements;
  v2 = v2.elements;

  return new Vector4(
    v1.y * v2.z - v1.z * v2.y,
    v1.z * v2.x - v1.x * v2.z,
    v1.x * v2.y - v1.y * v2.x
  );
}

console.log(new Matrix4().concat(new Matrix4()));