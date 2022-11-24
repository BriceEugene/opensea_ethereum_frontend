import * as React from "react";
import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ButtonGroup,
  Typography,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
export default function Body() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <div className="p-6">
      <div className="content-body">
        <Typography gutterBottom variant="h5" component="div" color="black">
          Cel Mates Crime Reports
        </Typography>
        <Typography gutterBottom variant="h5" component="div" color="black">
          By CelMatesByMcBess
        </Typography>
        <Typography gutterBottom variant="h7" component="div" color="black">
          Items <span className="font-bold">4,117</span> · Created{" "}
          <span className="font-bold">Nov 2022</span> · Creator fee{" "}
          <span className="font-bold">6.9%</span> · Chain{" "}
          <span className="font-bold">Ethereum</span>
        </Typography>
        <Typography gutterBottom variant="h7" component="div" color="black">
          Crime reports are used to redeem Cel Mates and enter the hallowed
          halls of the Steel Hose Penitentiary. An exclusive hub for
          counterculture and creatives to gather. 1 CRIME REPORT = 1 CEL MATE.
        </Typography>
        <div>
          <div className="flex flex-col">
            <span className="text-xl text-black font-bold">994 ETH</span>
            <span className="text-zinc-400">total volumn</span>
          </div>
        </div>
      </div>
      <div className="toolbar flex h-12 space-x-4">
        <IconButton aria-label="filter">
          <FilterListIcon />
        </IconButton>
        <FormControl className="h-full w-2/4">
          <OutlinedInput
            className="h-full"
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <ButtonGroup
          className="w-1/5"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Button className="w-1/5" variant="outlined">
          Make collection offer
        </Button>
      </div>

      <div className="content">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="img/card.png"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h7" component="div">
              Cel Mates Crime Report
            </Typography>
            <Typography variant="h7" color="text.secondary">
              0.929 ETH
            </Typography>
            <Typography variant="h7" color="text.secondary">
              Last Sale
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
