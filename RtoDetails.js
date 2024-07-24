const mongoose = require("mongoose");


const RtoSchema = new mongoose.Schema(
    {
        userid: { type: String,  },
        vehicle_no: { type: String,  unique: true },
        uiid: { type: String,  },
        vehicle_insurance_number: { type: String,  },
        vehicle_insurance: { type: String,  },// Storing file path 
        vehicle_insurance_expiry: { type: Date,  },
        fitness_number: { type: String,  },
        fitness: { type: String,  },// Storing file path
        fitness_expiry: { type: Date,  },
        puc_number: { type: String,  },
        puc: { type: String,  },// Storing file path
        puc_expiry: { type: Date,  },
        permit_number: { type: String,  },
        permit: { type: String,  },// Storing file path
        permit_expiry: { type: Date,  },
        tax_number: { type: String,  },
        tax: { type: String,  },// Storing file path
        tax_expiry: { type: Date,  },
        rc_number: { type: String,  },
        rc: { type: [String],  },// Storing file path
        rc_expiry: { type: Date,  },
        other: { type: [String] } // storing file paths
    },
    { timestamps: true },
    {
        collection: "allrtoinformationnew",
    }
);



mongoose.model("allrtoinformationnew", RtoSchema);