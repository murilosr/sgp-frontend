import Box from "@mui/material/Box";
import IUser from "interfaces/users";
import UserAvatar from "components/UserAvatar";
import Typography from "@mui/material/Typography";

const ProjectMembersAvatarRow = (props: {data : Array<IUser>, maxDisplay? : number}) => {
    let maxDisplay = 999999;
    
    if(props.maxDisplay !== undefined){
        maxDisplay = props.maxDisplay;
    }

    const plusRemaining = props.data.length - maxDisplay;

    let data = props.data;
    if(plusRemaining > 0){
        data = props.data.slice(0, maxDisplay);
    }

    return (
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            {
                data.map(member => {
                    return <UserAvatar user={member} />
                })
            }
            {
                plusRemaining > 0?(
                    <Box sx={{display: "flex", alignItems: "center", justifyContent: "start", paddingLeft: "5px"}}>
                        <Typography variant="button" color="#1976d2">+{plusRemaining}</Typography>
                    </Box>
                ):null
            }
        </Box>
    );
}

export default ProjectMembersAvatarRow;