const Sum = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)

    return (
        <div>
            <b>total of {total} exercises</b>
        </div>
    )

}

export default Sum