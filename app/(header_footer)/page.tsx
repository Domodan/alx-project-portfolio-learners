import CoursesList from "../CoursesList";
import SideBar from "../SideBar";
import AccordionLayout from "../AccordionLayout";
async function getCategories() {
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/categories`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

async function getCourses() {
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/courses`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
export default async function Home() {
  const categories = await getCategories();
  const courses = await getCourses();
  console.log(courses);
  return (
    <main className="sm:flex mt-5 mb-10">
      <div className="hidden md:block md:basis-1/6 px-4">
        <SideBar categories={categories} />
      </div>
      <div className="px-5 md:basis-5/6">
        <CoursesList courses={courses} />
      </div>
    </main>
  );
}
