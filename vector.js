/**
 * A Vector object with optional fields (ex: x,y,z,e)
 * Why write another one? Who knows. Probably a bad idea, should be merged with a better one.
 * 
 * @class 
 * @constructor
 * @param {any} mapping object with fields to deep copy into this Vector
 */
export default class Vector {
    constructor(mapping) {
        this.axes = {};
        if (arguments.length > 1) {
            this.axes.x = arguments[0];
            this.axes.y = arguments[1];
            if (arguments.length > 2)
                this.axes.z = arguments[2];
            if (arguments.length > 3)
                this.axes.e = arguments[3];
        }
        else if (mapping !== undefined) {
            if (mapping instanceof Vector) {
                // deep copy axes
                for (const axis in mapping.axes) {
                    this.axes[axis] = mapping.axes[axis];
                }
            } else if (mapping instanceof Object) {
                for (const axis in mapping) {
                    this.axes[axis] = mapping[axis];
                }
            }
        }
        else {
            this.axes.x = 0;
            this.axes.y = 0;
            this.axes.z = 0;
        }
    }

    /**
     * Subtract a vector object (x,y,z,e or whatever) from another and return a new vector.
     * TODO: Consider using toxiclibs or other Vector lib
     * @param {Vector} v0 first vector 
     * @returns {object} reference to this for chaining
     */
    subSelf(v0) {
        try {
            for (const axis in v0.axes) {
                this.axes[axis] = this.axes[axis] - v0.axes[axis];
            }
        } catch (e) {
            // rethrow, caught in GUI
            throw e;
        }
        return this;
    }

    /**
     * Add a vector object (x,y,z,e or whatever) to another and return itself.
     * @param {Vector} v0 amount to add
     * @returns {object} reference to this for chaining
     */
    addSelf(v0) {
        try {
            for (const axis in v0.axes) {
                this.axes[axis] = this.axes[axis] + v0[axis];
            }
        } catch (e) {
            // rethrow, caught in GUI
            throw (e);
        }
        return this;
    }


    /**
     * Magnitude squared of this vector as a scalar.
     * @returns {float} magnitude
     */
    magSq() {
        let sumAxes = 0;
        for (const v in this.axes) {
            sumAxes += this.axes[v] * this.axes[v];
        }
        return sumAxes;
    }

    /**
     * Magnitude of this vector as a scalar.
     * @returns {float} magnitude
     */
    mag() {
        return Math.sqrt(this.magSq());
    }

    /**
     * Scalar distance between Vectors.
     * @param {Vector} v0 (required) first vector 
     * @returns {float} scalar vector
     */
    distSelf(v0) {
        return Vector.sub(this, v0).mag();
    }

    /**
     * Scalar distance between Vectors.
     * @param {Vector} v0 (required) first vector 
     * @param {Vector} v1 (optional) second vector (if not included, will use this)
     * @returns {float} scalar vector
     */
    static dist(v0, v1) {
        return Vector.sub(v0, v1).mag();
    }

    /**
     * Divide a vector by a scalar
     * @param {Number} amt to divide by
     * @returns {Vector} this object for chaining
     */
    divSelf(amt) {
        for (const axis in this.axes) {
            this.axes[axis] /= amt;
        }
        return this;
    }


    /**
     * Multiply a vector by a scalar
     * @param {Number} amt to multiply by
     * @returns {Vector} this object for chaining
     */
    multSelf(amt) {
        for (const axis in this.axes) {
            this.axes[axis] *= amt;
        }
        return this;
    }


    /**
     * Set the properties of this Vector based on another or a mapping object
     * @param {object} mapping object with fields to deep copy into this Vector
     * @returns {Vector} this object for chaining
     */
    set(mapping) {
        if (mapping !== undefined) {
            if (mapping instanceof Vector) {
                // deep copy axes
                for (const axis in mapping.axes) {
                    this.axes[axis] = mapping.axes[axis];
                }
            } else if (mapping instanceof Object) {
                for (const axis in mapping) {
                    this.axes[axis] = mapping[axis];
                }
            }
        }
        return this;
    }



