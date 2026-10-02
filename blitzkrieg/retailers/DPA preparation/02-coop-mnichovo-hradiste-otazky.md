# COOP Mnichovo Hradiště: otázky před draftem datové smlouvy

**Stav:** 2. 10. 2026. Interní pracovní dokument, neposílat protistraně. Čeká na odpovědi.

**Smlouvu negenerovat, dokud nejsou odpovědi doplněné.**

**Jak odpovídat:** odpověď patří do řádku „Odpověď:“ pod každou otázkou. „OK“ znamená přijetí
doporučení, písmeno znamená zvolenou variantu, cokoli dalšího se dopíše volným textem. Otázky 5 a 6
jsou zčásti technické: kde chybí odpověď, přeposlat Honzovi (CV a soukromí) a Petrovi (backend).

---

## O co jde

Smlouva o datové spolupráci mezi Minds & Models, s.r.o. a COOP Mnichovo Hradiště, družstvo
(30 prodejen; schůzka s předsedkyní představenstva proběhla 30. 9. 2026).

**Zadání (30. 9. 2026):**

1. **Kostra podle smlouvy Nielsen a ČEPRO** (č. 058702 z 2. 8. 2023 a dodatek č. 1). Prošla u státem
   vlastněné firmy, takže by měla projít i u soukromé. Kde to jde, udělat to přímočařeji
   a jednodušeji. Vychází se i z našeho draftu v této složce.
2. **„Costs covered“:** data od COOP získáváme bez úplaty a COOP na oplátku dostává bez úplaty přístup
   k datovým analýzám v naší aplikaci. Nejde o „zdarma“, náklady nese M&M. Později přijde podíl na
   výnosech podle toho, kolika značkám a za kolik data prodáme. **Procento v této smlouvě není
   a nebude.**
3. **Neagregovaná data** (COOP uveden jako zdroj) nesou pro COOP podíl podle toho, kolik jich takto
   prodáme. **Agregovaná data** (kombinovaná z více zdrojů) podíl nenesou. Stejně jako Nielsen má M&M
   právo data anonymizovat a prodávat v syndikovaných a zakázkových produktech, které patří M&M.
4. **Dva datové zdroje:** POS data (stejný formát, jaký odebírá Nielsen) a vizuální data, která
   sbíráme vlastním hardwarem v prodejnách.

---

## Co je rozhodnuté (neotvírat)

**Smluvní strany** (z obchodního rejstříku, před podpisem ověřit aktuální výpis):

| | COOP | M&M |
|---|---|---|
| Firma | COOP Mnichovo Hradiště, družstvo | Minds & Models, s.r.o. |
| IČO / DIČ | 00031798 / CZ00031798 | 22265252 / CZ22265252 |
| Sídlo | Turnovská 21, 295 01 Mnichovo Hradiště | Hlubočepská 85/64, 152 00 Praha 5 |
| Zápis | Dr XCIX 475, Městský soud v Praze | C 413498, Městský soud v Praze |
| Podpis | předsedkyně Ing. Ivana Menzelová a místopředseda JUDr. Zdeněk Boubín společně (údaj k 23. 5. 2023) | každý jednatel samostatně (Ondřej Šantora, Josef Němeček) |

**Z Nielsena bereme kostru:**

- rozsah dat a dobu trvání,
- frekvenci a formát dodávek, přílohu se seznamem vad dodávky (jejich Příloha B) a lhůtu 7 dní na
  nápravu,
- licenci podle jejich čl. 2.7–2.8: trvalá a neodvolatelná, anonymizace a prodej v syndikovaných
  a zakázkových produktech, odvozená díla patří M&M,
- mlčenlivost, záruky, postoupení s výjimkou pro skupinu a právního nástupce, české právo.

**Z našeho draftu bereme:** firewall obchodních dat (žádné nákupní ceny, marže ani obrátkovost),
minimálně 25 osob v každé zveřejněné buňce (k≥25), 0 % podílu z agregovaných dat, výslovné vzdání se
práv podle nařízení o datech (Data Act).

