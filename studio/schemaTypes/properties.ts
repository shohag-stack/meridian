import { defineType, defineField } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",

  fields: [
    // Basic
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    // Status (single select)
    defineField({
      name: "status",
      title: "Property Status",
      type: "string",
      options: {
        list: [
          { title: "For Sale", value: "for-sale" },
          { title: "For Rent", value: "for-rent" },
          { title: "Sold", value: "sold" },
          { title: "Off Market", value: "off-market" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Type (single select)
    defineField({
      name: "type",
      title: "Property Type",
      type: "string",
      options: {
        list: [
          { title: "House", value: "house" },
          { title: "Apartment", value: "apartment" },
          { title: "Condo", value: "condo" },
          { title: "Villa", value: "villa" },
          { title: "Penthouse", value: "penthouse" },
          { title: "Townhouse", value: "townhouse" },
          { title: "Land", value: "land" },
          { title: "Commercial", value: "commercial" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // Pricing
    defineField({
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "priceFrequency",
      type: "string",
      options: {
        list: [
          { title: "Monthly", value: "month" },
          { title: "Yearly", value: "year" },
        ],
      },
      hidden: ({ document }) => document?.status !== "for-rent",
    }),

    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "newListing", type: "boolean", initialValue: true }),

    // Location
    defineField({ name: "address", type: "string" }),
    defineField({ name: "city", type: "string" }),
    defineField({ name: "state", type: "string" }),
    defineField({ name: "zipCode", type: "string" }),
    defineField({ name: "neighborhood", type: "string" }),

    defineField({
      name: "coordinates",
      type: "object",
      fields: [
        { name: "lat", type: "number" },
        { name: "lng", type: "number" },
      ],
    }),

    // Property details
    defineField({ name: "bedrooms", type: "number" }),
    defineField({ name: "bathrooms", type: "number" }),
    defineField({ name: "garages", type: "number" }),
    defineField({ name: "area", type: "number", title: "Area (sqft)" }),
    defineField({ name: "lotSize", type: "number", title: "Lot Size (sqft)" }),
    defineField({ name: "yearBuilt", type: "number" }),
    defineField({ name: "floors", type: "number" }),

    // Media
    defineField({
      name: "mainImage",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "image" }],
    }),

    // Content
    defineField({
      name: "description",
      type: "text",
      rows: 6,
    }),

    defineField({
      name: "shortDescription",
      type: "string",
    }),

    defineField({
      name: "features",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "amenities",
      type: "array",
      of: [{ type: "string" }],
    }),


    // Meta (handled automatically but useful)
    defineField({
      name: "createdAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "updatedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});