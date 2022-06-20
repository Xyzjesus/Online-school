import { User } from "types/types";
import './styles.scss'
// do not use I in names of interfaces => now it is bad practice
interface UserListProps {
    users: User[]
}

const UserList = ({users}: UserListProps) => {
    return (
        <div className="list">
            {users.map(({id, username, wallet_balance})=>
            // use style is bad practice => use classes 
            <div key={username} className="list__item">
                {id}. {username} has {wallet_balance}
            </div>
            )}
        </div>
    );
};

export default UserList;