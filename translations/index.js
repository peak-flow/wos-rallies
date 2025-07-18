// Import all language modules
import { en } from './en.js';
import { fr } from './fr.js';

// Export combined translations object
export const translations = {
    en,
    fr
};

// Translation utility function
export function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
        value = value?.[k];
    }
    
    return value || key;
}

// Available languages
export const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
];