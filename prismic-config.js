import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.prismic.io/api/v2`;
var GRAPHQL_API_URL = `https://${REPOSITORY}.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_TOKEN;
export const API_LOCALE = process.env.PRISMIC_LOCALE;

// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_URL;

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken });

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  console.log(`${prismicAPI}`);
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${query}&variables=${JSON.stringify(variables)}`,
    {
      headers: {
        "Prismic-Ref": prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

const queryAbout = () => {
  const query = `{
      allAbouts {
        edges {
          node {
            profile_picture
            about
            _linkType
          }
        }
      }
    }
    `;
  return query;
};

export async function getAbout() {
  const query = queryAbout();
  const data = await fetchAPI(query);
  return data.allAbouts.edges[0].node;
}

const queryBlogsForCards = ({ lastPostCursor, limitation }) => {
  const query = `
  {
    allBlogs(sortBy: date_DESC, after:"${lastPostCursor}",first:${limitation}){
      totalCount
      pageInfo{
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges{
        node {
          _meta{
            uid
          }
          title
          date
          featured_image
          excerpt
          _linkType
        }
      }
    }
  }`;
  return query;
};

export async function getBlogsForCards(lastPostCursor, limitation) {
  const query = queryBlogsForCards({ lastPostCursor, limitation });
  const data = await fetchAPI(query);
  return data.allBlogs;
}

const queryBlogwithSlug = ({ slug }) => {
  const query = `
  {
    allBlogs (uid:"${slug}") {
     edges {
       node {
         title
         date
         featured_image
         excerpt
         keywords
         _meta{
           uid
         }
         body {
           __typename
           ... on BlogBodyQuote{
             primary {
               quote
             }
             label
             type
           }
           ... on BlogBodyImage{
             primary {
               image
             }
             label
             type
           }
           ... on BlogBodyParagraph{
             primary {
               paragraph
             }
             label
             type
           }
           ... on BlogBodyEmbed{
             primary {
               embed
             }
             label
             type
           }
         }
       }
     }
   }
  }
  `;
  return query;
};

export async function getBlogWithSlug(slug) {
  const query = queryBlogwithSlug({ slug });
  const data = await fetchAPI(query);
  return data.allBlogs;
}
