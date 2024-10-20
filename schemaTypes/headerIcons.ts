export default {
  name: 'headerSkills',
  title: 'Header Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'size',
      title: 'Size',
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
    }
  ]
}
