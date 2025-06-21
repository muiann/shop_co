import {newArrivalsData} from "../../data/data";
import Header from "@/components/product_page";
import { Product } from "@/app/types/product.types";
import { notFound } from "next/navigation";

async function getExtraData() {
  //getting cached data
  // or getting extra data with new query
  return newArrivalsData;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string[] };
}) {
  
const data: Product[] = await getExtraData();
  const productData = data.find(
    (product) => product.id === Number(params.slug[0])
  );

  if (!productData?.title) {
    notFound();
  }

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <section className="mb-11">
          <Header data={productData} />
        </section>
      </div>
    </main>
  );
}
