import { ProductCardFragment } from "@/saleor/api";
import Image from "next/legacy/image";
import Link from "next/link";
import { usePaths } from "@/lib/paths";

export interface ProductCardProps {
  product: ProductCardFragment;
}

export function CarouselProduct({ product }: ProductCardProps) {
  const paths = usePaths();
  const thumbnailUrl = product.media?.find((media) => media.type === "IMAGE")?.url;

  return (
    <Link href={paths.products._slug(product.slug).$url()} prefetch={false} passHref legacyBehavior>
      <a>
        {thumbnailUrl ? (
          <Image alt={product.name} src={thumbnailUrl} width={512} height={512} />
        ) : (
          <p>Problème au chargement</p>
        )}
      </a>
    </Link>
  );
}

export default CarouselProduct;
