import { unstable_setRequestLocale } from "next-intl/server";
import { defineOneEntry } from "oneentry";

import { Footer } from "@/components/footer/footer-site";
import { Header } from "@/components/header/header-site";
import {
  AboutBlock,
  ChurchTeamBlock,
  ImportantInformationBlock,
  PreviewBlock,
  ServeGodBlock,
  ShareBlock,
  VideoBlock,
  WriteUsBlock,
} from "@/components/main-page";

const getServerSideProps = async () => {
  const api = defineOneEntry("https://lifesource.oneentry.cloud", {
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2h1cmNoLWxpZmUiLCJzZXJpYWxOdW1iZXIiOjEsImlhdCI6MTcxNDM4NDg3NiwiZXhwIjoxNzQ1OTIwODU0fQ._5l8aKyrYNCrPvg7OpP4vC3ZeoG6SSulEiOwwPnrJ1c",
    langCode: "uk_UK",
  });

  return api.Pages.getPageByUrl("main_content");
};

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const api = await getServerSideProps();
  console.log(api);
  return (
    <>
      <Header />
      <main className="flex-[1_0_auto]">
        <PreviewBlock />
        <ImportantInformationBlock />
        <VideoBlock />
        <AboutBlock />
        <ChurchTeamBlock />
        <ServeGodBlock />
        <ShareBlock />
        <WriteUsBlock />
      </main>
      <Footer />
    </>
  );
}
