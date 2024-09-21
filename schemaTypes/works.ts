export default {
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'projectLink',
      title: 'Project Link',
      type: 'string'
    },
    {
      name: 'codeLink',
      title: 'Code Link',
      type: 'string'
    },
    {
      name: 'imgUrl',
      title: 'ImageUrl',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'technologies',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'technologyItem',
          title: 'Technology Item',
          fields: [
            {
              name: 'technology',
              title: 'Technology',
              type: 'string'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'image'
            }
          ]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    }
  ]
}
