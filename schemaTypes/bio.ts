export default {
  name: 'bio',
  title: 'Bio',
  type: 'document',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ]
        }
      ]
    }
  ]
}
