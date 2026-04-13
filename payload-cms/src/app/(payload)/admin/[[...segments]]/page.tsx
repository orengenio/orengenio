import config from "@payload-config";
import { generatePageMetadata, RootPage } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";

export const generateMetadata = ({ params, searchParams }: any) =>
  generatePageMetadata({ config, params, searchParams });

const Page = ({ params, searchParams }: any) =>
  RootPage({ config, params, searchParams, importMap });

export default Page;
