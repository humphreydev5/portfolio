import {defineField, defineType} from 'sanity'

export default defineType({
  name:'experiences',
  title:'Experiences',
  type: 'document',
  fields:[
      {
          name:'year',
          title:'Year',
          type:'string'
      },
      {
          name:'works',
          title:'Works',
          type:'array',
          of:[{ type:'workExperience'}]
      },
  ]
})


