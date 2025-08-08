# NgFileExplorer

🚀 **Live demo**: [https://olafsitkowski.github.io/NgFileExplorer/](https://olafsitkowski.github.io/NgFileExplorer/)

## 📌 About the Project

NgFileExplorer is a **file and folder explorer** built with **Angular 19** using modern features like **Standalone Components**, **Signals**, **NgRx Store** for state management, and **Angular Material** for the UI.  
The app allows you to navigate a nested folder structure, add/remove/download files, and display them based on **user role permissions** (Admin, User1, User2).  
The entire application works **client-side only** — no backend required.

### ✨ Key Features
- Recursive folder & file structure
- Role-based permissions for file actions
- Add, delete, and download files
- Collapse/expand folders
- Random user role assigned on page load

### 🛠 Technologies Used
- **Angular 19** – Standalone Components, modern architecture
- **NgRx Store** – state management for folders, files, and users
- **Angular Signals** – local UI state (e.g. folder collapse)
- **Angular Material** – icons, dialogs, buttons, layout
- **TypeScript** – strong typing for models and state

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
