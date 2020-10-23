function saveOrphanage(db, orfanage) {
  return db.run(`
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
        "${orfanage.lat}",
        "${orfanage.lng}",
        "${orfanage.name}",
        "${orfanage.about}",
        "${orfanage.whatsapp}",
        "${orfanage.images}",
        "${orfanage.instructions}",
        "${orfanage.opening_hours}",
        "${orfanage.open_on_weekends}" 
    );
`);
}

module.exports = saveOrphanage;
