import Chip from "@mui/material/Chip";

const twoDigitsNumber = (n : number) : string => {
    return n.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
}

const DatePill = (props: {startDate? : Date, endDate? : Date, checkDate? : boolean}) => {

    const startDate = props.startDate?`${twoDigitsNumber(props.startDate.getUTCDate())}/${twoDigitsNumber(props.startDate.getUTCMonth() + 1)}`:null;
    const endDate = props.endDate?`${twoDigitsNumber(props.endDate.getUTCDate())}/${twoDigitsNumber(props.endDate.getUTCMonth() + 1)}`:null;

    const checkDate = props.checkDate === undefined?true:props.checkDate;

    let label = "";
    let variant : "outlined"|undefined = checkDate?undefined:"outlined";
    let color : "success"|"error"|undefined = checkDate?"success":undefined;

    const dateNow = new Date(Date.now());

    if(props.endDate !== undefined && props.startDate !== undefined){
        label = `${startDate} - ${endDate}`;
        if(dateNow < props.startDate && checkDate){
            color = "success";
        }else if(dateNow > props.endDate && checkDate){
            color = "error";
        }else{
            color = undefined;
        }
    }else if(props.endDate !== undefined){
        label = `${endDate}`;
        if(dateNow > props.endDate && checkDate){
            color = "error";
        }else{
            color = undefined;
        }
    }else if(props.startDate !== undefined){
        label = `${startDate}`;
        if(dateNow > props.startDate && checkDate){
            color = "error";
        }else{
            color = undefined;
        }
    }
    else {
        return null;
    }

    return (
        <Chip label={label} color={color} variant={variant} />
    )
}

export default DatePill;