import { EffectsGrid } from "@/components/EffectsGrid";
import { getCategoryDetails } from "@/models/categories/utils";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";
import { tailwindEffects } from "@/data/tailwindEffects";
import { filterEffects } from "@/models/tailwindEffect/utils";

export default async function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const path = `/${params.categories.join("/")}`;
  const categoryKey = path === "/" ? "all" : path.slice(1);
  const { title, description } = getCategoryDetails(categoryKey);

  const effects = filterEffects(tailwindEffects, categoryKey, "");

  return (
    <Layout currentPath={path}>
      <PageHeader title={title} description={description} />
      <EffectsGrid effects={effects} />
    </Layout>
  );
}
