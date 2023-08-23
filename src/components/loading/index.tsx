import Spinner from "../spinner";

const Loading = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-transparent">
            <Spinner size={40} />
        </div>
    );
};
export default Loading;
