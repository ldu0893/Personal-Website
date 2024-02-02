import serdes_messy_layout from "../static/serdes_messy layout.png"
import serdes_standard_cell from "../static/serdes_standard cell.png"
import serdes_layout_w_desc from "../static/serdes_layout w description.png"
import serdes_waveforms from "../static/serdes_waveforms.jpg"
import { Link, Route, Routes } from "react-router-dom";

const Serdes = () => {

  return (
    <>
    <div className="space-y-7">
        <h1 className="text-white text-2xl font-bold">High-Speed SERDES Design Project</h1>
        <p className="text-white">
            In this project, I, with three others, designed and layed out a 1.6 GHz serializer-deserializer (SERDES) in the
            45 nm process incorporating a PRBS generator for testing of the SERDES, an off-chip driver, and functionality
            for loop-back vs. external input.
            Cadence Virtuoso and HSPICE were used for schematic, layout, and verification.
            <br></br><br></br>
            The project began entirely in the schematic space with a bottom up approach.
            We first parameterized basic components such as inverters, registers, transmission gates, etc. before tackling the more
            complex systems. Every schematic was extensively tested to ensure timing was met on all process corners even
            with a very conservative estimate of 2 fF capacitances per transistor gate to account for parasitics.
            <br></br><br></br>
            After everything was incorporated into one schematic and tested fully, we began layout of the components. I designed a
            standardized cell with very strict measurement requirements to ensure easy integration of every individual's layout.
            Key aspects of the standard included very strict alignment and height of different taps, as well as uniform spacing
            between components to ensure ease of metal interconnects.
            <br></br><br></br>
            I individually layed out the inverter, c2mos register, static logic gates, serializer, and deserializer. I also integrated
            all of our team's layouts, including laying out any interconnects required such as superbuffers, delay registers, etc.
            At every step, I ran LVS and HSPICE to ensure correlation between schematic and layout as well as circuit functionality.
            <br></br><br></br>
            Once the layout was tested and functionality on all process corners reached, we turned our attention to power consumption.
            To reduce consumption, the method of clock gating was utilized, where we gated both the 1.6 GHz and 100 MHz clocks with
            enable pins. This drastically cut our power draw when the serdes was disabled. To further diminish power, we optimized
            transistor sizing, aiming for smaller sizes wherever possible.
            <br></br><br></br>
            <img
              src={serdes_messy_layout}
              alt=""
            />
            Figure 1. Layout with all visible. In total, the layout is 55.03 by 50.26 um.
            <img
              src={serdes_layout_w_desc}
              alt=""
            />
            Figure 2. Layout highlighting subcomponents.
            <img
              src={serdes_standard_cell}
              alt=""
            />
            Figure 3. C2MOS Register illustrating standardization of individual layout.
            <img
              className="h-3/4 w-3/4"
              src={serdes_waveforms}
              alt=""
            />
            Figure 4. Waveforms illustrating PRBS and SERDES functionality.
        </p>
    </div>
    </>
  );
}

export default Serdes;