    /**
     * Add a vector object (x,y,z,e or whatever) to another and return a new Vector.
     * TODO: Consider using toxiclibs or other Vector lib
     * @param {Vector} v0 first vector 
     * @param {Vector} v1 amount to add
     * @returns {object} reference to this for chaining
     */
    static add(v0, v1) {
        const v2 = new Vector();
        try {
            for (const axis in v0.axes) {
                v2.axes[axis] = v0.axes[axis] + v1.axes[axis];
            }
        } catch (e) {
            // rethrow, caught in GUI
            throw (e);
        }
        return v2;
    }

    /**
    * Divide a vector object (x,y,z,e or whatever) by an amount and return a new one.
    * @param {Vector} v0 first vector 
    * @param {number} amt amount to divide by
    * @returns {Vector} new Vector
    */
    static div(v0, amt) {
        const v1 = new Vector();
        try {
            for (const axis in v0.axes) {
                v1.axes[axis] = v0.axes[axis] / amt;
            }
        } catch (e) {
            // rethrow, caught in GUI
            throw (e);
        }
        return v1;
    }



    /**
    * Subtract a vector object (x,y,z,e or whatever) from another and return a new vector.
    * @param {Vector} v0 first vector 
    * @param {Vector} v1 amount to subtract
    * @returns {Vector} result vector
    */
    static sub(v0, v1) {
        const v2 = new Vector();
        try {
            for (const axis in v0.axes) {
                v2.axes[axis] = v0.axes[axis] - v1.axes[axis];
            }
        } catch (e) {
            // rethrow, caught in GUI
            throw (e);
        }
        return v2;
    }

    /**
    * Multiply a vector object (x,y,z,e or whatever) to another and return a new vector.
    * @param {Vector} v0 first vector 
    * @param {Vector} v1 second vector
    * @returns {Vector} result vector 
    */
    static mult(v0, v1) {
        const v2 = new Vector();
        if (typeof v1 === "object") {
            try {
                for (const axis in v0.axes) {
                    v2.axes[axis] = v0.axes[axis] * v1.axes[axis];
                }
            } catch (e) {
                // rethrow, caught in GUI
                throw (e);
            }
        }
        else if (typeof v1 === "number") {
            try {
                for (const axis in v0.axes) {
                    v2.axes[axis] = v0.axes[axis] * v1;
                }
            } catch (e) {
                // rethrow, caught in GUI
                throw (e);
            }        
        }
        return v2;
    }

    /**
     * 
     * @param {Vector} v1 
     * @param {Vector} v2 
     * @returns {Number} dot product (scalar)
     */
    static dot(v1, v2) {
        return (v1.axes.x * v2.axes.x + v1.axes.y * v2.axes.y + (v1.axes.z || 0) * (v2.axes.z || 0));
    }

    /**
     * 
     * @param {Vector} v1 
     * @param {Vector} v2 
     * @returns {Vector} cross product
     */
    static cross(v1, v2) {
        const x = v1.axes.y * (v2.axes.z || 0) - (v1.axes.z || 0) * v2.axes.y;
        const y = (v1.axes.z || 0) * v2.axes.x - v1.axes.x * (v2.axes.z || 0);
        const z = v1.axes.x * v2.axes.y - v1.axes.y * v2.axes.x;
        return new Vector(x,y,z);
    }

    /**
     * 
     * @param {Vector} v1
     * @param {Vector} v2 
     * @returns {Number} angle between in radians
     */
    static angleBetween(v1, v2) {
        // adapted from https://github.com/processing/p5.js/blob/v1.6.0/src/math/p5.Vector.js#L1574

        const dotmagmag = Vector.dot(v1,v2) / (v1.mag() * v2.mag());

        // Mathematically speaking: the dotmagmag variable will be between -1 and 1
        // inclusive. Practically though it could be slightly outside this range due
        // to floating-point rounding issues. This can make Math.acos return NaN.
        //
        // Solution: we'll clamp the value to the -1,1 range
        let angle;
        angle = Math.acos(Math.min(1, Math.max(-1, dotmagmag)));
        angle = angle * Math.sign(Vector.cross(v1,v2).axes.z || 1);
        
        return angle;
    }

}
