"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

exports.getDeepValue = (data, route) => {
    if (!route)
    return;

    let result = data;
    route
        .split('.')
        .forEach(node => result = result[node]);

    return result;
}

exports.setDeepValue = (data, route, value, createKey = true) => {
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
}

exports.hasDeepValue = (data, route, createKey = false) => {
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
}

exports.extendObject = () => {
    Object.prototype.getDeepValue = function(route) {
        return exports.getDeepValue(this, route);
    }
    
    Object.prototype.setDeepValue = function(route, value, createKey = true) {
        return exports.setDeepValue(this, route, value, createKey);
    }
    
    Object.prototype.hasDeepValue = function(route, createKey = false) {
        return exports.hasDeepValue(this, route, createKey);
    }    
}
