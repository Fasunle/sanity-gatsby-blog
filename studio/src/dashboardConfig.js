export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '60367d54c26c3137ed2619aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-w75rmrb9',
                  apiId: 'fd17ad56-d290-4793-ac45-febc84c16b8e'
                },
                {
                  buildHookId: '60367d54562bd039666dd98b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-g8s3dhm3',
                  apiId: 'eedb714d-3dc2-45ae-8f92-d6e2e8de318c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Fasunle/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-g8s3dhm3.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
