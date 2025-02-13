import { RiBrain2Fill, RiParentFill } from "react-icons/ri";
import TabWithIcon from "../atoms/TabWithIcon";

export default function TabNavigation() {
  return (
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
  );
}
