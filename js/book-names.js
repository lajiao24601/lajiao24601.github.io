var books = [
  { name: "INT", ref: "佤文圣经-00-INT-000.html" },
  { name: "Lai Yam-jauh", ref: "佤文圣经-01-GEN-001.html" },
  { name: "Lai Lih-khaing Ai-cix", ref: "佤文圣经-02-EXO-001.html" },
  { name: "Lai Li-we", ref: "佤文圣经-03-LEV-001.html" },
  { name: "Lai Simin-pui", ref: "佤文圣经-04-NUM-001.html" },
  { name: "Lai Been-ra-bawg", ref: "佤文圣经-05-DEU-001.html" },
  { name: "Lai Yaw-su-yax", ref: "佤文圣经-06-JOS-001.html" },
  { name: "Lai Cao-prawng", ref: "佤文圣经-07-JDG-001.html" },
  { name: "Lai Lu-teux", ref: "佤文圣经-08-RUT-001.html" },
  { name: "Lai Sa-mu-eu Phuk Tix", ref: "佤文圣经-09-1SA-001.html" },
  { name: "Lai Sa-mu-eu Phuk Ra", ref: "佤文圣经-10-2SA-001.html" },
  { name: "Lai Simiang Phuk Tix", ref: "佤文圣经-11-1KI-001.html" },
  { name: "Lai Simiang Phuk Ra", ref: "佤文圣经-12-2KI-001.html" },
  { name: "Lai Grawng Been Phuk Tix", ref: "佤文圣经-13-1CH-001.html" },
  { name: "Lai Grawng Been Phuk Ra", ref: "佤文圣经-14-2CH-001.html" },
  { name: "Lai Yi-see-la", ref: "佤文圣经-15-EZR-001.html" },
  { name: "Lai Ni-si-mi", ref: "佤文圣经-16-NEH-001.html" },
  { name: "Lai Yi-see-thie", ref: "佤文圣经-17-EST-001.html" },
  { name: "Lai Yaw-paw", ref: "佤文圣经-18-JOB-001.html" },
  { name: "Lai Yaog Yaw", ref: "佤文圣经-19-PSA-001.html" },
  { name: "Lai Lox kab", ref: "佤文圣经-20-PRO-001.html" },
  { name: "Lai Sidiex", ref: "佤文圣经-21-ECC-001.html" },
  { name: "Lai Rhax Pa kied Mhawm", ref: "佤文圣经-22-SNG-001.html" },
  { name: "Lai Yi-sai-yax", ref: "佤文圣经-23-ISA-001.html" },
  { name: "Lai Yie-li-mi", ref: "佤文圣经-24-JER-001.html" },
  { name: "Lai Yiiem Doe Yie-li-mi", ref: "佤文圣经-25-LAM-001.html" },
  { name: "Lai Yi-si-ciex", ref: "佤文圣经-26-EZK-001.html" },
  { name: "Lai Tang-yi-li", ref: "佤文圣经-27-DAN-001.html" },
  { name: "Lai Heu-si-a", ref: "佤文圣经-28-HOS-001.html" },
  { name: "Lai Yaw-eux", ref: "佤文圣经-29-JOL-001.html" },
  { name: "Lai A-maw-see", ref: "佤文圣经-30-AMO-001.html" },
  { name: "Lai Eu-pa-ti-yax", ref: "佤文圣经-31-OBA-001.html" },
  { name: "Lai Yaw-na", ref: "佤文圣经-32-JON-001.html" },
  { name: "Lai Mi-cia", ref: "佤文圣经-33-MIC-001.html" },
  { name: "Lai Na-hong", ref: "佤文圣经-34-NAM-001.html" },
  { name: "Lai Ha-pa-kux", ref: "佤文圣经-35-HAB-001.html" },
  { name: "Lai Si-fang-ya", ref: "佤文圣经-36-ZEP-001.html" },
  { name: "Lai Ha-kai", ref: "佤文圣经-37-HAG-001.html" },
  { name: "Lai Sa-cia-li-yax", ref: "佤文圣经-38-ZEC-001.html" },
  { name: "Lai Ma-la-ci", ref: "佤文圣经-39-MAL-001.html" },
  { name: "Lai Ma-thaix", ref: "佤文圣经-40-MAT-001.html" },
  { name: "Lai Ma-kheu", ref: "佤文圣经-41-MRK-001.html" },
  { name: "Lai Lu-cia", ref: "佤文圣经-42-LUK-001.html" },
  { name: "Lai Yaw-hang", ref: "佤文圣经-43-JHN-001.html" },
  { name: "Lai Grawng Pa Yuh Kawn Cau", ref: "佤文圣经-44-ACT-001.html" },
  { name: "Lai Law-ma", ref: "佤文圣经-45-ROM-001.html" },
  { name: "Lai Keu-ling-to Phuk Tix", ref: "佤文圣经-46-1CO-001.html" },
  { name: "Lai Keu-ling-to Phuk Ra", ref: "佤文圣经-47-2CO-001.html" },
  { name: "Lai Cia-la-thaix", ref: "佤文圣经-48-GAL-001.html" },
  { name: "Lai Yi-fu-saw", ref: "佤文圣经-49-EPH-001.html" },
  { name: "Lai Fe-li-pix", ref: "佤文圣经-50-PHP-001.html" },
  { name: "Lai Keu-law-si", ref: "佤文圣经-51-COL-001.html" },
  { name: "Lai Thie-sa-law-ni-cia Phuk Tix", ref: "佤文圣经-52-1TH-001.html" },
  { name: "Lai Thie-sa-law-ni-cia Phuk Ra", ref: "佤文圣经-53-2TH-001.html" },
  { name: "Lai Thi-maw-thaix Phuk Tix", ref: "佤文圣经-54-1TI-001.html" },
  { name: "Lai Thi-maw-thaix Phuk Ra", ref: "佤文圣经-55-2TI-001.html" },
  { name: "Lai Thi-to", ref: "佤文圣经-56-TIT-001.html" },
  { name: "Lai Fe-li-meung", ref: "佤文圣经-57-PHM-001.html" },
  { name: "Lai Si-paw-lai", ref: "佤文圣经-58-HEB-001.html" },
  { name: "Lai Ya-keux", ref: "佤文圣经-59-JAS-001.html" },
  { name: "Lai Pi-teux Phuk Tix", ref: "佤文圣经-60-1PE-001.html" },
  { name: "Lai Pi-teux Phuk Ra", ref: "佤文圣经-61-2PE-001.html" },
  { name: "Lai Yaw-hang Phuk Tix", ref: "佤文圣经-62-1JN-001.html" },
  { name: "Lai Yaw-hang Phuk Ra", ref: "佤文圣经-63-2JN-001.html" },
  { name: "Lai Yaw-hang Phuk Loe", ref: "佤文圣经-64-3JN-001.html" },
  { name: "Lai Yo-tax", ref: "佤文圣经-65-JUD-001.html" },
  { name: "Lai Plak Jhi", ref: "佤文圣经-66-REV-001.html" },
  { name: "BAK", ref: "佤文圣经-00-BAK-000.html" },
  { name: "Wa (jhak ka dee kah kaing lox)", ref: "佤文圣经-00-GLO-000.html" },
  { name: "Baux num phuk lai sigang khri", ref: "佤文圣经-00-XXA-000.html" },
];
