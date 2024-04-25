import React from "react";
import styles from "./index.module.css";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
const SideNav = () => {
  return (
   
      <div className={styles.sideNav}>
      <div className={styles.sidNavBox}>
        <div className={styles.selectFilterText}>Select Filters</div>
        <div>
          <div className={styles.checkBoxOptions}>
            <div>Property Type</div>
            <div>
              <FormControl
                sx={{ m: 1 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="hotel"
                      />
                    }
                    label="Hotel"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="villa"
                      />
                    }
                    label="Villa"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="antoine"
                      />
                    }
                    label="Homestay"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className={styles.checkBoxOptions}>
            <div>User Rating</div>
            <div>
              <FormControl
                sx={{ m: 1 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="3star"
                      />
                    }
                    label="3 Star"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="4star"
                      />
                    }
                    label="4 Star"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="5star"
                      />
                    }
                    label="5 Star"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
          <div className={styles.checkBoxOptions}>
            <div>Amenities</div>
            <div>
              <FormControl
                sx={{ m: 1 }}
                component="fieldset"
                variant="standard"
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="swimmingPool"
                      />
                    }
                    label="Swimming Pool"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="wifi"
                      />
                    }
                    label="Wi-Fi"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={false}
                        onChange={() => {}}
                        name="spa"
                      />
                    }
                    label="SPA"
                  />
                </FormGroup>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
