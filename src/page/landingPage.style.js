import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    card: {
        position: "fixed",
        top: "30%",
        left: "50%",
        width: "30em",
        height: "21em",
        marginTop: "-9em",
        marginLeft: "-15em",
        border: "1px solid #ccc",
        backgroundColor: "#f3f3f3",
    },

    title: {
        fontFamily: "Cabin",
        fontWeight: "bold",
        fontSize: "40px",
        color: "white",
        textAlign: "center"
    },

    titleCard: {
        background: "#19477d",
    },

    checkbox: {
        marginTop: "10px"
    },

    submitBtnContainer: {
        textAlign: "center"
    },

    submitBtn: {
        backgroundColor: "#19477d",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        width: "90px",
        padding: "6px 16px",
        fontSize: "0.875rem",
        borderRadius: "4px",
        letterSpacing: "0.02857em",
        position: "relative",
        "&:hover": {
            backgroundColor: "white",
            color: "#19477d"
        }
    },

    fieldCardContent: {
        padding: "8px !important"
    },

    userForm: {
        width: "50%",
        marginLeft: "25%",
        textAlign: "center"
    },

    inputBox: {
        marginBottom: "10px",
        background: "white"
    }
}));

export default useStyles;