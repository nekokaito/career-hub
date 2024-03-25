
const SectionTitle = ({title,des}) => {
    return (
        <div>
            <h2 className="text-3xl lg:text-5xl text-center font-extrabold mb-3">{title}</h2>
            <p className="text-center">{des}</p>
        </div>
    );
};

export default SectionTitle;