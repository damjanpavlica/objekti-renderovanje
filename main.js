const root = document.getElementById("root")

for (let i = 0; i < korisnici.length; i++) {
  const user = korisnici[i]

  const uclanjen = new Date(user.registered.split(' ')[0])
  const danas = new Date()
  const kolikoJeClan = danas - uclanjen

  let dana = kolikoJeClan / 1000 / 60 / 60 / 24
  const godina = Math.floor(dana / 365)
  dana = dana % 365
  const meseci = Math.floor(dana / 30)
  dana = Math.floor(dana % 30)

  const infoGodina = godina ? godina + " godine " : ""
  const infoMeseci = meseci ? meseci + " meseci " : ""
  const infoDana = dana ? "i " + dana + " dana" : ""

  const uclanjenje = user.gender == "male" ? "Uclanjen" : "Uclanjena"
  const poruka = `${uclanjenje} pre ${infoGodina}${infoMeseci}${infoDana}.`

  const sablon = `
    <div class="korisnik">
      <h3 style="color: ${user.eyeColor}">${user.name}</h3>
      <img src=${user.picture}>
      <p>Starost: ${user.age}</p>
      <p>Plata: ${user.balance}</p>
      <p>Preduzece: ${user.company}</p>
      <p>${poruka}</p>
      <p>Status: ${user.isActive ? "Aktivan" : "Neaktivan"}</p>
      <p>Pol: ${user.gender == "male" ? "muski" : "zenski"}</p>
      <p>✉ <a href="mailto:${user.email}">${user.email}</a></p>
      <p>☎ <a href="tel:${user.phone}">Nazovi ${user.name}</a></p>
      <iframe
        width="200"
        src="https://maps.google.com/?q=${user.latitude},${user.longitude}&output=embed&z=8"
      >
      </iframe>
    </div>
  `
  root.innerHTML += sablon
}
