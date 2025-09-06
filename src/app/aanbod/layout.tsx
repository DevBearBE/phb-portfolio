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
    const pathSegment = "aanbod";

  return (
    <>
      <BasicPageTemplate>
        <BreadCrumb pathSegment={pathSegment} />
        <TabNavigation pathSegment={pathSegment} />
        <div>{children}</div>
      </BasicPageTemplate>
    </>
  );
}
