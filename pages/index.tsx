import React from 'react';
import { Inter } from 'next/font/google';
import { Product, FooterBanner, HeroBanner } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products, bannerData }) {
  return (
   <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>Check out our best selling products!</p>
    </div>

    <div className="products-container">
      {console.log(bannerData)}
      {
        products?.map((product) => <Product key={product._id} product={product} />)
      }
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
   </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}