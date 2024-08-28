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
  const {session} = await authenticate.admin(request);  
  const {shop,accessToken} = session;
  return json({ shop,accessToken });
};




export default function Index() {
  const {accessToken} = useLoaderData();
  return (
    <div>
      <h1>Shopiy Themes</h1>
      <p>{accessToken}</p>
      <p></p>
    </div>
  );
}
