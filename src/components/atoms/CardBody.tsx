import { TeamMember } from "@/lib/types/team";

type CardBodyProps = {
  teamMember?: TeamMember;
};

export default function CardBody({ teamMember }: CardBodyProps) {
  if (!teamMember) {
    return (
      <>
        <p>
          Indien een bepaalde vraag of problematiek een multidisciplinaire
          aanpak vraagt, wordt er samengewerkt met verschillende externe
          hulpverleners (logopedist, kinesist, psychomotorisch therapeut,..) en
          gespecialiseerde artsen (kinderpsychiater, kinderneuroloog,..) uit de
          regio.
        </p>
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
