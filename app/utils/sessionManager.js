import { Session } from "@shopify/shopify-app-remix/server";
import db from "../db.server.js";

/**
 * Lấy accessToken dựa trên shop domain
 * @param {string} shop - Shop domain
 * @returns {string} accessToken - Token để gọi API Shopify
 * @throws {Error} Nếu không tìm thấy session cho shop
 */


export async function getAccessToken(shopDomain) { 
    const session = await db.session.findFirst({
    where: { shop: shopDomain },
    select: { accessToken: true },
  });

  if (!session) {
    throw new Error("No session found for the shop");
  }

  return session.accessToken;
}

// export async function getSession() {
//   const shopDomain = await getShop();  
//   const session = await db.session.findFirst({
//       where: { shop: shopDomain },
//   });

//   if (!session) {
//       throw new Error("No session found for the shop");
//   }

//   return session;
// }

