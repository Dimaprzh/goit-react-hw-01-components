



export const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats: { followers, views, likes } } = user
    return <div>
        <div>
            <img src={avatar} alt="User avatar" className="avatar" />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
        </div>

        <ul>
            <li>
                <p>Followers</p>
                <p>{followers}</p>
            </li>
            <li>
                <p>Views</p>
                <p>{views}</p>
            </li>
            <li>
                <p>Likes</p>
                <p>{likes}</p>
            </li>
        </ul>
    </div>
}