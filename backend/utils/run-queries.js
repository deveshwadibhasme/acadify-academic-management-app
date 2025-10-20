import fs from 'fs';

export async function runQueries(connection) {

    const queriesToRun = fs.readFileSync('./models/user.model.sql', 'utf-8');
    const queries = queriesToRun.split(';');
    queries.forEach(async (query) => {
        if (query.trim()) {
            try {
                await connection.query(query);
            } catch (error) {
                console.error("Error executing query:", error);
            }
        }
    });

}