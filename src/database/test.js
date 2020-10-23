const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // Inserir dados na tabela
/*
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "34.8594386",
            "135.6789538",
            "Lar dos Meninos",
            "Presta assistência a crianças de 05 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "333444222",
            "https://images.unsplash.com/photo-1585338927000-1c787b17eb5e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas das 8h até 18h",
            "1" 
        );
    `)
*/

    await saveOrphanage(db, {
        lat: "34.8694386",
        lng: "135.6799538",
        name: "Casa dos Meninos",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1586022773518-47a6bf08fa90?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1570569695181-40bca161e2b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://source.unsplash.com/random?id=4"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 10h até 15h",
        open_on_weekends: "1"    
    })

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages);

    // Consultar somente 1 orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage);

    // Deletar dado da tabela
    console.log(await db.run(`DELETE FROM orphanages WHERE id = "4"`));
})


