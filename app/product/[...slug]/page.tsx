import {newArrivalsData} from "../../data/data";
import PageProduct from "@/components/product_page";
import ReviewsContent from "@/components/product_page/ReviewsContent";
import ProductListSec from "@/components/product_page/ProductListSec";
import { Product } from "@/app/types/product.types";
import { notFound } from "next/navigation";

async function getExtraData() {
  //getting cached data
  // or getting extra data with new query
  return newArrivalsData;
}

async function getSuggestionsData() {
  //getting cached data
  return newArrivalsData.slice(9, 12);
}

export default async function ProductPage( { params }: { params: Promise<{ slug: string[] }>} ) {
  const data: Product[] = await getExtraData();
  const { slug } = await params;
  const productData = data.find(
    (product) => product.id === Number(slug[0])
  );

  if (!productData?.title) {
    notFound();
  }
  
  const suggest_data: Product[] = await getSuggestionsData();

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <section className="mb-11">

          <PageProduct data={productData} />
        
        </section>
      </div>
      <ReviewsContent/>
      <ProductListSec title="You might also like" data={suggest_data}/>
    </main>
  );
}
