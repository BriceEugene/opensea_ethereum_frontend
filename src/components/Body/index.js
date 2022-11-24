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
import ViewListIcon from "@mui/icons-material/ViewList";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridViewIcon from "@mui/icons-material/GridView";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import SearchIcon from "@mui/icons-material/Search";
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
        <h1>Cel Mates Crime Reports</h1>
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
        <div className="flex flex-row gap-10">
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold">1016 ETH</span>
            <span className="text-zinc-400">total volumn</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold">0.85 ETH</span>
            <span className="text-zinc-400">floor price </span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold">0.778 ETH</span>
            <span className="text-zinc-400">best offer</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold">6%</span>
            <span className="text-zinc-400">listed</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold">1993</span>
            <span className="text-zinc-400">owners</span>
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-xl text-black font-bold">48%</span>
            <span className="text-zinc-400">unique owners</span>
          </div>
        </div>
      </div>
      <div className="toolbar flex h-12 space-x-4 my-3 w-full">
        <div className="flex items-center">
          <IconButton aria-label="filter">
            <FilterListIcon />
          </IconButton>
        </div>
        <div className="w-full">
          <FormControl className="h-full w-full">
            <OutlinedInput
              className="h-full"
              id="outlined-adornment-amount"
              value={values.amount}
              onChange={handleChange("amount")}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="w-60 flex items-center">
          <ButtonGroup
            className="w-full h-full"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button>
              <ViewListIcon />
            </Button>
            <Button>
              <GridOnIcon />
            </Button>
            <Button>
              <GridViewIcon />
            </Button>
            <Button>
              <CalendarViewMonthIcon />
            </Button>
          </ButtonGroup>
        </div>
        <div className="w-60 flex items-center">
          <button className="inline-flex flex-row items-center rounded-xl justify-center leading-5 py-3 px-6 bg-white border-gray-200 border-2">
            <span className="font-semibold text-base whitespace-nowrap text-sky-500">
              Make collection offer
            </span>
          </button>
        </div>
      </div>
      {/* grid gap-2 sm:grid-cols-6 lg:grid-cols-3 md:grid-cols-5 2xl:grid-cols-5 xl:grid-cols-4 */}
      <div className="grid gap-2 sm:max-md:grid-cols-2 md:max-lg:grid-cols-3 lg:max-xl:grid-cols-4 xl:max-2xl:grid-cols-5 2xl:grid-cols-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
          (item) => (
            <div>
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
          )
        )}
      </div>
    </div>
  );
}
