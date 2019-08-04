const csv = require("fast-csv");
const fs = require("fs");
const moment = require("moment");
const Player = require("./src/models/Player");
const Team = require("./src/models/Team");
const Member = require("./src/models/Member");


let teamId;

// Preparar para cada collection importada
Member.remove().then(() => {
    Player.remove().then(() => {

        fs.createReadStream("./csv/Player.csv")
            .pipe(csv.parse({ headers: true }))
            .transform((data, cb) => {
                setImmediate(() => cb(null, {
                    team: data.team,
                    name: data.name,
                    nickname: data.nickname,
                    position: data.position,
                    createdAt: moment().utc()
                }));
            })
            .on('error', error => console.error(error))
            // .on('data', row => console.log(`ROW=${JSON.stringify(row)}`))
            .on('data', async row => {

                Team.findOne({ name: row.team }).then(async team => {
                    teamId = team.id
                    // console.log(teamId);
                    const resp = await Player.create(row);
                    // console.log(resp);

                    let member = {
                        // champId: "5d3f22dd6fd42b12cca70d68",
                        champId: "5d34b54b3c4e976235345b88",
                        teamId: teamId,
                        playerId: resp._id
                    }

                    const resp2 = await Member.create(member);

                    // console.log(resp2);

                });
            }
            )
            .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

    })
});