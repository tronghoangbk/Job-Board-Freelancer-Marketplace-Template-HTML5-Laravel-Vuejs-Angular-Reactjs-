import React from "react";
import { Link } from "react-router-dom";
import { Empolyer_select, Freelancer_select } from "../../../imagepath";


const AccountEmp = ({ nextTabEmp, show }) => {
    return (
        <>
            <div
                className="text-center on-board select-account group-select"
                style={{ display: show ? "none" : "block" }}
            >
                <div className="select-type">
                    <div className="account-onborad onboard-head">
                        <h2>Select Account Type</h2>
                        <p>Don’t worry, this can be changed later.</p>
                        <div className="select-box d-flex justify-content-center">
                            <input
                                defaultChecked="checked"
                                id="freelance"
                                type="radio"
                                name="credit-card"
                                defaultValue="visa"
                            />
                            <label
                                className="employee-level free-lance-img accounts_type"
                                data-id="freelance"
                                htmlFor="freelance"
                            >
                                <Link to="/onboardScreen">
                                    <img src={Freelancer_select} alt="" className="img-fluid" />
                                    <span>Freelancer</span>
                                </Link>
                            </label>
                            <input
                                id="employee"
                                className="accounts_type"
                                type="radio"
                                name="credit-card"
                                defaultValue="mastercard"
                                checked
                            />
                            <label
                                className="employee-level employee-img accounts_type"
                                data-id="employee"
                                htmlFor="employee"
                            >
                                <Link to="/onboard-screen-employer">
                                    <img src={Empolyer_select} alt="" className="img-fluid" />
                                    <span>Employer</span>
                                </Link>
                            </label>
                        </div>
                    </div>
                    <input
                        className="btn next_btn btn-primary btn-get"
                        name="next"
                        type="button"
                        defaultValue="Next"
                        onClick={nextTabEmp}
                    />
                </div>
            </div>
        </>
    );
};

export default AccountEmp;
