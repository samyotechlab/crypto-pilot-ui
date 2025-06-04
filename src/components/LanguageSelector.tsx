
import React from 'react';
import { Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const languageOptions = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'ar' as Language, name: 'Arabic', nativeName: 'العربية' },
  { code: 'es' as Language, name: 'Spanish', nativeName: 'Español' },
  { code: 'fr' as Language, name: 'French', nativeName: 'Français' },
  { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'de' as Language, name: 'German', nativeName: 'Deutsch' },
  { code: 'pt' as Language, name: 'Portuguese', nativeName: 'Português' },
  { code: 'zh' as Language, name: 'Chinese', nativeName: '中文' },
];

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  const currentLanguage = languageOptions.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <Languages className="w-4 h-4" />
          <span className="hidden sm:block text-sm">
            {currentLanguage?.nativeName || 'English'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languageOptions.map((langOption) => (
          <DropdownMenuItem
            key={langOption.code}
            onClick={() => setLanguage(langOption.code)}
            className={`cursor-pointer ${language === langOption.code ? 'bg-accent' : ''}`}
          >
            <div className="flex items-center justify-between w-full">
              <span>{langOption.nativeName}</span>
              <span className="text-sm text-muted-foreground">{langOption.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
