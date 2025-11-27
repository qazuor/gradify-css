import { useTranslation } from "react-i18next";
import { HelpCircle } from "lucide-react";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Link } from "@/components/animate-ui/icons/link";
import { Lightbulb } from "@/components/animate-ui/icons/lightbulb";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LanguageSelector } from "@/components/common/LanguageSelector";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { siteConfig } from "@/config/site.config";

export function Header() {
  const { t } = useTranslation();
  const AppIcon = siteConfig.app.icon;

  const helpSections = [
    "gradientType",
    "adjustAngle",
    "colorStops",
    "preview",
    "history",
    "inspiration",
  ] as const;

  return (
    <header className="header-gradient border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <AppIcon className="text-primary h-6 w-6" />
            <h1 className="text-xl font-bold">{t("app.title")}</h1>
          </div>
          <span className="text-muted-foreground hidden sm:inline">|</span>
          <AnimateIcon animateOnHover asChild>
            <a
              href={siteConfig.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hidden items-center gap-1 text-sm transition-colors sm:flex"
            >
              by {siteConfig.author.name}
              <Link size={12} />
            </a>
          </AnimateIcon>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <AnimateIcon animateOnHover asChild>
                <Button variant="outline" size="icon">
                  <HelpCircle size={18} />
                  <span className="sr-only">{t("help.button")}</span>
                </Button>
              </AnimateIcon>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>{t("help.title")}</DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <div className="space-y-4">
                  {helpSections.map((section) => (
                    <div key={section} className="space-y-1">
                      <h3 className="text-sm font-semibold">
                        {t(`help.sections.${section}.title`)}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {t(`help.sections.${section}.description`)}
                      </p>
                    </div>
                  ))}
                  <div className="bg-primary/10 flex items-start gap-2 rounded-md p-3">
                    <Lightbulb size={18} className="text-primary mt-0.5 shrink-0" />
                    <p className="text-sm font-medium">{t("help.tip")}</p>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
