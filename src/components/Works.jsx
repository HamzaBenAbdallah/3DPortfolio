import { motion } from "framer-motion";

import { styles } from "../styles";
import { repo, website } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    name,
    description,
    tags,
    image,
    website_link,
    source_code_link,
}) => {
    return (
        <div
            onClick={() => window.open(website_link)}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
        >
            <div className=" w-full h-[230px]">
                <img
                    src={image}
                    alt="project_image"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            <div className="mt-5 relative">
                <h3 className="text-white font-bold text-[24px] mb-3">
                    {name}
                </h3>

                <div className="absolute inset-0 flex justify-end">
                    <div>
                        <div
                            onClick={() => window.open(website_link)}
                            className="w-10 h-10  flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={website}
                                alt="website"
                                className="h-7 w-7 hover:opacity-70"
                            />
                        </div>
                    </div>
                    <div>
                        <div
                            onClick={() => window.open(source_code_link)}
                            className=" w-10 h-10 flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={repo}
                                alt="source code"
                                className="h-7 w-7 hover:opacity-70"
                            />
                        </div>
                    </div>
                </div>

                <p
                    className="mt-2 text-secondary text-[14px]"
                    style={{ whiteSpace: "pre-line" }}
                >
                    {description}
                </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <p
                        key={`${name}-${tag.name}`}
                        className={`text-[14px] ${tag.color}`}
                    >
                        #{tag.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with links to code repositories and live
                    demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage
                    projects effectively.
                </motion.p>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");
