export function getDeepValue(data, route) {
    if (!route)
        return;
    let result = data;
    route
        .split('.')
        .forEach((node) => result = result[node]);
    return result;
}
export function setDeepValue(data, route, value, createKey = true) {
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
export function hasDeepValue(data, route, createKey = false) {
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