**Do smlouvy se nepíše:**

- procento podílu na výnosech,
- věta „obraz neopouští prodejnu“,
- výslovné lhůty pro mazání fotek a záznamů,
- registr smluv (COOP je soukromé družstvo).

**Technika k datu podpisu (rozhodnuto 2. 10. 2026):**

- analýza obrazu poběží ve Vertex AI v regionu EU (dnes jde přes Gemini API s klíčem),
- zakázaná pole (odstín pleti, viditelné těhotenství, vozík a berle) jsou od 1. 10. 2026 odstraněná,
  nasazení čeká,
- mazání fotek a záznamů bude hotové k podpisu,
- nový build AURA (safe_output 1.2.0) jen zlepšil anonymizaci a projde novou certifikací,
- párování s POS daty se řeší agregací do větších balíků, aby z něj nešlo zpětně dohledat konkrétního
  člověka.

---

## Tři zjištění z 30. 9. a jak jsou rozhodnutá

| Zjištění (30. 9.) | Rozhodnutí (2. 10.) | Co zbývá |
|---|---|---|
| Obraz opouští prodejnu: snímek se začerněnou hlavou jde na náš server a do Gemini přes API klíč, bez záruky regionu EU | Přechod na Vertex AI v EU před podpisem. Smlouva tvrdí „žádné osobní údaje neopouštějí prodejnu“, opora je posouzení Komory pověřenců | Právní forma tvrzení (otázka 5) |
| Opravy z GDPR briefu nebyly v kódu | Zakázaná pole jsou pryč, mazání bude hotové k podpisu a ve smlouvě se nezmiňuje, nový build projde certifikací | Jak citovat certifikát a co pokryje (otázka 6) |
| O snímání nelze napsat, že nejde o osobní údaje | Podle posouzení Komory anonymizovaný (začerněný) snímek není osobní údaj, tvrdí se to o všem | Okamžik snímání na zařízení (otázka 7) |

**Pozor:** interní GDPR brief ze srpna (`dashboard-backend/mm-gdpr-exec-brief.md`) tvrdí opak, totiž
že i fotka se začerněnou hlavou je osobní údaj. Před jednáním s pověřencem COOP a před due diligence
ho sjednotit s postojem výše.

---

## Otázky

### Strany a rozsah

#### 1. Je protistranou COOP Mnichovo Hradiště a kdo podepíše za M&M?

Centrála COOP za členská družstva podepsat nemůže, každé družstvo podepisuje samo (O2 v
`02-decisions.md`).

**Doporučení:** samostatná smlouva jen s tímto družstvem, která poslouží jako vzor pro další družstva.
Společná smlouva s přistoupením dalších družstev by provázala nezávislé firmy.

**Doplňující:** potřebujeme něco od COOP Centrum, třeba souhlas s užitím značky COOP ve výstupech, kde
je COOP jmenován?

**Odpověď:**

#### 2. Které prodejny a v jakém tempu?

Všech 30, nebo nejdřív pilotní vlna? Pokud má COOP nést místo u značek z FMCG (v plánu
Asahi/Prazdroj), brand smlouva počítá se 30 prodejnami s platnými právy k 30. 6. 2027. Práva musí
platit 45 dní předem, tedy zhruba od 16. 5. 2027 (RD-13 a RD-14 v
`05-retailer-paper-dependencies.md`).

**Doporučení:**

- Příloha 1 se seznamem prodejen po vlnách, pilot na 3–5 prodejnách,
- COOP se zaváže umožnit instalaci podle harmonogramu,
- M&M se k počtu prodejen nezavazuje.

**Odpověď:**

### Hardware a vizuální data

#### 3. Co přesně je „náš hardware“?

- (a) vlastní kamera a výpočetní jednotka M&M,
- (b) náš box, který čte záznam z kamer COOP,
- (c) podle prodejny.

Je součástí obrazovka s reklamou nebo personalizovaným obsahem, nebo jde jen o senzor? Na tom závisí,
komu data patří, role podle GDPR (otázka 7) i celá instalační část.

