import { styles } from "../styles";

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center">
            <div
                className={`flex flex-row items-center gap-5`}
            >    
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-50 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915eff]">Hamza</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-5 text-white-100`}>
                        System Administrator
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
