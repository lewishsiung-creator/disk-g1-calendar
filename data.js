/* Transcribed from DISK School Calendar SY 2026-2027 (revision "as of July 29, 2026").
   Categories follow the printed legend. `off: true` marks a day students do not attend. */

const SCHOOL = {
  nameEn: "Dominican International School Kaohsiung",
  nameZh: "高雄道明外僑學校",
  addressEn: "No. 107, Chung Hua 1st Road, Gushan District, Kaohsiung City",
  addressZh: "804 高雄市鼓山區中華一路 107 號",
  tel: "(+886) (07) 552-3989",
  mobile: "+886 970 701 129",
  email: "admin@disk.kh.edu.tw",
  website: "www.disk.kh.edu.tw",
  yearEn: "School Year 2026–2027",
  yearZh: "2026–2027 學年度",
  revisedEn: "as of July 29, 2026",
  revisedZh: "資料更新日：2026 年 7 月 29 日",
  firstDay: "2026-08-10",
  lastDay: "2027-05-31",
};

/* Who this edition is for. PAGE is the only place a name appears — the public
   edition for other Grade 1 parents is the same page with PAGE swapped out.
   `only:` on an event lists the grades or bands the source scopes it to;
   anything without `only:` is school-wide. */
const GRADE = "G1";
const PAGE = {
  titleEn:  "Grade 1 at DISK",
  titleZh:  "DISK 一年級行事曆",
  subtitle: "",
};
const GRADE_TAGS = {
  G1: ["G1", "ES"],   // Grade 1 — elementary
};

const CATS = {
  curriculum:   { color: "#9ffa82", en: "Curriculum & Academic",        zh: "課程與學術活動" },
  parents:      { color: "#ffdcae", en: "VIPs & Parents-Involved",      zh: "貴賓與家長活動" },
  institutional:{ color: "#ffaffc", en: "Institutional Celebrations",   zh: "學校慶典與活動" },
  student:      { color: "#b0cef7", en: "Student & Co-Curricular",      zh: "學生與課外活動" },
  qstart:       { color: "#fffd86", en: "Start of the Quarter",         zh: "各階段開始" },
  faculty:      { color: "#c1f8de", en: "Faculty & Staff",              zh: "教職員活動" },
  holiday:      { color: "#fc8a82", en: "Breaks & Holidays",            zh: "假期與國定假日" },
  exam:         { color: "#6ffffe", en: "Examinations",                 zh: "考試" },
  sat:          { color: "#d9d2e9", en: "SAT Weekend",                  zh: "SAT 考試週末" },
};

/* The parent view's three buckets:
     uniform:true    — Formal Uniform inferred from the Mass / Assembly / Graduation entries
     uniform:"other-grades" — liturgical, but the source scopes it to other years
     off:true        — no school
     key:true        — exams, report cards, and dates a parent attends or plans around
   The school does not print uniform requirements, so `uniform` is an inference,
   not a quotation. School notice always wins. */

/* Quarter boundaries, read off the "Quarter Begins" entries. */
const QUARTERS = [
  { n: 1, start: "2026-08-10", end: "2026-10-12", days: 42 },
  { n: 2, start: "2026-10-13", end: "2027-01-05", days: 48 },
  { n: 3, start: "2027-01-06", end: "2027-03-14", days: 42 },
  { n: 4, start: "2027-03-15", end: "2027-05-31", days: 48 },
];

