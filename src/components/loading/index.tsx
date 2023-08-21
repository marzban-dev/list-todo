import IconSpinnerThird from "@/components/svg-components/spinner-third";

const Loading = () => {
    return (
        <div className="w-full h-screen bg-black flex justify-center items-center">
            <IconSpinnerThird className="fill-white h-[20px]" />
        </div>
    );
};
export default Loading;