**Doporučení:** v Příloze 1 u každé prodejny uvést typ nasazení. Obrazovky do této smlouvy nedávat,
reklama potřebuje vlastní pravidla pro obsah a výnosy.

**Odpověď:**

#### 4. Platí toto nastavení instalace a provozu?

- Hardware zůstává ve vlastnictví M&M.
- Instalaci, servis a odvoz do 30 dnů po skončení smlouvy platí M&M.
- COOP dá místo, elektřinu a přístup pro servis. Elektřina vyjde orientačně na stovky Kč ročně na
  zařízení bez obrazovky.
- Za poškození odpovídá COOP jen při úmyslu nebo hrubé nedbalosti.
- Souhlas pronajímatele u pronajatých prodejen zajistí COOP.

**Otevřené:** připojení přes síť COOP, nebo přes naši SIM? A převzít i Nielsenův čl. 1.2, tedy přístup
do prodejen kvůli pozorování, fotkám regálů a zvláštním studiím?

**Odpověď:**

#### 5. V jaké právní formě tvrdit, že žádné osobní údaje neopouštějí prodejnu?

Obsah je rozhodnutý (oddíl Tři zjištění). Otevřená je forma:

- (a) společné konstatování stran s popisem mechanismu (anonymizace technologií AURA na zařízení
  dřív, než cokoli odejde; analýza ve Vertex AI v EU). K tomu pojistka: kdyby úřad nebo soud rozhodl
  jinak, strany spolupracují a role se od počátku přeřadí na samostatné správce, bez zpětného
  porušení smlouvy (memo §3.2);
- (b) záruka M&M, že žádné osobní údaje prodejnu neopouštějí, s odpovědností za její porušení
  (styl dnešního draftu, čl. 11.1);
- (c) o osobních údajích ve smlouvě nemluvit.

**Doporučení:** (a). Tvrdí to „o všem“, jak je rozhodnuto, ale kdyby to úřad jednou viděl jinak, je
to spor o klasifikaci, ne porušení naší záruky s nárokem na náhradu škody (memo §3.4 a §7.7). Varianta
(c) neprojde u pověřence COOP. Google Cloud (Vertex AI, EU) uvést jako technologického subdodavatele,
pověřenec COOP se na to zeptá.

**Odpověď:**

#### 6. Certifikát AURA: jak ho citovat a co má nová certifikace pokrýt?

Posouzení Komory pověřenců pro ochranu osobních údajů, z.s. č. AP2026001 z 23. 3. 2026 (platí do
23. 3. 2027) je vázané na build AURA 1.0.0. Zařízení poběží na safe_output 1.2.0, který projde novou
certifikací. Podle mema (§6.10) a GDPR briefu posouzení kryje anonymizaci obrazu na zařízení, ne
párování s POS daty v cloudu.

- (a) citovat AP2026001 jako podklad a zavázat se předat nové posouzení pro aktuální build, jakmile
  bude vydané;
- (b) podepsat až po nové certifikaci;
- (c) certifikát necitovat.

**Doporučení:** (a), a novou certifikaci rozšířit i na párování s POS daty (agregace do větších
balíků). Do té doby tvrzení o párovaných výstupech stojí jen na naší vlastní analýze.

**Technická podotázka:** bude agregace do větších balíků v provozu před prvním párováním dat COOP?

**Odpověď:**

#### 7. Kdo je správcem pro okamžik snímání na zařízení?

Ani při našem postoji (co opouští zařízení, není osobní údaj) se nevyhneme jednomu okamžiku: kamera
na zlomek sekundy zachytí rozpoznatelného člověka dřív, než AURA začerní obličej. Snímání
rozpoznatelného člověka je podle GDPR zpracováním osobních údajů, i když trvá jen okamžik a obraz se
hned anonymizuje (stejně to vidí dozorové úřady, např. francouzský CNIL ve stanovisku k tzv. chytrým
kamerám z roku 2022). Někdo tedy musí být správcem právě tohoto okamžiku a odpovídat za značení
a posouzení vlivu (DPIA). Přiznat ho nás nestřelí do nohy, naopak: díky tomu je tvrzení „nic osobního
neodchází“ věrohodné.

