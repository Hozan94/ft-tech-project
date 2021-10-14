//Our main page component, this is where the page is built and fetches the data, all on the server.
//The data fetched will create the page contents (news headlines).

import Head from 'next/head';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import Pagination from '../components/Pagination';
import { useState } from 'react';
//getServerSideProps is Next.js built in function.
//It fetches the data on the server, and every time you make a request to the page it will run again and render the page on the server.
//The type of data it fetches will depend on the function parameter 'context'.
//The 'context' object have a key called 'query', this an object representing the query string.
//Hence when ever we make a request with a new url query string, the function getServerSideProps will run again and render the page on server.

export async function getServerSideProps(context) {
    try {
        const response = await fetch(`https://api.ft.com/content/search/v1?apiKey=${process.env.API_KEY}`, {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "queryString": `${context.query.search ? context.query.search : ""}`,
                "resultContext": {
                    "aspects": ["title", "lifecycle", "location", "summary", "editorial"]
                }
            }),
            method: 'post'
        })

        const parsResponse = await response.json();

        return {
            props: { data: parsResponse },
        }

    } catch (error) {
        console.log(error)
    }

}

export default function Home(props) {
    const[currentPage, setCurrentPage] = useState(1)
    
    const indexOfLastArticle = currentPage * 15;
    const indexOfFirstArticle = indexOfLastArticle - 15;
    const currentArticles = props.data.results[0].results.slice(indexOfFirstArticle, indexOfLastArticle)

    return (
        <>
            <Head>
                <title>FT-tech-project</title>
                <meta name="keywords" content="financial times headlines" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="//origami-build.ft.com/v2/bundles/css?modules=o-fonts@^3" />
                <link rel="stylesheet" href="https://www.ft.com/__origami/service/build/v3/bundles/css?components=o-buttons@^7.0.1&brand=master&system_code=$$$-no-bizops-system-code-$$$" />
            </Head>
            <div className="section-header ">
                <h1>Latest headlines:</h1>
            </div>
            <section className="container">
                {currentArticles.map(article => (
                    <article className="article-container" key={article.id}>
                        <div >
                            <p className="article-byline">{article.editorial.byline}</p>
                            <h2 className="article-title">{article.title.title}</h2>
                            <p className="article-summary">{article.editorial.subheading}</p>
                            <p className="article-date">{`${formatDistanceToNowStrict(new Date(article.lifecycle.initialPublishDateTime)).toUpperCase()} AGO`}</p>
                        </div>
                    </article>
                ))}
            </section>
            <Pagination currentPage={setCurrentPage} />
        </>
    )
}
