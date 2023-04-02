import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-12">
            <section>
                <h1 className="text-5xl">Conrad Crawford</h1>
                <p className="text-gray-400">creative designer, visualizing reality through abstraction.</p>
            </section>

            <section>
                <p className="text-gray-400">rest coming soon.</p>
            </section>
        </div>
    );
};

export default Home;
