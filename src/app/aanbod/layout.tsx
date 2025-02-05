import BreadCrumb from "@/components/atoms/Breadcrumb";
import TabWithIcon from "@/components/atoms/TabWithIcon";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import { PropsWithChildren } from "react";
import { RiBrain2Fill, RiParentFill } from "react-icons/ri";

export default async function AanbodLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <BasicPageTemplate>
        <BreadCrumb pathSegment="aanbod" />
        <ul className="flex border-b border-polar-ice-200">
          <TabWithIcon
            link={{
              text: "Diagnostisch onderzoek",
              path: "/aanbod/diagnostisch-onderzoek",
            }}
          >
            <RiBrain2Fill className="shrink-0" size={24} />
          </TabWithIcon>
          <TabWithIcon
            link={{
              text: "Psychologische begeleiding",
              path: "/aanbod/begeleiding",
            }}
          >
            <RiParentFill className="shrink-0" size={24} />
          </TabWithIcon>
        </ul>
        <div>{children}</div>
      </BasicPageTemplate>
    </>
  );
}
