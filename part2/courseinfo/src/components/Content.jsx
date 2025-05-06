import Part from "./Part";
import Sum from "./Sum";

const Content = ({ parts }) => (
    <div>
        {parts.map(part => <Part key={part.id} part={part}/>)}
        <Sum parts={parts}/>
    </div>
);

export default Content