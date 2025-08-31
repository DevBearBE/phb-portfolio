import { TeamMember } from "@/lib/types/team";
import {PropsWithChildren} from "react";

type CardBodyProps = {
  teamMember?: TeamMember;
};

export default function CardBody({ children, teamMember }: PropsWithChildren<CardBodyProps>) {
  if (!teamMember) {
    return (
      <>
          {children}
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <p>
          <b>Erkend psycholoog:</b> {teamMember.approvalNumber}
        </p>
        <p>
          <b>FOD Volksgezondheid:</b> {teamMember.visumNumber}
        </p>
        <p>{teamMember.short}</p>
      </div>
    </>
  );
}
