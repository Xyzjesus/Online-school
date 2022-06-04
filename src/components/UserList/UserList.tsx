import { User } from "types/types";
import './styles.scss'
// do not use I in names of interfaces => now it is bad practice
interface UserListProps {
    users: User[]
}

const UserList = ({users }: UserListProps) => {
    return (
        <div className="list">
            {users.map(({id, name})=>
            // use style is bad practice => use classes 
            <div key={name} className="list__item">
                {id}. {name} приветствуем тебя
            </div>
            )}
        </div>
    );
};

export default UserList;