import React from "react";
import "./Model000Details.css";

export default function Model000Details() {


    return(
        <>
            <div className="MD000-container">
                <div className="row w-full">
                    <div className="column" >
                        <div className="MD000-heading">
                            Stretch laces, so you only have
                            to tie your shoes once.
                        </div>

                        <div className="MD000-image-container">
                            <img src={require("./images/Photo-1.png")} alt="">
                            </img>
                        </div>
                    </div>

                    <div className="column">
                        <div className="MD000-image-container">
                            <img src={require("./images/Photo.png")} alt="">
                            </img>
                        </div>

                        <div className="MD000-heading">
                            Experience unparalleled comfort as the lightweight foam
                            midsole cradles your feet with cushioned support.
                        </div>
                    </div>
                </div>
                
                <div className="MD000-container MD000-bg-grey" >
                    <div className="MD000-container-2  MD000-bg-grey MD000-start" >
                        <div className="MD000-image-container">
                            <img src={require("./images/fsa 1.png")} alt="">
                            </img>
                        </div>
                        <div className="MD000-heading-2">
                            Stay odor-free with antimicrobial copper lining that kills bacteria.
                        </div>

                    </div>
                </div>

                <div className="MD000-container MD000-bg-yellow M">
                    <div className="MD000-container-3">
                        <div className="column" >
                            <div className="MD000-heading-3">
                                “These are the most thoughtfully designed sneakers on the market.”
                            </div>
                            <div className="MD000-brand-group">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="224" height="58" viewBox="0 0 224 58" fill="none">
                                        <g clip-path="url(#clip0_229_394)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M122.552 34.4528V33.2169H139.891V33.5804V34.1257V34.4892H135.768V56.7731H134.994L134.921 56.4822C134.443 54.2648 132.123 53.5013 130.945 53.5013H130.761H130.504C128.553 53.5714 126.807 54.3838 125.003 55.2233L124.798 55.319C124.614 55.3917 124.438 55.4643 124.263 55.5371C124.089 55.6097 123.914 55.6825 123.73 55.7552C121.815 56.664 119.754 57.4637 117.251 57.4637C103.85 57.4637 94.0583 46.0492 94.0583 29.9452C94.0583 10.206 107.164 0.645409 116.699 0.645409C118.797 0.645409 120.159 1.04528 121.999 1.62691L122.773 1.84503C122.948 1.90291 123.132 1.96448 123.322 2.02857L123.325 2.02931C123.732 2.16624 124.174 2.31464 124.65 2.46301L125.386 2.64477C125.902 2.75383 126.565 2.86289 127.337 2.89924C128.921 2.93559 130.761 2.53571 131.534 0.718112L131.644 0.5H132.27H132.455V20.4936H132.27H131.608L131.534 20.2028C128.147 6.89797 123.987 1.95409 116.736 1.91773H116.662C110.698 1.91773 108.71 5.69835 107.642 7.73407C104.808 13.1505 104.219 25.5102 104.219 29.2909C104.219 39.8693 105.176 44.4133 106.98 49.1391C108.821 53.9739 112.023 56.3005 116.846 56.2278C121.3 56.155 127.006 54.2648 127.006 45.7947V34.4528H122.552ZM223.161 36.7794V36.4523H224.228V56.4459H184.434V55.1372H189.293V3.37183H183.882H179.317V42.414C179.427 49.2481 174.825 57.5001 164.776 57.5001C149.793 57.5001 144.676 49.7934 144.676 39.833V3.37183H139.522V2.64479V2.09951H158.849V2.64479V3.37183H153.879V44.377C153.879 44.8132 154.21 55.6461 165.107 56.046C168.089 56.1551 171.365 54.9918 173.684 52.8106C175.599 51.0294 177.808 47.6123 177.918 42.0505V3.37183H173.648V2.64479V2.09951H183.882H184.986H185.354H221.983V20.421H221.1L221.026 20.1301C217.619 3.1027 209.734 3.26284 201.653 3.42693C201.349 3.4331 201.046 3.43927 200.742 3.44454C200.153 3.48089 199.196 3.48089 198.606 3.48089V28.0549H199.012H199.057C203.503 28.055 208.918 28.0552 210.092 17.4038L210.129 17.0766H211.013V40.5237H210.129L210.092 40.1965C209.235 29.2619 204.184 29.3137 199.715 29.3597L199.629 29.3605C199.522 29.3617 199.414 29.3627 199.306 29.3636H198.57V55.1736H199.012C199.172 55.1736 199.362 55.1757 199.578 55.1782C202.691 55.2135 211.319 55.3113 217.308 49.9752C220.952 46.7398 222.903 42.3049 223.161 36.7794ZM65.6397 0.790845C54.3381 0.790845 41.9322 11.9509 41.9322 29.0001C41.9322 46.0492 54.7431 57.3547 65.6397 57.3547C76.5364 57.3547 89.3474 46.0492 89.3474 29.0001C89.3105 11.9509 76.9417 0.790845 65.6397 0.790845ZM78.8188 26.8917V27.2552V27.5096V27.7278V28.0549V28.164V28.4912V28.5638V28.9273V29.2182C78.8188 32.3808 78.524 44.5588 75.2847 50.6296C73.444 54.1557 69.8732 56.0097 65.5661 56.0097C61.2589 56.0097 57.6513 54.1557 55.8474 50.6296C52.6079 44.5588 52.3502 32.3808 52.3502 29.2182V28.9273V28.5638V28.4912V28.164V28.0549V27.7278V27.5096V27.2552V26.8917V26.7462C52.4606 21.8751 53.0865 12.7507 55.8474 7.40693C58.0562 2.97197 62.5474 2.02682 65.5661 2.02682C68.6215 2.02682 73.0759 2.97197 75.2847 7.40693C78.0453 12.7507 78.6348 21.8751 78.7819 26.7462C78.8188 26.7826 78.8188 26.8553 78.8188 26.8917ZM36.1886 2.09951H46.3122H46.6803V3.33548H42.1891H41.7105L25.5496 56.7367H25.2552L4.93437 3.33548H4.41899H-0.366699V2.60844V2.09951H17.9294V2.60844V3.33548H14.064H13.8063L28.3106 43.032L40.3116 3.33548H35.8205V2.09951H36.1886Z" fill="#02021D"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_229_394">
                                            <rect width="224" height="57" fill="white" transform="translate(0 0.5)"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>

                                <div className="MD000-esquire">
                                    esquire
                                </div>

                                <div className="MD000-HON">
                                    HUMANS OF 
                                    NEW YORK
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    

                </div>
                <div className="MD000-container">
                    <div className="MD000-heading-3">
                        Model 000 in Everyday

                    </div>
                    <div className="MD000-container-grid " >
                        
                        <div className="MD000-image-container grid-row-span-2">
                            <img src={require("./images-2/Photo.png")} alt="">
                            </img>
                        </div>
                        <div className="MD000-image-container">
                            <img src={require("./images-2/Photo-1.png")} alt="">
                            </img>
                        </div>
                        <div className="MD000-image-container grid-row-span-2">
                            <img src={require("./images-2/Photo-3.png")} alt="">
                            </img>
                        </div>
                        <div className="MD000-image-container ">
                            <img src={require("./images-2/Photo-2.png")} alt="">
                            </img>
                        </div>
                    </div>
                </div>
                
            </div>

            
        </>
    )
}