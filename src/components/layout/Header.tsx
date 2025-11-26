import { ExternalLink, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

import { LanguageSelector } from "@/components/common/LanguageSelector";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Palette className="text-primary h-6 w-6" />
            <h1 className="text-xl font-bold">{t("app.title")}</h1>
          </div>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <a
            href="https://qazuor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hidden items-center gap-1 text-sm transition-colors sm:flex"
          >
            by qazuor
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
