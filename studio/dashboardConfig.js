export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fc6f821f041f9a703020f9f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-a5xdys67',
                  apiId: '94b71ebf-7277-4041-8158-d1e6d4dd95ce'
                },
                {
                  buildHookId: '5fc6f821ddfbcdbe4d9089a0',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ucnh7kk2',
                  apiId: '6423ae91-c766-458b-8d61-413a2232b845'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexRogalskiy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ucnh7kk2.netlify.app', category: 'apps'}
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
