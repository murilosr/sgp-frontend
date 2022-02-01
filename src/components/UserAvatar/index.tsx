import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IUser from "interfaces/users";

const UserAvatar = (props: {user : IUser, size? : number}) => {

    const size = props.size?props.size:32;

    return (
        <Tooltip key={props.user._id} title={props.user.name} arrow>
            <Avatar src={props.user.avatarUrl} sx={{width: `${size}px`, height: `${size}px`}}>TR</Avatar>
        </Tooltip>
    )

}

export default UserAvatar;