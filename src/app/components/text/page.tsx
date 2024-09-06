import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { EffectsGrid } from "@/components/EffectsGrid";
import { tailwindEffects } from "@/data/tailwindEffects/mocks";
import { categoryDetails } from "@/data/categories/utils";

const details = categoryDetails["components/text"];

const textEffects = tailwindEffects.filter(
  (effect) => effect.category === "components/text"
);

export default function TextPage() {
  return (
    <Layout currentPath="/components/text">
      <PageHeader title={details.title} description={details.description} />
      <EffectsGrid effects={textEffects} />
    </Layout>
  );
}