/**
 Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

 Sample Input: const person = { name: "Alice", age: 30 };
 Sample Output: Alice;
 */
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
