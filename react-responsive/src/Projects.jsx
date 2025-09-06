export default function Projects() {
    const cards = [
        { id: 1, title: "Project One", text: "This is project one." },
        { id: 2, title: "Project Two", text: "This is project two." },
        { id: 3, title: "Project Three", text: "This is project three." },
        { id: 4, title: "Project Four", text: "This is project four." },
        { id: 5, title: "Project Five", text: "This is project five." },
        { id: 6, title: "Project Six", text: "This is project six." },
      ];

      return (
        <section className="bg-blue-100 py-10 px-4 mt-6">
            <h2 className="text-2xl font-bold text-center mb-8">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {cards.map((card) => (
                    <div key={card.id} className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition">
                        <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                        <p className="text-blue-600 text-sm">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
      )
}