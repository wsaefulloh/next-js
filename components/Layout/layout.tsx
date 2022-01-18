import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import styles from "./Layout.module.css"

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>NextJS Basic |{' '}{pageTitle}</title>
                <meta name="description" content="Website NextJS Basic" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </Head>
            <div className={`${styles.container} container`}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </div>
        </>
    )
}
