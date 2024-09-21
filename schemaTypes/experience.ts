export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string'
      // validation: Rule => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string'
      // validation: Rule => Rule.required(),
    },
    {
      name: 'startYear',
      title: 'Start Month/Year',
      type: 'string'
      // validation: Rule => Rule.required().min(1900).max(new Date().getFullYear()),
    },
    {
      name: 'endYear',
      title: 'End Month/Year',
      type: 'string',
      // validation: Rule => Rule.required().min(1900).max(new Date().getFullYear()),
      description: 'Use the current year if still employed'
    },
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
  ],
  orderings: [
    {
      title: 'Start Year, New to Old',
      name: 'startYearDesc',
      by: [
        { field: 'startYear', direction: 'desc' },
        { field: 'endYear', direction: 'desc' }
      ]
    }
  ]
}
