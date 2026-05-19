import { defineField, defineType } from "sanity";

// ── Amenity (object used inside accommodation) ────────────────────────────────
export const amenityObject = defineType({
  name: "amenity",
  title: "Amenity",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      title: "Icon Key",
      type: "string",
      description: "e.g. wifi, bath, tv, ac, balcony — matches your icon map",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "icon" },
  },
});

// ── Gallery image (object used inside accommodation) ──────────────────────────
export const sliderImageObject = defineType({
  name: "sliderImage",
  title: "Gallery Image",
  type: "object",
  fields: [
    defineField({
      name: "asset",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      description: "Optional caption shown on hover",
    }),
  ],
  preview: {
    select: { title: "label", media: "asset" },
    prepare({ title, media }) {
      return { title: title || "Gallery image", media };
    },
  },
});

// ── Unavailable period (for date filtering) ───────────────────────────────────
export const unavailablePeriodObject = defineType({
  name: "unavailablePeriod",
  title: "Unavailable Period",
  type: "object",
  fields: [
    defineField({
      name: "from",
      title: "From",
      type: "date",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "to",
      title: "To",
      type: "date",
      validation: (R) => R.required(),
    }),
  ],
  preview: {
    select: { from: "from", to: "to" },
    prepare({ from, to }) {
      return { title: `${from} → ${to}` };
    },
  },
});

// ── Accommodation (document) ──────────────────────────────────────────────────
export const accommodationSchema = defineType({
  name: "accommodation",
  title: "Accommodation",
  type: "document",

  groups: [
    { name: "basic",       title: "Basic Info",   default: true },
    { name: "capacity",    title: "Capacity"                    },
    { name: "media",       title: "Media"                       },
    { name: "content",     title: "Content"                     },
    { name: "booking",     title: "Booking"                     },
  ],

  fields: [
    // ── Basic ───────────────────────────────────────────────
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "basic",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "basic",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string",
      group: "basic",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      group: "basic",
      options: {
        list: [
          { title: "Villa",             value: "villa"             },
          { title: "Suite",             value: "suite"             },
          { title: "Deluxe Room",       value: "deluxe-room"       },
          { title: "Ocean View Room",   value: "ocean-view-room"   },
          { title: "Bungalow",          value: "bungalow"          },
          { title: "Presidential Suite",value: "presidential-suite"},
        ],
        layout: "radio",
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "face",
      title: "Faces",
      type: "string",
      group: "basic",
      description: "e.g. ocean, garden, pool, city",
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "basic",
      initialValue: false,
    }),

    // ── Capacity ────────────────────────────────────────────
    defineField({
      name: "guests",
      title: "Max Guests",
      type: "number",
      group: "capacity",
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: "bedrooms",
      title: "Bedrooms",
      type: "number",
      group: "capacity",
    }),
    defineField({
      name: "bathrooms",
      title: "Bathrooms",
      type: "number",
      group: "capacity",
    }),
    defineField({
      name: "roomSize",
      title: "Room Size (sqft)",
      type: "number",
      group: "capacity",
    }),
    defineField({
      name: "beds",
      title: "Beds",
      type: "string",
      group: "capacity",
      description: "e.g. 2 King Beds",
    }),

    // ── Media ───────────────────────────────────────────────
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      group: "media",
      options: { hotspot: true },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      group: "media",
      of: [{ type: "sliderImage" }],
    }),

    // ── Content ─────────────────────────────────────────────
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 2,
      group: "content",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
      group: "content",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      group: "content",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "amenities",
      title: "Amenities",
      type: "array",
      group: "content",
      of: [{ type: "amenity" }],
    }),

    // ── Booking ─────────────────────────────────────────────
    defineField({
      name: "availability",
      title: "Availability Status",
      type: "string",
      group: "booking",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Limited",   value: "limited"   },
          { title: "Booked",    value: "booked"     },
        ],
        layout: "radio",
      },
      initialValue: "available",
    }),
    defineField({
      name: "unavailablePeriods",
      title: "Unavailable Periods",
      type: "array",
      group: "booking",
      description: "Date ranges when this accommodation cannot be booked",
      of: [{ type: "unavailablePeriod" }],
    }),
  ],

  preview: {
    select: {
      title:    "title",
      subtitle: "type",
      media:    "mainImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle?.replace("-", " "),
        media,
      };
    },
  },

  orderings: [
    {
      title: "Title A–Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      title: "Featured First",
      name: "featuredFirst",
      by: [{ field: "featured", direction: "desc" }],
    },
  ],
});