import { IUser } from "types/types";

interface UserListProps {
    users: IUser[]
}

const UserList = ({users }: UserListProps) => {
    return (
        <div>
            {users.map(user =>
            <div key={user.id} style={{padding: 15, border: '1 px solid gray'}}>
                {user.id}. {user.name} приветствуем тебя
            </div>
            )}
        </div>
    );
};

export default UserList;