import React, { useState } from "react";
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
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControlLabel,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewListIcon from "@mui/icons-material/ViewList";
import GridOnIcon from "@mui/icons-material/GridOn";
import GridViewIcon from "@mui/icons-material/GridView";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import SearchIcon from "@mui/icons-material/Search";
import TwitterIcon from "@mui/icons-material/Twitter";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WindowIcon from "@mui/icons-material/Window";
import { CheckBox, ExpandMore } from "@mui/icons-material";
export default function Body() {
  const [filterVisible, setFilterVisible] = useState(false);
  return (
    <>
      <div className="bg-white-100 w-full flex box-border">
        <div className="px-4 xl:px-8 2xl:px-16 py-0 mx-auto my-0 w-full max-w-[2560px]">
          <div className="flex w-full items-start box-border">
            <div className="min-w-0 max-w-9/10 md:max-w-8/10 lg:max-w-6/10">
              <div className="flex items-center break-words gap-1">
                <div className="block max-md:hidden m-0 p-0">
                  <h1 className="font-semibold text-2xl text-slate-900 m-0 w-full">
                    Cel Mates Crime Reports
                  </h1>
                </div>
                <div className="block md:hidden m-0 p-0">
                  <h1 className="font-semibold text-3xl text-slate-900 m-0 w-full">
                    Cel Mates Crime Reports
                  </h1>
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div className="m-0 p-0 max-md:hidden">
                <div className="flex items-center">
                  <div className="m-0 p-0 max-md:hidden">
                    <div className="flex items-center">
                      <div className="flex gap-1">
                        <a>
                          <button className="bg-gray-0 text-gray-900 hover:transition-all hover:ease-in hover:duraton-200 hover:shadow-lg flex items-center center w-12 h-12 p-3 border-0 rounded-[50%]">
                            <DocumentScannerIcon />
                          </button>
                        </a>
                        <a>
                          <button className="bg-gray-0 text-gray-900 hover:transition-all hover:ease-in hover:duraton-200 hover:shadow-lg flex items-center center w-12 h-12 p-3 border-0 rounded-[50%]">
                            <InsertLinkIcon />
                          </button>
                        </a>
                        <a>
                          <button className="bg-gray-0 text-gray-900 hover:transition-all hover:ease-in hover:duraton-200 hover:shadow-lg flex items-center center w-12 h-12 p-3 border-0 rounded-[50%]">
                            <TwitterIcon />
                          </button>
                        </a>
                      </div>
                      <div className="w-px h-6 mx-2.5 bg-gray-300" />
                    </div>
                  </div>
                  <div className="flex mt-0 relative z-40">
                    <div className="flex items-center">
                      <div className="m-0 p-0">
                        <div className="mr-1">
                          <button className="bg-gray-0 text-gray-900 hover:transition-all hover:ease-in hover:duraton-200 hover:shadow-lg flex items-center center w-12 h-12 p-3 border-0 rounded-[50%]">
                            <StarOutlineIcon />
                          </button>
                        </div>
                      </div>
                      <div className="mr-1">
                        <button className="bg-gray-0 text-gray-900 hover:transition-all hover:ease-in hover:duraton-200 hover:shadow-lg flex items-center center w-12 h-12 p-3 border-0 rounded-[50%]">
                          <InsightsIcon />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <button className="bg-gray-0 text-gray-900 hover:transition-all hover:ease-in hover:duraton-200 hover:shadow-lg flex items-center center w-12 h-12 p-3 border-0 rounded-[50%]">
                        <MoreHorizIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
      <div>
        <div className="py-0 px-4 md:-mt-1.5 xl:px-8 2xl:px-16 my-0 mx-auto max-w-[2560px] w-full">
          <div className="flex flex-col">
            <div className="flex items-center">
              <div className="flex mr-4 mt-2">
                <div className="md:hidden m-0 p-0">
                  <div className="flex items-center">
                    <div className="font-normal text-sm text-gray-900">
                      By&nbsp;
                    </div>
                    <a className="no-underline">
                      <div className="font-semibold text-sm text-gray-900">
                        CelMatesByMcBess
                      </div>
                    </a>
                    <a className="text-blue-500">
                      <SafetyCheckIcon />
                    </a>
                  </div>
                </div>
                <div className="max-md:hidden m-0 p-0">
                  <div className="flex items-center">
                    <div className="font-normal text-base text-gray-900">
                      By&nbsp;
                    </div>
                    <a className="no-underline">
                      <div className="font-semibold text-base text-gray-900">
                        CelMatesByMcBess
                      </div>
                    </a>
                    <a className="text-blue-500">
                      <SafetyCheckIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-0 px-4 xl:px-8 2xl:px-16 mx-auto my-0 w-full max-w-[2560px]">
        <div>
          <div className="my-3 text-gray-900">
            <span className="whitespace-pre">
              Items <span className="font-semibold whitespace-pre">4,117</span>
            </span>
            &nbsp;&nbsp;·&nbsp;
            <span className="whitespace-pre">
              Created{" "}
              <span className="font-semibold whitespace-pre">Nov 2022</span>
            </span>
            &nbsp;&nbsp;·&nbsp;
            <span className="whitespace-pre">
              Creator fee{" "}
              <span className="font-semibold whitespace-pre">6.9%</span>
            </span>
            &nbsp;&nbsp;·&nbsp;
            <span className="whitespace-pre">
              Chain{" "}
              <span className="font-semibold whitespace-pre">Ethereum</span>
            </span>
          </div>
        </div>
        <div>
          <div className="break-words flex flex-col max-w-full md:max-w-8/10 lg:max-w-6/10 xl:max-w-9/10">
            <div className="w-full text-gray-900 m-0">
              <p>
                Crime reports are used to redeem Cel Mates and enter the
                hallowed halls of the Steel Hose Penitentiary. An exclusive hub
                for counterculture and creatives to gather. 1 CRIME REPORT = 1
                CEL MATE.
              </p>
            </div>
            <div className="self-start text-gray-900">
              <button className="inline-flex items-center">Show less</button>
            </div>
          </div>
          <div className="mt-8 flex gap-8 md:gap-10 overflow-hidden pb-2 text-gray-900">
            <a className="no-underline">
              <div className="flex flex-col items-start">
                <span className="font-semibold">1,015 ETH</span>
                <span>total volumn</span>
              </div>
            </a>
            <a className="no-underline">
              <div className="flex flex-col items-start">
                <span className="font-semibold">0.85 ETH</span>
                <span>floor price</span>
              </div>
            </a>
            <a className="no-underline">
              <div className="flex flex-col items-start">
                <span className="font-semibold">0.788 ETH</span>
                <span>best offer</span>
              </div>
            </a>
            <a className="no-underline">
              <div className="flex flex-col items-start">
                <span className="font-semibold">6%</span>
                <span>listed</span>
              </div>
            </a>
            <a className="no-underline">
              <div className="flex flex-col items-start">
                <span className="font-semibold">1,1992</span>
                <span>owners</span>
              </div>
            </a>
            <a className="no-underline">
              <div className="flex flex-col items-start">
                <span className="font-semibold">48%</span>
                <span>unique owners</span>
              </div>
            </a>
          </div>
        </div>
        <Tabs value={0}>
          <Tab label="Items" />
        </Tabs>
        <div role="tabpanel">
          <div className="flex z-40 h-16 t-20 lg:sticky text-gray-900">
            <div className="w-[calc(100vw-17px)] t-0 h-full shadow-none lg:absolute lg:bg-gray-0 lg:left-[calc((100vw-(100%+17px))/-2)] lg:right-calc((100vw-(100%+17px))/-2)">
              <div className="h-full">
                <div className="flex items-center h-full max-w-[2560px] w-full px-4 py-0 xl:px-8 2xl:px-16">
                  <button
                    onClick={() => setFilterVisible((visible) => !visible)}
                  >
                    <FilterListIcon />
                  </button>
                  <div className="mx-3 w-full">
                    <FormControl className="w-full">
                      <OutlinedInput
                        className="h-full"
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <ButtonGroup
                    className="w-1/5"
                    variant="outlined"
                    aria-label="outlined button group"
                  >
                    <Button>
                      <FormatListBulletedIcon />
                    </Button>
                    <Button>
                      <GridOnIcon />
                    </Button>
                    <Button>
                      <GridViewIcon />
                    </Button>
                    <Button>
                      <WindowIcon />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-0 w-full md:flex">
            <div className="max-md:hidden">
              <div
                className={`flex flex-col sticky top-[138px] h-[calc(100vh-138px)] overflow-hidden ${
                  filterVisible ? "w-[340px] -ml-2.5 mr-4" : "w-0"
                }`}
              >
                <div className="mr-4 mt-2">
                  <Accordion className="!shadow-none">
                    <AccordionSummary expandIcon={<ExpandMore />} id="status">
                      Status
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-col items-start">
                        <FormControlLabel
                          value="buy-now"
                          className="my-4"
                          control={<CheckBox />}
                          label="Buy Now"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="auction"
                          className="my-4"
                          control={<CheckBox />}
                          label="On Auction"
                          labelPlacement="start"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <hr />
                  <Accordion className="!shadow-none">
                    <AccordionSummary expandIcon={<ExpandMore />} id="price">
                      Price
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-col items-start">
                        <FormControlLabel
                          value="buy-now"
                          className="my-4"
                          control={<CheckBox />}
                          label="Buy Now"
                          labelPlacement="start"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                  <hr />
                  <Accordion className="!shadow-none">
                    <AccordionSummary expandIcon={<ExpandMore />} id="status">
                      Currency
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="flex flex-col items-start">
                        <FormControlLabel
                          value="ether"
                          className="my-4"
                          control={<CheckBox />}
                          label="ETH"
                          labelPlacement="start"
                        />
                        <FormControlLabel
                          value="wether"
                          className="my-4"
                          control={<CheckBox />}
                          label="WETH"
                          labelPlacement="start"
                        />
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
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
    </>
  );
}
