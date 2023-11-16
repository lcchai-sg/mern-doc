import React from "react";
import { Form } from "antd";

const Register = () => {
    return (
        <>
            <h1 className="bg-primary text-white p-3">Register Page</h1>
            <div className="form-container">
                <Form layout="vertical" onFinish={onFinishHandler}></Form>
            </div>
        </>
    );
};

export default Register;
