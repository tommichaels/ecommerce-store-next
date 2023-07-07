import React from 'react';
import { Inter } from 'next/font/google';
import { Product, FooterBanner, HeroBanner } from '@/components';
import { client } from '@/lib/client';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  products: Product[];
  bannerData: Banner[];
}

export default function Home({ products, bannerData }: HomeProps) {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length > 0 ? bannerData[0] : null} />
      <div className="products-heading">
        <h2>Best Seller Products</h2>
        <p>Check out our best selling products!</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData.length > 0 ? bannerData[0] : null} />
    </div>
  );
}

export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch<Product[]>(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch<Banner[]>(bannerQuery);

  return {
    props: { products, bannerData },
  };
}