- (a) COOP správce, M&M zpracovatel: značení, právní titul a informování nese COOP. Riziko: hardware
  i účel určujeme my, takže nás úřad může překvalifikovat na správce (čl. 28 odst. 10 GDPR) a COOP
  by byl správcem systému, který neprovozuje;
- (b) M&M samostatný správce, COOP jen poskytuje prostor: pro COOP nejjednodušší a odpovídá to tomu,
  jak naše podklady řeší vlastní senzory (site-host smlouva v `07-ws-legal-rights.md`). Odpovědnost
  neseme my, ale jen za okamžik na zařízení: DPIA, oprávněný zájem, značení a pověřenec, kterého
  nejspíš potřebujeme tak jako tak;
- (c) role ve smlouvě neuvádět.

**Doporučení:** (b) u prodejen s naším senzorem, (a) jen tam, kde bychom četli kamery COOP, (c) ne.
Díky rozhodnutí z oddílu Tři zjištění je (b) levnější než dřív, protože se naše role správce zúží na
okamžik na zařízení. Potvrdit s advokátem.

**Odpověď:**

### Ekonomika

#### 8. Jak do smlouvy zapsat „Costs covered“?

- (a) bez vyčíslení, obě plnění se prohlásí za rovnocenná (dnešní draft),
- (b) jako Nielsen: obě strany si vyfakturují stejnou částku a vzájemně ji započtou,
- (c) hodnotu uvést jen pro informaci, bez fakturace.

**Doporučení:** (c) s ceníkovou hodnotou, ne s naší nákladovou cenou (ta je interní). Hodnota ukáže,
co za COOP neseme, a poslouží i jako strop odpovědnosti (otázka 17). U (b) COOP za službu formálně
platí, což podle našeho výkladu oslabuje pozici M&M podle Data Actu. Daně ověřit s účetní.

**Doplňující:** jaká hodnota (Kč na prodejnu a měsíc, a za hardware)?

**Odpověď:**

#### 9. Jak zakotvit podíl na výnosech bez procenta?

Věta „procento dohodneme později“ je prakticky nevymahatelná: smlouva o smlouvě budoucí musí mít obsah
určený aspoň obecně (§ 1785 občanského zákoníku).

**Doporučení:**

- závazný rámec už teď: základem jsou čisté výnosy z výstupů s COOP, u výstupů z více řetězců se dělí
  poměrně, vyúčtování jednou za čtvrtletí;
- procento se sjedná u každého obchodu při jeho schválení (otázka 11), bez dohody o podílu se výstup
  neprodá;
- podíl se platí i z prodejů po skončení smlouvy, pokud výstup vznikl během ní;
- COOP si může jednou ročně nechat vyúčtování na vlastní náklady ověřit nezávislým auditorem.

**Odpověď:**

#### 10. Kde vede hranice mezi neagregovanými a agregovanými daty?

- (a) podle toho, jestli je COOP rozpoznatelný (dnešní draft a rozhodnutí C1): podíl jen tam, kde je
  COOP jmenován nebo rozpoznatelný;
- (b) podle počtu zdrojů: agregovaná jsou jen data aspoň ze dvou řetězců, cokoli jen z dat COOP nese
  podíl, i když je COOP skrytý.

**Doporučení:** (a), s tím, že cokoli prodáme jako benchmark, musí mít data aspoň ze dvou řetězců.
Pozor: pokud brand ze své smlouvy ví, že data jsou z COOP Mnichovo Hradiště, je COOP rozpoznatelný
a podíl se platí, i když jméno ve výstupu není.

**Doplňující:** potvrdit, že i výstupy se jménem COOP mají v každé buňce aspoň 25 osob (k≥25)
a nikdy nejde o záznamy jednotlivých návštěv.

**Odpověď:**

#### 11. Jak má COOP schvalovat výstupy se svým jménem?

- (a) písemný souhlas předem u každého výstupu (dnešní draft),
- (b) souhlas u každého obchodu se značkou; mlčení po 5 pracovních dnech znamená souhlas,
- (c) předem schválený seznam typů výstupů a značek v příloze, pak už jen oznámení.

**Doporučení:** (b). Odvolání souhlasu platí jen pro nové obchody, ne pro běžící předplatné značek.

**Odpověď:**

#### 12. Smíme COOP jmenovat navenek?

**Doporučení:**

- jméno a logo na webu, v prezentacích a v tiskových zprávách jen s předchozím souhlasem COOP,
- smlouvu investorům, kupcům a poradcům pod NDA (due diligence) ukázat bez souhlasu.

**Odpověď:**

#### 13. Co smí COOP dělat s výstupy z naší platformy?

Nielsen dovoluje ČEPRU ukázat výňatky dodavatelům jen pod mlčenlivostí a výrobcům bez licence Nielsenu
je předat nesmí (Příloha C, čl. 3.1–3.2).

- (a) COOP je používá interně a při jednání s dodavateli jim smí ukázat výňatky, ale nepředá jim
  exporty ani datové sady,
- (b) COOP je smí volně používat a sdílet,
- (c) COOP je smí používat jen interně.

**Doporučení:** (a). COOP má výhodu při vyjednávání a M&M nepřichází o příjmy od značek, které platí
nám.

**Odpověď:**

### POS data

#### 14. Jaká POS data a jak je předávat?

**Návrh:**

- položky účtenek: EAN nebo PLU, množství, zaplacená cena, příznak akce, čas, prodejna a pokladna;
  přesnost času určí tým podle řešení párování po větších balících,
- bez identifikátorů zákazníka a bez platebních údajů,
- historie 24 měsíců (Nielsen dostal tři roky),
- denně přes SFTP, vady a náprava do 7 dnů jako v Nielsenově Příloze B,
- náklady na export u dodavatele pokladního systému platí M&M.

**Doplňující:** kdo je dodavatel pokladního systému COOP a mají věrnostní program?

**Odpověď:**

#### 15. POS data jen k párování, nebo i jako samostatné produkty? A dodává COOP data Nielsenu?

Dnešní draft dovoluje POS data jen k párování (čl. 9.2).

- (a) tak to nechat,
- (b) licencovat i agregáty z POS dat (prodeje, podíly, trendy podle kategorie nebo EAN, jako Nielsen
  RMS) se stejným dělením na agregovaná a se jménem COOP.

**Doporučení:** (b), jinak značkám nedodáme spojení segmentu zákazníků s nákupem, které slibují brand
smlouvy (RD-26).

**Doplňující:** dodává COOP Mnichovo Hradiště, sám nebo přes COOP Centrum, POS data NielsenIQ nebo
jiné agentuře, případně exkluzivně? Pak by nemohl pravdivě prohlásit, že s daty volně nakládá.

**Odpověď:**

### Doba trvání, odpovědnost, ochrany

#### 16. Na jak dlouho a jak z toho ven?

- (a) jako Nielsen: 3 roky, pak vždy o rok, výpověď 180 dní,
- (b) totéž, ale prvních 6 měsíců může COOP vypovědět s tříměsíční lhůtou (brand smlouvy potřebují
  aspoň 95 dní, RD-7),
- (c) na dobu neurčitou s šestiměsíční výpovědí.

K tomu výpověď jednotlivé prodejny oběma stranami s lhůtou 60 dní (zavření, rekonstrukce, nefunkční
zařízení).

**Doporučení:** (b). Pokud na schůzce 30. 9. zaznělo „odvolatelné do 60 dnů“ z pitche, je (b)
nejbližší kompromis.

**Odpověď:**

#### 17. Jaký strop odpovědnosti?

**Doporučení:** strop ve výši roční hodnoty z otázky 8. Strop neplatí pro:

- úmysl a hrubou nedbalost (§ 2898 občanského zákoníku jiné ujednání nedovoluje),
- porušení mlčenlivosti,
- porušení firewallu obchodních dat.

Pokuty od ÚOOÚ nese každá strana sama, přenášet je smlouvou je sporné.

**Doplňující:** jaká částka?

**Odpověď:**

#### 18. Kolik ochran dát COOP do prvního návrhu?

- (a) celý balík z draftu: firewall, zákaz srovnání značky s jmenovaným konkurentem u COOP, zákaz
  žebříčků řetězců, výluka kategorií a značek, zpoždění zveřejnění, 90denní přednost;
- (b) štíhlý návrh: firewall, k≥25, schvalování výstupů se jménem COOP, zákaz žebříčků řetězců
  a výluka privátních značek; zbytek jako rezerva pro vyjednávání (memo §10).

**Doporučení:** (b), odpovídá zadání „přímočařeji a jednodušeji“.

**Odpověď:**

#### 19. Co se zaměstnanci COOP v záběru kamery?

Senzor zachytí i personál a sledování zaměstnanců omezuje § 316 zákoníku práce, i když nic osobního
neopouští prodejnu.

- (a) výslovně vyloučit: personál nevyhodnocujeme, kamery nemíří do zón jen pro zaměstnance a COOP
  zaměstnance informuje;
- (b) nabídnout COOP i analýzu front a obsazenosti pokladen; pak ale COOP musí splnit podmínky § 316.

**Doporučení:** (a).

**Odpověď:**

#### 20. Formát, uložení a název smlouvy?

**Doporučení:**

- markdown ve dvou verzích (interní s poznámkami a čistopis) a k tomu .docx pro advokáta a COOP,
- uložit do `clients/coop/delivered/2026-10-xx-datova-smlouva/`,
- jen česky, anglická verze až pro due diligence.

**Doplňující:** název „Smlouva o datovém partnerství“ (brand smlouvy odkazují na „Datovou smlouvu“),
nebo Nielsenův „Smlouva o vzájemné spolupráci“?

**Odpověď:**

---

## Další krok

Až budou odpovědi doplněné, požádat Claude o vygenerování smlouvy z tohoto souboru, draftu
`01-smlouva-o-datovem-partnerstvi-CZ.md` a mema `00-clause-architecture-memo.md`. Draft pak projde
externím advokátem (memo §11).

## Zdroje

- **Nielsen a ČEPRO:** hlavní smlouva [058702_NN.pdf (1).pdf](<058702_NN.pdf (1).pdf>), dodatek č. 1
  [058702_1_NN (2).pdf](<058702_1_NN (2).pdf>), objednávka TSR
  [4500123221_1.pdf (2).pdf](<4500123221_1.pdf (2).pdf>). Registr smluv:
  [hlavní smlouva](https://smlouvy.gov.cz/smlouva/27319363),
  [dodatek č. 1](https://smlouvy.gov.cz/smlouva/33941321).
- **Naše podklady:** [00-clause-architecture-memo.md](00-clause-architecture-memo.md),
  [01-smlouva-o-datovem-partnerstvi-CZ.md](01-smlouva-o-datovem-partnerstvi-CZ.md),
  [01-smlouva-CZ-CISTOPIS.md](01-smlouva-CZ-CISTOPIS.md),
  [05-retailer-paper-dependencies.md](../../brands/paper/05-retailer-paper-dependencies.md),
  [07-ws-legal-rights.md](../../../strategy/2026-08-19-base-strategy/07-ws-legal-rights.md),
  [02-decisions.md](../../../strategy/2026-08-19-base-strategy/02-decisions.md),
  [retailers-execution-guide.md](../retailers-execution-guide.md),
  [clients/coop/facts.yaml](../../../clients/coop/facts.yaml).
- **Obchodní rejstřík:**
  [COOP Mnichovo Hradiště, družstvo](https://rejstrik-firem.kurzy.cz/00031798/coop-mnichovo-hradiste-druzstvo/),
  [Minds & Models, s.r.o.](https://rejstrik-firem.kurzy.cz/22265252/).
