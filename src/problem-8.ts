/**
 * Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
 */
function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return keys.every((key) => key in obj);
}
