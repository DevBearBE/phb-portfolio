import Heading from "@/components/atoms/Heading";
import { TeamMember } from "@/lib/types/team";
import Image from "next/image";

type CardHeaderProps = {
  readonly teamMember?: TeamMember;
};

export default function CardHeader({ teamMember }: CardHeaderProps) {
  if (!teamMember) {
    return (
      <>
        <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 items-center md:items-start">
          <Image
            className="object-contain"
            src="/profile-avatar-man.jpg"
            alt="John doe"
            width={100}
            height={100}
          />
          <div>
            <Heading as="h1" size="md">
              Collega psychiater, neuroloog,...
            </Heading>
            <p>
              <i>ism Praktijk Het Bergsken</i>
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 items-center md:items-start">
        <Image
          className="object-contain"
          src={teamMember.profilePicture ?? "/profile-avatar-man.jpg"}
          alt={`${teamMember.firstName} ${teamMember.lastName}`}
          width={100}
          height={100}
        />
        <div>
          <Heading as="h1" size="md">
            {teamMember.firstName} {teamMember.lastName}
          </Heading>
          <p>
            <i>{teamMember.jobTitle}</i>
          </p>
        </div>
      </div>
    </>
  );
}
