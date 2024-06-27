import React, { useState } from 'react'
import '../css/form.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [birthDate, setBirthDate] = useState(null);

    const handleNext = () => {
        setCurrentStep(currentStep + 1)
    }

    const handlePrev = () => {
        setCurrentStep(currentStep - 1)
    }

    const renderSteps = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div>
                            <h2 className="text-center">Basic Details</h2>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Age</label>
                            <input
                                type="number"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter age"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email Address</label>
                            <input
                                type="email"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contact Number</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter Mobile"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter Mobile"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthDate">Birth Date</label>
                            <div className="mt-2">
                                <DatePicker
                                    id="birthDate"
                                    selected={birthDate}
                                    onChange={date => setBirthDate(date)}
                                    className="form-control"
                                    placeholderText="Select birth date"
                                />
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div>
                            <h2 className="text-center">Work Details</h2>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Department Name</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter department name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Department Id</label>
                            <input
                                type="number"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter department id"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Category</label>
                            <input
                                type="email"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter category"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Position</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter Position"
                            />
                        </div>

                    </div>
                );
            case 3:
                return (
                    <div>
                        <div>
                            <h2 className="text-center">Dependent Details</h2>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Full Name</label>
                            <input
                                type="text"
                                className="form-control mt-2"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Age</label>
                            <input
                                type="number"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter age"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email Address</label>
                            <input
                                type="email"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Contact Number</label>
                            <input
                                type="password"
                                className="form-control mt-2"
                                id="exampleInputPassword1"
                                placeholder="Enter Mobile"
                            />
                        </div>
                    </div>
                );
            default:
                return null;



        }
    };
    return (
        <div>

            <form className='p-5 w-75 form-body card shadow'>
                {renderSteps()}

                <div className='btn-div d-flex d-flex justify-content-between mt-3'>
                    {
                        currentStep > 1 && (

                            <button
                                type="button"
                                className="btn btn-secondary mt-2"
                                onClick={handlePrev}
                            >
                                Previous
                            </button>
                        )
                    }

                    {
                        currentStep < 3 && (
                            <button
                                type="button"
                                className="btn btn-primary mt-2"
                                onClick={handleNext}
                            >
                                Next
                            </button>
                        )
                    }

                    {currentStep === 3 && (
                        <button type="submit" className="btn btn-primary mt-2">
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    )
}
