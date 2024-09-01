import { ClientSideEffects } from "@/components/ClientSideEffects";
import { categoryDetails } from "@/data/categoryDetails";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";
import { getTailwindEffects } from "@/queries/tailwindEffects";

export default async function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const path = `/${params.categories.join("/")}`;
  const categoryKey = path === "/" ? "all" : path.slice(1);
  const { title, description } =
    categoryDetails[categoryKey] || categoryDetails["all"];

  const effects = await getTailwindEffects(categoryKey);

  return (
    <Layout currentPath={path}>
      <PageHeader title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {effects.length > 0 && <ClientSideEffects effects={effects} />}
      </div>
    </Layout>
  );
}
