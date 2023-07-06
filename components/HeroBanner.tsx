import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../lib/client';

interface HeroBannerProps {
  heroBanner: {
    smallText: string;
    midText: string;
    largeText1: string;
    image: string;
    product: string;
    buttonText: string;
    desc: string;
  };
}

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <Image 
        src={urlFor(heroBanner.image).url()} 
        alt="headphones" 
        className="hero-banner-image" 
        width={250}
        height={250}
        />
        {/* <Image 
        src='https://cdn.sanity.io/images/vfxfwnaw/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp' 
        alt="headphones" 
        className="hero-banner-image" 
        width={250}
        height={250}
        These shouldn't be here ---> {console.log(urlFor(heroBanner.image))} {console.log(urlFor(heroBanner.image).url())}
        /> */}

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner