# Almennar upplýsingar
## Hópur:
Ingibjörg Birgisdóttir - inb32@hi.is  
Vigdís Erla Sigmundsdóttir - ves14@hi.is  
Yrsa Ósk Finnbogadóttir - yof3@hi.is  


## Verkefnið
Heimasíða með fyrirlestrum úr vefforritun 1.
Síðan er sett upp með html, css og javascript.
Þegar klikkað er á fyrirlestra "thumbnail" ferðu á viðkomandi fyrirlestrarsíðu og getur hakað við þegar búið að lesa fyrirlesturinn. Þegar ýtt er á Til baka er farið aftur á forsíðu.

## Forsíða
Forsíða inniheldur lista af öllum fyrirlestrum. Fram kemur hvort búið sé að klára fyrirlestur eða ekki.
Hægt er að raða upp fyrirlestrunum eftir því hvort fyrirlestrarnir fjalla um html, css eða javascript.

## Fyrirlestur
Fyrirlestrarinir innihalda miðmunandi efni, myndir og vídjó og neðst á síðunni er takki til að merkja fyrirlestur kláraðann og hlekkur til að fara til baka.

## Uppsetning verkefnis
Verkefninu er allt í möppunni Hopaverkefni_2 og er síðan skipt í nokkrar möppur innan þess. Í rótinni er að finna indexið, READ-ME skjal, rollup.config.js, fyrirlestur.html, lectures.json og package.json. Möppur í rótinni eru src sem skiptist í tvær möppur, í rót src möpunnar er index.js skráin og síðan eru lib, sem heldur utan um javascript skjölin, og styles, sem heldur utan um scss skjölin en þau skjöl tengjast inn í styles.scss sem heldur utan um CSS-ið. Í rót verkefnisins er einnig að finna img möppu með öllum myndum sem notaðar eru á vefnum, útlit möppu með dæmi hvernig verkefnið á að líta út, node_modules möppu og dist möppu með bundle.js og styles.css skjalinu.

Forsíða: `index.html`
Fyrirlestrarsíða: `fyrirlestur.html`
Scss skrár eru í `./styles` folder sem er inní `./src` folder.
Þær eru:
`config.scss`: Grunnupplýsingar (litir, stærðir, fontar, transition upplýsingar o.fl.)
`styles.scss`: Allar útlitsupplýsingar sem þýðast svo yfir í styles.css skjalið.
`button.scss`: Virkni og útlit á tökkum.
`header.scss`: Útlit á header á forsíðu.
`header-fyrirlestur.scss`: Útlit á header á fyrirlestrarsíðu.
`footer.scss`: Útlit á footer á fyrirlestrarsíðu.`./dist` folder er ignoraður af git. Hann inniheldur:
`styles.css`: Útlit á forsíðu og fyrirlestrarsíðu.Í rót verkefnisins eru:
`grid.css`: Útlit á gridi.
`lectures.json`: Fyrirlestrargögn.
`package.json`
`package-lock.json`
`rollup.config.js`
`eslintrc.js`
`gitignore`
`gitattributes`
`stylelintrc`


## Tæki og tól
Eftirfarandi er sett upp í verkefni:* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar`./dist` folderinn.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`Uppsett er einnig:* `rollup` til að pakka saman JavaScript kóða
* `babel` til að _transpila_ kóða




## Keyrsla:
Verkefnið er hýst á https://notendur.hi.is/~ves14/Vefforritun/Verkefni/Hopaverkefni_2/

Ef að verkefnið er sótt í gegnum git er best að hala niður möppunni og opna þaðan. Eins er hægt að skoða kóðann inni á git, óþarfi er að sækja öll skjölin sérstaklega nema til þess að keyra á local svæðinu í tölvunni. 

Ef þú vilt sækja verkefnið gerir þú eftirfarandi:
* Farðu inn á https://github.com/ves14/Hopaverkefni_2/. 
* Smelltu á *clone or download*, þá getur þú valið hvort þú viljir clone-a verkefnið yfir á nýtt repository eða hala niður zip skrá með verkefninu. Ef þú velur að clone-a verkefnið býrðu fyrst til nýtt repository á github og fylgir síðan leiðbeiningunum sem koma upp. Ef þú velur að hala niður zip skránni smellirðu á download zip, finnur skrána í tölvunni þinni, tvísmellir og þá afþjappast hún þar sem hún er. 
* Þú getur opnað skrárnar í hvaða ritli sem er, við notuðum VS Code við gerð verkefnisins en þú getur opnað það í hvaða ritli sem þér sýnist.
* Til að fá öll tól til að virka þarf að opna terminalinn, koma sér á réttan stað með því að nota cd <slóðin á möppuna>, skrifa npm install og síðan npm run dev. Verkefnið notar browser-sync, eslint, sass, babel og rollup. Ef þú slærð inn npm run dev fer sass, sass-watch, rollup-watch og browser-sync allt af stað en ef þú vilt keyra þau í sitthvoru lagi er það eftirfarandi:
* Til að keyra sass slærðu inn npm run sass í terminal.
* Til að keyra sass-watch slærðu inn npm run sass-watch í terminal.
* Til að keyra rollup-watch slærðu inn npm run rollup-watch í terminal 
* o.s.frv.
* Ef þú ferð í package.json getur þú séð hvaða skipun þú þarft að slá inn á eftir npm run til að keyra hvert og eitt tól fyrir sig og er það undir .scripts.


# Hópverkefni 2

Verkefnið felst í því að smíða prótótýpu af fyrirlestravef fyrir vefforritun. Gefin eru gögn sem unnin eru uppúr námsefni vetrarins.

Gefnar eru [fyrirmyndir](utlit/) í `500px` og `1500px` án grindar ásamt `1500px` með grind. Allt efni skal skalast snyrtilega á milli.

## Almennt

Gögn eru gefin í `lectures.json` sem sækja skal með _ajax_ virkni. Keyra verður verkefnið með `browser-sync` til að það virki.

Efni síðu skal ekki vera breiðara en `1200px`. Litir og myndir í haus skulu fylla út í allt lárétt pláss. Yfir myndum er 60% gegnsær hvítur litur. Myndir fyrir hvern fyrirlestur eru skilgreindir í `json` skrá.

Grunn leturstærð er 16px og fylgja allar aðrar leturgerðir eftirfarandi skala: `16 24 32 48`.

Litapalletta fyrir vef er `#000`, `#999`, `#aaa`, `#ccc`, `#2d2`, `#1a1`, `#fcffd2` og `#cc9694`.

Letur fyrir meginmál er Lora, Times New Roman eða serif letur.
Letur fyrir fyrirsagnir er Roboto Mono, Courier New eða monospace.

Flest allt er sett upp í 12 dálka grind með `20px` gutter.

Öll bil eru hálft, heilt, tvöfalt eða þrefalt margfeldi af gutter. Hægt er að nota reglustiku tól (t.d. http://www.arulerforwindows.com/ eða http://www.pascal.com/software/freeruler/) til að finna nákvæmar stærðir en mestu skiptir að lausn svipi til en sé ekki nákvæmlega eins og fyrirmynd.

Allar hreyfingar gerast á `300ms` með `ease-in-out` hröðunarfalli. Hreyfingar eru þegar svimað er yfir fyrirlestri í lista og síunar tökkum.

## Forsíða

Forsíða inniheldur lista af öllum fyrirlestrum. Fram kemur hvort búið sé að klára fyrirlestur eða ekki. Nota skal `✓` til að tákna að fyrirlestri séð lokið, sjá að neðan hvernig virkni er.

Fyrir ofan lista skulu vera þrír takkar fyrir hvern af flokkunum: `HTML`, `CSS` og `JavaScript`. Í byrjun er engin takki virkur en um leið og takki er virkur skal aðeins sýna fyrirlestra í þeim flokk og takki litaður með `#2d2`. Ef fleiri takkar eru virkjaðir skal einnig sína þá fyrirlestra. Ef allir takkar eru virkir sést það sama og ef allir eru óvirkir—allir fyrirlestrar.

Þegar smellt er á fyrirlestur er farið yfir á `fyrirlestur.html?slug=<slug>` þar sem `<slug>` er _slug_ fyrir fyrirlesturinn, t.d. `fyrirlestur.html?slug=html-sagan`. Hægt er að nota `URLSearchParams` og `window.location.search` til að vita hvaða fyrirlestur átt er við á `fyrirlestur.html` síðu.

## Fyrirlestur

Fyrir hvern fyrirlestur skal birta haus og allt efni fyrirlesturs á eftir honum. Í haus kemur fram flokkur og titill.

Efni fyrirlesturs er geymt í fylki og skal birta það í sömu röð og það er skilgreint. Útbúa þarf birtingu fyrir hverja einingu eftir útliti.

Neðst er takki til að merkja fyrirlestur kláraðann og hlekkur til að fara til baka.

### Kláraður fyrirlestur

Ef fyrirlestur er merktur kláraður skal sýna `✓ Fyrirlestur kláraður` í `#2d2`. Annars `Klára fyrirlestur`. Þegar fyrirlestur er kláraður skal vista upplýsingar um það í `localStorage` og birta í lista og á fyrirlestra síðu.

Nota skal `slug` sem auðkenni yfir kláraða fyrirlestra.

## Fyrirlestragögn

`lectures.json` inniheldur fylki af fyrirlestrum sem birta skal. Hver fyrirlestur getur haft:

* `slug`, notað til að hlekkja á fyrirlestur
* `title`, titill fyrirlesturs
* `category`, flokkur fyrirlesturs
* `image`, mynd í hausi fyrirlesturs, má sleppa, þá skal birta gráan lit í staðinn
* `thumbnail`, mynd á yfirliti fyrirlestra, má sleppa, þá skal birta gráan lit í staðinn
* `content`, fylki af efni fyrirlesturs

Fyrir efni fyrirlesturs er efni alltaf með:

* `type`, gerð efnis
* `data`, gögn efnis

þar sem `type` getur verið:

* `youtube`, `data` inniheldur hlekk á youtube myndband. Innifela skal mynband með `<iframe src="<URL>" frameborder="0" allowfullscreen="0"></iframe>`
* `text`, `data` inniheldur gögn þar sem `\n` merkir á milli málsgreina, þ.e.a.s. texta skal birta innan `<p>`, skipt á `\n`
* `quote`, `data` inniheldur tilvitnun, aukalega getur verið `attribute` með þeim sem vitnað er í
* `image`, `data` inniheldur slóð á mynd, aukalega getur verið `caption` með texta með mynd
* `heading`, `data` inniheldur fyrirsögn
* `list`, `data` inniheldur fylki af textum í lista
* `code`, `data` inniheldur kóða þar sem bil og nýjar línur skipta máli

Athugið að meira efni mun bætast við það sem gefið er í byrjun. Virkni ætti að ráða við hvaða efni sem er í hvaða formi sem er, svo lengi sem það fylgir reglum að ofan.

## Hópavinna

Verkefnið skal unnið í hóp með þremur einstaklingum. Hafið samband við kennara ef ekki er mögulegt að vinna í hóp.

Notast skal við Git og GitHub. Engar zip skrár með kóða ættu að ganga á milli í hópavinnu, heldur á að „committa“ allan kóða og vinna gegnum Git.

## Lýsing á verkefni

`README.md` skrá skal vera í rót verkefnis og innihalda:

* Upplýsingar um hvernig keyra skuli verkefnið
* Lýsingu á uppsetningu verkefnis, hvernig því er skipt í möppur, hvernig CSS og JavaScript er skipulagt og fleira sem á við
* Upplýsingar um alla sem unnu verkefni
* Leyfilegt er að halda eftir þessari verkefnalýsingu en hún skal þá koma _á eftir_ ykkar lýsingu

## Tæki og tól

Eftirfarandi er sett upp í verkefni:

* `.stylelintrc` með upplýsingum um hvernig stylelint eigi að haga sér. Setja þarf upp `stylelint-config-primer` pakkann
* `.eslintrc` skrá sem segir til um hvernig lint fyrir JavaScript skrár skuli háttað
* `.gitignore` sem hunsar algengar skrár, [sjá nánar](https://help.github.com/ignore-files/)
  - Allt undir `./dist` hunsað sem þýðir að það verður _ekki_ checkað inn. Það er gert vegna þess að þær skrár eru útbúnar af tólum þegar verkefni er keyrt.
* `.gitattributes` sem kemur í veg fyrir ósamræmi sem geta komið upp þegar unnið er á milli stýrikerfa
* `.editorconfig` sem samræmir notkun á tabs og spaces, bilum [og fleira](https://editorconfig.org/)
* `grid.css` til að sjá grid sem fyrirmynd er unnin eftir
* `src/` mappa með
  - `styles/` undirmöppu með `styles.scss` grunni
  - `lib/` undirmappa sem gæti innihaldið JavaScript kóða auk tillögu að grunni fyrir virkni á forsíðu
  - `index.js` skrá sem vísar í `lib/`
* `dist/` mappa sem ætti að innihalda _þýddar_ sass og JavaScript skrár
* `img/` með öllum myndum sem þarf í verkefnið
* `package.json` hefur uppsett script ásamt dependencies
  - `eslint` til að keyra eslint
  - `stylelint` til að keyra stylelint
  - `test` til að keyra bæði `eslint` og `stylelint`
  - `browser-sync` til að keyra verkefni, bæta þarf við skrám sem vaktaðar eru
  - `sass` til að keyra fyrstu þýðingu
  - `sass-watch` til að fylgjast með sass skrám og þýða
  - `dev` til að keyra `sass` og `browser-sync`

Setja þarf upp

* `rollup` til að pakka saman JavaScript kóða
* `babel` til að _transpila_ kóða

og bæta við í tól að ofan.

## Mat

* 30% - `README` eftir forskrift, tæki og tól uppsett. Snyrtilegt, gilt (skv. eslint) JavaScript. Snyrtilegt, gilt (skv. stylelint) CSS/Sass, gilt og aðgengilegt HTML. Git notað
* 30% – Yfirlitssíða með síu
* 30% – Fyrirlestrarsíða útfærð með efni
* 10% – Hægt að skrá að fyrirlestur sér kláraður

## Sett fyrir

Verkefni sett fyrir á Uglu föstudaginn 9. nóvember 2018.

## Skil

Einn aðili úr hóp skal skila fyrir hönd allra og skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags föstudaginn 29. nóvember 2019, seinustu dæmatímar eru þann fimmtudag.

Skil skulu innihalda:

* Nöfn allra í hóp ásamt notendanafni
* Slóð á GitHub repo fyrir verkefni, og **öllum** dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `anz1e`, `gunnnnii`, `magdadianaa`, `OlafurjonHI` og `Wolfcoder13`.
* Slóð á verkefnið keyrandi á vefnum

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö stærri verkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

## Myndir

Myndir frá:

* https://unsplash.com/photos/xekxE_VR0Ec
* https://unsplash.com/photos/C4G18Paw0d4
* https://unsplash.com/photos/iar-afB0QQw

---

> Útgáfa 0.2

### Útgáfusaga

| Útgáfa | Lýsing                                |
|--------|---------------------------------------|
| 0.1    | Fyrsta útgáfa                         |
