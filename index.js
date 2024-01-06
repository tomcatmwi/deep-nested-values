"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasDeepValue = exports.setDeepValue = exports.getDeepValue = void 0;
const getDeepValue = (data, route) => {
    if (!route || !data)
        return;
    let result = data;
    if (!result)
        return;
    const keys = route.split('.');
    for (const key of keys)
        if (result.hasOwnProperty(key))
            result = result[key];
        else
            return;
    return result;
};
exports.getDeepValue = getDeepValue;
const setDeepValue = (data, route, value, createKey = true) => {
    if (!route)
        return false;
    let obj = data;
    const keys = route.split('.');
    const lastKey = keys.pop();
    for (const key of keys) {
        if (!obj.hasOwnProperty(key))
            if (createKey)
                obj[key] = {};
            else
                return false;
        obj = obj[key];
    }
    obj[lastKey] = value;
    data = obj;
    return true;
};
exports.setDeepValue = setDeepValue;
const hasDeepValue = (data, route, createKey = false) => {
    if (!route)
        return false;
    let obj = data;
    const keys = route.split('.');
    for (const key of keys) {
        if (!obj.hasOwnProperty(key))
            if (createKey)
                obj[key] = {};
            else
                return false;
        obj = obj[key];
    }
    return true;
};
exports.hasDeepValue = hasDeepValue;
//# sourceMappingURL=index.js.map