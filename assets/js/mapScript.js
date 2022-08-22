const mapElement = document.getElementById("map");
const mapMarkerModal = document.getElementById("mapMarkerModal");
const locationsMarkers = [
  {
    id: 1,
    lat: 53.34437278105042,
    lng: -6.30052497364082,
    title: "The Gardens at the Royal Hospital Kilmainham",
    class: "Designed landscape feature",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Craig (1969, 329) mentions agarden which is shown on Brooking's map (1728) and Rocque's map (1756). Archaeological excavations were carried out in 1976 to verify the accuracy of Rocque's map. The remains of cobbled garden paths were uncovered in association with late 18th century pottery and some clay pipes (Sweetman 1976, 32).",
  },
  {
    id: 2,
    lat: 53.34500208321748,
    lng: -6.300710046063976,
    title: "Saint James' (part of Phoenix Park)",
    class: "House - 18th/19th century",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Craig (1969, 329) mentions the Garden House at the Royal Hospital Kilmainham. This is shown on Rocque's map 1756.",
  },
  {
    id: 3,
    lat: 53.343182205612706,
    lng: -6.30011057234665,
    title: "Irish Museum of Modern Art",
    class: "Irish Museum of Modern Art ",
    rating: "International",
    originalUse: "hospital/infirmary",
    inUseAs: "museum/gallery",
    date: "1675 - 1685",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 4,
    lat: 53.342643353215415,
    lng: -6.299959027538638,
    title: "The IMMA Shop",
    class: "Religious house - Knights Hospitallers",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "The priory for the Knights of the Order of St John the Baptist of Jerusalem was founded by Richard de Clare in 1174. Its landed possessions included 500 acres in the vicinity of the Priory. This incorporated the monastery of Cill Maigneann on the present grounds of the Royal Hospital. The historical sources describe an outer and inner enclosure at the priory; the inner enclosure contained a castle with a quadrangle surrounded by a strong wall with towers at four corners. The outer enclosure surrounded the castle on every side with a gate on the S side facing the common green atKilmainham. A parochial church stood near the present high cross on the grounds of Kilmainham hospital (18:20(284). In 1859 fragments of floor tiles for this church were dug up near the cross (Anon 1858-59, 444). The Down Survey (1655-6) for Kilmainham shows the remains of the priory still standing though in a ruinous state. In 1681 the Royal Hospital was built near the old ruinous building called the castle of Kilmainham. The demolished material was used in the new building. Excavations by Bersu in 1948 exposed medieval floor tiles, a stonw wall and well (Kenny 1995, 89). Some of this stonework was exposed during restoration work in the 1970s (Gwynn & Hadcock 1970, 334-335; Kenny 1995, 43; Clarke 2002, 19).",
  },
  {
    id: 5,
    lat: 53.34293476944876,
    lng: -6.301237089581304,
    title: "",
    class: "Irish Museum of Modern Art",
    rating: "Regional",
    originalUse: "water tower",
    inUseAs: "",
    date: "1760 - 1800",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 6,
    lat: 53.34226022742235,
    lng: -6.304245197483945,
    title: "",
    class: "Garda Station - Reg. No. 50080065",
    rating: "Regional",
    originalUse: "stables",
    inUseAs: "garda station/constabulary barracks",
    date: "1860 - 1880",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 7,
    lat: 53.342205780844935,
    lng: -6.30458852022752,
    title: "",
    class: "Garda Station - Reg. No. 50080065",
    rating: "Regional",
    originalUse: "house",
    inUseAs: "",
    date: "1770 - 1790",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 8,
    lat: 53.342122509474414,
    lng: -6.305210792700252,
    title: "",
    class: "Irish Museum of Modern Art",
    rating: "Regional",
    originalUse: "graveyard/cemetery",
    inUseAs: "graveyard/cemetery",
    date: "1670 - 1690",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 9,
    lat: 53.3420488461996,
    lng: -6.30767306058222,
    title: "",
    class: "Irish Museum of Modern Art",
    rating: "Regional",
    originalUse: "gate lodge",
    inUseAs: "building misc",
    date: "1810 - 1815",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 10,
    lat: 53.342542067420446,
    lng: -6.305972540146032,
    title: "",
    class: "Ecclesiastical site",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "There is a general consensus that the 'Cill Maignenn' which givesKilmainham its name was a 7th-century foundation associated with St. Maignenn. A possible location for this monastery is along the W boundary of the present grounds of the Royal Hospital in the area known as Bully's Acre where there is a graveyard containing a shaft of a 9th-11th-century high cross (18:20(284)). This graveyard has been closed for interments since the cholera epidemic of 1832. It was enclosed in 1760 by General Dikes, Commander of the Forces who caused the ground to be levelled and a stone wall built around it. It was a paupers graveyard up until the 19th-century. Human burials were uncovered during the construction of a new water main into the Royal Hospital via the W avenue (OPW 30/6/81, Clarke 2002, 17, 18).",
  },
  {
    id: 11,
    lat: 53.342820702857296,
    lng: -6.306734287483342,
    title: "Bully's Acre",
    class: "Bully's Acre",
    rating: "Regional",
    originalUse: "graveyard/cemetery",
    inUseAs: "graveyard/cemetery",
    date: "1750 - 1770",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 11,
    lat: 53.34246412754871,
    lng: -6.299882363164499,
    title: "",
    class: "Irish Museum of Modern Art",
    rating: "Regional",
    originalUse: "stables",
    inUseAs: "studio",
    date: "1770 - 1810",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 12,
    lat: 53.342590634899636,
    lng: -6.299217175340215,
    title: "",
    class: "Irish Museum of Modern Art",
    rating: "Regional",
    originalUse: "officer's house",
    inUseAs: "museum/gallery",
    date: "1800 - 1810",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 13,
    lat: 53.34367794210885,
    lng: -6.299265455085619,
    title: "Irish Museum of Modern Art",
    class: "Irish Museum of Modern Art",
    rating: "Regional",
    originalUse: "officer's house",
    inUseAs: "museum/gallery",
    date: "1760 - 1765",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 14,
    lat: 53.34377802421498,
    lng: -6.275517176489028,
    title: "",
    class: "Prison",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "The Black Day Prison is marked on Rocque's map 1756. Foundation date uncertain.",
  },
  {
    id: 15,
    lat: 53.34384688057268,
    lng: -6.2751349616977885,
    title: "",
    class: "Guildhall",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Known as Carpenter's Hall, this building stood at the W end of Keyzar's Lane, in Cornmarket. The guild of carpenters, millers, heylers and tilers was incorporated in 1507 by Henry VII(Gilbert 1854, I, 254). This building became known as the New hall and gave its name to the adjoining New Hall Market (Bradley & King 1987, I, 30; FMD map 1978, L1). There are no visible surface remains.",
  },
  {
    id: 16,
    lat: 53.34378883306641,
    lng: -6.274665575127853,
    title: "",
    class: "Saint Audoen's Church of Ireland Church ",
    rating: "Regional",
    originalUse: "steps",
    inUseAs: "steps",
    date: "1885 - 1895",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 17,
    lat: 53.34370396347271,
    lng: -6.274231057280514,
    title: "St Audoen's Church, Dublin",
    class: "Memorial stone",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "In the nave floor of St Audeon's medieval parish church (DU018-020075-) is a memorial slab which marks the burial place of Edmund Reilly (L 1.86m, Wth 0.98m). It bears an IHS in false relief in a sunken panel with a surround of chevrons.<br />Compiled by: Geraldine Stout",
  },
  {
    id: 18,
    lat: 53.34355343962687,
    lng: -6.274619977575971,
    title: "",
    class: "Watercourse",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "At the W end of High Street, Jean Le Decer, Mayor of Dublin in 1308 erected a marble conduit (Gilbert 1861, I, 250; 408-415; (FMD 1978, D2). There are no visible surface remains.<br />Compiled by: Geraldine Stout",
  },
  {
    id: 19,
    lat: 53.34400020566149,
    lng: -6.274485867117641,
    title: "",
    class: "Saint Audoen's Church of Ireland Church",
    rating: "National",
    originalUse: "town/city walls",
    inUseAs: "",
    date: "1100 - 1130",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 20,
    lat: 53.344118701963296,
    lng: -6.274518053629936,
    title: "",
    class: "House - medieval",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "This house was located on the S side and at the W end of Cook Street. It is shown on the Friends of Medieval Dublin Map (1978) and mentioned by Bradley and King (1987, iii, 195, No. 139). No visible surface trace.",
  },
  {
    id: 21,
    lat: 53.344113898065686,
    lng: -6.275196652490285,
    title: "",
    class: "House - medieval",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "This house was formerly located midway along the S side of Cook Street. It is mentioned by Bradley and King (1987, iii, 195, No. 140). No visible surface trace.",
  },
  {
    id: 22,
    lat: 53.34367513979822,
    lng: -6.273614149197886,
    title: "",
    class: "Saint Audoen's Roman Catholic Church",
    rating: "National",
    originalUse: "church/chapel",
    inUseAs: "church/chapel",
    date: "1840 - 1850",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 23,
    lat: 53.34319314101918,
    lng: -6.272114794370502,
    title: "",
    class: "Church",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "The chapel of St. Michael was founded by Donatus, first Bishop of Dublin, c. 1038 on land given by Sitric Silkbeard (Wheeler 1959-60, 98). It became a parochial church in the 15th century (Gilbert 1854-9, 1, 208). In 1630 it was described as in very good condition but by the 1670's it was in need of repair which was completed by the end of the 17th century (Gilbert 1854-9, 1, 211). It was rebuilt again in 1815 and its church yard to the N occupied by parochial schools. However, it was demolished by the end of the 19th century and the present Synod Hall built on its site. The 17th century tower survives as part of the Synod hall complex (Bradley and King 1987, 2, 118; FMD map (1978F1).<br />Compiled by: Geraldine Stout",
  },
  {
    id: 24,
    lat: 53.34352621716633,
    lng: -6.271066050657782,
    title: "Christ Church Cathedral",
    class: "Cathedral",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Christchurch cathedral is believed to have been co-founded by Sitric Silkbeard, King of Dublinc.994-1036 and Dunan , Bishop of Dublin (d. 1074). In the 12th century Laurence O'Toole introduced a monastic chapter to the cathedral in the form of the Augustinian Canons. As part of the suppression of the monasteries, the chapter was secularised in 1541 AD. In 1512 AD Gerald Earl of Kildare built St. Mary's chapel in the choir. The cathedral was fully restored in the late 19th century. The doorway in the N transept was moved to the S transept in 1831 AD. This has two major orders of chevron arches and four worn capitals. Fragments of this in the crypt include a monster-head capital and the keystone of an archdecorated with a human face biting on a moulding.<br />The cathedral is cruciform in plan with a tower at the crossing. The N side of the nave dates to 1216-1234AD. The first five bays were completed by 1234 when the cathedral chapter sought royal permission to block a lane in order to lenghten and widen the church (Sweetman 1875-6, I, No. 2178). The main arcade has massive piers surrounded by a cluster of shafts. Only the N arcade is original. A fragment of the medieval building survives embedded in the modern chapter house adjoining the cathedral to the N of the 14th century choir. The chancel was demolished in the 14th century. It had a three stage elevation. A number of the present capitals are highly decorated with a sculpture of a shepherd, two sheep, fruit dragons and humans.<br />The transepts are Romanesque in style and date from the late 12th-century. The chapter house adjoining the cathedral on the S side is 13th century date. In 1890 burials were found with remains of a tiled pavement (Drew 1890, I). The excavations also uncovered portions of the calefactory and cloister walks. There are a number of medieval artifacts, effigies and wall memorials housed in the cathedral. These include a 15th century piscina, 17th century lectern; the effigy of a knight c. 1330 reputedly Strongbow which lies under the S arcade of the nave, two effigies of women of 13th century date and an effigy of a 13th century archbishop in the choir. There are wall memorials commemorating Henry Sydney 1577; Francis Asgard 1584. The Peace chapel of St Laud off the choir contains a medieval reliquary of the heart of St. Laurence O'Toole and on the floor there is a vast assemblage of medieval floor tiles (UASCD, 1987, I, 62-72).",
  },
  {
    id: 25,
    lat: 53.34448139467961,
    lng: -6.25931126961571,
    title: "",
    class: null,
    rating: "Regional",
    originalUse: "gates/railings/walls",
    inUseAs: "gates/railings/walls",
    date: "1850 - 1870",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 26,
    lat: 53.34447979339294,
    lng: -6.258950512502156,
    title: "",
    class: "West Front",
    rating: "National",
    originalUse: "university",
    inUseAs: "university",
    date: "1750 - 1760",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 27,
    lat: 53.34466954531094,
    lng: -6.259225438925337,
    title: "",
    class: "Water mill - unclassified",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Known as 'Steine Mill' this watermill was situated on the former River Steine, just outside the present W front of Trinity College (Bradley & King 1987, 1, 40; FMD map 1978, N9). Mentioned in 1276, repaired in 1297, ruinous to be built in 1462 (Clarke 2002, 26, G10). There are no visible surface remains.<br />Compiled by: Geraldine Stout",
  },
  {
    id: 28,
    lat: 53.34469636671519,
    lng: -6.258621941895207,
    title: "",
    class: "West Front",
    rating: "National",
    originalUse: "university",
    inUseAs: "university",
    date: "1750 - 1760",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 29,
    lat: 53.34415833410098,
    lng: -6.25862194188754,
    title: "",
    class: "West Front - Reg",
    rating: "National",
    originalUse: "university",
    inUseAs: "university",
    date: "1750 - 1760",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 30,
    lat: 53.34426401961281,
    lng: -6.258055995802427,
    title: "Examination Hall",
    class: "Examination Hall",
    rating: "National",
    originalUse: "building misc",
    inUseAs: "exam hall",
    date: "1775 - 1790",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 31,
    lat: 53.343581863053416,
    lng: -6.259069870793832,
    title: "",
    class: "Provost's House",
    rating: "Regional",
    originalUse: "gates/railings/walls",
    inUseAs: "gates/railings/walls",
    date: "1755 - 1760",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 32,
    lat: 53.34325999666574,
    lng: -6.258688997125177,
    title: "",
    class: "TRIARC",
    rating: "Regional",
    originalUse: "stables",
    inUseAs: "building misc",
    date: "1840 - 1845",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 33,
    lat: 53.34302139760969,
    lng: -6.2577636350064845,
    title: "",
    class: "Ritual site - holy well",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "This well exists in the Provosts garden of Trinity College, directly west of the main entrance to the college at Nassau Street (Gilbert 1861, III, 247). Formerly called 'St Patrick's well Lane' this is a natural spring thought to mark the S boundary of the dissolved monastery of All Hallows in a 1592 deed. The sudden drying up of this well in 1729 formed the subject of a poem by Swift. It was restored in 1731 by Dublin Corporation (FMD map (1978), D6). It is within a red brick chamber that projects into the base of the precinct wall, under the line of the road. The vaulted chamber is accessed by a steps and there is a holy water stoup on the western side (Simpson 2002, 213).<br />Compiled by: Geraldine Stout",
  },
  {
    id: 34,
    lat: 53.34526962018634,
    lng: -6.258104275539512,
    title: "",
    class: "Chapel",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "According to Archbishop Alen there was formerly a chapel of St Clement's situated in the vicinity of the Steine between the Liffey and the Augustinian abbey of All Hallows (Mc Neill 1950, 56). In one of the Deeds in the register of All Hallows it is described as lying 'before the Gate' of All Hallows (Butler 1845, 28; Bradley & King 1987, 2, 132, FMD map (1978, G2; Clarke 2002, 20). There are no visible surface remains.<br />Compiled by: Geraldine Stout",
  },
  {
    id: 35,
    lat: 53.34407666784079,
    lng: -6.257691215354686,
    title: "1937 Reading Room, Trinity",
    class: "Reading Room - Reg",
    rating: "Regional",
    originalUse: "library/archive",
    inUseAs: "library/archive",
    date: "1925 - 1930",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 36,
    lat: 53.34392134139163,
    lng: -6.256846319527102,
    title: "",
    class: "Library",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description: `In 1592 the mayor of Dublin granted the site of All Hallows to Adam Loftus, archbishop of Dublin, Provost of Queen Elizabeth's College of the Holy and Undivided Trinity. James Ussher (1625–56), Archbishop of Armagh, whose most important works were "Veterum Epistolarum Hibernicarum Sylloge", published in 1632, and "Brittanicarum Ecclesiarum Antiquitates", which appeared in 1639, left his valuable library, comprising several thousand printed books and manuscripts, to Trinity College, Dublin, and his complete works were published by that institution in twenty-four volumes. In the 1700's the area to the NE of the quadrangle was divided into a large Square, called Library Square (Simpson, L 2002, 195-236).<br />Compiled by: Geraldine Stout`,
  },
  {
    id: 37,
    lat: 53.34425601314602,
    lng: -6.257388125740853,
    title: "",
    class: "George Salmon Statue",
    rating: "Regional",
    originalUse: "statue",
    inUseAs: "statue",
    date: "1910 - 1915",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 38,
    lat: 53.34442895254192,
    lng: -6.2573103416817615,
    title: "",
    class: "Campanile",
    rating: "Regional",
    originalUse: "building misc",
    inUseAs: "building misc",
    date: "1850 - 1855",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 39,
    lat: 53.34443856026555,
    lng: -6.257940660781295,
    title: "",
    class: "Religious house - Augustinian canons",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description: `The Augustinian Priory of All Saints (All Hallows) was established by Diarmait Mac Murchada, King of Leinster in c. 1166 (Gwynn and Hadcock 1970, 171). Between 1234 and 1244 it was granted lands in the Steynnear (Butler 1845, 23). The priory was dissolved in 1538 and its possessions granted to the citizens of Dublin in recognition of their loyalty during the Silken Thomas Rebellion of 1534 (Gilbert 1861, 3-4). The citizens in the reign of Elizabeth transferred their property to Adam Loftus, Archbishop of Dublin for the foundation of a university. The roofing and building materials of the priory were carried away by William Brabazon to be used in repairing Dublin Castle (FMD map 1978, H1). It was located on the E side of Hoggen Street, immediately E of the river Stein and close to the shore of the river Liffey (De Courcy 1996, 5-7). The site of the priory church is traditionally associated with the present Campanile in Library Square, Trinity College (Bradley & King 1987, II, 137-138). The tower of the priory was incorporated into the N range of the original University buildings near the E end (Craig 1982, 151-53). In 1998 excavations in Library Square exposed theremains of five skeletons, orientated east-west and the remains of a medieval wall east of the college Quadrangle which are thought to be associated with the priory(Simpson 2002, 195-236).<br />Compiled by: Geraldine Stout`,
  },
  {
    id: 40,
    lat: 53.344366502289326,
    lng: -6.256038974620968,
    title: "",
    class: "House - 18th/19th century",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Craig (1969, 325) mentions the Rubrics, a college residence which dates from the early Eighteenth century.",
  },
  {
    id: 41,
    lat: 53.344810057264105,
    lng: -6.256811450794174,
    title: "",
    class: "Graduates Memorial Building",
    rating: "Regional",
    originalUse: "building misc",
    inUseAs: "building misc",
    date: "1900 - 1905",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 41,
    lat: 53.34507907030837,
    lng: -6.256092618799809,
    title: "",
    class: "Botany Bay",
    rating: "Regional",
    originalUse: "hall of residence",
    inUseAs: "hall of residence",
    date: "1790 - 1795",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 42,
    lat: 53.34538010670305,
    lng: -6.256806086388088,
    title: "",
    class: "Botany Bay",
    rating: "Regional",
    originalUse: "hall of residence",
    inUseAs: "hall of residence",
    date: "1815 - 1820",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 43,
    lat: 53.344958975409185,
    lng: -6.257841419068321,
    title: "",
    class: "Graveyard",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Behind the dining hall in Trinity College is a graveyard known as 'Challoner's Corner'. The earliest grave is c. 1710.",
  },
  {
    id: 44,
    lat: 53.34494776654092,
    lng: -6.255910228569279,
    title: "Department of Electronic & Electrical Engineering",
    class: "Building",
    rating: null,
    originalUse: null,
    inUseAs: null,
    date: null,
    townland: "Dublin South City",
    isScheduled: "Yes",
    description:
      "Craig (1969, 325) mentions the Printing House, New Square which dates from 1734.",
  },
  {
    id: 45,
    lat: 53.344083873697734,
    lng: -6.252080034092962,
    title: "Botany Department",
    class: "Botany Bay",
    rating: "Regional",
    originalUse: "faculty building",
    inUseAs: "faculty building",
    date: "1905 - 1910",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 46,
    lat: 53.34367554013672,
    lng: -6.2519673813177254,
    title: "Fitzgerald Building, School of Physics",
    class: "Physics Building",
    rating: "Regional",
    originalUse: "faculty building",
    inUseAs: "faculty building",
    date: "1900 - 1910",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 47,
    lat: 53.34338409966506,
    lng: -6.251650880650015,
    title: "",
    class: "Physiology and Zoology Building",
    rating: "Regional",
    originalUse: "faculty building",
    inUseAs: "faculty building",
    date: "1875 - 1880",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 48,
    lat: 53.34306223177555,
    lng: -6.252222191180683,
    title: "Faculty of Health Sciences",
    class: "Chemistry Building",
    rating: "",
    originalUse: "faculty building",
    inUseAs: "faculty building",
    date: "1880 - 1890",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 49,
    lat: 53.342749969562064,
    lng: -6.252941023190463,
    title: "Pavilion Bar",
    class: "Cricket Pavilion",
    rating: "Regional",
    originalUse: "clubhouse",
    inUseAs: "public house",
    date: "1880 - 1890",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 50,
    lat: 53.342304791796536,
    lng: -6.253190468621343,
    title: "The Moyne Institute @ Trinity",
    class: "Moyne Institute - Reg. No. 50020418",
    rating: "Regional",
    originalUse: "faculty building",
    inUseAs: "faculty building",
    date: "1950 - 1955",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 51,
    lat: 53.34224714253213,
    lng: -6.251817177641545,
    title: "Dublin Dental University Hospital",
    class: "Dental Hospital",
    rating: "Regional",
    originalUse: "hospital/infirmary",
    inUseAs: "hospital/infirmary",
    date: "1895 - 1900",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 52,
    lat: 53.33136524977697,
    lng: -6.278784106952827,
    title: "Dublin International Foundation College",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "prison/jail",
    inUseAs: "college",
    date: "1810 - 1820",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 53,
    lat: 53.331416506643045,
    lng: -6.277764867557836,
    title: "",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "prison/jail",
    inUseAs: "office",
    date: "1810 - 1820",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 54,
    lat: 53.33116342526804,
    lng: -6.2777058589612835,
    title: "",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "prison/jail",
    inUseAs: "office",
    date: "1850 - 1870",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 55,
    lat: 53.330996839239745,
    lng: -6.277491282246549,
    title: "",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "prison/jail",
    inUseAs: "office",
    date: "1810 - 1820",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 56,
    lat: 53.33060920384817,
    lng: -6.277641485946863,
    title: "",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "barracks",
    inUseAs: "office",
    date: "1880 - 1900",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 57,
    lat: 53.33076618057774,
    lng: -6.276734899254794,
    title: "",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "barracks",
    inUseAs: "outbuilding",
    date: "1880 - 1900",
    townland: null,
    isScheduled: null,
    description: null,
  },
  {
    id: 58,
    lat: 53.33166798475666,
    lng: -6.277593206136654,
    title: "137 S Circular Rd",
    class: "Griffith College Dublin",
    rating: "Regional",
    originalUse: "building misc",
    inUseAs: "",
    date: "1880 - 1900",
    townland: null,
    isScheduled: null,
    description: null,
  },
];

