export default function Card() {
    return (
        <div className="w-full md:w-4/5 lg:w-[400px] mx-auto mt-10 p-4 rounded shadow-lg flex flex-col gap-3">
            <img src="./public/dog.jpeg" alt="dog" className="w-full h-auto rounded-md object-cover" />
            <p className="text-red-400 text-base">This is a very beautiful dog!</p>
            <button className="self-start bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">Click Me</button>
        </div>
    )
}