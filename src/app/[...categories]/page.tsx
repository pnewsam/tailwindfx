import { EffectsGrid } from "@/components/EffectsGrid";
import { categoryDetails } from "@/data/categories/utils";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";
import { tailwindEffects } from "@/data/tailwindEffects";
import { filterEffects } from "@/data/tailwindEffects/utils";

export default async function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const path = `/${params.categories.join("/")}`;
  const categoryKey = path === "/" ? "all" : path.slice(1);
  const { title, description } =
    categoryDetails[categoryKey] || categoryDetails["all"];

  const effects = filterEffects(tailwindEffects, categoryKey, "");
  console.log({ categoryKey, path, effects });

  return (
    <Layout currentPath={path}>
      <PageHeader title={title} description={description} />
      <EffectsGrid effects={effects} />
    </Layout>
  );
}
