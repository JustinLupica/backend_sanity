export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string'
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'icon_svg',
      type: 'document',
      title: 'IconSVG',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Icon Title'
        },
        {
          name: 'svgUrl',
          type: 'url',
          title: 'SVG URL',
          description: 'Enter the URL of the SVG icon.'
        }
      ]
    }
  ]
}
