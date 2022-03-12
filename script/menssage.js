db.dropDatabase();
db.messages.insert({
    "word": "Hola mama",
    "allowed": false,
    "status": 'active',
    "dateCreated": new Date(),
    "lastDateUpdate": new Date(),
    "dateDeleted": new Date(),
});
db.messages.insert({
    "word": "Buenos dias",
    "allowed": true,
    "status": 'delated',
    "dateCreated": new Date(),
    "lastDateUpdate": new Date(),
});