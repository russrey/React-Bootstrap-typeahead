// @flow

let idCounter = 0;

export function head(arr: any[]): any {
  return Array.isArray(arr) && arr.length ? arr[0] : undefined;
}

export function isFunction(value: any): boolean %checks {
  return typeof value === 'function';
}

export function isString(value: any): boolean %checks {
  return typeof value === 'string';
}

export function noop(): void {}

export function pick(obj: Object, keys: string[]): Object {
  const result = {};
  keys.forEach((k: string) => {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      result[k] = obj[k];
    }
  });
  return result;
}

export function uniqueId(prefix: ?string): string {
  idCounter += 1;
  return (prefix == null ? '' : String(prefix)) + idCounter;
}

export function values(obj: Object) {
  if (isFunction(Object.values)) {
    return Object.values(obj);
  }

  return Object.keys(obj).reduce((accum: any[], key: string) => {
    if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
      accum.push(obj[key]);
    }
    return accum;
  }, []);
}
