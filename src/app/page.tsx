import Overlay from "@/components/atoms/Overlay";
import CookieBanner from "@/components/molecules/CookieBanner";
import HomePage from "@/components/organisms/pages/HomePage";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
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
      <BasicPageTemplate>
        <HomePage />
      </BasicPageTemplate>
    </>
  );
}
