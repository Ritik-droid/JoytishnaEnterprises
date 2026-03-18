// ❌ NO "use client"

import ProductDetailClient from "./ProductDetailClient";
import ContactUS from "@/components/ContactUS/ContactUS"
export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ FIX: await params
  const { slug } = await params;

  let product: any = null;

  try {
    product = await import(`@/data/products/${slug}`).then((m) => m.default);
  } catch (error) {
    console.error("IMPORT ERROR:", error);
  }

  if (!product) {
    return (
      <div style={{ color: "#fff" }}>
        Product not found: {slug}
      </div>
    );
  }

  return(
    <>
  <ProductDetailClient product={product} /><ContactUS/>
    </>
) ;
}