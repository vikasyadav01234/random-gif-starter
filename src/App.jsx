export default function App() {
  return (
    <div >
      <h1 className="bg-white rounded-sm">Random Gifs</h1>
      <div className="flex flex-col">
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
