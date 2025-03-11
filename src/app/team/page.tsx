import TeamPage from "@/components/organisms/pages/TeamPage";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import { fetchLocalData } from "@/lib/helpers/fetch";
import { TeamResponse, TeamResponseSchema } from "@/lib/types/team/responses";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

export default async function Team() {
  const response = await fetchLocalData<TeamResponse>("team.json");
  const { team } = TeamResponseSchema.parse(response);

  return (
    <BasicPageTemplate>
      <TeamPage team={team} />
    </BasicPageTemplate>
  );
}
