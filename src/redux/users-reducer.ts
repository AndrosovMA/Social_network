/** action_type*/
const FOLLOW_STATUS: string = 'FOLLOW_STATUS';

/** types*/
type ActionType = {
    type: string,
    id: string
}
type LocationType = {
    city: string,
    country: string
}
export type UsersType = {
    id: string,
    fullName: string,
    statusUser: string,
    location: LocationType,
    URL: string,
    follow: boolean
}
type StateType = {
    users: Array<UsersType>
}

/** action creator */
export const followStatus = (id: string) => {
    return {
        type: FOLLOW_STATUS,
        id: id
    }
}

const initialState = {
    users: [
        {
            id: '1', fullName: 'Maks.A', statusUser: 'i"m learn react',
            location: {city: 'Mirny', country: 'Rossia'},
            URL: 'https://yobte.ru/uploads/posts/2019-11/programmist-42-foto-7.png',
            follow: true
        },
        {
            id: '2', fullName: 'Maks.A', statusUser: 'i"m learn react',
            location: {city: 'Mirny', country: 'Rossia'},
            URL: 'https://yobte.ru/uploads/posts/2019-11/programmist-42-foto-7.png',
            follow: true
        },
        {
            id: '3', fullName: 'Maks.A', statusUser: 'i"m learn react',
            location: {city: 'Mirny', country: 'Rossia'},
            URL: 'https://yobte.ru/uploads/posts/2019-11/programmist-42-foto-7.png',
            follow: true
        }
    ]
}
export const userReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.id) {
                        return {...user, follow: !user.follow }
                    }
                    return {...user};
                })
            }
        default:
            return state
    }
}

