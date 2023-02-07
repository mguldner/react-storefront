import { ProductCollectionQueryVariables, useProductCollectionQuery } from "@/saleor/api";
import { useRegions } from "../RegionsProvider";
import { mapEdgesToItems } from "@/lib/maps";
import Image from "next/legacy/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselProduct from "./CarouselProduct";

export interface CarouselProductsProps {
  collectionIDs?: string[];
}

export function CarouselProducts({ collectionIDs }: CarouselProductsProps) {
  const { query } = useRegions();
  const variables: ProductCollectionQueryVariables = {
    filter: { collections: collectionIDs },
    ...query,
  };

  const { data } = useProductCollectionQuery({
    variables,
  });

  const products = mapEdgesToItems(data?.products);

  const renderThumbs = () =>
    products.map((product) => {
      const thumbnailUrl = product.media?.find((media) => media.type === "IMAGE")?.url;

      return (
        <div key={product.id} className="w-full h-20 relative">
          {thumbnailUrl ? <Image src={thumbnailUrl} layout="fill" objectFit="contain" /> : <p></p>}
        </div>
      );
    });

  return (
    <div className="mt-4">
      <Carousel
        showStatus={false}
        showIndicators={false}
        showArrows={true}
        showThumbs={true}
        renderThumbs={renderThumbs}
      >
        {products.map((product) => (
          <CarouselProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselProducts;
