# Festval UI

Festval UI é um Design System desenvolvido para a empresa **Festval**, utilizando **React**, **TailwindCSS** e **Radix UI**. Ele fornece componentes reutilizáveis e acessíveis para a construção de interfaces consistentes e modernas.

## 📖 Documentação

A documentação completa do Festval UI pode ser encontrada no seguinte link:

🔗 [Festval UI Documentation](https://superfestval.github.io/festval-ui/)

## 📌 Índice

- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Componentes Disponíveis](#-componentes-disponíveis)
- [Instalação](#-instalação)
- [Exemplo de uso](#-uso)
  - [AlertDialog](#-AlertDialog)
  - [Avatar](#-Avatar)
  - [Button](#-Button)
  - [Calendar](#-Calendar)
  - [Card](#-Card)
- [Licença](#-licença)

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces de usuário
- **TailwindCSS** - Framework para estilização rápida e eficiente
- **Radix UI** - Componentes acessíveis e de alta qualidade para React

## 📦 Componentes Disponíveis

| Componente     | Status               |
| -------------- | -------------------- |
| AlertDialog    | ✅ Implementado       |
| Avatar         | ✅ Implementado       |
| Button         | ✅ Implementado       |
| Calendar       | ✅ Implementado       |
| Card           | ✅ Implementado       |
| Checkbox       | ✅ Implementado       |
| DatePicker     | ✅ Implementado       |
| Dialog         | ✅ Implementado       |
| Footer         | ✅ Implementado       |
| Header         | ✅ Implementado       |
| Heading        | ✅ Implementado       |
| Input          | ✅ Implementado       |
| InputFile      | ✅ Implementado       |
| Label          | ✅ Implementado       |
| Menu           | ✅ Implementado       |
| MonthPicker    | ✅ Implementado       |
| NavigationMenu | ✅ Implementado       |
| Popover        | ✅ Implementado       |
| Select         | ✅ Implementado       |
| Table          | ✅ Implementado       |
| Text           | ✅ Implementado       |
| TextArea       | ✅ Implementado       |
| YearPicker     | ✅ Implementado       |
| Notification   | ⏳ Em desenvolvimento |
| CheckboxGroup  | ⏳ Em desenvolvimento |

## 📌 Instalação

Para instalar o Festval UI em seu projeto, utilize:

```sh
npm install festval-ui
```

Ou com Yarn:

```sh
yarn add festval-ui
```

## 🛠️ Uso

### AlertDialog

```tsx
import { AlertDialog } from "festval-ui";

function AlertExample() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>Open</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Confirmação</AlertDialog.Title>
        <AlertDialog.Description>Tem certeza que deseja continuar?</AlertDialog.Description>
        <AlertDialog.Action>Confirmar</AlertDialog.Action>
        <AlertDialog.Cancel>Cancelar</AlertDialog.Cancel>
      </AlertDialog.Content>
    </AlertDialog>
  );
}
```

### Avatar

```tsx
import { Avatar } from "festval-ui";

function AvatarExample() {
  return <Avatar src="https://via.placeholder.com/150" alt="Usuário" />;
}
```

### Button

```tsx
import { Button } from "festval-ui";

function ButtonExample() {
  return <Button variant="primary">Clique Aqui</Button>;
}
```

### Calendar

```tsx
import { Calendar } from "festval-ui";

function CalendarExample() {
  return <Calendar />;
}
```

### Card

```tsx
import { Card } from "festval-ui";

function CardExample() {
  return (
    <Card>
      <Card.Header>Título do Card</Card.Header>
      <Card.Body>Conteúdo do Card</Card.Body>
    </Card>
  );
}
```

## 📄 Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

