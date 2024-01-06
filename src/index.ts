export const getDeepValue = (data: Record<string, unknown>, route: string) => {
    if (!route || !data)
        return;

    let result: any = data;
    if (!result) return;
    
    const keys: string[] = route.split('.');

    for (const key of keys)
        if (result.hasOwnProperty(key))
            result = result[key]
        else
            return;

    return result;
}

export const setDeepValue = (data: Record<string, unknown>, route: string, value: unknown, createKey = true) => {
    if (!route)
        return false;

    let obj: Record<string, unknown> = data;
    const keys: string[] = route.split('.');
    const lastKey = keys.pop();

    for (const key of keys) {
        if (!obj.hasOwnProperty(key))
            if (createKey)
                obj[key] = {};
            else
                return false;
            (obj as unknown) = obj[key];
    }

    obj[lastKey as string] = value;
    data = obj;
    return true;    
}

export const hasDeepValue = (data: Record<string, unknown>, route: string, createKey = false) => {
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
        (obj as unknown) = obj[key];
    }

    return true;
}
