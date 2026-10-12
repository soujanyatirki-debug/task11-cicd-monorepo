export const slugify = (s) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const sum = (...n) => n.reduce((a, b) => a + b, 0);
