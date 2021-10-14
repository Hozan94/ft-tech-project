//This component includes our customized header and footer.
//It is a layout where it will wrap each page in ./pages/filename.js, since we have only one page it will wrap ./pages/index.js
//Hence consistent header and footer across the app pages, check pages/_app.js to see it in action.

import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div className="content">
            <Header />
            <main >{props.children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;