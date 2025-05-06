const Part = ({ part }) => (
    <div>
        <p key={part.id}>{part.name} {part.exercises}</p>
    </div>
);

export default Part