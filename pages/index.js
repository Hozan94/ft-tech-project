import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../comps/Header'

export async function getServerSideProps() {
    try {
        const response = await fetch(`https://api.ft.com/content/search/v1?apiKey=59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0`, {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "queryString": "bank",
                "resultContext": {
                    "aspects": ["title", "lifecycle", "location", "summary", "editorial"]
                }
            }),
            method: 'post'
        })

        const parsResponse = await response.json();

        return {
            props: { data: parsResponse }
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
            </Head>
            <h1>Latest headlines</h1>
            <section>

                {props.data.results[0].results.map(article => (
                    <article key={article.id}>
                        <h3>{article.title.title}</h3>
                        <p>{article.editorial.subheading}</p>
                    </article>

                ))}

            </section>

        </>
    )
}
