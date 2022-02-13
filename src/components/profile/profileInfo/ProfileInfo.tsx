import avatar from "../../../img/ava.jpg";

const ProfileInfo = () => {
    return (
        <div className="profile__user">
            <div className="user__avatar">
                <img src={avatar} alt=""/>
            </div>
            <div className="user__descriptions">
                <div> LogicalThinker</div>
                <div> Web Developer</div>
                <div> Frontend</div>
                <div> Saint Petersburg</div>
            </div>
        </div>
    )
}

export {ProfileInfo};