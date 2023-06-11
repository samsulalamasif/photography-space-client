import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import featuresImg from "../../../../assets/features.avif"


const FeaturesSection = () => {
    const features = [
        {
            id: 1,
            title: 'High-Quality Photos',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra mi ut nisi pulvinar, vel elementum metus vestibulum.',
        },
        {
            id: 2,
            title: 'Creative Editing',
            description: 'Vestibulum a magna accumsan, dictum leo id, eleifend mi. Integer quis ante volutpat, varius mauris ac, faucibus nulla.',
        },
        {
            id: 3,
            title: 'Professional Photographers',
            description: 'Cras fringilla elit a sem finibus, eu semper justo ullamcorper. Sed vel purus tristique, vestibulum quam in, iaculis nunc.',
        },
        {
            id: 4,
            title: 'Customizable Packages',
            description: 'Pellentesque vehicula lorem sed lorem posuere, vitae vulputate urna posuere. Suspendisse aliquam purus sit amet metus laoreet venenatis.',
        },
    ];

    return (
        <div>
            <SectionTitle title={"Our Features"}></SectionTitle>
            <div className='flex flex-col-reverse  lg:flex-row gap-6 mb-32'>
                <div className='lg:w-1/2 mx-auto'>
                    <div className="grid grid-cols-1 gap-6 ">
                        {features.map((feature) => (
                            <div key={feature.id} className="bg-gray-200 rounded-lg p-3">
                                <h3 className="text-sky-700 text-lg font-serif font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-700 font-semibold">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:w-1/2 mx-auto '>
                    <img className='h-[500px] w-full rounded-lg' src={featuresImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;