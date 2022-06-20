import { Typography } from '@mui/material';
import { Page } from 'components'
import UserList from 'components/UserList/UserList';
import { useEffect, useState } from 'react';


const LeaderBoard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://pure-wildwood-03252.herokuapp.com/leaderboard")
        .then((resp) => resp.json())
        .then((json) => {
            setUsers(json);
        })
    });

    return (
        <Page>
            <Typography variant='h4'>{'Top students'}</Typography>
            <UserList users={users}></UserList>
        </Page>
    )
}

export { LeaderBoard };