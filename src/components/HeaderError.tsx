import Navigation from "./Navigation.tsx";

const HeaderError = () => {
    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">Error!</h1>
        </header>
    );
};

export default HeaderError;