import BreadCrumb from "@/components/atoms/Breadcrumb";
import CardBody from "@/components/atoms/CardBody";
import CardHeader from "@/components/atoms/CardHeader";
import Heading from "@/components/atoms/Heading";
import Card from "@/components/molecules/Card";
import { TeamMember } from "@/lib/types/team";

type TeamPageProps = {
  team: ReadonlyArray<TeamMember>;
};

export default function TeamPage({ team }: TeamPageProps) {
  return (
    <>
      <BreadCrumb />
      <Heading as="h1" size="lg">
        Team
      </Heading>
      <div className="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-16">
        {team.map((teamMember) => (
          <Card key={teamMember.id}>
            <CardHeader teamMember={teamMember} />
            <CardBody teamMember={teamMember} />
          </Card>
        ))}

        <Card>
          <CardHeader />
          <CardBody />
        </Card>
      </div>
    </>
  );
}
