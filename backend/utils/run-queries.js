import fs from 'fs';

export async function runQueries(connection) {

    const models = ['otp_store', 'admin', 'user', 'alumni', 'student','job', 'event']

    for (const model of models) {
        const queriesToRun = fs.readFileSync(`./models/${model}.model.sql`, 'utf-8');
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


}