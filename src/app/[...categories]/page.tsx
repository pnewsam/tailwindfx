import { ClientSideEffects } from "@/components/ClientSideEffects";
import { categoryDetails } from "@/data/categoryDetails";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";

export default async function CategoryPage({
  params,
}: {
  params: { categories: string[] };
}) {
  const path = `/${params.categories.join("/")}`;
  const categoryKey = path === "/" ? "all" : path.slice(1);
  const { title, description } =
    categoryDetails[categoryKey] || categoryDetails["all"];

  return (
    <Layout currentPath={path}>
      <PageHeader title={title} description={description} />
      <ClientSideEffects categoryKey={categoryKey} />
    </Layout>
  );
}
