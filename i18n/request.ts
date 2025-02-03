import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieLocale =
    (await cookies()).get("NEXT_TRANSLATION_LOCALE")?.value || "en";
  const locale = cookieLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
