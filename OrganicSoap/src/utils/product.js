export const productPrice = (product) => Number(product.discounted_price ?? product.discountedPrice ?? product.price ?? 0);

export function normalizeProduct(product) {
  return {
    ...product,
    id: product._id || product.id,
    image: product.images?.[0] || product.image || "https://placehold.co/600x600?text=Organic+Soap",
    category: product.category?.name || product.category || "Organic Soap",
    description: product.desc || product.description || "",
    rating: Number(product.ratingAverage ?? product.rating ?? 0),
    reviewCount: Number(product.ratingCount ?? product.reviewCount ?? 0),
  };
}
