export declare const getDeepValue: (data: Record<string, unknown>, route: string) => unknown;
export declare const setDeepValue: (data: Record<string, unknown>, route: string, value: unknown, createKey?: boolean) => boolean;
export declare const hasDeepValue: (data: Record<string, unknown>, route: string, createKey?: boolean) => boolean;
