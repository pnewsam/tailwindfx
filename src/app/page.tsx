import { EffectsGrid } from "@/components/EffectsGrid";
import { categoryDetails } from "@/data/categories/utils";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";

export default function HomePage() {
  const { title, description } = categoryDetails["all"];

  return (
    <Layout currentPath="/">
      <PageHeader title={title} description={description} />
      <EffectsGrid categoryKey="all" />
    </Layout>
  );
}
