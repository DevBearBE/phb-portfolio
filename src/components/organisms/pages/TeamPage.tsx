import BreadCrumb from "@/components/atoms/Breadcrumb";
import CardBody from "@/components/atoms/CardBody";
import CardHeader from "@/components/atoms/CardHeader";
import FooterLinkWithIcon from "@/components/atoms/FooterLinkWithIcon";
import Heading from "@/components/atoms/Heading";
import Card from "@/components/molecules/Card";
import { TeamMember } from "@/lib/types/team";
import Link from "next/link";
import {RiMailLine, RiSmartphoneLine} from "react-icons/ri";
import Button from "@/components/atoms/Button";

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
          <CardHeader>
              <Heading as="h1" size="md">
                  Collega psychiater, neuroloog,...
              </Heading>
              <p>
                  <i>ism Praktijk Het Bergsken</i>
              </p>
          </CardHeader>
          <CardBody>
              <p>
                  Indien een bepaalde vraag of problematiek een multidisciplinaire
                  aanpak vraagt, wordt er samengewerkt met verschillende externe
                  hulpverleners (logopedist, kinesist, psychomotorisch therapeut,..) en
                  gespecialiseerde artsen (kinderpsychiater, kinderneuroloog,..) uit de
                  regio.
              </p>
          </CardBody>
        </Card>
      </div>
        <Heading as="h2" size="sm">Samenwerkingen</Heading>
        <div className="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-16">
            <Card>
                <CardHeader>
                    <Heading as="h1" size="md">
                       Helene Kemps
                    </Heading>
                    <p>
                        <i>Logopedist</i>
                    </p>
                </CardHeader>
                <CardBody>
                    <div className='w-full h-full flex flex-col gap-2'>
                        <p>
                            Website:{" "}
                            <Button theme="tertiairy">
                                <Link
                                    href='https://www.logopediste-kemps.be/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Logopediste-kemps.be
                                </Link>
                            </Button>
                        </p>
                        <FooterLinkWithIcon
                            link={{
                                text: "+32 472/75.14.50",
                                url: "tel:+32472751450",
                            }}
                        >
                            <RiSmartphoneLine color="#4b5563" size={24} />
                        </FooterLinkWithIcon>
                        <FooterLinkWithIcon
                            link={{
                                text: "helenekemps.logopedie@gmail.com",
                                url: "mailto:helenekemps.logopedie@gmail.com",
                            }}
                        >
                            <RiMailLine color="#4b5563" size={24} />
                        </FooterLinkWithIcon>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Heading as="h1" size="md">
                        Inge Van Ruijssevelt
                    </Heading>
                    <p>
                        <i>Logopedist Lier & Pulle</i>
                    </p>
                </CardHeader>
                <CardBody>
                    <div className='w-full h-full flex flex-col gap-2'>
                        <p>
                            Website:{" "}
                            <Button theme="tertiairy">
                                <Link
                                    href='https://www.omnino.be'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                >
                                    Omnino.be
                                </Link>
                            </Button>
                        </p>
                        <FooterLinkWithIcon
                            link={{
                                text: "+32 477/61.19.24",
                                url: "tel:+32477611924",
                            }}
                        >
                            <RiSmartphoneLine color="#4b5563" size={24} />
                        </FooterLinkWithIcon>
                        <FooterLinkWithIcon
                            link={{
                                text: "info@omnino.be",
                                url: "mailto:info@omnino.be",
                            }}
                        >
                            <RiMailLine color="#4b5563" size={24} />
                        </FooterLinkWithIcon>
                    </div>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <Heading as="h1" size="md">
                        Andere samenwerkingen
                    </Heading>
                </CardHeader>
                <CardBody>
                    <p>
                        Op uw vraag kan samengewerkt worden met andere betrokken hulpverleners, huisarts en eventueel school.
                        Dit alles steeds binnen het kader van het beroepsgeheim.
                    </p>
                </CardBody>
            </Card>
        </div>
    </>
  );
}
