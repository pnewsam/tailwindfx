import { ClientSideEffects } from "@/components/ClientSideEffects";
import { categoryDetails } from "@/data/categoryDetails";
import { filterEffects } from "@/utils/filterEffects";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";

export default function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const path = `/${params.categories.join("/")}`;
  const effects = filterEffects(path);
  const categoryKey = path === "/" ? "all" : path.slice(1);
  const { title, description } =
    categoryDetails[categoryKey] || categoryDetails["all"];

  return (
    <Layout currentPath={path}>
      <PageHeader title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientSideEffects effects={effects} />
      </div>
    </Layout>
  );
}
