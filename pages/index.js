import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'




export async function getServerSideProps(context) {
    try {
        const response = await fetch(`https://api.ft.com/content/search/v1?apiKey=59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0`, {
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
    return (
        <>
            <Head>
                <title>FT-tech-project</title>
                <meta name="keywords" content="financial times headlines" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Head>
            <div className="section-header">
               <h1 >Latest headlines:</h1> 
            </div>
            
            <section className="container">
                
                {props.data.results[0].results.map(article => (
                    <article className="article-container" key={article.id}>
                        <div >
                            <p className="article-byline">{article.editorial.byline}</p>
                            <h3 className="article-title">{article.title.title}</h3>
                            <p className="article-summary">{article.editorial.subheading}</p>
                            <p className="article-date">{`${formatDistanceToNowStrict(new Date(article.lifecycle.initialPublishDateTime)).toUpperCase()} AGO`}</p>
                        </div>
                    </article>

                ))}
            </section>
        </>
    )
}
