import ContactPage from "@/components/organisms/pages/ContactPage";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <BasicPageTemplate>
      <ContactPage />
    </BasicPageTemplate>
  );
}
