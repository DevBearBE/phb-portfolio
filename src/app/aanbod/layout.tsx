import BreadCrumb from "@/components/atoms/Breadcrumb";
import TabNavigation from "@/components/molecules/TabNavigation";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Aanbod",
};

export default async function AanbodLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <BasicPageTemplate>
        <BreadCrumb pathSegment="aanbod" />
        <TabNavigation />
        <div>{children}</div>
      </BasicPageTemplate>
    </>
  );
}
