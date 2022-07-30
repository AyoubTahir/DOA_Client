import Category from "./Category";
import {
  category1Image,
  category2Image,
  category3Image,
  category4Image,
  category5Image,
  category6Image,
} from "../../public/assets/images";

const Categories = () => {
  return (
    <div className="mt-14">
      <h1 className="text-2xl sm:text-3xl mb-6 uppercase">CATEGORIES</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <Category image={category1Image} title="Bedroom" />
        <Category image={category2Image} title="Mattresses" />
        <Category image={category3Image} title="Office" />
        <Category image={category4Image} title="Outdoor" />
        <Category image={category5Image} title="Lounges & Sofas" />
        <Category image={category6Image} title="Living & Dining" />
      </div>
    </div>
  );
};

export default Categories;
