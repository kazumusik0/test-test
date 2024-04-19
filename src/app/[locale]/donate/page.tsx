import { unstable_setRequestLocale } from "next-intl/server";

import {
  OtherDonateMethods,
  PreviewBlock,
  QrCodesBlock,
} from "@/components/donate-page";

export default function DonatePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <PreviewBlock />
      <QrCodesBlock />
      <OtherDonateMethods />
    </>
  );
}