function initMap() {
  const centerLatLng = { lat: 53.34319314101918, lng: -6.272114794370502 };
  const map = new google.maps.Map(mapElement, {
    zoom: 13,
    center: centerLatLng,
  });

  locationsMarkers.forEach((el) => {
    const marker = new google.maps.Marker({
      position: {
        lat: el?.lat,
        lng: el?.lng,
      },
      map,
      title: el?.title,
      optimized: false,
    });

    marker.addListener("click", () => {
      const myModal = new bootstrap.Modal(mapMarkerModal);
      myModal.toggle();
      mapMarkerModal.querySelector(".modal-content").innerHTML = `
      <div class="modal-header bg-light">
      <h5 class="modal-title text-capitalize">${el?.class}</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
      </div>
      <div class="modal-body">
        ${el?.townland ? 
          `<div class="row mx-0 mb-2">
            <div class="col px-0">
              <h6 class="mb-0 text-capitalize">Townland</h6>
            </div>
            <div class="col">
              <p class="mb-0 text-capitalize">${el?.townland}</p>
            </div>
          </div>`  : ""
        }
        ${el?.isScheduled ?
          `
          <div class="row mx-0 mb-2">
            <div class="col px-0">
              <h6 class="mb-0 text-capitalize">
                Scheduled for inclusion in the next revision of the RMP
              </h6>
            </div>
            <div class="col">
              <p class="mb-0 text-capitalize">Yes</p>
            </div>
          </div>` : ""
        }
        ${el?.description ?
          `
            <div>
              <h6 class="mb-2 text-capitalize">Description:</h6>
              <p class="mb-0 w-75">
                ${el?.description}
              </p>
            </div>
          ` : ""
        }
        ${el?.rating ? 
          `
          <div class="row mx-0 mb-2">
            <div class="col px-0">
              <h6 class="mb-0 text-capitalize">Rating</h6>
            </div>
            <div class="col">
              <p class="mb-0 text-capitalize">${el?.rating}</p>
            </div>
          </div>
          ` : ""
        }
        ${el?.originalUse ? 
          `
          <div class="row mx-0 mb-2">
            <div class="col px-0">
              <h6 class="mb-0 text-capitalize">Original Use</h6>
            </div>
            <div class="col">
              <p class="mb-0 text-capitalize">${el?.originalUse}</p>
            </div>
          </div>
          ` : ""
        }
        ${el?.inUseAs ?
          `
          <div class="row mx-0 mb-2">
            <div class="col px-0">
              <h6 class="mb-0 text-capitalize">In Use as</h6>
            </div>
            <div class="col">
              <p class="mb-0 text-capitalize">${el?.inUseAs}</p>
            </div>
          </div>
          ` : ""
        }
        ${el?.date ?
          `
          <div class="row mx-0 mb-2">
            <div class="col px-0">
              <h6 class="mb-0 text-capitalize">Date</h6>
            </div>
            <div class="col">
              <p class="mb-0 text-capitalize">${el?.date}</p>
            </div>
          </div>
          ` : ""
        }
      </div>
      `;
    });
  });
}

window.initMap = initMap;