import styles from '../styles/SearchBar.module.css'

function SearchBar() {
    ////This call back function below getData is for the onSubmit event for the form below
    ////It will add the query `/?name=${event.target.name.value}` to the url, but it is not used 
    ////as useRouter is a client side functionality, hence using just the form action attribute.
    ////So instead of going to the server to render the new page with the new query string, it will
    ////create a new page on top of previous page, that also have the same components but it will do all of 
    ////that on client side. 
    //const router = useRouter();
    //const getData = async event => {
    //    event.preventDefault()
    //    router.push(`/?search=${event.target.search.value}`)
    //}

    return (
        <form action="" className={styles.inputsContainer}>
                <input className={styles.input} id="search" name="search" type="text" autoComplete="search" placeholder="Search the FT" aria-label="search" />
                <button className={styles.button} type="submit" >Search</button>
        </form>
    )
}

export default SearchBar;