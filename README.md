# React + TypeScript + Vite

# [page link](https://stepform7.netlify.app/)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

![Form Preview](./design/desktop-design-step-1.jpg)

## Expanding the ESLint configuration

<<<<<<< HEAD
If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:
=======
- Four-step form navigation
- clean UI
- Styled components / Tailwind CSS
- Form validation for personal info
- Step-by-step indicator sidebar
>>>>>>> 623d368b2cbe8f3176ae985424e3272731e0049f

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

<<<<<<< HEAD
```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'
=======
## 🛠️ Installation

```bash
git clone https://github.com/zouhairkahtal/multi-step-form.git
cd multi-step-form
npm install
npm run dev
>>>>>>> 623d368b2cbe8f3176ae985424e3272731e0049f

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