const EVENTS = [
  // ---- August 2026 ----
  { s:"2026-08-03", e:"2026-08-07", cat:"faculty",       en:"Teachers Orientation", zh:"教師職前研習", note:"before term" },
  { s:"2026-08-10",                 cat:"qstart",        en:"First Day of School", zh:"開學日", key:true },
  { s:"2026-08-11", e:"2026-08-13", cat:"curriculum",    en:"Student Assessments", zh:"學生評量" },
  { s:"2026-08-14",                 cat:"institutional", en:"Blessing and Inauguration of the New DISK Building", zh:"新校舍祝聖啟用典禮", uniform:true },
  { s:"2026-08-15",                 cat:"parents",       en:"Parent's Orientation (AM)", zh:"家長說明會（上午）", key:true },
  { s:"2026-08-22",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", only:["HS"] },
  { s:"2026-08-28",                 cat:"institutional", en:"Monthly Mass", zh:"每月彌撒", uniform:true },

  // ---- September 2026 ----
  { s:"2026-09-07",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2026-09-10",                 cat:"student",       en:"Fire Drill", zh:"消防演練" },
  { s:"2026-09-12",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", only:["HS"] },
  { s:"2026-09-17", e:"2026-09-18", cat:"student",       en:"Earthquake Drill and Disaster Prevention Week", zh:"地震演練暨防災週" },
  { s:"2026-09-25",                 cat:"holiday",       en:"Mid-Autumn Festival", zh:"中秋節", off:true },
  { s:"2026-09-28",                 cat:"holiday",       en:"Confucius Day", zh:"孔子誕辰紀念日（教師節）", off:true },
  { s:"2026-09-30",                 cat:"institutional", en:"Monthly Mass", zh:"每月彌撒", uniform:true },

  // ---- October 2026 ----
  { s:"2026-10-03",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", only:["HS"] },
  { s:"2026-10-05",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2026-10-06", e:"2026-10-08", cat:"exam",          en:"1st Quarter Examinations", zh:"第一階段考試", key:true },
  { s:"2026-10-09",                 cat:"holiday",       en:"Double Ten Break", zh:"國慶日連假", off:true },
  { s:"2026-10-12",                 cat:"faculty",       en:"Faculty & Staff Activity (No Students)", zh:"教職員活動（學生不到校）", off:true },
  { s:"2026-10-13",                 cat:"qstart",        en:"2nd Quarter Begins & Start of Enrollment for 2nd Semester", zh:"第二階段開始暨下學期註冊開始" },
  { s:"2026-10-19", e:"2026-10-23", cat:"student",       en:"Anti Bullying & Child Protection Awareness Week", zh:"反霸凌暨兒少保護宣導週" },
  { s:"2026-10-26",                 cat:"holiday",       en:"Retrocession Day", zh:"臺灣光復節", off:true },
  { s:"2026-10-30",                 cat:"institutional", en:"Mass & International Day", zh:"彌撒暨國際日", uniform:true },

  // ---- November 2026 ----
  { s:"2026-11-02",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2026-11-06",                 cat:"curriculum",    en:"Distribution of Report Cards", zh:"發放成績單", key:true },
  { s:"2026-11-07",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", only:["HS"] },
  { s:"2026-11-12", e:"2026-11-13", cat:"student",       en:"Co-Curricular Field Trip", zh:"課外活動校外教學", key:true },
  { s:"2026-11-16", e:"2026-11-20", cat:"student",       en:"Career Awareness Week / MS-HS Career Meetings", zh:"生涯探索週／國高中生涯座談", key:true },
  { s:"2026-11-16", e:"2026-11-20", cat:"parents",       en:"Parent-Teacher Conferences (PTC)", zh:"親師會談", key:true },
  { s:"2026-11-23", e:"2026-11-27", cat:"student",       en:"Literacy Week Celebration", zh:"閱讀週活動" },
  { s:"2026-11-26",                 cat:"institutional", en:"Thanksgiving Mass, Picnic Day, & Book Fair", zh:"感恩節彌撒、野餐日暨書展", uniform:true },

  // ---- December 2026 ----
  // The grid colours Dec 5 as a SAT Weekend but December's written list omits it.
  // It is a real College Board SAT date, so it is kept here and flagged as inferred.
  { s:"2026-12-05",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", inferred:true, only:["HS"] },
  { s:"2026-12-07",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2026-12-11",                 cat:"institutional", en:"Advent Spiritual Recollection, G4 and G5", zh:"將臨期靈修（四、五年級）", uniform:"other-grades", only:["G4","G5"] },
  { s:"2026-12-14", e:"2026-12-16", cat:"exam",          en:"2nd Quarter Examinations", zh:"第二階段考試", key:true },
  { s:"2026-12-16",                 cat:"institutional", en:"Rehearsals", zh:"彩排" },
  { s:"2026-12-17",                 cat:"institutional", en:"Christmas Mass & Parties (AM) · Christmas Concert (PM)", zh:"上午：聖誕彌撒暨聖誕派對／下午：聖誕音樂會", uniform:true },
  { s:"2026-12-18",                 cat:"faculty",       en:"Faculty & Staff Activity (No Students)", zh:"教職員活動（學生不到校）", off:true },
  { s:"2026-12-22", e:"2026-12-31", cat:"holiday",       en:"Christmas / Winter Break", zh:"聖誕節暨寒假", off:true },
  { s:"2026-12-25",                 cat:"holiday",       en:"Christmas Day / Taiwan Constitution Day", zh:"聖誕節／行憲紀念日", off:true },

  // ---- January 2027 ----
  { s:"2027-01-01", e:"2027-01-04", cat:"holiday",       en:"Christmas / Winter Break / New Year", zh:"聖誕寒假／元旦", off:true },
  { s:"2027-01-05",                 cat:"faculty",       en:"Faculty & Staff Activity (No Students)", zh:"教職員活動（學生不到校）", off:true },
  { s:"2027-01-06",                 cat:"qstart",        en:"Third Quarter Begins", zh:"第三階段開始", key:true },
  { s:"2027-01-11",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2027-01-15",                 cat:"curriculum",    en:"Distribution of Cards", zh:"發放成績單", key:true },
  { s:"2027-01-28",                 cat:"curriculum",    en:"Mass for St. Thomas Aquinas · Honors Assembly", zh:"聖多瑪斯・阿奎那彌撒暨榮譽表揚大會", uniform:true },

  // ---- February 2027 ----
  { s:"2027-02-01",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2027-02-03",                 cat:"student",       en:"Lunar / Chinese New Year Celebration", zh:"農曆新年慶祝活動" },
  { s:"2027-02-04", e:"2027-02-10", cat:"holiday",       en:"Lunar / Chinese New Year Break", zh:"農曆新年假期", off:true },
  { s:"2027-02-17", e:"2027-02-19", cat:"student",       en:"MS/HS Camp", zh:"國高中營隊", only:["MS","HS"] },
  { s:"2027-02-24",                 cat:"institutional", en:"Monthly Mass", zh:"每月彌撒", uniform:true },
  { s:"2027-02-26",                 cat:"parents",       en:"Familympics", zh:"親子運動會", key:true },

  // ---- March 2027 ----
  { s:"2027-03-01",                 cat:"holiday",       en:"Peace Memorial Holiday", zh:"和平紀念日", off:true },
  { s:"2027-03-06",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", only:["HS"] },
  { s:"2027-03-08",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2027-03-10", e:"2027-03-12", cat:"exam",          en:"3rd Quarter Examinations", zh:"第三階段考試", key:true },
  { s:"2027-03-15",                 cat:"qstart",        en:"4th Quarter Begins", zh:"第四階段開始" },
  { s:"2027-03-18",                 cat:"institutional", en:"Lenten Spiritual Recollection for MS/HS", zh:"四旬期靈修（國高中）", uniform:"other-grades", only:["MS","HS"] },
  { s:"2027-03-19",                 cat:"faculty",       en:"Faculty & Staff Recollection (No Students)", zh:"教職員靈修（學生不到校）", off:true },
  { s:"2027-03-22", e:"2027-03-26", cat:"holiday",       en:"Holy Week / Spring Break", zh:"聖週／春假", off:true },
  { s:"2027-03-31",                 cat:"institutional", en:"Monthly Mass", zh:"每月彌撒", uniform:true },

  // ---- April 2027 ----
  { s:"2027-04-05", e:"2027-04-06", cat:"holiday",       en:"Tomb Sweeping Day & Children's Day", zh:"清明節暨兒童節", off:true },
  { s:"2027-04-09",                 cat:"student",       en:"Science Fair", zh:"科學展覽" },
  { s:"2027-04-12",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2027-04-12", e:"2027-04-21", cat:"curriculum",    en:"IOWA Assessments", zh:"IOWA 學力測驗", key:true },
  { s:"2027-04-19", e:"2027-04-23", cat:"parents",       en:"Parent-Teacher Conferences (PTC)", zh:"親師會談", key:true },
  { s:"2027-04-22", e:"2027-04-28", cat:"curriculum",    en:"WIDA Assessments", zh:"WIDA 英語能力測驗", key:true },
  { s:"2027-04-29",                 cat:"institutional", en:"Monthly Mass (St. Catherine of Siena)", zh:"每月彌撒（聖加大利納）", uniform:true },
  { s:"2027-04-30",                 cat:"holiday",       en:"Labor Day Holiday", zh:"勞動節", off:true },

  // ---- May 2027 ----
  { s:"2027-05-01",                 cat:"sat",           en:"SAT Weekend", zh:"SAT 考試週末", only:["HS"] },
  { s:"2027-05-03",                 cat:"parents",       en:"VIP Meeting", zh:"VIP 會議" },
  { s:"2027-05-03", e:"2027-05-14", cat:"exam",          en:"AP Examinations", zh:"AP 大學先修考試", key:true, only:["HS"] },
  { s:"2027-05-19", e:"2027-05-21", cat:"exam",          en:"Final Examinations", zh:"期末考", key:true },
  { s:"2027-05-24", e:"2027-05-25", cat:"curriculum",    en:"Performing Arts Culmination", zh:"表演藝術成果發表" },
  { s:"2027-05-26", e:"2027-05-27", cat:"curriculum",    en:"Clearance and Wrapping up Activities", zh:"結業手續暨學期收尾活動" },
  { s:"2027-05-28",                 cat:"institutional", en:"May Crowning & Mother's Day Celebration", zh:"聖母加冕暨母親節慶祝活動", uniform:true },
  { s:"2027-05-28",                 cat:"institutional", en:"Graduation (Kindergarten, G8, & G12) · G5 Promotion", zh:"畢業典禮（幼兒園、八年級、十二年級）暨五年級結業式", uniform:true },
  { s:"2027-05-31",                 cat:"curriculum",    en:"Recognition Day / Last Day of School · Teachers-Staff Activity", zh:"頒獎典禮／最後上課日．教職員活動", uniform:true, key:true },
];
