import {UsersType} from "../../redux/users-reducer";
import {FC} from "react";

type PropsType = {
    users: Array<UsersType>,
    changeFollowStatus: (id: string) => void
}

export const Users: FC<PropsType> = ({users, changeFollowStatus}) => {

    const renderUsers = users.map((user) => {
        return (
            <div className='container__user' key={user.id}>
                <div className='left__info'>
                    <div className='avatar'>
                        <img src={user.URL} alt="avatar"/>
                        <input type="button" value={user.follow ? 'follow' : 'unfollow'}
                               onClick={()=>{changeFollowStatus(user.id)}}/>
                    </div>
                </div>
                <div className='right__info'>
                    <div className='user__info'>
                        <div>{user.fullName}</div>
                        <div>{user.statusUser}</div>
                    </div>

                    <div className='user__location'>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div className='container__users'>

                {renderUsers}

        </div>
    )
}