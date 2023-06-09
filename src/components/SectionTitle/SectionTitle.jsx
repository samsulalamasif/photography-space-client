import { Fade, Slide } from "react-awesome-reveal";

const SectionTitle = ({ title }) => {
    return (
        <div className="mx-auto text-center my-16">
            <Slide direction="left" >
                <p className="text-4xl text-sky-700 font-serif font-semibold mb-2">{title}</p>
            </Slide>
            <Fade direction="right" delay={1e3} cascade damping={1e-1}>
                <div className="text-sm font-mono font-semibold text-gray-700 py-4">
                    <p>Photogrpy Space dolor sit amet consectetur adipisicing elit fdgs tr fs.</p>
                    <p>Deserunt labrum quis officiis quidem tempore assumenda voluptat voluptatibusd eshsdf</p>
                    <p>nemo eum. Velit impedit ipsum vero maxime enim tempore itaqu, sed dicta.</p>


                </div>
            </Fade>

        </div>
    );
};

export default SectionTitle;