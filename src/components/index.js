/* Layouts */
/* Services */
import * as Api from "../services/api";
export {Api};


export {default as Header} from "./layouts/Header";
export {default as Footer} from "./layouts/Footer";
export {default as Navbar} from "./layouts/Navbar";
export {default as DarkMode} from "./layouts/header/DarkMode";
export {default as Search} from "./layouts/header/Search";


/* Main */
export {default as App} from "./App";
export {default as Router} from "./Router";


/* Pages */
export {default as Home} from "../pages/Home";
export {default as Products} from "../pages/products/Index";
export {default as ProductId} from "../pages/products/Id";
export {default as NotFound} from "../pages/NotFound";
export {default as Admin} from "../pages/admin/Index";

/* Admin Pages */
export {default as AdminDashboard} from "../pages/admin/dashboard/Index";
export {default as AdminProducts} from "../pages/admin/products/Index";
export {default as AdminProductsCreate} from "../pages/admin/products/Create";



/* Icons */
export {default as IconMenu} from "./common/icons/IconMenu";
export {default as IconClose} from "./common/icons/IconClose";
export {default as IconGithub} from "./common/icons/IconGithub";
export {default as Heart} from "./common/icons/Heart";
export {default as Spinner} from "./common/icons/Spinner";
export {default as Night} from "./common/icons/Night";
export {default as IconDashboard} from "./common/icons/IconDashboard";
export {default as IconProduct} from "./common/icons/IconProduct";



/* Common */
export {default as Tag} from "./common/Tag";
export {default as Price} from "./common/Price";
export {default as Loading} from "./common/Loading";


/* Products */
export {default as ProductCard} from "./products/ProductCard";



