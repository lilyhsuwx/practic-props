function UserItem({user}) {

    const {name, age, isStudent, hobbies, address:{city, zipCode}} = user
    
    return (
        <li key={name}>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{isStudent? "student": "non-student"}</p>

            <div>{hobbies.map((hobbie) => {
                return (
                    <div key={hobbie}>{hobbie}</div>
                )
            })}</div>

            <p>{city}</p>
            <p>{zipCode}</p>
        </li>
    )
}

export default UserItem