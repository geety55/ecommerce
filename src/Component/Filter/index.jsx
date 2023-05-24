import React from "react";

import {
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";
import { useData } from "../../Context/DataContext";

import "./Filter.css";

function Filter(props) {
  const { state, dispatch } = useData();
  const { className } = props;
  const classes = className + " filter";
  return (
    <div className={classes}>
      <h2 className="filter_head">FILTER</h2>
      <div className="filter_wrap">
        {/* CATEGORY */}
        <Accordion sx={{ backgroundColor: "#000" }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <legend className="filter_legend">GENRE</legend>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset className="filter_field filter_genre">
              {state.categoryList.map((currentGenre) => {
                return (
                  <FormControlLabel
                    sx={{ color: "#fff" }}
                    key={currentGenre._id}
                    control={
                      <Checkbox
                        checked={state.filterBy.category.includes(
                          currentGenre.categoryName
                        )}
                        onChange={() => {
                          dispatch({
                            type: "FILTER_BY_CATEGORY",
                            payload: currentGenre.categoryName,
                          });
                        }}
                        sx={{
                          color: "#fcaf17",
                          "&.Mui-checked": {
                            color: "#fcaf17",
                          },
                        }}
                      />
                    }
                    label={currentGenre.categoryName}
                  />
                );
              })}
            </fieldset>
          </AccordionDetails>
        </Accordion>

        {/* SORT */}
        <Accordion sx={{ backgroundColor: "#000" }}>
          <AccordionSummary
            expandIcon={<ExpandMore sx={{ color: "#fff" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <legend className="filter_legend">SORT</legend>
          </AccordionSummary>
          <AccordionDetails>
            <fieldset className="filter_field filter_sort">
              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Radio
                    value="lowToHigh"
                    checked={state.filterBy.sort == "lowToHigh"}
                    onChange={(event) =>{
                      dispatch({
                        type: "FILTER_BY_RADIO",
                        payload: event.target.value,
                      })}
                    }
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Price: Low to High"
              />

              <FormControlLabel
                sx={{ color: "#fff" }}
                control={
                  <Radio
                  value="highToLow"
                  checked={state.filterBy.sort == "highToLow"}
                  onChange={(event) =>
                    dispatch({
                      type: "FILTER_BY_RADIO",
                      payload: event.target.value,
                    })
                  }
                    sx={{
                      color: "#fcaf17",
                      "&.Mui-checked": {
                        color: "#fcaf17",
                      },
                    }}
                  />
                }
                label="Price: High to Low"
              />
            </fieldset>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Filter;
