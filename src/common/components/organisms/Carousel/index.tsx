import { INTERFACE_OUR_PRODUCTS } from '@interfaces/our-products.interface'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 }
}

type Props = {
  OUR_PRODUCTS: INTERFACE_OUR_PRODUCTS[]
  icon: JSX.Element
}

const Carousel = (props: Props) => {
  return (
    <>
      <AliceCarousel
        responsive={responsive}
        autoPlay
        // autoPlayControls
        // autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={2000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={props.OUR_PRODUCTS.map(
          (product: { id: number; name: string; price: number; image: string }, index: number) => {
            const { id, name, price, image } = product
            return (
              <article
                key={id}
                className={`card card-product ${index < props.OUR_PRODUCTS.length ? 'mx-4' : ''}`}
              >
                <Image
                  blurDataURL={image}
                  src={image}
                  alt="Picture of the author"
                  width={500}
                  height={270}
                  className="bg-sm_grey-100"
                />
                <div className="card-body flex flex-col gap-4">
                  <p className="title line-clamp-1">{name}</p>
                  <div className="flex justify-between items-center">
                    <span>{`S/. ${price.toFixed(2)}`}</span>
                    <div className="w-11 py-2 px-3 bg-sm_grey-100 rounded-lg cursor-pointer">
                      {props.icon}
                    </div>
                  </div>
                </div>
              </article>
            )
          }
        )}
      />
    </>
  )
}

export default Carousel
