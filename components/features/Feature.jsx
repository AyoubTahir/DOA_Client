const Feature = ({ children, title, subtitle }) => {
  return (
    <div className="flex justify-center items-center border border-primary md:w-1/3 py-5 pr-4 font-roboto rounded space-x-4">
      <div className="flex items-center">{children}</div>
      <div>
        <h4 className="text-l lg:text-xl">{title}</h4>
        <p className="text-gray-600 lg:text-sm text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default Feature;
