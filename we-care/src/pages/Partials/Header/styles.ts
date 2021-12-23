import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        backgroundColor: "#ffffff !important",
        color: "black !important",
        boxShadow: "none !important",
      },
      toolbar: {
        margin: "3rem",
      },
      circle: {
        height: "30px",
        width: "30px",
        backgroundColor: "#458FF6",
        borderRadius: "50%",
        display: "inline-block",
      },
      logo: {
        color: "white",
        marginRight:"3rem"
      },
}));