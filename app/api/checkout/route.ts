import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";

export async function POST(request: Request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    return NextResponse.json(
      { error: "Stripe secret key is missing" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecretKey);

  const { productId } = await request.json();

  const product = products.find(
    (item) => item.id === productId && item.status === "Available"
  );

  if (!product || !product.priceId) {
    return NextResponse.json(
      { error: "Product is not available" },
      { status: 400 }
    );
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: product.priceId,
        quantity: 1,
      },
    ],
    metadata: {
      productId: product.id,
    },
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#resources`,
  });

  return NextResponse.json({ url: session.url });
}