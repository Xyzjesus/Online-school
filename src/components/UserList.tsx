import { User } from "types/types";
// do not use I in names of interfaces => now it is bad practice
interface UserListProps {
    users: User[]
}

const UserList = ({users }: UserListProps) => {
    return (
        <div>
            {users.map(({id, name})=>
            // use style is bad practice => use classes 
            <div key={name} style={{padding: 15, border: '1 px solid gray'}}>
                {id}. {name} приветствуем тебя
            </div>
            )}
        </div>
    );
};

export default UserList;