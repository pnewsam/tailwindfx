import { ClientSideEffects } from "@/components/ClientSideEffects";
import { categoryDetails } from "@/data/categoryDetails";
import { tailwindEffects } from "@/data/tailwindEffects";
import { PageHeader } from "@/components/PageHeader";
import { Layout } from "@/components/Layout";

export default function HomePage() {
  const { title, description } = categoryDetails["all"];

  return (
    <Layout currentPath="/">
      <PageHeader title={title} description={description} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ClientSideEffects effects={tailwindEffects} />
      </div>
    </Layout>
  );
}
