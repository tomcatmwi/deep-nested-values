"use strict";

Object.prototype.getValue = function(route) {
    if (!route)
        return;

    let result = this;
    route
        .split('.')
        .forEach(node => result = result[node]);

    return result;
}

Object.prototype.setValue = function(route, value, createKey = true) {
    if (!route)
        return false;

    let obj = this;
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
    return true;
}

Object.prototype.hasValue = function(route, createKey = false) {
    if (!route)
        return false;

    let obj = this;
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