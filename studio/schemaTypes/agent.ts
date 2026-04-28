import { defineType, defineField } from "sanity";

export default defineType({
  name: "agent",
  title: "Agent",
  type: "document",

  fields: [
    // Basic Info
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Real Estate Agent",
    }),

    // Contact
    defineField({
      name: "phone",
      type: "string",
    }),

    defineField({
      name: "email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),

    // Media
    defineField({
      name: "photo",
      type: "image",
      options: { hotspot: true },
    }),

    // Content
    defineField({
      name: "bio",
      type: "text",
      rows: 4,
    }),

    // Optional: Social links (nice for UI polish)
    defineField({
      name: "socials",
      type: "object",
      fields: [
        { name: "facebook", type: "url" },
        { name: "linkedin", type: "url" },
        { name: "twitter", type: "url" },
        { name: "instagram", type: "url" },
      ],
    }),
  ],

  // 👇 Makes Studio UI much better
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "photo",
    },
  },
});