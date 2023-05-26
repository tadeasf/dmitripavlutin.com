const siteUrl = 'https://dmitripavlutin.com'

module.exports = {
  siteUrl, // ensure compatibility with plugins that require `siteUrl`
  siteInfo: {
    title: 'Dmitri Pavlutin',
    description: 'I help developers understand Frontend technologies',
    metaTitle: 'Dmitri Pavlutin Blog',
    metaDescription:
      'Dmitri Pavlutin Blog is a place to learn about JavaScript, CSS, React, Vue and more on Frontend development',
    url: siteUrl,
    repositoryUrl: 'https://github.com/panzerdp/dmitripavlutin.com',
    githubCommentsRepository: 'panzerdp/dmitripavlutin.com-comments',
    googleCustomSearchId: '004443697379288327791:1zr8pgnumxn'
  },
  authorInfo: {
    name: 'Dmitri Pavlutin',
    description:
      'Software developer and sometimes writer. My daily routine consists of (but not limited to) drinking coffee, coding, writing, overcoming boredom 😉. Living in the sunny Barcelona. 🇪🇸',
    job: '',
    email: 'dmitripavlutin@gmail.com',
    jobTitle: 'Software Developer',
    profiles: {
      stackoverflow: 'https://stackoverflow.com/users/1894471/dmitri-pavlutin',
      twitter: 'https://twitter.com/panzerdp',
      linkedin: 'https://www.linkedin.com/in/dmitri-pavlutin/',
      github: 'https://github.com/panzerdp',
      facebook: 'https://www.facebook.com/dmitripavlutin.dev',
    },
    nicknames: {
      twitter: 'panzerdp',
    },
  },
  emailSubscriptionService: {
    embedFormEndpoint: 'https://assets.mailerlite.com/jsonp/386197/forms/84180324159849472/subscribe',
    pageFormUrl: 'https://dashboard.mailerlite.com/forms/386197/84180324159849472/share',
    isFormEmbed: true
  },
  carbonAdsService: {
    scriptSrc: '//cdn.carbonads.com/carbon.js?serve=CE7DT2QI&placement=dmitripavlutincom',
    isEnabled: false,
    isProductionMode: process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod',
  },
  featured: {
    popularPostsByCategory: [{
      category: 'JavaScript',
      slugs: [
        'javascript-closure',
        'gentle-explanation-of-this-in-javascript',
        'differences-between-arrow-and-regular-functions'
      ]
    }, {
      category: 'React',
      slugs: [
        'react-useeffect-explanation',
        'react-usecallback',
        'use-react-memo-wisely',
      ]
    }]
  },
  affiliates: {
    inText: [{
      type: 'traversyReact',
      enabled: true,
      message: `
        <p>
          The path to becoming proficient in React isn't easy... but fortunately, with a good teacher, you can shortcut.
        </p>
        <p>
          To greatly improve your React knowledge take the wonderful <a href="https://www.traversymedia.com/a/2147528895/FqXWyazh" target="_blank" rel="noopener noreferrer">"React Front To Back Course"</a> by Brad Traversy. Use the coupon code DMITRI and get 20% discount!
        </p>`,
    }, {
      type: 'traversyJavaScript',
      enabled: true,
      message: `
        <p>
          Quality JavaScript knowledge is a must to become a good Frontend developer.   
        </p>
        <p>
          To become proficient in JavaScript take the wonderful course <a href="https://www.traversymedia.com/a/2147528886/FqXWyazh" target="_blank" rel="noopener noreferrer">"Modern JavaScript From The Beginning 2.0"</a> by Brad Traversy. Use the coupon code DMITRI and get 20% discount!
        </p>`
    }, {
      type: 'vueschoolCompositionApi',
      enabled: true,
      message: `
      <p>
        Using Vue composition API is fun... but sometimes challenging.
      </p>
      <p>
        To become proficient in Vue composition API take the wonderful course <a href="https://vueschool.io/courses/vue-3-composition-api?friend=dmitripavlutin" target="_blank" rel="noopener noreferrer">"Vue 3 Composition API"</a> on Vueschool (tip: hurry up because they offer a 40% discount).
      </p>`
    }],
    showVueschoolTopBanner: false
  }
}
