import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured',
  type: 'document',
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Featured Category name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "address",
      type: "string",
      title: "Restaurant address",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "restaurants",
      title: "Restaurants",
      type: "array",
      of: [
        defineArrayMember({
          type:  "reference", 
          to: [{
            type: "restaurant"
          }]
        })
      ]
    })
  ]
})