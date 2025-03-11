import AboutPage from "@/components/organisms/pages/AboutPage";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over",
};

export default function Contact() {
  return (
    <BasicPageTemplate>
      <AboutPage />
    </BasicPageTemplate>
  );
}
