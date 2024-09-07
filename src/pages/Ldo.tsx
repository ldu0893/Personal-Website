import ldo_schematic from "../static/ldo_schematic.png"
import ldo_folded_cascode_amplifier from "../static/ldo_folded_cascode_amplifier.png"
import ldo_specs from "../static/ldo_specs.png"
import { Link, Route, Routes } from "react-router-dom"

const Ldo = () => {

  return (
    <>
    <div className="space-y-7">
      <h1 className="text-white text-2xl font-bold">1.8V to 1.2V Folded Cascode LDO</h1>
      <p className="text-white">
        <img
          src={ldo_schematic}
          alt=""
        />
        Figure 1. LDO schematic.
        <br></br><br></br>
        When designing the LDO, we decided to use a folded-cascode amplifier topology over the
        5-transistor OTA and the telescopic amplifier due to its improved stability, leading to
        improved phase margin and high loop gain necessary to create a high-performing
        LDO. The folded cascode amplifier also crucially has improved power supply rejection.
        <br></br><br></br>
        <img
          src={ldo_folded_cascode_amplifier}
          alt=""
        />
        Figure 2. Folded cascode amplifier transistor level schematic.
        <br></br><br></br>
        The two main poles of concern were the pole at the output of the LDO (ωout), and the pole at the gate of the pass
        device (ωgate,pass). ωgate,pass became the dominant pole for several reasons: <br></br>
        1. High gain causes Cgd to be amplified as a result of Miller effect.<br></br>
        2. To satisfy load regulation, Rout should be as low as possible.<br></br>
        3. For best amplifier gain and line regulation, Rgate,pass should be as high as possible.<br></br>
        <br></br>
        ωugf = Gm /
        Cgate,pass should be low to relax the requirements on the non-dominant pole, ωout = 1 / 
        RoutCout . From this
        analysis, two strategies become clear: <br></br>
        1. Make the PMOS pass transistor as large as possible to increase Cgate,pass and decrease Rout to help reduce
        ωugf and increase ωout and improve stability.<br></br>
        2. Reduce current through the amplifier, increasing Rgate,pass and decreasing Gm but keeping gain high in order
        to reduce ωugf and satisfy line regulation. This has the added benefit of reducing quiescent current.<br></br>
        <br></br>
        Given ωout = 1 /
        RoutCout and ωugf ≈ 1.5MHz, we need Rout ≈ 1666kΩ for the best phase margin (non-dominant
        pole at 2ωugf). Assuming Rout ≈ rdsp, this is a difficult rdsp to achieve. We instead decided to size for the
        non-dominant pole to be at ωugf , yielding us a phase margin of 45◦ in the worst case (smallest load current). This
        relaxes Rout ≈ 3333kΩ. At higher load currents, the load resistor increasingly contributes smaller and smaller
        resistance, boosting our non-dominant pole very far away from ωugf. Indeed, we saw that at 10mA load current,
        our phase margin was an excellent ∼ 87◦.
        <br></br><br></br>
        We next sized the pass transistor to achieve low rdsp and high Cgate,pass. We aim for a very rough rdsp ≤ 8kΩ
        at 0.1mA load current, recognizing that the feedback and load resistors assist us in further reducing Rout. The
        resulting transistor is extremely large, with W /
        L = 10μ /
        180n and m = 500.
        <br></br><br></br>
        Based on simulation, Cgd,pass = 3.63pF and Apass ≈ 30V/V (a very rough estimate). Then Cgate,pass ≈ Cgd,passApass ≈
        100pF (Miller Theorem). To achieve ωugf = Gm /
        Cgate,pass ≤ 1.5MHz, Gm ≤ 163μS.
        <br></br><br></br>
        We now choose amplifier current. For a folded cascode amplifier, Gm ≈ gm ≈ 2I /
        Vov . Assuming Vov ≈ 0.1V,
        I ≤ 8.15μA, where I is current through one differential input PMOS. Considering that lower current means lower
        Gm and higher Rgate, both of which are beneficial for stability (as long as gain remains acceptable), we picked a
        very low I = 4.5μA. Low amplifier current is also excellent to reduce quiescent current.
        <br></br><br></br>
        To satisfy load regulation, a decently high β = 3 /
        4 was chosen. We shied away from going above this to prevent the
        tail PMOS transistors of the folded cascode from entering triode region.
        <br></br><br></br>
        To satisfy line regulation, 1 /
        βAv0 ≤ 500μV /V → βAv0 ≥ 20000. Given our estimated Apass ≈ 30, this means
        Aea ≥ 888. A high gain is good for stability, feedback, regulation, noise rejection, etc., so this gain should be high
        anyways for all those reasons.
        <br></br><br></br>
        Biasing voltages were generated with Vov ≈ 0.1V and Vth ≈ 0.5V. Sizing of feedback resistors was done at the end.
        We increased size as much as possible to reduce quiescent current without compromising stability.
        <br></br><br></br>
        <img
          src={ldo_specs}
          alt=""
        />
        Figure 3. Parameters and simulated performance.
      </p>
    </div>
    </>
  );
}

export default Ldo;