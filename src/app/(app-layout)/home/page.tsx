import SectionTitle from '@/common/SectionTitle';
import PageTitle from '@/common/PageTitle';
import SearchResults from '@/search/SearchResults';
import ProductFilter from '@/search/ProductFilter';
import { getMetadata } from '@/seo/SeoUtils';

export const metadata = getMetadata({ title: 'Search Products' });

export default function SearchPage() {
  const productFilter = <ProductFilter />;

  return (
    <>
      <PageTitle title="Search Products" srOnly />
      <div className="grid md:grid-cols-[theme(spacing.72)_1fr] gap-2">
        <section>
          <SectionTitle as="h2" srOnly>
            Search Results
          </SectionTitle>
          <div className="flex flex-col gap-2">
            <SearchResults />
          </div>
        </section>
      </div>
    </>
  );
}
