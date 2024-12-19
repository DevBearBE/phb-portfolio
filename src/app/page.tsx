import Overlay from "@/components/atoms/Overlay";
import CookieBanner from "@/components/molecules/CookieBanner";
import { getCookieValue } from "@/lib/storage/cookies";

export default async function Home() {
  const consentCookieValue = await getCookieValue("consent");
  const hasCookieConsent = Boolean(consentCookieValue);

  return (
    <>
      {!hasCookieConsent && (
        <Overlay>
          <CookieBanner />
        </Overlay>
      )}
      Home
    </>
  );
}
