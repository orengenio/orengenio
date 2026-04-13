import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "status", "updatedAt"],
  },
  access: {
    read: ({ req: { user } }) => {
      // Published pages public; drafts only for authenticated users.
      if (user) return true;
      return { status: { equals: "published" } };
    },
  },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      admin: { description: "URL path (e.g. 'about'). Without leading slash." },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        { label: "Draft", value: "draft" },
        { label: "Published", value: "published" },
      ],
    },
    {
      name: "meta",
      type: "group",
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        { name: "ogImage", type: "upload", relationTo: "media" },
      ],
    },
    {
      name: "blocks",
      type: "blocks",
      blocks: [
        {
          slug: "hero",
          fields: [
            { name: "eyebrow", type: "text" },
            { name: "headline", type: "text", required: true },
            { name: "subhead", type: "textarea" },
            { name: "ctaLabel", type: "text" },
            { name: "ctaHref", type: "text" },
          ],
        },
        {
          slug: "richtext",
          fields: [
            { name: "content", type: "richText", required: true },
          ],
        },
        {
          slug: "features",
          fields: [
            { name: "title", type: "text" },
            {
              name: "items",
              type: "array",
              fields: [
                { name: "icon", type: "text" },
                { name: "title", type: "text", required: true },
                { name: "description", type: "textarea" },
              ],
            },
          ],
        },
        {
          slug: "cta",
          fields: [
            { name: "headline", type: "text", required: true },
            { name: "body", type: "textarea" },
            { name: "primaryLabel", type: "text" },
            { name: "primaryHref", type: "text" },
            { name: "secondaryLabel", type: "text" },
            { name: "secondaryHref", type: "text" },
          ],
        },
      ],
    },
    { name: "publishedAt", type: "date" },
  ],
};
