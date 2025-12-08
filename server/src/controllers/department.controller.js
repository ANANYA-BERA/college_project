const asyncHandler = require("../utils/asyncHandler.js");
const apiError = require("../utils/apiError.js");
const apiResponse = require("../utils/apiResponse.js");
const Department = require("../models/department.model.js");

const addDepartment = asyncHandler(async(req, res) => {
    const { departmentName, year } = req.body;

    if (!departmentName || !year) {
        throw new apiError(400, "Department name and year is required..");
    }

    const existingDepartment = await Department.find({$or: [{departmentName}]});
    if (existingDepartment) {
        throw new apiError(400, "Department name already exists..");
    }

    const department = await Department.create({
        departmentName,
        year
    });

    const newDepartment = await Department.findById(department._id);
    if (!newDepartment) {
        throw new apiError(500, "Something happend during server issue..");
    }

    return res.status(201).json(
        new apiResponse(201, newDepartment, "Department add successfully..")
    )
});

module.exports = {
    addDepartment
}