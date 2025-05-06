const Sum = ({parts}) => {
    let sum=0
    parts.map(part=>sum+=part.exercises)
    return (
        <div>
            <b>total of {sum} exercises</b>
        </div>
    )
    
}

export default Sum