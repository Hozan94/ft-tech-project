//The Layout component is imported here to wrap Next.js built in pages component
//<Component {...pageProps} /> will be a child prop for Layout.js
//And also each page is a child prop of <Component/>

import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}


export default MyApp