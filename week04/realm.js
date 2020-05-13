
var queue = [
    {path: ["eval"], object: eval},
    {path: ["isFinite"], object: isFinite},
    {path: ["isNaN"], object: isNaN},
    {path: ["parseFloat"], object: parseFloat},
    {path: ["parseInt"], object: parseInt},
    {path: ["decodeURI"], object: decodeURI},
    {path: ["decodeURIComponent"], object: decodeURIComponent},
    {path: ["encodeURI"], object: encodeURI},
    {path: ["encodeURIComponent"], object: encodeURIComponent},
    {path: ["Array"], object: Array},
    {path: ["Date"], object: Date},
    {path: ["RegExp"], object: RegExp},
    {path: ["Promise"], object: Promise},
    {path: ["Proxy"], object: Proxy},
    {path: ["Map"], object: Map},
    {path: ["WeakMap"], object: WeakMap},
    {path: ["Set"], object: Set},
    {path: ["WeakSet"], object: WeakSet},
    {path: ["Function"], object: Function},
    {path: ["Boolean"], object: Boolean},
    {path: ["String"], object: String},
    {path: ["Number"], object: Number},
    {path: ["Symbol"], object: Symbol},
    {path: ["Object"], object: Object},
    {path: ["Error"], object: Error},
    {path: ["EvalError"], object: EvalError},
    {path: ["RangeError"], object: RangeError},
    {path: ["ReferenceError"], object: ReferenceError},
    {path: ["SyntaxError"], object: SyntaxError},
    {path: ["TypeError"], object: TypeError},
    {path: ["URIError"], object: URIError},
    {path: ["ArrayBuffer"], object: ArrayBuffer},
    {path: ["SharedArrayBuffer"], object: SharedArrayBuffer},
    {path: ["DataView"], object: DataView},
    {path: ["Float32Array"], object: Float32Array},
    {path: ["Float64Array"], object: Float64Array},
    {path: ["Int8Array"], object: Int8Array},
    {path: ["Int16Array"], object: Int16Array},
    {path: ["Int32Array"], object: Int32Array},
    {path: ["Uint8Array"], object: Uint8Array},
    {path: ["Uint16Array"], object: Uint16Array},
    {path: ["Uint32Array"], object: Uint32Array},
    {path: ["Uint8ClampedArray"], object: Uint8ClampedArray},
    {path: ["Atomics"], object: Atomics},
    {path: ["JSON"], object: JSON},
    {path: ["Math"], object: Math},
    {path: ["Reflect"], object: Reflect},
]


var set = new Set();
var pathList = {};
var nodeList = [];
var edgeList = [];
let current;

while (queue.length) {
    current = queue.shift();
    if (set.has(current.object)) {
        continue;
    }
    set.add(current.object);
    console.log("path: ", current.path)
    pathList[current.path[0]] = current.path
    for (let p of Object.getOwnPropertyNames(current.object)) {
        var property = Object.getOwnPropertyDescriptor(current.object, p);
        if (property.hasOwnProperty("value") && 
            ((typeof property.value != null) && (typeof property.value == "object") || (typeof property.value == "object")) && property.value instanceof Object) {
            queue.push({
                path: current.path.concat([p]),
                object: property.value
            });
        } 
        if (property.hasOwnProperty("get") && (typeof property.get == "function")) {
            queue.push({
                path: current.path.concat([p]),
                object: property.get
            });
        }
        if (property.hasOwnProperty("set") && (typeof property.set == "function")) {
            queue.push({
                path: current.path.concat([p]),
                object: property.set
            });
        }
    }
}

console.log(pathList)