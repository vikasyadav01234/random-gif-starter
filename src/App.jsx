import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden item-center">
      <h1 className="bg-white absolute rounded-lg w-11/12 text-center mt-[40px]
        px-10 py-2 text-4xl font-bold mx-auto">
      Random Gifs</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
