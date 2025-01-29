import TeamPage from "@/components/organisms/pages/TeamPage";
import BasicPageTemplate from "@/components/templates/BasicTemplate";
import { fetchLocalData } from "@/lib/helpers/fetch";
import { TeamResponse, TeamResponseSchema } from "@/lib/types/team/responses";

export default async function Team() {
  const response = await fetchLocalData<TeamResponse>("team.json");
  const { team } = TeamResponseSchema.parse(response);

  return (
    <BasicPageTemplate>
      <TeamPage team={team} />
    </BasicPageTemplate>
  );
}
