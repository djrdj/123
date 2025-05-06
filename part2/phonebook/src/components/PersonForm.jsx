const PersonForm = ({addPerson,newName,newNumber,setNewName,setNewNumber}) => (
    <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
            name:
            <input
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
            />
        </div>
        <div>
            number:
            <input
                value={newNumber}
                onChange={(event) => setNewNumber(event.target.value)}
            />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

export default PersonForm