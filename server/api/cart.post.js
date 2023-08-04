import Stripe from "stripe";

export default defineEventHandler(async (event) => {
  const body = await useBody(event)
  const product = body.map((product) => ({
    ids: product.id,
    quantity: product.count,
  }))
  // return product.map(product => product.ids)
  const stripeSecretKey = useRuntimeConfig().stripeSecret
  const stripe = new Stripe(stripeSecretKey)
  const res = await stripe.products.list({
    ids: product.map(product => product.ids),
  })
  const lineItems = res.data.map((item) => ({
    price: item.default_price,
    quantity: product.find((product) => product.ids === item.id).quantity,
  }))
  
  const session = await stripe.checkout.sessions.create({
    cancel_url: "https://localhost:3000/cart",
    success_url: "https://localhost:3000/checkout/success",
    mode: "payment",
    line_items: lineItems,
  })
  return session
  
 
})
