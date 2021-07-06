import LocalizedStrings from 'react-native-localization';

// languages
import en from './en/en.json';
import ar from './ar/ar.json';

const localStrings = new LocalizedStrings({
    "en-US": en,
    en: en,
    ar: ar
});

export default localStrings;