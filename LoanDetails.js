const mongoose = require("mongoose");


const LoanSchema = new mongoose.Schema(
    {

        // Applicant
        userid: { type: String, required: true, },
        applicant_name: { type: String, required: true },
        applicant_mobile: { type: Number, required: true },
        vehicle_name: { type: String, required: true },
        applicant_aadharcard_number: { type: Number, required: true },
        applicant_aadharcard: { type: [String], required: true },
        applicant_pancard_number: { type: String, required: true },
        applicant_pancard: { type: String, required: true },
        applicant_dl_number: { type: String, required: true },
        applicant_dl: { type: [String], required: true },
        applicant_udhyamcard_number: { type: String, required: true },
        applicant_udhyamcard: { type: String, required: true },
        applicant_photo: { type: String, required: true },


        // Co-Applicant
        coapplicant_aadharcard_number: { type: Number, },
        coapplicant_aadharcard: { type: [String], },
        coapplicant_pancard_number: { type: String, },
        coapplicant_pancard: { type: String, },
        coapplicant_voterid_number: { type: String, },
        coapplicant_voterid: { type: [String], },
        coapplicant_photo: { type: String, },


        // Guarantor
        guarantor_aadharcard_number: { type: Number, },
        guarantor_aadharcard: { type: [String], },
        guarantor_pancard_number: { type: String, },
        guarantor_pancard: { type: String, },
        guarantor_voterid_number: { type: String, },
        guarantor_voterid: { type: [String], },
        guarantor_rc_number: { type: String, },
        guarantor_rc: { type: [String], },
        guarantor_photo: { type: String, },


        // Vehicle
        vehicle_rc_number: { type: String, },
        vehicle_rc: { type: [String], },
        vehicle_insurance_number: { type: String,  },
        vehicle_insurance: { type: String, },
        vehicle_tax: { type: String },
        vehicle_permit: { type: String, },
        saler_aadharcardnumber: { type: Number, },
        saler_aadharcard: { type: [String], },
        sale_agreement: { type: String, },


        // Other
        electricity_bill: { type: String, },
        agreement: { type: String, },
        banking: { type: String, },
        
        
        //
        status: { type: Boolean, required: true, default: false },
        default: { type: String, required: true, default: "allloan" }
    },
    { timestamps: true },
    {
        collection: "allloan",
    }
);



mongoose.model("allloan", LoanSchema);