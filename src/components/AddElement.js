import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import BurstModeIcon from "@material-ui/icons/BurstMode";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import RoomIcon from "@material-ui/icons/Room";
import ViewCarouselOutlinedIcon from "@material-ui/icons/ViewCarousel";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import Carousel from "./sections/Carousel";
import Accordion from "./sections/Accordion";
import ThreeImages from "./sections/ThreeImages";
import ReviewCard from "./sections/ReviewCard";
import ExpandableTable from "./sections/ExpandableTable";
import Testimonial from "./sections/Testimonial";
import Hero from "./sections/Hero";
import FeaturesTiles from "./sections/FeaturesTiles";
import Pricing from "./sections/PricingTemplate";
import ChatBox from "./sections/ChatBox";
import SigninElement from "./sections/SigninElement";
import CheckOut from "./sections/PlaceOrder/Checkout";
import DeleteIcon from "@material-ui/icons/Delete";
import TimeLine from "./sections/Timeline";
import VerticalLinearStepper from "./sections/VerticalStepper";
// import { TextareaAutosize } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     /* bring your own prefixes */
//     transform: "translate(-50%, -50%)",
//     width: "35vw",
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "inherit",
//     border: "1px solid inherit",
//     boxShadow: theme.shadows[5],
//     // padding: theme.spacing(0.5, 0.5, 0.5),
//     borderRadius: "15px"
//   }
// }));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "0",
    marginTop: "25vh",
    display: "flex",
    justifyContent: "center"
    //     position: "fixed",
    //     top: "50%",
    //     left: "50%",
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(2),
    left: theme.spacing(142)
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function AddElement() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isshowAdd, setShowAdd] = useState(false);
  // const [showCarousel, setShowCarousel] = useState(false);
  const [xelement, setXelement] = useState([]);
  const [isDelVis, setIsVis] = useState(false);

  function handleDelMouseEnter() {
    setIsVis(true);
  }
  function handleDelMouseLeave() {
    setIsVis(false);
  }

  function addXelement(e) {
    console.log(e);
    setXelement((prevElements) => {
      return [...prevElements, e];
    });
    console.log(xelement);
  }

  function deleteXelement(id) {
    setXelement((xelement) => {
      return xelement.filter((val, index) => {
        return index !== id;
      });
    });
  }

  // function deleteXelement(id) {
  //   setXelement((xelement) => {
  //     return xelement.filter((val, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  const handleOpen = () => {
    setOpen(true);
  };

  function handleMouseEnter() {
    setShowAdd(true);
  }
  function handleMouseLeave() {
    setShowAdd(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <span className={classes.root}>
      <Grid
        container
        xs={12}
        sm={6}
        spacing={1}
        style={{ backgroundColor: "#242b3a", borderRadius: "15px" }}
      >
        <Grid
          container
          item
          xs={12}
          spacing={1}
          style={{ backgroundColor: "#242b3a", borderRadius: "15px" }}
        >
          <React.Fragment>
            <Grid
              item
              xs={12}
              align="center"
              style={{ backgroundColor: "#242b3a", borderBottom: "1px solid" }}
            >
              <Typography
                gutterBottom
                variant="h5"
                style={{ color: "#afc9d7", margin: "0" }}
              >
                Add Section
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper
                id="1"
                value="1"
                className={classes.paper}
                onClick={() =>
                  addXelement(<Accordion forDel={deleteXelement} />)
                }
                style={{ backgroundColor: "#242b3a" }}
              >
                <Card
                  style={{
                    margin: "auto",

                    backgroundColor: "#1c222e",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <CalendarViewDayIcon
                      style={{
                        margin: "auto",
                        fill: "#646f86",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "50"
                      }}
                    />

                    <Typography style={{ color: "#afc9d7" }}>Blank</Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                id="2"
                value="2"
                className={classes.paper}
                onClick={() => addXelement(<VerticalLinearStepper />)}
                style={{ backgroundColor: "#242b3a" }}
              >
                {/* <Testimonial topDivider /> */}
                <Card
                  style={{
                    margin: "auto",
                    backgroundColor: "#1c222e",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <ArtTrackIcon
                      style={{
                        margin: "auto",
                        fill: "#646f86",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "50"
                      }}
                    />

                    <Typography style={{ color: "#afc9d7" }}>
                      Text and Image
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                id="3"
                value="3"
                className={classes.paper}
                // onClick={handleModalClick}
                onClick={() => addXelement(<ThreeImages />)}
                style={{ backgroundColor: "#242b3a" }}
              >
                <Card
                  style={{
                    margin: "auto",
                    backgroundColor: "#1c222e",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <BurstModeIcon
                      style={{
                        margin: "auto",
                        fill: "#646f86",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "50"
                      }}
                    />

                    <Typography style={{ color: "#afc9d7" }}>
                      Multiple Images
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                className={classes.paper}
                onClick={() => addXelement(<ReviewCard />)}
                id="4"
                value="4"
                style={{ backgroundColor: "#242b3a" }}
              >
                <Card
                  style={{
                    margin: "auto",
                    backgroundColor: "#1c222e",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <ChromeReaderModeIcon
                      style={{
                        margin: "auto",
                        fill: "#646f86",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "50"
                      }}
                    />

                    <Typography style={{ color: "#afc9d7" }}>
                      Contact Card
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                className={classes.paper}
                id="5"
                value="5"
                style={{ backgroundColor: "#242b3a" }}
                onClick={() => addXelement(<Carousel />)}
              >
                <Card
                  style={{
                    margin: "auto",
                    backgroundColor: "#1c222e",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <ViewCarouselOutlinedIcon
                      style={{
                        margin: "auto",
                        fill: "#646f86",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "50"
                      }}
                    />

                    <Typography style={{ color: "#afc9d7" }}>
                      Carousel
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                className={classes.paper}
                id="6"
                value="6"
                onClick={() => addXelement(<TimeLine />)}
                style={{ backgroundColor: "#242b3a" }}
              >
                <Card
                  style={{
                    margin: "auto",
                    backgroundColor: "#1c222e",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={classes.root}
                  variant="outlined"
                >
                  <CardContent>
                    <RoomIcon
                      style={{
                        margin: "auto",
                        fill: "#646f86",
                        display: "flex",
                        justifyContent: "center",
                        fontSize: "50"
                      }}
                    />

                    <Typography style={{ color: "#afc9d7" }}>
                      Map Location
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </React.Fragment>
        </Grid>
      </Grid>
    </span>
  );

  return (
    <span>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          margin: "auto",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          border: isshowAdd ? "1px dashed" : null
        }}
      >
        {isshowAdd ? (
          <Fab color="primary" aria-label="add" onClick={handleOpen}>
            <AddIcon />
          </Fab>
        ) : null}
      </div>

      <span
        onMouseEnter={handleDelMouseEnter}
        onMouseLeave={handleDelMouseLeave}
      >
        {xelement.map((item, index) => {
          return (
            <span
              key={index}
              id={index}
              style={{
                opacity: isDelVis ? "1" : "0",
                border: isDelVis ? "2px dashed " : "0"
              }}
              // onDoubleClick={() => deleteXelement(index)}
            >
              {/* <div> */}
              <Fab
                onClick={() => deleteXelement(index)}
                className={classes.DelBut}
                color="secondary"
                aria-label="add"
              >
                <DeleteIcon />
              </Fab>
              {/* </div> */}
              {item}
            </span>
          );
        })}
      </span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </span>
  );
}
