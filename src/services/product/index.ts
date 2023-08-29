export const Product = {
  async getProducts() {
    return await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/api/products`)
      .then((res) => res.json())
      .then((d) => JSON.parse(d))
  }
}