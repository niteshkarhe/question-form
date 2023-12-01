import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    questionForm: {
        position: "fixed",
        top: "30%",
        left: "50%",
        width: "30em",
        height: "21em",
        marginTop: "-6em",
        marginLeft: "-15em",
    }
}));

export default useStyles;