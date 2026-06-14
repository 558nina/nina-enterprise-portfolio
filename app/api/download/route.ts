import { NextResponse } from "next/server";
import Stripe from "stripe";
import { products } from "@/lib/products";
import path from "path";
import { readFile } from "fs/promises";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session ID" }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return NextResponse.json({ error: "Payment not verified" }, { status: 403 });
  }

  const productId = session.metadata?.productId;

  const product = products.find(
    (item) => item.id === productId && item.status === "Available"
  );

  if (!product || !product.fileName) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  const filePath = path.join(process.cwd(), "private-downloads", product.fileName);
  const fileBuffer = await readFile(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${product.fileName}"`,
    },
  });
}