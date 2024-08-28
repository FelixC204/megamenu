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
  const accessToken = await getAccessToken();
  const session = await getSession();
  return json({ accessToken , session });
};



export default function Index() {
  const { accessToken } = useLoaderData();
  const { session } = useLoaderData();
  const sessionUser = JSON.stringify(session, null, 2)
  console.log("Access Token:", accessToken);
  return (
    <div>
      <h1>Shopiy Themes</h1>
      <p>Access Token: {accessToken}</p>
      <p>session: {sessionUser}</p>
    </div>
  );
}
