# @cntech/rena-ui

Custom react native components for fast development.

## Install

```bash
npm install @cntech/rena-ui
```

```bash
yarn add @cntech/rena-ui
```

## Peer dependencies

```bash
npm install react-native-linear-gradient
```

```bash
yarn add react-native-linear-gradient
```

## Components

- Container
- Flex
- Header
- Icon
- IconButton
- Input
- Spacer

### Text

| Prop   | Required | Short way of         | type             |
| ------ | -------- | -------------------- | ---------------- |
| size   | true     | {fontSize:number}    | "sm", "md", "lg" |
| style  | false    |                      | TextStyle        |
| center | false    | {textAlign:"center"} | boolean          |
| bold   | false    | {fontWeight:"bold"}  | boolean          |

### Button

| Prop        | Required | Short way of        | type             |
| ----------- | -------- | ------------------- | ---------------- |
| onPress     | true     |                     | function         |
| label       | true     |                     | string           |
| onLongPress | false    |                     | function         |
| style       | false    |                     | ViewStyle        |
| textStyle   | false    |                     | TextStyle        |
| textSize    | false    | {fontSize:number}   | "sm", "md", "lg" |
| bold        | false    | {fontWeight:"bold"} | boolean          |

### ButtonGroup

| Prop        | Required | Short way of          | type             |
| ----------- | -------- | --------------------- | ---------------- |
| buttonProps | true     |                       | ButtonProp       |
| paddingSize | false    |                       | "sm", "md", "lg" |
| direction   | false    | {flexDirection:"row"} | ViewStyle        |
