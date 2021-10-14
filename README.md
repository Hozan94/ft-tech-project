This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview 👁️

This project is a web site that displays the latest headlines from Financial Time.

The project fetches data from FT Headlines [API](https://developer.ft.com/portal/).

Built using Next.js.

## How it works 🛠️

The aim of the project is to build a web page that is rendered on server **(SSR)** rather than client side, to achieve this I used Next.js.

This is my first Next.js project and hence why I choose this over other template engines like `handlebars` or `pug` , etc.

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

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More ℹ️

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
