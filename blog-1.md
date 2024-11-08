# Title: The Significance of Union and Intersection Types in TypeScript

TypeScript is a powerful tool that adds types to JavaScript.Two important features of TypeScript are union types and intersection types. This also improve how we define and manage data in our programs.

## Union Types in TypeScript

A union type lets a variable hold multiple types. For example, a variable might be a string or a number or any type. This flexibility allows developers to handle dynamic data without compromising type safety. Using the | (pipe) symbol, we can define union types in TypeScript.

#### Example 1

```
const value: string | number;
```

#### Example 2

```
const greet=(person: string | string[]) => {
  if (typeof person === 'string') {
    console.log(`Hello, ${person}!`);
  } else {
    console.log(`Hello, ${person.join(' and ')}!`);
  }
}

greet("Lise");  // Output: Hello, Lise!
greet(["Poj", "John"]);  // Output: Hello, Poj and John!

```

## Intersection Types in TypeScript

An intersection type is used to merge multiple types into a single one. This means the variable must meet all the requirements of the types it combines. For example, if you have a Person type and a Worker type, combining them creates an Employee type that must include properties from both.

#### Example 1

```
interface Unemployed {
  name: string;
  age: number;
}

interface Employed {
  jobTitle: string;
  company: string;
}

type PersonType = Unemployed & Employed;

const person: PersonType = {
  name: 'Hung fu',
  age: 30,
  jobTitle: 'Software Engineer',
  company: 'Programming Hero'
};

```

### Key difference of Union and Intersection types

- Union type (|) : A variable can be one of several types.
  Example: `string | number` means the variable can be a string or a number.

- Intersection Type (&): A variable must be all of the types at once.
  Example: `Unemployed & Employed` means the variable must have the properties of both Person and Worker.

##### Both union and intersection types help make your code more readable and maintainable. Union types give flexibility, allowing a variable to handle multiple types, while intersection types combine the best features of multiple types.

##### By using these types effectively, you can write cleaner and safer TypeScript code also reduce the chance of runtime errors.
