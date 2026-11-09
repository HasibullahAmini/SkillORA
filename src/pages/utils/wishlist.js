import coursesData from "../data/coursesData";

const STORAGE_KEY = "skillora-wishlist";

export const getWishlistIds = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

export const getWishlistCourses = () => {
  const savedIds = getWishlistIds();

  return coursesData.filter((course) => savedIds.includes(course.id));
};

export const toggleWishlist = (courseId) => {
  const savedIds = getWishlistIds();

  const updatedIds = savedIds.includes(courseId)
    ? savedIds.filter((id) => id !== courseId)
    : [...savedIds, courseId];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedIds));

  window.dispatchEvent(new Event("wishlistUpdated"));

  return updatedIds;
};
