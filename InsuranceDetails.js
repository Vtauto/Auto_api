const mongoose = require("mongoose");


const InsuranceSchema = new mongoose.Schema(
    {
        userid: {
            type: String,
            
        },
        name: {
            type: String,
            
        },
        mobile_no: {
            type: Number,
            
        },
        vehicle_no: {
            type: String,
            
            unique: true,
        },
        rc_no: {
            type: String,
            
        },
        rc: {
            type: [String], // storing file paths
            
        },
        aadharcard_no: {
            type: String,
            
        },
        aadharcard: {
            type: [String], // storing file paths
            
        },
        pan_card_no: {
            type: String,
            
        },
        pan_card: {
            type: String, // storing file paths
            
        },
        old_policy_no: {
            type: String,
            
        },
        old_policy: {
            type: String, // storing file paths
            
        },
        status: {
            type: Boolean,
            
            default: false
        },
        default: {
            type: String,
            
            default: "allinsurance"
        },
        other: {
            type: [String], // storing file paths
        },
        quotation: {
            type: String, // storing file paths
            default:"null"
        },
        policy: {
            type: String, // storing file paths
            default:"null"

        },
    },
    { timestamps: true },
    {
        collection: "allinsurancenew11",
    }
);


mongoose.model("allinsurancenew11", InsuranceSchema);
