// Alias dla useLanguage, używany w komponentach które importują useTranslation
import { useLanguage } from './LanguageProvider';

// Eksportujemy useLanguage jako useTranslation dla kompatybilności 
// z komponentami używającymi tej nazwy
export const useTranslation = useLanguage;

export default useTranslation; 