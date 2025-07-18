# Translation System

This directory contains the modular translation system for the White Out Survival tutorial.

## Structure

```
translations/
├── index.js        # Main export file
├── en.js          # English translations
├── fr.js          # French translations
└── README.md      # This file
```

## Adding New Languages

1. Create a new language file (e.g., `es.js` for Spanish):

```javascript
export const es = {
    language: 'Idioma',
    title: 'Tutorial de Creación de Escuadrones',
    // ... rest of translations
};
```

2. Update `index.js` to include the new language:

```javascript
import { es } from './es.js';

export const translations = {
    en,
    fr,
    es  // Add new language here
};
```

3. Update the language switcher buttons in both HTML files:

```html
<button @click="setLanguage('es')" 
        :class="currentLang === 'es' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'"
        class="px-3 py-1 text-sm font-medium transition-colors">
    Español
</button>
```

## Translation Keys

All translation keys follow a hierarchical structure:

- `nav.*` - Navigation elements
- `attackLineup.*` - Attack lineup section
- `defenseLineup.*` - Defense lineup section
- `tutorial.*` - Tutorial system
- `steps.N.*` - Individual tutorial steps
- `critical.*` - Critical alerts (rally guide)
- `leader.*` - Rally leader strategy
- `joiner.*` - Rally joiner strategy
- `visual.*` - Visual guide section
- `matrix.*` - Decision matrix
- `mistakes.*` - Common mistakes
- `summary.*` - Summary section

## Benefits

- **Maintainable**: Each language in its own file
- **Scalable**: Easy to add new languages
- **Modular**: Clean separation of concerns
- **No Build Tools**: Uses ES6 modules natively
- **Collaborative**: Multiple translators can work simultaneously

## Usage

The translation system is automatically loaded via ES6 modules and made available to Alpine.js components through the `t()` function.