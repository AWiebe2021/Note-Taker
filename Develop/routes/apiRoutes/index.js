const fs = require('fs');
const path = require('path');
// const express = require('express');
const router = require('express').Router();
let { dbNotes } = require('../../db/db.json');

router
  .route("/notes")
  .get((req, res) => {
    console.log(dbNotes);
    console.log("from GET");
    res.json(dbNotes)})
  .post((req, res) => {
    req.body.id = dbNotes.length.toString();
    const note = createNewNote(req.body, dbNotes);
    res.json(dbNotes);
  });

router
  .route("/notes/:id")
  .get((req, res) => {
    res.json(dbNotes)})
  .put((req, res) => {
    res.json(dbNotes)})
  .delete((req, res) => {
    const { id } = req.params;
    const note = deleteNote(id, dbNotes);
    res.json(dbNotes);
  });

function createNewNote(body, notes) {
  const note = body;
  notes.push(note);
  console.log(notes);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({dbNotes}, null, 2)
  );
  return note;
}

function deleteNote(id, notes) {
  const deleted = notes.find(note => note.id === id)
  if (deleted) {
    notes = notes.filter(note => note.id != id)
  }
  console.log(notes);
  fs.writeFileSync(
    path.join(__dirname, '../../db/db.json'),
    JSON.stringify({dbNotes}, null, 2)
  );
  console.log("post: " + JSON.stringify(notes, null, 2));
  return id;
}
module.exports = router;
