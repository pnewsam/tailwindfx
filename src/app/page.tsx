import { ClientSideEffects } from "@/components/ClientSideEffects";
import { categoryDetails } from "@/data/categoryDetails";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";

export default function HomePage() {
  const { title, description } = categoryDetails["all"];

  return (
    <Layout currentPath="/">
      <PageHeader title={title} description={description} />
      <ClientSideEffects categoryKey="all" />
    </Layout>
  );
}
