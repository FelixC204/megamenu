import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";
import {
  Page,
  Layout,
  Text,
  Card,
  Button,
  BlockStack,
  Box,
  List,
  Link,
  InlineStack,
} from "@shopify/polaris";
import { TitleBar, useAppBridge } from "@shopify/app-bridge-react";
import { authenticate } from "../shopify.server";
import db from "../db.server";
import { useLoaderData } from "@remix-run/react";
import { getAccessToken, getSession } from "../utils/sessionManager.js";

export const loader = async ({ request }) => {
  await authenticate.admin(request);  
  const shopDomain = "onextstore.myshopify.com";
  const Access_Token = await getAccessToken(shopDomain);
  return json({ Access_Token });
};



export default function Index() {
  const {Access_Token} = useLoaderData();
  console.log(prisma.session);
  return (
    <div>
      <h1>Shopiy Themes</h1>
      <p>{Access_Token}</p>
    </div>
  );
}
