const asyncHandler = require("../utils/asyncHandler.js");
const apiResponse = require("../utils/apiResponse.js");
const apiError = require("../utils/apiError.js");
const Note = require("../models/notes.model.js");
const uploadToCloudinary  = require("../config/cloudinary.js");

const addNotes = asyncHandler(async(req, res) => {
    const { title, description, subjectId, semesterId, departmentId } = req.body;

    if (!title || !description || !subjectId || !semesterId || !departmentId) {
        throw new apiError(400, "All fields are required..")
    }

    const noteLocalFilePath = req.file?.path;
    if (!noteLocalFilePath) {
        throw new apiError(400, "Note file path is required..");
    }

    const note = await uploadToCloudinary(noteLocalFilePath);
    if (!note) {
        throw new apiError(400, "Note is required..");
    }

    const notes = await Note.create({
        title,
        description,
        noteUrl: note.secure_url,
        notePublicId: note.public_id,
        subject: subjectId,
        semester: semesterId,
        department: departmentId
    });

    return res.status(201).json(
        new apiResponse(201, notes, "Note added successfully..")
    )
});

module.exports = {
    addNotes
}