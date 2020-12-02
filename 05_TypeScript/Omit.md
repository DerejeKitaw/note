[Omit- Source](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)

```js
Constructs a type by picking all properties from Type and then removing Keys.

Example
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;// remove description from Todo

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo;
// ^ = const todo: Pick
```
