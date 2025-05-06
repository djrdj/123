const Persons = ({personsToShow}) => (
    <div>
        <h2>Numbers</h2>
        {personsToShow.map((person) => <div key={person.id}>{person.name} {person.number}</div>)}
    </div>
)

export default Persons