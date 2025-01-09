import NotFoundPage from "@/components/organisms/pages/NotFoundPage";
import EmptyPageTemplate from "@/components/templates/EmptyTemplate";

export default function NotFound() {
  return (
    <EmptyPageTemplate title="Oeps! Hier is iets misgelopen..">
      <NotFoundPage />
    </EmptyPageTemplate>
  );
}
