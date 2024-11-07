import { resolve } from "path";
export default async function About() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  
  return (
    <div className="bg-cover h-screen text-black text-center font-cursive text-4xl bg-blue-200 flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold mb-8">Humorous Touch</h1>
      <p className="text-3xl">We Are Not Perfect, but We Are Perfecting Our Craft.</p>
    </div>
  );
}