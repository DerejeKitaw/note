[React cheat sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components)

> React.FunctionComponent (or the shorthand React.FC) is discouraged. 

// before codemod runs
```
type Props2 = { id: number };
export const MyComponent2: React.FC<Props2> = (props) => {
  return <span>{props.id}</span>
}

// after codemod runs
type Props2 = { id: number };
export const MyComponent2 = (props: Props2) => {
  return <span>{props.id}</span>
}
```
