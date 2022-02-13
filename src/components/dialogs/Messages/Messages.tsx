

interface massagesUsers {
    id: number,
    message: string
}

type Props = {
    massagesUsers: massagesUsers[]
}


const Messages = ({massagesUsers}:Props) => {
    return (
        <div className="messages__users">

            <div className="user__message">
                happy coding
            </div>
            <div className="user__message">
                good hacking
            </div>
            <div className="user__message">
                i'm learn TS
            </div>
            <div className="user__message">
                i'm learn react-router v.6
            </div>
        </div>
    )
}

export {Messages};