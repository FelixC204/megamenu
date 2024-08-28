import db from "../db.server.js";

/**
 * Lấy accessToken dựa trên shop domain
 * @param {string} shop - Shop domain
 * @returns {string} accessToken - Token để gọi API Shopify
 * @throws {Error} Nếu không tìm thấy session cho shop
 */

export async function getShop(){
    const shop = await db.session.findFirst({
        select: { shop: true },
      });
      if (!shop) {
        throw new Error("No shop found in the database");
      }
      return shop.shop;
}

export async function getAccessToken() {
    const shopDomain = getShop()
    const session = await db.session.findFirst({
    where: { shop: shopDomain },
    select: { accessToken: true },
  });

  if (!session) {
    throw new Error("No session found for the shop");
  }

  return session.accessToken;
}

export async function getSession() {
  const shopDomain = await getShop();  
  const session = await db.session.findFirst({
      where: { shop: shopDomain },
  });

  if (!session) {
      throw new Error("No session found for the shop");
  }

  return session;
}

