This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview 👁️

This project is a web site that displays the latest headlines from Financial Time.

The project fetches data from FT Headlines [API](https://developer.ft.com/portal/).

Built using Next.js.

## How it works 🛠️

The aim of the project is to build a web page that is rendered on server **(SSR)** rather than client side, to achieve this I used Next.js.

This is my first Next.js project and hence why I choose this over other template engines like `handlebars` or `pug` as I also never used a template engine before.

The other reason why I choose Next.js in first place, is because it provides an easy developer experience such as smart bundling, route pre-fetching, server rendering and creating components level styles with CSS modules. Having all these features available is what made me implement it in this project.

Regarding the deployment, it is quick and easy to deploy on Vercel (recommended), the same people who created Next.js but for this project I choose Heroku.

### The mechanism of the project is the following 🤖

1. Fetch data on the server using Next.js built in function `getServerSideProps` , this will fetch data on the server each time we make a request.

2. The data fetched will be used to create the page content using the React library, other components like `Header` and `Footer` are also built using React. the page is rendered on the server.

3. The search bar in the page is used to send a new request to the server to fetch data depending on the value used, such as searching for `brexit` will fetch data and display headlines that contain the word `brexit`. The default value to fetch for data is empty `“”`, this will always display the latest headlines that are not search related.
4. Below is a representation of the mechanism:

```
CLIENT: Visit a url
SERVER: Render the page with a search form and some default initial results
CLIENT: user clicks the search button and gets taken to a new url
SERVER: Renders the new page,different search results based on the query
repeat
```

## Other functionalities 👨‍🍳

Below is a list of some of the website features:

- Responsiveness: this is done using CSS media queries.
- Accessibility: To test the page accessibility I used Chrome extension Lighthosue.
- Built using JavaScript and Node.js. 
- Deployed on Heroku: The site [link](https://ft-tech-project.herokuapp.com/) 
- Have a similar look and feel as FT.com : Used CSS to style the page.

## Usage ⏯️

1. clone the repo
2. `npm install` to install dependencies
3. `npm run dev` to run
4. Open [http://localhost:3000](http://localhost:3000) to see the results

## Learn More ℹ️

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
