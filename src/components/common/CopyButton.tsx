import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface CopyButtonProps {
  text: string;
  onCopy?: () => void;
}

export function CopyButton({ text, onCopy }: CopyButtonProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    onCopy?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleCopy} variant="default" className="w-full">
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                {t("actions.copied")}
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                {t("actions.copy")}
              </>
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? t("actions.copied") : t("actions.copy")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
