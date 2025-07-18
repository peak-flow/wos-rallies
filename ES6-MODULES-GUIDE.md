# ES6 Modules vs Script Tags Guide

## Current Implementation (Script Tags)

Our current translation system uses traditional script tags for maximum compatibility:

```html
<!-- Load translation files -->
<script src="translations/en.js"></script>
<script src="translations/fr.js"></script>
```

**Translation files:**
```javascript
// translations/en.js
window.translations = window.translations || {};
window.translations.en = {
    language: 'Language',
    title: 'Squad Creation Tutorial',
    // ... rest of translations
};
```

## ES6 Modules Alternative

If you want to upgrade to ES6 modules (requires a server), here's how:

### 1. Convert Translation Files

**translations/en.js**
```javascript
export const en = {
    language: 'Language',
    title: 'Squad Creation Tutorial',
    // ... rest of translations
};
```

**translations/fr.js**
```javascript
export const fr = {
    language: 'Langue',
    title: 'Tutoriel de Création d\'Escouades',
    // ... rest of translations
};
```

**translations/index.js**
```javascript
import { en } from './en.js';
import { fr } from './fr.js';

export const translations = {
    en,
    fr
};
```

### 2. Update HTML Files

```html
<script type="module">
    import { translations } from './translations/index.js';
    window.translations = translations;
</script>
```

## Comparison

| Feature | Script Tags | ES6 Modules |
|---------|-------------|-------------|
| **File System Access** | ✅ Works | ❌ Needs server |
| **Dependency Clarity** | ❌ Global pollution | ✅ Explicit imports |
| **Bundle Size** | ❌ Loads everything | ✅ Tree-shaking |
| **IDE Support** | ❌ Limited | ✅ Full support |
| **Performance** | ❌ Sequential loading | ✅ Parallel loading |
| **Browser Support** | ✅ Universal | ✅ Modern browsers |
| **Setup Complexity** | ✅ Zero setup | ❌ Requires server |

## When to Use Each

### Use Script Tags When:
- Building simple demos or prototypes
- Need to work from file system
- Supporting older browsers
- Want zero setup complexity

### Use ES6 Modules When:
- Building production applications
- Working with build tools (Webpack, Vite)
- Need better code organization
- Want tree-shaking and optimization
- Working in a team environment

## Converting to ES6 Modules

If you want to convert later:

1. **Set up local server:**
   ```bash
   # Any of these work:
   python3 -m http.server 8000
   npx serve .
   php -S localhost:8000
   ```

2. **Convert files** (as shown above)

3. **Benefits gained:**
   - Better maintainability
   - Smaller bundle sizes
   - Better development experience
   - Future-proof architecture

## Current Choice Justification

For this White Out Survival tutorial, script tags are perfect because:
- ✅ Easy to share (just zip and send)
- ✅ Works on any computer
- ✅ No technical setup required
- ✅ Ally can open directly in browser
- ✅ Simple to add new languages

The modular structure is already there - we just use script tags instead of imports for maximum compatibility!