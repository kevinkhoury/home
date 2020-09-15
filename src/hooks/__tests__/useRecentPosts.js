import { renderHook } from '@testing-library/react-hooks'
import useRecentPosts from '../useRecentPosts'
import { useStaticQuery } from 'gatsby'

const QUERY_DATA = {
  allMarkdownRemark: {
    edges: [
      {
        node: {
          fields: {
            slug: '/blog/why-react-hooks-are-the-future/',
            gitAuthorTime: '2020-08-04T12:59:15-07:00',
            gitCreatedTime: '2020-05-14T11:28:11-07:00',
          },
          frontmatter: {
            date: 'Feb 23, 2020',
            pageTitle: 'Why React Hooks are the Future',
            featuredImage: {
              src: {
                childImageSharp: {
                  fluid: {
                    originalName:
                      'selective-focus-of-stainless-steel-hook-1256916.jpg',
                  },
                  original: {
                    height: 3456,
                    width: 5184,
                  },
                },
              },
              m: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 0.7530120481927711,
                    src:
                      '/static/19eef930d7183544a97a09d9b2c4c878/f7e3e/selective-focus-of-stainless-steel-hook-1256916.jpg',
                    srcSet:
                      '/static/19eef930d7183544a97a09d9b2c4c878/6de36/selective-focus-of-stainless-steel-hook-1256916.jpg 125w,\n/static/19eef930d7183544a97a09d9b2c4c878/2c8a2/selective-focus-of-stainless-steel-hook-1256916.jpg 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/f7e3e/selective-focus-of-stainless-steel-hook-1256916.jpg 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/dbc5b/selective-focus-of-stainless-steel-hook-1256916.jpg 750w,\n/static/19eef930d7183544a97a09d9b2c4c878/74e73/selective-focus-of-stainless-steel-hook-1256916.jpg 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/c28f9/selective-focus-of-stainless-steel-hook-1256916.jpg 5184w',
                    srcWebp:
                      '/static/19eef930d7183544a97a09d9b2c4c878/512ba/selective-focus-of-stainless-steel-hook-1256916.webp',
                    srcSetWebp:
                      '/static/19eef930d7183544a97a09d9b2c4c878/2efc4/selective-focus-of-stainless-steel-hook-1256916.webp 125w,\n/static/19eef930d7183544a97a09d9b2c4c878/c7bac/selective-focus-of-stainless-steel-hook-1256916.webp 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/512ba/selective-focus-of-stainless-steel-hook-1256916.webp 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/e5693/selective-focus-of-stainless-steel-hook-1256916.webp 750w,\n/static/19eef930d7183544a97a09d9b2c4c878/de67b/selective-focus-of-stainless-steel-hook-1256916.webp 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/fcdab/selective-focus-of-stainless-steel-hook-1256916.webp 5184w',
                    sizes: '(max-width: 500px) 100vw, 500px',
                    originalName:
                      'selective-focus-of-stainless-steel-hook-1256916.jpg',
                  },
                  original: {
                    height: 3456,
                    width: 5184,
                  },
                },
              },
              d: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1.5060240963855422,
                    src:
                      '/static/19eef930d7183544a97a09d9b2c4c878/39f04/selective-focus-of-stainless-steel-hook-1256916.jpg',
                    srcSet:
                      '/static/19eef930d7183544a97a09d9b2c4c878/7a5ed/selective-focus-of-stainless-steel-hook-1256916.jpg 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/9001d/selective-focus-of-stainless-steel-hook-1256916.jpg 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/39f04/selective-focus-of-stainless-steel-hook-1256916.jpg 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/6fc76/selective-focus-of-stainless-steel-hook-1256916.jpg 1500w,\n/static/19eef930d7183544a97a09d9b2c4c878/cf03b/selective-focus-of-stainless-steel-hook-1256916.jpg 2000w,\n/static/19eef930d7183544a97a09d9b2c4c878/8bc95/selective-focus-of-stainless-steel-hook-1256916.jpg 5184w',
                    srcWebp:
                      '/static/19eef930d7183544a97a09d9b2c4c878/8bee8/selective-focus-of-stainless-steel-hook-1256916.webp',
                    srcSetWebp:
                      '/static/19eef930d7183544a97a09d9b2c4c878/51e4a/selective-focus-of-stainless-steel-hook-1256916.webp 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/193c7/selective-focus-of-stainless-steel-hook-1256916.webp 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/8bee8/selective-focus-of-stainless-steel-hook-1256916.webp 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/8c99b/selective-focus-of-stainless-steel-hook-1256916.webp 1500w,\n/static/19eef930d7183544a97a09d9b2c4c878/db228/selective-focus-of-stainless-steel-hook-1256916.webp 2000w,\n/static/19eef930d7183544a97a09d9b2c4c878/af302/selective-focus-of-stainless-steel-hook-1256916.webp 5184w',
                    sizes: '(max-width: 1000px) 100vw, 1000px',
                    originalName:
                      'selective-focus-of-stainless-steel-hook-1256916.jpg',
                  },
                  original: {
                    height: 3456,
                    width: 5184,
                  },
                },
              },
              alt: 'metal hook wall-mounted',
            },
          },
        },
      },
      {
        node: {
          fields: {
            slug: '/blog/trends-in-serverless-web-hosting/',
            gitAuthorTime: '2020-08-04T12:59:15-07:00',
            gitCreatedTime: '2020-05-14T11:28:11-07:00',
          },
          frontmatter: {
            date: 'Jan 6, 2020',
            pageTitle: 'Trends in Serverless Web Hosting',
            featuredImage: {
              src: {
                childImageSharp: {
                  fluid: {
                    originalName: 'air-atmosphere-beautiful-blue-531767.jpg',
                  },
                  original: {
                    height: 4266,
                    width: 6395,
                  },
                },
              },
              m: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 0.7530120481927711,
                    src:
                      '/static/c1295c35927d729f450972f1f69f57b2/f7e3e/air-atmosphere-beautiful-blue-531767.jpg',
                    srcSet:
                      '/static/c1295c35927d729f450972f1f69f57b2/6de36/air-atmosphere-beautiful-blue-531767.jpg 125w,\n/static/c1295c35927d729f450972f1f69f57b2/2c8a2/air-atmosphere-beautiful-blue-531767.jpg 250w,\n/static/c1295c35927d729f450972f1f69f57b2/f7e3e/air-atmosphere-beautiful-blue-531767.jpg 500w,\n/static/c1295c35927d729f450972f1f69f57b2/dbc5b/air-atmosphere-beautiful-blue-531767.jpg 750w,\n/static/c1295c35927d729f450972f1f69f57b2/74e73/air-atmosphere-beautiful-blue-531767.jpg 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/9eb7b/air-atmosphere-beautiful-blue-531767.jpg 6395w',
                    srcWebp:
                      '/static/c1295c35927d729f450972f1f69f57b2/512ba/air-atmosphere-beautiful-blue-531767.webp',
                    srcSetWebp:
                      '/static/c1295c35927d729f450972f1f69f57b2/2efc4/air-atmosphere-beautiful-blue-531767.webp 125w,\n/static/c1295c35927d729f450972f1f69f57b2/c7bac/air-atmosphere-beautiful-blue-531767.webp 250w,\n/static/c1295c35927d729f450972f1f69f57b2/512ba/air-atmosphere-beautiful-blue-531767.webp 500w,\n/static/c1295c35927d729f450972f1f69f57b2/e5693/air-atmosphere-beautiful-blue-531767.webp 750w,\n/static/c1295c35927d729f450972f1f69f57b2/de67b/air-atmosphere-beautiful-blue-531767.webp 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/2f4ff/air-atmosphere-beautiful-blue-531767.webp 6395w',
                    sizes: '(max-width: 500px) 100vw, 500px',
                    originalName: 'air-atmosphere-beautiful-blue-531767.jpg',
                  },
                  original: {
                    height: 4266,
                    width: 6395,
                  },
                },
              },
              d: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1.5060240963855422,
                    src:
                      '/static/c1295c35927d729f450972f1f69f57b2/39f04/air-atmosphere-beautiful-blue-531767.jpg',
                    srcSet:
                      '/static/c1295c35927d729f450972f1f69f57b2/7a5ed/air-atmosphere-beautiful-blue-531767.jpg 250w,\n/static/c1295c35927d729f450972f1f69f57b2/9001d/air-atmosphere-beautiful-blue-531767.jpg 500w,\n/static/c1295c35927d729f450972f1f69f57b2/39f04/air-atmosphere-beautiful-blue-531767.jpg 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/6fc76/air-atmosphere-beautiful-blue-531767.jpg 1500w,\n/static/c1295c35927d729f450972f1f69f57b2/cf03b/air-atmosphere-beautiful-blue-531767.jpg 2000w,\n/static/c1295c35927d729f450972f1f69f57b2/19edf/air-atmosphere-beautiful-blue-531767.jpg 6395w',
                    srcWebp:
                      '/static/c1295c35927d729f450972f1f69f57b2/8bee8/air-atmosphere-beautiful-blue-531767.webp',
                    srcSetWebp:
                      '/static/c1295c35927d729f450972f1f69f57b2/51e4a/air-atmosphere-beautiful-blue-531767.webp 250w,\n/static/c1295c35927d729f450972f1f69f57b2/193c7/air-atmosphere-beautiful-blue-531767.webp 500w,\n/static/c1295c35927d729f450972f1f69f57b2/8bee8/air-atmosphere-beautiful-blue-531767.webp 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/8c99b/air-atmosphere-beautiful-blue-531767.webp 1500w,\n/static/c1295c35927d729f450972f1f69f57b2/db228/air-atmosphere-beautiful-blue-531767.webp 2000w,\n/static/c1295c35927d729f450972f1f69f57b2/686e1/air-atmosphere-beautiful-blue-531767.webp 6395w',
                    sizes: '(max-width: 1000px) 100vw, 1000px',
                    originalName: 'air-atmosphere-beautiful-blue-531767.jpg',
                  },
                  original: {
                    height: 4266,
                    width: 6395,
                  },
                },
              },
              alt: 'array of solar panels',
            },
          },
        },
      },
      {
        node: {
          fields: {
            slug: '/blog/advantages-of-headless-cms-setups/',
            gitAuthorTime: '2020-08-04T12:59:15-07:00',
            gitCreatedTime: '2020-05-14T11:28:11-07:00',
          },
          frontmatter: {
            date: 'Nov 23, 2019',
            pageTitle: 'Advantages of Headless CMS Setups',
            featuredImage: {
              src: {
                childImageSharp: {
                  fluid: {
                    originalName: 'code.jpg',
                  },
                  original: {
                    height: 3840,
                    width: 5760,
                  },
                },
              },
              m: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 0.7530120481927711,
                    src:
                      '/static/deff7a714391c354890f09a4a831519c/f7e3e/code.jpg',
                    srcSet:
                      '/static/deff7a714391c354890f09a4a831519c/6de36/code.jpg 125w,\n/static/deff7a714391c354890f09a4a831519c/2c8a2/code.jpg 250w,\n/static/deff7a714391c354890f09a4a831519c/f7e3e/code.jpg 500w,\n/static/deff7a714391c354890f09a4a831519c/dbc5b/code.jpg 750w,\n/static/deff7a714391c354890f09a4a831519c/74e73/code.jpg 1000w,\n/static/deff7a714391c354890f09a4a831519c/d42bf/code.jpg 5760w',
                    srcWebp:
                      '/static/deff7a714391c354890f09a4a831519c/512ba/code.webp',
                    srcSetWebp:
                      '/static/deff7a714391c354890f09a4a831519c/2efc4/code.webp 125w,\n/static/deff7a714391c354890f09a4a831519c/c7bac/code.webp 250w,\n/static/deff7a714391c354890f09a4a831519c/512ba/code.webp 500w,\n/static/deff7a714391c354890f09a4a831519c/e5693/code.webp 750w,\n/static/deff7a714391c354890f09a4a831519c/de67b/code.webp 1000w,\n/static/deff7a714391c354890f09a4a831519c/34309/code.webp 5760w',
                    sizes: '(max-width: 500px) 100vw, 500px',
                    originalName: 'code.jpg',
                  },
                  original: {
                    height: 3840,
                    width: 5760,
                  },
                },
              },
              d: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1.5060240963855422,
                    src:
                      '/static/deff7a714391c354890f09a4a831519c/39f04/code.jpg',
                    srcSet:
                      '/static/deff7a714391c354890f09a4a831519c/7a5ed/code.jpg 250w,\n/static/deff7a714391c354890f09a4a831519c/9001d/code.jpg 500w,\n/static/deff7a714391c354890f09a4a831519c/39f04/code.jpg 1000w,\n/static/deff7a714391c354890f09a4a831519c/6fc76/code.jpg 1500w,\n/static/deff7a714391c354890f09a4a831519c/cf03b/code.jpg 2000w,\n/static/deff7a714391c354890f09a4a831519c/c84f4/code.jpg 5760w',
                    srcWebp:
                      '/static/deff7a714391c354890f09a4a831519c/8bee8/code.webp',
                    srcSetWebp:
                      '/static/deff7a714391c354890f09a4a831519c/51e4a/code.webp 250w,\n/static/deff7a714391c354890f09a4a831519c/193c7/code.webp 500w,\n/static/deff7a714391c354890f09a4a831519c/8bee8/code.webp 1000w,\n/static/deff7a714391c354890f09a4a831519c/8c99b/code.webp 1500w,\n/static/deff7a714391c354890f09a4a831519c/db228/code.webp 2000w,\n/static/deff7a714391c354890f09a4a831519c/4c29f/code.webp 5760w',
                    sizes: '(max-width: 1000px) 100vw, 1000px',
                    originalName: 'code.jpg',
                  },
                  original: {
                    height: 3840,
                    width: 5760,
                  },
                },
              },
              alt: 'computer code on a monitor',
            },
          },
        },
      },
      {
        node: {
          fields: {
            slug: '/blog/new-features-in-graphql/',
            gitAuthorTime: '2020-08-04T12:59:15-07:00',
            gitCreatedTime: '2020-05-14T11:28:11-07:00',
          },
          frontmatter: {
            date: 'Jul 14, 2019',
            pageTitle: 'New Features in GraphQL',
            featuredImage: {
              src: {
                childImageSharp: {
                  fluid: {
                    originalName:
                      'grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
                  },
                  original: {
                    height: 3648,
                    width: 5472,
                  },
                },
              },
              m: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 0.7530120481927711,
                    src:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/f7e3e/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
                    srcSet:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/6de36/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 125w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/2c8a2/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/f7e3e/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/dbc5b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 750w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/74e73/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/bb6a3/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 5472w',
                    srcWebp:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/512ba/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp',
                    srcSetWebp:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/2efc4/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 125w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/c7bac/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/512ba/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/e5693/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 750w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/de67b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/b86e6/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 5472w',
                    sizes: '(max-width: 500px) 100vw, 500px',
                    originalName:
                      'grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
                  },
                  original: {
                    height: 3648,
                    width: 5472,
                  },
                },
              },
              d: {
                childImageSharp: {
                  fluid: {
                    aspectRatio: 1.5060240963855422,
                    src:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/39f04/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
                    srcSet:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/7a5ed/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/9001d/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/39f04/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/6fc76/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 1500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/cf03b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 2000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/51af0/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 5472w',
                    srcWebp:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/8bee8/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp',
                    srcSetWebp:
                      '/static/7143a49f2107ad0eb01aaca79a9fff12/51e4a/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/193c7/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/8bee8/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/8c99b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 1500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/db228/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 2000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/85e72/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 5472w',
                    sizes: '(max-width: 1000px) 100vw, 1000px',
                    originalName:
                      'grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
                  },
                  original: {
                    height: 3648,
                    width: 5472,
                  },
                },
              },
              alt: 'Computer code on a laptop',
            },
          },
        },
      },
    ],
  },
}

