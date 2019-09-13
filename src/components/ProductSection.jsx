import React from "react"

import ProductStyles from "./Product.module.scss"

const ProductSection = () => (
  <section className={ProductStyles.wrapper}>
    <h2 className={ProductStyles.title}>Products</h2>
    <div className={ProductStyles.card}>
      <div>
        <h3>Raw Pineapple Flower Honey</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos nam
          sed officia beatae! Ex nostrum libero magni veniam dolore?
        </p>
        <div className={ProductStyles.priceInfo}>
          <p>
            <strong>Weight:</strong> 10KG / Bottle
          </p>
          <p>
            <strong>Price:</strong> RM 550
          </p>
        </div>
      </div>
    </div>
    <div className={ProductStyles.card}>
      <div>
        <h3>Raw Durian Flower Honey (Season)</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          dignissimos quibusdam ipsa possimus quasi natus sint voluptas ducimus
          minus? Illo harum esse quidem quasi, pariatur ipsum temporibus sed
          perferendis a.
        </p>
        <div className={ProductStyles.priceInfo}>
          <p>
            <strong>Weight:</strong> 10KG / Bottle
          </p>
          <p>
            <strong>Price:</strong> RM 550
          </p>
        </div>
      </div>
    </div>
    <div className={ProductStyles.card}>
      <div>
        <h3>Raw Forest Flower Honey</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
          quaerat officia est laboriosam corrupti.
        </p>
        <div className={ProductStyles.priceInfo}>
          <p>
            <strong>Weight:</strong> 10KG / Bottle
          </p>
          <p>
            <strong>Price:</strong> RM 550
          </p>
        </div>
      </div>
    </div>
    <div className={ProductStyles.card}>
      <div>
        <h3>Mixed Flower Honey</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
          quaerat officia est laboriosam corrupti.
        </p>
        <div className={ProductStyles.priceInfo}>
          <p>
            <strong>Weight:</strong> 10KG / Bottle
          </p>
          <p>
            <strong>Price:</strong> RM 550
          </p>
        </div>
      </div>
    </div>
    <div className={ProductStyles.card}>
      <div>
        <h3>Osmanthus Flower Honey (Season)</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam
          quaerat officia est laboriosam corrupti.
        </p>
        <div className={ProductStyles.priceInfo}>
          <p>
            <strong>Weight:</strong> 10KG / Bottle
          </p>
          <p>
            <strong>Price:</strong> RM 550
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default ProductSection
