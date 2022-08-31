import React from 'react';
import ReactToPrint from 'react-to-print';
import TableComponent1 from './table.component1';
import TableComponent2 from './table.component2';

class ExportPdfComponent extends React.Component {

    render() {
        return (
            <div className='wrapper'>
                <div className='doc' ref={(response) => (this.componentRef = response)}>
                    <div className='page'>
                        <div className='headerPage'>Voluntary Medical Male Circumcision (VMMC) Register</div>
                        <div class="subPage">
                            <p>1. Month: <span></span> 2. Year: <span></span></p>
                            <TableComponent1 />
                            <div class="card1">
                                <div class="title">N0. 7 Codes: client profiles:</div>
                                <table cellpadding="2">
                                    <tbody>
                                        <tr>
                                            <td>General population-Gen pop</td>
                                            <td>PWUD</td>
                                        </tr>
                                        <tr>
                                            <td>Sex worker-SW</td>
                                            <td>PWID</td>
                                        </tr>
                                        <tr>
                                            <td>MSM</td>
                                            <td>Other (Specify)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='bottomPage'>
                            <div>VMMC</div>
                            <div>page: 1/2</div>
                        </div>
                    </div>
                    <div className='page'>
                        <div className='headerPage'>Voluntary Medical Male Circumcision (VMMC) Register</div>
                        <div class="subPage">
                            <p>1. Month: <span></span> 2. Year: <span></span></p>
                            <TableComponent2 />
                            <div class="card2">
                                <p class="title">No. 16, 19, 20, 21 Codes (Severity and Adverse Events)</p>
                                <p>None (N)</p>
                                <p>Anaesthesia related (AN)</p>
                                <p>Bleeding (BL)</p>
                                <p>Infection (IN)</p>
                            </div>
                            <div class="card3">
                                <p class="title">No. 16, 19, 20, 21 Codes (Severity and Adverse Events)</p>
                                <p>Pain (Pa)</p>
                                <p>Scanning/ Disfigurement/Poor Cosmetic result/Torsion;</p>
                                <p>Insufficient Skin removal; Excess skin removal; Injury to penis (SD).</p>
                                <p>Sexual Effects/ Undesirable Sensory Changes/Dysfunction (SX)</p>
                            </div>
                            <div class="card4">
                                <p class="title">No. 16,19, 20, 21 Codes (Severity and Adverse Events)</p>
                                <p>Wound disruption (WD)</p>
                                <p>Device displacement/ Detachment/ Self Removal (DD)</p>
                                <p>Delayed Healing (DH)</p>
                                <p>Device malfunction (DM)</p>
                            </div>
                            <div class="card5">
                                <p class="title">No. 16, 19, 20, 21 Codes (Severity and Adverse Events)</p>
                                <p>Difficulty with placement (DP)</p>
                                <p>Difficulty with device removal (DR)</p>
                                <p>Other adverse events: excess swelling of penis/scrotum</p>
                                <p>including haematoma: Dif ficulty Urinating (OA)</p>
                            </div>
                            <div class="card6">
                                <p class="title">No. 16, 19, 20, 21 Codes (Severity and Adverse Events)</p>
                                <p>Mild (Mild)</p>
                                <p>Moderate (Mod)</p>
                                <p>Severe developed (Sev)</p>
                            </div>
                        </div>
                        <div className='bottomPage'>
                            <div>VMMC</div>
                            <div>page: 2/2</div>
                        </div>
                    </div>
                </div>
                <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => <a className="btn-primary">Print to PDF!</a>}
                />
            </div>
        );
    }
}

export default ExportPdfComponent;