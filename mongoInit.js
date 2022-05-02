db.createUser(
    {
        user: "sample",
        pwd: "$4mpl3p@ssword",
        roles: [
            {
                role: "readWrite",
                db: "sample"
            }
        ]
    }
);