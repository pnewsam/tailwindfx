import { EffectsGrid } from "@/components/EffectsGrid";
import { getCategoryDetails } from "@/models/categories/utils";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";
import { tailwindEffects } from "@/data/tailwindEffects";

export default function HomePage() {
  const { title, description } = getCategoryDetails("all");

  const effects = tailwindEffects;

  return (
    <Layout currentPath="/">
      <PageHeader title={title} description={description} />
      <EffectsGrid effects={effects} />
    </Layout>
  );
}
