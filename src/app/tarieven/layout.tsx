import { Metadata } from "next";
import { PropsWithChildren } from "react";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import BreadCrumb from "@/components/atoms/Breadcrumb";
import TabNavigation from "@/components/molecules/TabNavigation";

export const metadata: Metadata = {
    title: "Tarieven",
}

export default function TariffLayout({
 children,
}: Readonly<PropsWithChildren>) {
    const pathSegment = "tarieven";

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