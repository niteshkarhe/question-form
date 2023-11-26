import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    card: {
        position: "fixed",
        top: "40%",
        left: "50%",
        width: "30em",
        height: "22em",
        marginTop: "-9em",
        marginLeft: "-15em",
        border: "1px solid #ccc",
        backgroundColor: "#f3f3f3",
    },

    title: {
        fontFamily: "Cabin",
        fontWeight: "bold",
        fontSize: "40px",
        color: "white"
    },

    titleCard: {
        background: "#19477d",
    },

    fieldCardContent: {
        padding: "8px !important"
    },

    userForm: {
        width: "50%",
        marginLeft: "25%",
    },

    inputBox: {
        marginBottom: "10px",
        background: "white"
    }
}));

export default useStyles;