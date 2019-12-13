export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df369b212565e5682ab2ba6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o6a9a1t3',
                  apiId: '13335e2c-0723-40d4-aedc-34d963aa8f4f'
                },
                {
                  buildHookId: '5df369b39f4e700f3c4bc394',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-571d6chs',
                  apiId: 'f0e9a4c1-0e51-43e1-ba1b-052a18102c6c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevenocchipinti/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-571d6chs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
