import Header from "./Header";

const Layout = (props) => {
    return (
        <div className="content">
            <Header />
            <main >{props.children}</main>
        </div>
    );
}

export default Layout;