const FORMATTED_DATA = [
  {
    image: {
      src: {
        childImageSharp: {
          fluid: {
            originalName: 'selective-focus-of-stainless-steel-hook-1256916.jpg',
          },
          original: {
            height: 3456,
            width: 5184,
          },
        },
      },
      m: {
        childImageSharp: {
          fluid: {
            aspectRatio: 0.7530120481927711,
            src:
              '/static/19eef930d7183544a97a09d9b2c4c878/f7e3e/selective-focus-of-stainless-steel-hook-1256916.jpg',
            srcSet:
              '/static/19eef930d7183544a97a09d9b2c4c878/6de36/selective-focus-of-stainless-steel-hook-1256916.jpg 125w,\n/static/19eef930d7183544a97a09d9b2c4c878/2c8a2/selective-focus-of-stainless-steel-hook-1256916.jpg 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/f7e3e/selective-focus-of-stainless-steel-hook-1256916.jpg 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/dbc5b/selective-focus-of-stainless-steel-hook-1256916.jpg 750w,\n/static/19eef930d7183544a97a09d9b2c4c878/74e73/selective-focus-of-stainless-steel-hook-1256916.jpg 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/c28f9/selective-focus-of-stainless-steel-hook-1256916.jpg 5184w',
            srcWebp:
              '/static/19eef930d7183544a97a09d9b2c4c878/512ba/selective-focus-of-stainless-steel-hook-1256916.webp',
            srcSetWebp:
              '/static/19eef930d7183544a97a09d9b2c4c878/2efc4/selective-focus-of-stainless-steel-hook-1256916.webp 125w,\n/static/19eef930d7183544a97a09d9b2c4c878/c7bac/selective-focus-of-stainless-steel-hook-1256916.webp 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/512ba/selective-focus-of-stainless-steel-hook-1256916.webp 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/e5693/selective-focus-of-stainless-steel-hook-1256916.webp 750w,\n/static/19eef930d7183544a97a09d9b2c4c878/de67b/selective-focus-of-stainless-steel-hook-1256916.webp 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/fcdab/selective-focus-of-stainless-steel-hook-1256916.webp 5184w',
            sizes: '(max-width: 500px) 100vw, 500px',
            originalName: 'selective-focus-of-stainless-steel-hook-1256916.jpg',
          },
          original: {
            height: 3456,
            width: 5184,
          },
        },
      },
      d: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.5060240963855422,
            src:
              '/static/19eef930d7183544a97a09d9b2c4c878/39f04/selective-focus-of-stainless-steel-hook-1256916.jpg',
            srcSet:
              '/static/19eef930d7183544a97a09d9b2c4c878/7a5ed/selective-focus-of-stainless-steel-hook-1256916.jpg 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/9001d/selective-focus-of-stainless-steel-hook-1256916.jpg 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/39f04/selective-focus-of-stainless-steel-hook-1256916.jpg 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/6fc76/selective-focus-of-stainless-steel-hook-1256916.jpg 1500w,\n/static/19eef930d7183544a97a09d9b2c4c878/cf03b/selective-focus-of-stainless-steel-hook-1256916.jpg 2000w,\n/static/19eef930d7183544a97a09d9b2c4c878/8bc95/selective-focus-of-stainless-steel-hook-1256916.jpg 5184w',
            srcWebp:
              '/static/19eef930d7183544a97a09d9b2c4c878/8bee8/selective-focus-of-stainless-steel-hook-1256916.webp',
            srcSetWebp:
              '/static/19eef930d7183544a97a09d9b2c4c878/51e4a/selective-focus-of-stainless-steel-hook-1256916.webp 250w,\n/static/19eef930d7183544a97a09d9b2c4c878/193c7/selective-focus-of-stainless-steel-hook-1256916.webp 500w,\n/static/19eef930d7183544a97a09d9b2c4c878/8bee8/selective-focus-of-stainless-steel-hook-1256916.webp 1000w,\n/static/19eef930d7183544a97a09d9b2c4c878/8c99b/selective-focus-of-stainless-steel-hook-1256916.webp 1500w,\n/static/19eef930d7183544a97a09d9b2c4c878/db228/selective-focus-of-stainless-steel-hook-1256916.webp 2000w,\n/static/19eef930d7183544a97a09d9b2c4c878/af302/selective-focus-of-stainless-steel-hook-1256916.webp 5184w',
            sizes: '(max-width: 1000px) 100vw, 1000px',
            originalName: 'selective-focus-of-stainless-steel-hook-1256916.jpg',
          },
          original: {
            height: 3456,
            width: 5184,
          },
        },
      },
      alt: 'metal hook wall-mounted',
    },
    slug: '/blog/why-react-hooks-are-the-future/',
    pageTitle: 'Why React Hooks are the Future',
    date: '2020-02-23T08:00:00.000Z',
    dateModified: '2020-08-04T19:59:15.000Z',
  },
  {
    image: {
      src: {
        childImageSharp: {
          fluid: {
            originalName: 'air-atmosphere-beautiful-blue-531767.jpg',
          },
          original: {
            height: 4266,
            width: 6395,
          },
        },
      },
      m: {
        childImageSharp: {
          fluid: {
            aspectRatio: 0.7530120481927711,
            src:
              '/static/c1295c35927d729f450972f1f69f57b2/f7e3e/air-atmosphere-beautiful-blue-531767.jpg',
            srcSet:
              '/static/c1295c35927d729f450972f1f69f57b2/6de36/air-atmosphere-beautiful-blue-531767.jpg 125w,\n/static/c1295c35927d729f450972f1f69f57b2/2c8a2/air-atmosphere-beautiful-blue-531767.jpg 250w,\n/static/c1295c35927d729f450972f1f69f57b2/f7e3e/air-atmosphere-beautiful-blue-531767.jpg 500w,\n/static/c1295c35927d729f450972f1f69f57b2/dbc5b/air-atmosphere-beautiful-blue-531767.jpg 750w,\n/static/c1295c35927d729f450972f1f69f57b2/74e73/air-atmosphere-beautiful-blue-531767.jpg 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/9eb7b/air-atmosphere-beautiful-blue-531767.jpg 6395w',
            srcWebp:
              '/static/c1295c35927d729f450972f1f69f57b2/512ba/air-atmosphere-beautiful-blue-531767.webp',
            srcSetWebp:
              '/static/c1295c35927d729f450972f1f69f57b2/2efc4/air-atmosphere-beautiful-blue-531767.webp 125w,\n/static/c1295c35927d729f450972f1f69f57b2/c7bac/air-atmosphere-beautiful-blue-531767.webp 250w,\n/static/c1295c35927d729f450972f1f69f57b2/512ba/air-atmosphere-beautiful-blue-531767.webp 500w,\n/static/c1295c35927d729f450972f1f69f57b2/e5693/air-atmosphere-beautiful-blue-531767.webp 750w,\n/static/c1295c35927d729f450972f1f69f57b2/de67b/air-atmosphere-beautiful-blue-531767.webp 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/2f4ff/air-atmosphere-beautiful-blue-531767.webp 6395w',
            sizes: '(max-width: 500px) 100vw, 500px',
            originalName: 'air-atmosphere-beautiful-blue-531767.jpg',
          },
          original: {
            height: 4266,
            width: 6395,
          },
        },
      },
      d: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.5060240963855422,
            src:
              '/static/c1295c35927d729f450972f1f69f57b2/39f04/air-atmosphere-beautiful-blue-531767.jpg',
            srcSet:
              '/static/c1295c35927d729f450972f1f69f57b2/7a5ed/air-atmosphere-beautiful-blue-531767.jpg 250w,\n/static/c1295c35927d729f450972f1f69f57b2/9001d/air-atmosphere-beautiful-blue-531767.jpg 500w,\n/static/c1295c35927d729f450972f1f69f57b2/39f04/air-atmosphere-beautiful-blue-531767.jpg 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/6fc76/air-atmosphere-beautiful-blue-531767.jpg 1500w,\n/static/c1295c35927d729f450972f1f69f57b2/cf03b/air-atmosphere-beautiful-blue-531767.jpg 2000w,\n/static/c1295c35927d729f450972f1f69f57b2/19edf/air-atmosphere-beautiful-blue-531767.jpg 6395w',
            srcWebp:
              '/static/c1295c35927d729f450972f1f69f57b2/8bee8/air-atmosphere-beautiful-blue-531767.webp',
            srcSetWebp:
              '/static/c1295c35927d729f450972f1f69f57b2/51e4a/air-atmosphere-beautiful-blue-531767.webp 250w,\n/static/c1295c35927d729f450972f1f69f57b2/193c7/air-atmosphere-beautiful-blue-531767.webp 500w,\n/static/c1295c35927d729f450972f1f69f57b2/8bee8/air-atmosphere-beautiful-blue-531767.webp 1000w,\n/static/c1295c35927d729f450972f1f69f57b2/8c99b/air-atmosphere-beautiful-blue-531767.webp 1500w,\n/static/c1295c35927d729f450972f1f69f57b2/db228/air-atmosphere-beautiful-blue-531767.webp 2000w,\n/static/c1295c35927d729f450972f1f69f57b2/686e1/air-atmosphere-beautiful-blue-531767.webp 6395w',
            sizes: '(max-width: 1000px) 100vw, 1000px',
            originalName: 'air-atmosphere-beautiful-blue-531767.jpg',
          },
          original: {
            height: 4266,
            width: 6395,
          },
        },
      },
      alt: 'array of solar panels',
    },
    slug: '/blog/trends-in-serverless-web-hosting/',
    pageTitle: 'Trends in Serverless Web Hosting',
    date: '2020-01-06T08:00:00.000Z',
    dateModified: '2020-08-04T19:59:15.000Z',
  },
  {
    image: {
      src: {
        childImageSharp: {
          fluid: {
            originalName: 'code.jpg',
          },
          original: {
            height: 3840,
            width: 5760,
          },
        },
      },
      m: {
        childImageSharp: {
          fluid: {
            aspectRatio: 0.7530120481927711,
            src: '/static/deff7a714391c354890f09a4a831519c/f7e3e/code.jpg',
            srcSet:
              '/static/deff7a714391c354890f09a4a831519c/6de36/code.jpg 125w,\n/static/deff7a714391c354890f09a4a831519c/2c8a2/code.jpg 250w,\n/static/deff7a714391c354890f09a4a831519c/f7e3e/code.jpg 500w,\n/static/deff7a714391c354890f09a4a831519c/dbc5b/code.jpg 750w,\n/static/deff7a714391c354890f09a4a831519c/74e73/code.jpg 1000w,\n/static/deff7a714391c354890f09a4a831519c/d42bf/code.jpg 5760w',
            srcWebp: '/static/deff7a714391c354890f09a4a831519c/512ba/code.webp',
            srcSetWebp:
              '/static/deff7a714391c354890f09a4a831519c/2efc4/code.webp 125w,\n/static/deff7a714391c354890f09a4a831519c/c7bac/code.webp 250w,\n/static/deff7a714391c354890f09a4a831519c/512ba/code.webp 500w,\n/static/deff7a714391c354890f09a4a831519c/e5693/code.webp 750w,\n/static/deff7a714391c354890f09a4a831519c/de67b/code.webp 1000w,\n/static/deff7a714391c354890f09a4a831519c/34309/code.webp 5760w',
            sizes: '(max-width: 500px) 100vw, 500px',
            originalName: 'code.jpg',
          },
          original: {
            height: 3840,
            width: 5760,
          },
        },
      },
      d: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.5060240963855422,
            src: '/static/deff7a714391c354890f09a4a831519c/39f04/code.jpg',
            srcSet:
              '/static/deff7a714391c354890f09a4a831519c/7a5ed/code.jpg 250w,\n/static/deff7a714391c354890f09a4a831519c/9001d/code.jpg 500w,\n/static/deff7a714391c354890f09a4a831519c/39f04/code.jpg 1000w,\n/static/deff7a714391c354890f09a4a831519c/6fc76/code.jpg 1500w,\n/static/deff7a714391c354890f09a4a831519c/cf03b/code.jpg 2000w,\n/static/deff7a714391c354890f09a4a831519c/c84f4/code.jpg 5760w',
            srcWebp: '/static/deff7a714391c354890f09a4a831519c/8bee8/code.webp',
            srcSetWebp:
              '/static/deff7a714391c354890f09a4a831519c/51e4a/code.webp 250w,\n/static/deff7a714391c354890f09a4a831519c/193c7/code.webp 500w,\n/static/deff7a714391c354890f09a4a831519c/8bee8/code.webp 1000w,\n/static/deff7a714391c354890f09a4a831519c/8c99b/code.webp 1500w,\n/static/deff7a714391c354890f09a4a831519c/db228/code.webp 2000w,\n/static/deff7a714391c354890f09a4a831519c/4c29f/code.webp 5760w',
            sizes: '(max-width: 1000px) 100vw, 1000px',
            originalName: 'code.jpg',
          },
          original: {
            height: 3840,
            width: 5760,
          },
        },
      },
      alt: 'computer code on a monitor',
    },
    slug: '/blog/advantages-of-headless-cms-setups/',
    pageTitle: 'Advantages of Headless CMS Setups',
    date: '2019-11-23T08:00:00.000Z',
    dateModified: '2020-08-04T19:59:15.000Z',
  },
  {
    image: {
      src: {
        childImageSharp: {
          fluid: {
            originalName:
              'grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
          },
          original: {
            height: 3648,
            width: 5472,
          },
        },
      },
      m: {
        childImageSharp: {
          fluid: {
            aspectRatio: 0.7530120481927711,
            src:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/f7e3e/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
            srcSet:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/6de36/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 125w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/2c8a2/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/f7e3e/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/dbc5b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 750w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/74e73/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/bb6a3/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 5472w',
            srcWebp:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/512ba/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp',
            srcSetWebp:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/2efc4/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 125w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/c7bac/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/512ba/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/e5693/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 750w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/de67b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/b86e6/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 5472w',
            sizes: '(max-width: 500px) 100vw, 500px',
            originalName:
              'grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
          },
          original: {
            height: 3648,
            width: 5472,
          },
        },
      },
      d: {
        childImageSharp: {
          fluid: {
            aspectRatio: 1.5060240963855422,
            src:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/39f04/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
            srcSet:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/7a5ed/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/9001d/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/39f04/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/6fc76/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 1500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/cf03b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 2000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/51af0/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg 5472w',
            srcWebp:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/8bee8/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp',
            srcSetWebp:
              '/static/7143a49f2107ad0eb01aaca79a9fff12/51e4a/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 250w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/193c7/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/8bee8/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 1000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/8c99b/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 1500w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/db228/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 2000w,\n/static/7143a49f2107ad0eb01aaca79a9fff12/85e72/grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.webp 5472w',
            sizes: '(max-width: 1000px) 100vw, 1000px',
            originalName:
              'grayscale-photo-of-computer-laptop-near-white-notebook-and-169573.jpg',
          },
          original: {
            height: 3648,
            width: 5472,
          },
        },
      },
      alt: 'Computer code on a laptop',
    },
    slug: '/blog/new-features-in-graphql/',
    pageTitle: 'New Features in GraphQL',
    date: '2019-07-14T07:00:00.000Z',
    dateModified: '2020-08-04T19:59:15.000Z',
  },
]

afterEach(() => {
  jest.clearAllMocks()
})

describe('useRecentPosts', () => {
  it('returns up to 4 recent posts', () => {
    useStaticQuery.mockReturnValue(QUERY_DATA)
    const { result } = renderHook(() => useRecentPosts())
    expect(result.current.length).toBe(
      QUERY_DATA.allMarkdownRemark.edges.length,
    )
    result.current.forEach((post) => {
      expect(
        Object.keys(post).every(
          (key) =>
            ['image', 'slug', 'pageTitle', 'date', 'dateModified'].indexOf(
              key,
            ) !== -1,
        ),
      ).toBeTruthy()
    })
  })
  it('returns an empty array if none found', () => {
    useStaticQuery.mockReturnValue(null)
    const { result } = renderHook(() => useRecentPosts())
    expect(result.current).toEqual([])
  })
})
