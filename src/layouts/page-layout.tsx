import Navbar from "@/components/navbar";

type PageLayoutProps = {
    children: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <main className="w-full h-screen flex justify-center items-start">
            <Navbar />
            <div className="w-full relative top-[110px] min-[550px]:top-[150px]">{children}</div>
        </main>
    );
};

export default PageLayout;
