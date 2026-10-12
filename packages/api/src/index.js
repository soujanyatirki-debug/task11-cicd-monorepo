import { slugify } from "@demo/utils";
export const makeUrl = (title) => `/posts/${slugify(title)}`;
