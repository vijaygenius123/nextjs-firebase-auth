import Head from 'next/head'

export default function Tasks() {
    return (
        <div className={"container"}>
            <Head>
                <title>Tasks</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"main"}>
                <h1>Tasks</h1>
            </main>
        </div>
    )
}
