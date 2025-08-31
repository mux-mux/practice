type ClassNamesArg = string | undefined | null | false;

/**
 * [class1, class2, false] => 'class1 class2'
 * typeof arg === 'string' to filter null, undefined, false
 * && arg - to filter '' string
 */
export function cn(...args: ClassNamesArg[]): string {
    return args.filter((arg) => typeof arg === 'string' && arg).join(' ');
}
