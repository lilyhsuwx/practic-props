import UserItem from "./UserItem"

function UserList({users}) {
    return (

        <ul>{users.map((user) => {
            return (
                <UserItem user={user} key={user.name}/>
            )
        })}</ul>

    )
}

export default UserList