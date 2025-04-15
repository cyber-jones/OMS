using System;
using DrugService.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OMS.DrugService.Utils;

namespace OMS.DrugService.Config;

public class DrugConfig : IEntityTypeConfiguration<DrugModel>
{
    public void Configure(EntityTypeBuilder<DrugModel> builder)
    {
        builder.HasData(new List<DrugModel>()
        {
            new() {
                Drug_Name = "Atorvastatin",
                Manufacturer = "Pfizer Inc.",
                Image =
                "https =//cdn01.pharmeasy.in/dam/products/J21424/atorvastatin-10-mg-tablet-10-medlife-pure-generics-combo-3-1626532296.jpg",
                Description = "Used to lower cholesterol and triglyceride levels.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-1-15",
                Price = 60,
                Side_Effects = "Muscle pain, nausea, headache",
                Disclaimer = "Consult your doctor before use.",
                Category = "HMG-CoA reductase inhibitors, or statins.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Amoxicillin",
                Manufacturer = "GlaxoSmithKline plc",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/332350358/SI/JT/VF/98283251/amoxicillin-drugs3.jpg",
                Description = "Antibiotic used to treat bacterial infections.",
                Consume_Type = "Oral",
                Expiry_Date = "2024-12-01",
                Price = 62,
                Side_Effects = "Diarrhea, rash, nausea.",
                Disclaimer = "Complete the full course as prescribed.",
                Category = "antibiotics",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Lisinopril",
                Manufacturer = "AstraZeneca plc",
                Image =
                "https =//encrypted-tbn0.gstatic.com/images?q=tbn =ANd9GcRquzMUwap3aIcmZQhZ4FOztWQorUZSonP4wg&s",
                Description = "Treats high blood pressure and heart failure.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-06-30",
                Price = 40,
                Side_Effects = "Dizziness, headache, fatigue.",
                Disclaimer = "Monitor blood pressure regularly.",
                Category = "blood pressure ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Metformin",
                Manufacturer = " Merck & Co., Inc.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/332774949/NY/WA/ZJ/6299000/metformin-hydrochloride-tablets.jpeg",
                Description = "Used to control blood sugar levels in type 2 diabetes.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-04-10",
                Price = 31,
                Side_Effects = "Stomach upset, diarrhea, nausea.",
                Disclaimer = "Follow your diet and exercise program.",
                Category = " Diabetes",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Omeprazole",
                Manufacturer = "Novartis AG",
                Image =
                "https =//5.imimg.com/data5/JD/FH/VU/SELLER-5478572/omeprazole-capsules-20mg.jpeg",
                Description = "Treats gastroesophageal reflux disease (GERD).",
                Consume_Type = "Oral",
                Expiry_Date = "2024-09-20",
                Price = 75,
                Side_Effects = "Headache, stomach pain, nausea.",
                Disclaimer = "Do not exceed the recommended dose.",
                Category = "gastroesophageal ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Amlodipine",
                Manufacturer = "Pfizer Inc.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/1/CP/LY/QV/88793954/amlodipine-tablets-ip.jpeg",
                Description = "Used to treat high blood pressure and angina.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-08-15",
                Price = 20,
                Side_Effects = "Swelling, dizziness, fatigue.",
                Disclaimer = "Avoid sudden discontinuation.",
                Category = " blood pressure",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Zolpidem",
                Manufacturer = "Sanofi S.A.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/9/342848763/LR/GK/WN/197293575/zolpidem-10-mg-tablet.jpg",
                Description = "Treats insomnia.",
                Consume_Type = "Oral",
                Expiry_Date = "2024-11-30",
                Price = 70,
                Side_Effects = "Drowsiness, dizziness, diarrhea.",
                Disclaimer = "Use only when you can get a full night's sleep.",
                Category = "Insomnia ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Clonazepam",
                Manufacturer = "F. Hoffmann-La Roche AG",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2021/5/CR/QB/QR/3184985/clonvul0-5.jpg",
                Description = "Used to treat seizure and panic disorders.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-05-10",
                Price = 350,
                Side_Effects = "Drowsiness, dizziness, fatigue.",
                Disclaimer = "May be habit-forming, use as prescribed.",
                Category = "depression ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Montelukast",
                Manufacturer = "Merck & Co., Inc.",
                Image =
                "https =//www.glamrisdermacare.com/wp-content/uploads/2021/08/0000s_0006_BILAZIL-M-min.jpg",
                Description = "Used to treat allergies and prevent asthma attacks.",
                Consume_Type = "Oral",
                Expiry_Date = "2024-12-05",
                Price = 150,
                Side_Effects = "Headache, stomach pain, cough.",
                Disclaimer = "Not for use in an acute asthma attack",
                Category = "allergy ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Gabapentin",
                Manufacturer = "Pfizer Inc.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/5/311267943/ZR/MT/QJ/69086821/gabapentin-100mg-tablet-500x500.jpg",
                Description = " Used to treat nerve pain and seizures.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-07-25",
                Price = 131,
                Side_Effects = "Dizziness, drowsiness, coordination problems.",
                Disclaimer = "Avoid alcohol while taking this medication.",
                Category = "anticonvulsants",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Albuterol",
                Manufacturer = "Teva Pharmaceutical Industries Ltd.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/337313153/HK/FV/II/57623134/buy-albuterol-hfa-90-mcg-inhaler-online.jpg",
                Description = "Used to treat bronchospasm.",
                Consume_Type = "Inhalation",
                Expiry_Date = "2024-10-10",
                Price = 34,
                Side_Effects = "Nervousness, shaking, headache.",
                Disclaimer = " Use only as prescribed by your doctor.",
                Category = "Inhaler",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Loratadine",
                Manufacturer = "Bayer AG",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/332709645/ER/VU/LD/6299000/loratadine-10-mg-tablets.jpeg",
                Description = "Antihistamine used to relieve allergy symptoms.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-03-01",
                Price = 62,
                Side_Effects = " Dry mouth, headache, drowsiness.",
                Disclaimer = " Do not exceed the recommended dose.",
                Category = " Antihistamine",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Ibuprofen",
                Manufacturer = " Johnson & Johnson",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg",
                Description = "Used to reduce fever and treat pain or inflammation.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-09-15",
                Price = 70,
                Side_Effects = "Stomach pain, heartburn, nausea.",
                Disclaimer = "Do not exceed the recommended dose.",
                Category = " inflammatory",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Warfarin",
                Manufacturer = "Bristol-Myers Squibb Company",
                Image = "https =//www.careformulationlabs.com/uploaded_files/warfarin-5.png",
                Description = "Used to prevent blood clots.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-02-28",
                Price = 71,
                Side_Effects = "Bleeding, bruising, nausea.",
                Disclaimer = "Regular blood tests are required.",
                Category = "blood pressure",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            }, 
            new() {
                Drug_Name = "Cetirizine",
                Manufacturer = "UCB S.A.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/5/311971664/FU/KT/PV/11858298/cetirizine-tablet.webp",
                Description = "Antihistamine used to treat allergy symptoms.",
                Consume_Type = "Oral",
                Expiry_Date = " 2025-05-15",
                Price = 26,
                Side_Effects = "Drowsiness, dry mouth, fatigue.",
                Disclaimer = "Do not use machinery if drowsy.",
                Category = "Antihistamine",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Sertraline",
                Manufacturer = " Pfizer Inc.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/337366367/KI/RJ/BA/7034457/sertraline-100-mg-tablets.jpg",
                Description = "Antidepressant used to treat depression and anxiety.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-06-10",
                Price = 260,
                Side_Effects = "Nausea, insomnia, dry mouth.",
                Disclaimer = "May take several weeks to feel the full benefit.",
                Category = "depression",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Tramadol",
                Manufacturer = " Janssen Pharmaceuticals",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/331683629/YW/EW/FV/1359917/tramadol-hydrochloride-paracetamol-tablets.jpg",
                Description = " Used to treat moderate to severe pain.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-08-20",
                Price = 17,
                Side_Effects = "Dizziness, nausea, constipation.",
                Disclaimer = "Can be habit-forming, use only as prescribed.",
                Category = "Pain Killer ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Tamsulosin",
                Manufacturer = " Boehringer Ingelheim GmbH",
                Image =
                "https =//5.imimg.com/data5/GLADMIN/Default/2024/1/382027832/MW/YF/DV/37869803/tamsulosin-hydrochloride-tablet.png",
                Description = "Used to treat symptoms of an enlarged prostate.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-04-05",
                Price = 85,
                Side_Effects = "Dizziness, headache, runny nose.",
                Disclaimer = " Take 30 minutes after the same meal each day.",
                Category = " Gynaecology",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Oxycodone",
                Manufacturer = " Purdue Pharma L.P.",
                Image =
                "https =//tajgenerics.com/wp-content/uploads/cache/images/Oxycodone_7_5mg__Acetaminophen_375mg_Tablet_Exporters-scaled/Oxycodone_7_5mg__Acetaminophen_375mg_Tablet_Exporters-scaled-3481289551.jpg",
                Description = "Used to treat moderate to severe pain.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-07-30",
                Price = 230,
                Side_Effects = "Nausea, drowsiness, constipation.",
                Disclaimer = "High potential for abuse, use as prescribed.",
                Category = "Pain Killer",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Prednisone",
                Manufacturer = " Mylan N.V.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2022/12/CE/BE/CW/23808697/prednisone-500x500.JPG",
                Description = "Corticosteroid used to treat inflammation.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-09-01",
                Price = 12,
                Side_Effects = "Insomnia, mood changes, weight gain.",
                Disclaimer = " Do not stop taking abruptly.",
                Category = "corticosteroid",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Fluoxetine",
                Manufacturer = "Eli Lilly and Company",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2022/9/GN/LY/IE/154048565/fluoxetine-10mg-tablet.png",
                Description = " Antidepressant used to treat depression and OCD.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-10-10",
                Price = 442,
                Side_Effects = "Nausea, drowsiness, insomnia.",
                Disclaimer = "May take several weeks to feel the full effect.",
                Category = " depression",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Metoprolol",
                Manufacturer = " AstraZeneca plc",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2022/11/UO/RS/FG/161638739/metoprolol-tartrate-50-mg.jpg",
                Description = " Used to treat high blood pressure and angina.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-02-15",
                Price = 48,
                Side_Effects = "Dizziness, tiredness, depression.",
                Disclaimer = " Do not stop taking abruptly",
                Category = " blood pressure",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Furosemide",
                Manufacturer = " Sanofi S.A.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/8/333795220/XM/UX/IJ/6299000/furosemide-tablet.jpeg",
                Description = "Diuretic used to treat fluid retention and swelling.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-05-25",
                Price = 14,
                Side_Effects = "Dehydration, electrolyte imbalance, dizziness.",
                Disclaimer = "Monitor electrolyte levels regularly.",
                Category = " oop diuretics",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Duloxetine",
                Manufacturer = "Eli Lilly and Company",
                Image =
                "https =//5.imimg.com/data5/AL/LG/MY-6299000/duloxetine-30-mg-capsules.jpg",
                Description = "Used to treat depression and anxiety.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-11-05",
                Price = 100,
                Side_Effects = "Nausea, dry mouth, drowsiness.",
                Disclaimer = "May take several weeks to feel the full effect.",
                Category = "depression ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Simvastatin",
                Manufacturer = " Merck & Co., Inc.",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/10/357085613/HL/RR/GE/50963842/simvastatin-tablet-ups-20-mg.jpg",
                Description = "Used to lower cholesterol and triglycerides.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-08-10",
                Price = 100,
                Side_Effects = "Muscle pain, headache, nausea.",
                Disclaimer = "Follow a cholesterol-lowering diet plan.",
                Category = "cholesterol ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Losartan",
                Manufacturer = " Bayer AG",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/12/373066330/IL/GL/IT/180648134/losartan-potassium-tablets-ip-500x500.jpg",
                Description = "Used to treat high blood pressure.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-01-25",
                Price = 38,
                Side_Effects = "Dizziness, back pain, nasal congestion.",
                Disclaimer = "Monitor blood pressure regularly.",
                Category = "blood pressure ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Clopidogrel",
                Manufacturer = " Sanofi S.A",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/3/293106006/NJ/NS/EB/29765627/clopidogrel-75mg-aspirin-75mg-tab-500x500.jpg",
                Description = "Used to prevent blood clots.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-03-20",
                Price = 54,
                Side_Effects = "Bleeding, bruising, headache.",
                Disclaimer = "Regular blood tests are required.",
                Category = "antiplatelet",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Hydrocodone",
                Manufacturer = " AbbVie Inc.",
                Image =
                "https =//t4.ftcdn.net/jpg/02/93/25/13/360_F_293251390_jBCMpaDN1V1ipxcqpthTt3yikZPAZMr8.jpg",
                Description = "Used to treat severe pain.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-07-05",
                Price = 259,
                Side_Effects = " Nausea, drowsiness, constipation.",
                Disclaimer = "High potential for abuse, use as prescribed.",
                Category = "Pain killer ",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Trazodone",
                Manufacturer = " Teva Pharmaceutical Industries Ltd.",
                Image =
                "https =//c8.alamy.com/comp/GJ7J4D/molipaxin-100mg-capsules-antidepresant-trazodone-hydrochloride-GJ7J4D.jpg",
                Description = " Antidepressant used to treat depression and insomnia.",
                Consume_Type = "Oral",
                Expiry_Date = "2025-06-15",
                Price = 185,
                Side_Effects = " Drowsiness, dry mouth, dizziness.",
                Disclaimer = "May take several weeks to feel the full effect.",
                Category = " Depression",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            new() {
                Drug_Name = "Ranitidine",
                Manufacturer = "GlaxoSmithKline plc",
                Image =
                "https =//wellonapharma.com/admincms/product_img/product_actual_img/Ranitidine%20Tablets_27-01-2017-08 =47 =41.jpg",
                Description = "Used to reduce stomach acid and treat ulcers.",
                Consume_Type = "Oral",
                Expiry_Date = "2024-12-20",
                Price = 30,
                Side_Effects = " Headache, constipation, nausea.",
                Disclaimer = "Use as directed by your doctor.",
                Category = " H2 blockers",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN
            },
            // ------ Dermatology  ------- \\
            new() {
                Image =
                "https =//tiimg.tistatic.com/fp/1/006/419/tazarotene-cream-0-1--641.jpg",
                Drug_Name = "Tazarotene",
                Description = "This medication is a retinoid, prescribed for psoriasis and acne. It may decrease skin inflammation and skin changes associated with psoriasis.",
                Consume_Type = "Adult = Topical- As 0.05 or 0.1% cream/gel = Apply once in the evening.",
                Side_Effects = "Ski_D = Itching, burning/stinging, redness, skin peeling, irritation, worsening of psoriasis, rash, dry skin, bleeding, localized swelling, high cholesterol levels, desquamation, contact dermatitis, discoloration of skin and photosensitivity.",
                Price = 420,
                Expiry_Date = "2025-02-02",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image = "https =//i.postimg.cc/D0VJ7Lr1/iso.jpg",
                Drug_Name = "Isotretinoin ",
                Description =
                 "This medication is a retinoid, prescribed for acne and other skin disorders. It reduces skin oil production, changing the characteristics of the skin oil, and preventing abnormal hardening of the skin.",
                Consume_Type =
                "Adult- PO- The recommended dose range is 0.5 to 1.0 mg/kg/day given in two divided doses with food for 15 to 20 weeks.",
                Side_Effects = "Allergic reactions, fast heart rate and stroke.",
                Price =299,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image = "https =//i.postimg.cc/JhvtQZdS/mino.png",
                Drug_Name = "Minocycline",
                Description =
                "Minocycline is a broad spectrum tetracycline antibiotic. It acts by inhibiting the growth of bacteria in the body, It may be effective in other infections as well, however several bacteria have developed resistance to the drug, It may be used in patients who are allergic to the penicillin group of drugs as an alternative.",
                Consume_Type =
                "Children over 12 years = 50mg every 12 hours, Adults The usual  dosage is 100 mg every 12 hours. The  dosage and duration varies according to the type of infection.For local use in the gums, the dose is 1mg given beneath the gums.",
                Side_Effects =
                "Los_D of appetite, nausea, vomiting, diarrhea, indigestion, mouth ulcer, discoloration of the tongue and difficulty in swallowing.",
                Price = 300,
                Expiry_Date = "2025-02-02",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image = "https =//i.postimg.cc/L6x9TjJv/calamine.jpg",
                Drug_Name = "Calamine Lotion",
                Description =
                "This medication is an anti-itch medication that contains mixture of zinc oxide (ZnO) with about 0.5% iron (III) oxide, prescribed for itching skin conditions. This medication in some cases is used as a mild antiseptic to arrest infections caused by scratching the affected area. Calamine is proved to be an effective medication in acne treatment.",
                Consume_Type = "Adult = Topical- Apply 1-4 times/day.",
                Side_Effects = "Rash or irritation.",
                Price = 240,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image = "https =//i.postimg.cc/K8K2DwSv/dim.jpg",
                Drug_Name = "Dimethicone",
                Description =
                "This medication is an emollient, prescribed for pediculosis, and other skin conditions.",
                Consume_Type = "Apply as directed by Physician",
                Side_Effects =
                "Rare_ly, redness, pain and irritation at the site of application.",
                Price = 220,
                Expiry_Date = "2024-12-20",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image = "https =//i.postimg.cc/90x6GtL7/ss.jpg",
                Drug_Name = "Sucralfate",
                Description =
                "This medication is a gastric protective agent, prescribed for intestinal ulcers.",
                Consume_Type =
                 "Adult- PO- The recommended  dosage for duodenal ulcer is 1 g four times per day on an empty stomach.",
                Side_Effects =
                 "Dia_Drhea, nausea, vomiting, gastric discomfort, indigestion, flatulence and dry mouth, Itching and rash, Dizziness, sleeplessness, sleepiness and unsteadiness,Back pain and headache.",
                Price = 190,
                Expiry_Date = "2025-02-02",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image = "https =//i.postimg.cc/WbgzwdMH/adap.jpg",
                Drug_Name = "Adapalene",
                Description =
                 "Adapalene is a topical retinoid-like compound used to treat mild to moderate acne by preventing the formation of pimples acting deeply in the source.It also prevents the formation of new() acne by restoring skin texture and tone.",
                Consume_Type =
                 "Topical- A thin film of gel should be applied once a day to affected areas after washing the skin.",
                Side_Effects =
                 "A b_Dief sensation of warmth or stinging may occur immediately after applying the medication, redness, dryness, itching of the skin and scaling, mild burning, or worsening of acne may occur during the first 2-4 weeks of using the medication.",
                Price = 320,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },

            new() {
                Image = "https =//i.postimg.cc/NjNxBC5T/nad.png",
                Drug_Name = "Nadifloxacin",
                Description =
                 "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
                Consume_Type =
                 "Topical- Apply a thin layer to the affected area as directed by your physician.",
                Side_Effects =
                 "Itc_Ding, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
                Price = 285,
                Expiry_Date = "2025-02-02",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },

            new() {
                Image = "https =//i.postimg.cc/nhMDYFhj/oxy.jpg",
                Drug_Name = "Oxytetracycline",
                Description =
                 "This medication is an antibiotic, prescribed for various infections such as acne, dermatitis, gonorrhea, etc.",
                Consume_Type =
                 "PO- The recommended dose range is 250 to 1.5gm in divided doses.Topical-Apply a thin layer over the affected skin 4 times per day.",
                Side_Effects =
                 "Los_D of appetite, nausea, vomiting, diarrhea, tongue inflammation, difficulty in swallowing and inflammatory lesions.",
                Price = 225,
                Expiry_Date = "2025-02-02",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            new() {
                Image =
                "https =//5.imimg.com/data5/FY/GY/MY-39084219/nadifloxacin-cream-500x500.jpg",
                Drug_Name = "Nadifloxacin",
                Description =
                 "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
                Consume_Type = "as directed by your physician.",
                Side_Effects =
                 "Itch_ing, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
                Price = 200,
                Expiry_Date = "2024-12-20",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dermatology",
            },
            // ------ Dermatology End ------- \\
            // ------ Diabetes ------- \\
            new() {
                Image =
                "https =//www.empr.com/wp-content/uploads/sites/7/2018/12/ac752944889a4c6494dae4f478ea8237-nesina_405478.jpg",
                Drug_Name = "Alogliptin",
                Description =
                 "Alogliptin is prescribed to reduce high blood sugar level in patients with type 2 diabetes along with diet control and exercise.It should not be used in treating diabetic ketoacidosis or type 1 diabetes.  ",
                Consume_Type =
                 "PO - The initial dose is based on patient's condition. Maximum recommended dose is 25/2000mg.",
                Side_Effects =
                 "Upp_Dr respiratory tract infection, heart attack, throat inflammation, diarrhea, high blood pressure, headache, back pain and urinary tract infection.",
                Price = 405,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//5.imimg.com/data5/ZJ/FV/VB/SELLER-104814248/alogliptin-500x500.jpg",
                Drug_Name = "Alogliptin and Metformin",
                Description =
                 "Alogliptin and Metformin combination is used along with diet and exercise to improve blood sugar control or to treat hyperglycemia in patients with type 2 diabetes.High blood sugar level can cause damage to the eyes, kidney, and nerves.This combination medication contains alogliptin, a dipeptidyl-peptidase-4 (DPP-4) inhibitor and metformin, a biguanide.",
                Consume_Type = "(125mg/500mg)- Dose is based on patientâ€™s condition.",
                Side_Effects =
                "Lact_ic Acidosis and pancreatitis.Most Common = Upper respiratory tract infection, nasopharyngitis, diarrhea, hypertension, headache, back pain and urinary tract infection.",
                Price = 500,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },  
            new() {
                Image =
                "https =//www.empr.com/wp-content/uploads/sites/7/2018/12/5a26069609d944038725ae95e761a5f1-oseni_405485.jpg",
                Drug_Name = "Alogliptin and Pioglitazone",
                Description =
                 "Alogliptin and Pioglitazone combination is used to treat high blood sugar level in patients with type 2 diabetes along with diet control and exercise. This combination should not be used to treat type 1 diabetes.This combination medication contains pioglitazone, a thiazolidinedione agent and alogliptin, a DPP-4 inhibitor.",
                Consume_Type =
                 "Dose is based on patientâ€™s condition. Maximum recommended dose is 25/45mg.",
                Side_Effects =
                 "Inf_Dammation of throat and nasal passages, back pain and upper respiratory tract infection.",
                Price = 450,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//5.imimg.com/data5/MR/OX/MY-18174683/sulisent-28canagliflozin-100mg-29-tablet-500x500.jpg",
                Drug_Name = "Canagliflozin",
                Description =
                 "This medication is an antidiabetic (sodium glucose co-transporter 2 (SGLT2) inhibitor), prescribed for type 2 diabetes mellitus along with diet and exercise. For patients with type 2 diabetes along with diabetic kidney disease, physicians should consider using an SGLT2 inhibitor when the eGFR is at or above 30, especially with albuminuria above 300 mg/g, to lower renal and CV risk as per A.D.A recommendations.",
                Consume_Type = "PO- The recommended initial dose is 100 mg once daily.",
                Side_Effects =
                "Fema_le genital mycotic infections, urinary tract infection and increased urination.",
                Price = 298,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//encrypted-tbn0.gstatic.com/images?q=tbn =ANd9GcSKl6UBEBhkp0cUc7ciO3VVRoBjtAf7cA-QPOTggzDmit4AYegpA3mcl9haEtf6nfB5diw&usqp=CAU",
                Drug_Name = "Diabinese",
                Description =
                 "This medication is a sulfonylurea antidiabetic drug, prescribed for type 2 diabetes. This medication helps to keep blood sugar levels under control.",
                Consume_Type =
                 "PO- The recommended initial dose is 250mg/day. It may be adjusted based on patientâ€™s condition.",
                Side_Effects =
                 "Bod_D as a Whole  = Low blood sugar, Disulfiram-like,Central Nervous System  = Dizziness and headache, Gastrointestinal  = Diarrhea, nausea, vomiting, loss of appetite and hunger, Liver  = Jaundice, Skin  = Itching and hives, Blood  = Anemia and decrease in blood counts.",
                Price = 345,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//www.prestoimages.net/store30/rd14324/14324_pd3794145_1_.jpg",
                Drug_Name = "Colesevelam HCL",
                Description =
                 "This medication is a bile acid sequestrant, prescribed for familial hypercholesterolesmia and type 2 diabetes with other medications.",
                Consume_Type =
                 "For hypercholesterolesmia- The recommended dose is one 3.75-gram packet once daily or one 1.875-gram packet twice daily.For Type 2 Diabetes- The recommended dose is 6 tablets once daily or 3 tablets twice daily.",
                Side_Effects =
                 "Hea_Dache, fatigue, increased level of liver enzyme, runny nose, vomiting, constipation, indigestion, difficulty in swallowinglow blood sugar, nausea and high blood pressure..",
                Price = 400,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//emedz.net/blog/wp-content/uploads/2020/01/Steglatro-ertugliflozin-696x484.jpg",
                Drug_Name = "Steglatro",
                Description =
                 "Ertugliflozin tablet is a sodium glucose co-transporter 2 (SGLT2) inhibitor which is prescribed for adult patients with type 2 diabetes as an adjunct therapy to diet control and exercise with a focus to improve glycemic control.It is prescribed either as a monotherapy or in combination with metformin or sitagliptin.  ",
                Consume_Type =
                 "The recommended initial dose of ertugliflozin tablets is 5 mg to be taken once a day.The dose of ertugliflozin can be increased to 15 mg once daily to achieve adequate glycemic control",
                Side_Effects =
                 "Com_Don = Frequent urination, low blood sugar level, genital fungal infections, Gastrointestinal = Nausea, pain in the stomach, vomiting, Cardiovascular = Low blood volume, low blood pressure, faster heartbeat, increased LDL-cholesterol level in blood, Nervous system = Confusion, dizziness, headache, irritability, weakness, Respiratory = Difficulty in breathing, nasopharyngitis, Kidney = Urinary tract infections (pyelonephritis, urosepsis or bladder infections), pain or burning sensation while passing urine, blood in urine, reduced kidney function, Others = Foot ulcers or sores, fever, pain or tenderness in the lower limbs, pain in the back, reduced weight, increased thirst",
                Price = 500,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2021/2/KR/IZ/EH/123113767/byetta-10mcg-500x500.jpg",
                Drug_Name = "Byetta",
                Description =
                 "This medication is a incretin mimetic, prescribed for type 2 diabetes with diet and exercise, either alone or with other medications. For patients with chronic kidney disease who are at elevated risk for CV events, a glucagon-like peptide 1 receptor agonist may lower risk for albuminuria progression and/or CV events, according to new() (2019)recommendations of The American Diabetes Association It works by stimulating the pancreas to secrete insulin in hyperglycemic condition.  ",
                Consume_Type =
                 "Adult- The initial dose is 5 mcg injected under the skin (subcutaneously) twice daily, 60 minutes before breakfast or dinner.",
                Side_Effects =
                 "Mos_D Common = Nausea.Central Nervous System = Dizziness or lightheadedness, nervousness, mood changes, weakness, shakiness, confusion, epilepsy and loss of consciousness.Gastrointestinal = Extreme thirst, extreme hunger, stomach upset, vomiting, diarrhea and difficulty in swallowing. Skin = Rash, hives and itching. Allergic reactions = Swelling of the face, throat, tongue, lips, eyes, hands, feet, ankles, or lower legs and difficulty in breathing.",
                Price = 395,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            new() {
                Image =
                "https =//5.imimg.com/data5/QY/WA/MY-29865653/glibenclamide-tablets-500x500.jpg",
                Drug_Name = "Glibenclamide",
                Description =
                 "TGlibenclamide is an oral hypoglycemic (glucose lowering) drug used to control blood sugar levels in patients with type 2 diabetes in addition to diet and exercise.It belongs to the chemical group of sulfonylureas",
                Consume_Type =
                 "The treatment is started with a low dose of 2.5 mg per day, and increased up to a maximum of 20 mg per day according to the blood glucose levels.",
                Side_Effects =
                 "Dig_Dstive tract = Nausea, vomiting, flatulence, abdominal fullness, diarrhea, constipation, heartburn, liver dysfunction, Skin = Rash, skin swelling, photosensitivity reactions (skin reactions following exposure to sunlight) including porphyria cutanea tarda (which is associated with an enzyme deficiency, Blood = Low blood counts, low blood glucose levels, low blood sodium levels, Others = Tiredness, weakness, fever, other allergic reactions, weight gain, joint or muscle pain.",
                Price = 456,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Diabetes",
            },
            // // ------ Diabetes End------- \\
            // // ------- Depression ------- \\

            new() {
                Image = "https =//i.postimg.cc/Z5Y1wQGy/Ademetionine.jpg",
                Drug_Name = "Ademetionine",
                Description =
                 "Ademetionine is used for treating chronic liver disease such as intrahepatic cholestasis.",
                Consume_Type = " Oral = 400-1600 mg per day",
                Side_Effects =
                 "Nerv_ous system disorders = Headache, insomnia, dizziness, nervousness",
                Price = 345,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Depression",
            },
            new() {
                Image = "https =//i.postimg.cc/KYkpVhJ4/Alprazolam.jpg",
                Drug_Name = "Alprazolam",
                Description =
                 "This medication is a benzodiazepine, prescribed for anxiety and panic disorders.",
                Consume_Type =
                 "The starting dose for treating anxiety is 0.25-0.5 mg, 3 times daily using immediate release tablets.",
                Side_Effects =
                 "Gas_Drointestinal  = Dry mouth, constipation, diarrhea, nausea/vomiting and increased salivation.",
                Price = 765,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Depression",
            },

            new() {
                Image = "https =//i.postimg.cc/TYtk33sp/Amitriptyline.jpg",
                Drug_Name = "Amitriptyline",
                Description =
                 "This medication is a tricyclic antidepressant, prescribed for depression.",
                Consume_Type =
                 "Adult = PO- Depression- Initial =50-75 mg/day; up to 150 mg/day if needed.",
                Side_Effects =
                 "All_Drgic  = Skin rash, hives, photosensitivity, swelling of the face and tongue.",
                Price = 987,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Depression",
            },
            // ------- Dental  ------- \\
            new() {
                Image = "https =//i.postimg.cc/nrDHcWFL/Chlorhexidine.jpg",
                Drug_Name = "Chlorhexidine",
                Description =
                 "This medication is a chemical antiseptic, prescribed for gingivitis, cleansing skin and wound areas.",
                Consume_Type = "As 0.2% solution = Rinse with 10 ml for 1 min 2-3 times/day.",
                Side_Effects =
                 "Skin_ sensitivity, irritation of eye, mucosal irritation and staining of the teeth and tongue.",
                Price = 300,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dental",
            },
            new() {
                Image = "https =//i.postimg.cc/W4ztcXkd/Feracrylum.jpg",
                Drug_Name = "Feracrylum",
                Description =
                 "Feracrylum is used as a hemostatic (to stop bleeding) and an anti-septic for the management of post-operative wounds, cuts.",
                Consume_Type =
                 "Feracrylum is available as a 1% sterile solution (1% w/v feracrylum), as 50 and 15 gm gel tubes (1% w/w feracrylum) and tulle ( 3% w/v feracrylum).",
                Side_Effects = "Gastrointestinal = Nausea, stomach pain.",
                Price = 620,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dental",
            },
            new() {
                Image = "https =//i.postimg.cc/FH7Q9qTX/Gensparin.jpg",
                Drug_Name = "Gensparin",
                Description =
                 "Gensparin prevents the formation of blood clots and is hence used for the treatment of thrombolytic disorders.",
                Consume_Type = "The recommended dose of the drug is 20mg/0.2ml injection.",
                Side_Effects = " Skin = Rashes, pale skin, clots at the puncture site.",
                Price = 854,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dental",
            },
            new() {    
                Image = "https =//i.postimg.cc/3r1M276H/Multivitamin.jpg",
                Drug_Name = "Multivitamin",
                Description =
                 "This medication is an essential nutrient, prescribed for patients with vitamin deficiency.  Normally provided in combination with dietary minerals.",
                Consume_Type = "Dose is based on patientâ€™s condition.",
                Side_Effects = "Slight nausea and unpleasant taste.",
                Price = 790,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Dental",
            },
             // ------- Dental End ------- \\
             //_ -_---- Fracture ------ \\
            new() {
                Image = "https =//i.postimg.cc/MGStsfM3/Abaloparatide.jpg",
                Drug_Name = "Abaloparatide",
                Description =
                 "Abaloparatide is prescribed to treat osteoporosis in postmenopausal women who are at a high risk for fracture.",
                Consume_Type =
                 " The recommended adult dose is 80 mcg to be given subcutaneously (just under the skin) once a day",
                Side_Effects =
                 "â€¢_D Gastrointestinal = Nausea, pain in upper abdominal area, constipation, upset stomach.",
                Price = 350,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Fracture",
            },

            new() {
                Image = "https =//i.postimg.cc/C5XsbRpN/Aspirin-and-Oxycodone.jpg",
                Drug_Name = "Aspirin and Oxycodone ",
                Description =
                 "This combination medication is used to relieve moderate to severe pain.",
                Consume_Type =
                 "The usual dosage is one tablet every 6 hours as needed for pain.",
                Side_Effects =
                 " Mo_Dt common  = Lightheadedness, dizziness, drowsiness or sedation, nausea and vomiting.",
                Price = 705,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Fracture",
            },

            new() {
                Image = "https =//i.postimg.cc/g0syNSPr/Metamizole.jpg",
                Drug_Name = "Metamizole",
                Description =
                 "Metamizole is a painkiller used for the treatment of fever, headache, toothache, postoperative pain and other painful conditions.",
                Consume_Type =
                 "The recommended oral adult dose for metamizole is 500 mg 3-4 times up to a maximum dose of 4000 mg/day.",
                Side_Effects = "Skin = Severe skin reactions like toxic epidermal necrolysis",
                Price = 432,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Fracture",
            },
            // ----- Fracture End ----- \\
            // // ------- Women Care ----- \\
            new() {
                Image =
                "https =//new()assets.apollo247.com/pub/media/catalog/product/s/u/sus0048.jpg",
                Drug_Name = "Progesterone",
                Description =
                 "This medication is a hormone, prescribed for replacement therapy in women who have passed menopause. It is also used to prevent uterine cancer.",
                Consume_Type = "Adult- The recommended dose range is 25 to 400 mg/day.",
                Side_Effects =
                "Gast_rointestinal  = Abdominal pain, nausea, vomiting, abdominal distension and constipation. General  = Fatigue. Central Nervous System  = Headache.urinary tract infections.",
                Price = 285,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Women Care",
            },
            new() {
                Image = "https =//i.postimg.cc/rpZgNVWK/de.jpg",
                Drug_Name = "Dehydroepiandrosterone",
                Description =
                 "Adrenal insufficiency, where the adrenal gland does not produce enough hormones, To improve aging skin, Depression",
                Consume_Type =
                 "The dose varies according to the condition.The usual recommended oral dose for dehydroepiandrosterone is 50 to 75 mg/day. Higher doses of 50 mg three times a day have been used for adrenal insufficiency.",
                Side_Effects = "Changes in blood pressure, reduced HDL cholesterol levels",
                Price = 420,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Women Care",
            },
            new() {
                Image = "https =//i.postimg.cc/8zB0Mgt6/es.jpg",
                Drug_Name = "Estrogen",
                Manufacturer = " Bayer AG",
                Description =
                "This medication is prescribed for severe vasomotor symptoms due to menopause, ovarian failure, osteoporosis, uterine bleeding, delayed puberty and prostate cancer.",
                Consume_Type = "Adult- IV/IM/PO = The recommended dose range is 0.3 to 25mg.",
                Side_Effects =
                 "Gas_Drointestinal  = Stomach upset, vomiting, heartburn, constipation, diarrhea and gas. Central Nervous System  = Nervousness, depression, dizziness, tight muscles, weakness, tingling and movement disorders. Metabolic  = Weight gain or loss and loss of appetite. Skin  = Hair loss, unwanted hair growth and darkening of the skin, Musculoskeletal  = Leg cramps and joint pain. Allergic Reactions  = Rash, blisters, hives, itching, swelling of the eyes, face, tongue, throat, hands, arms, feet, ankles or lower legs, hoarseness, difficulty in breathing or swallowing. Miscellaneous  = Sore throat, fever, chills, cough and other signs of infection.",
                Price = 320,
                Expiry_Date = "2025-12-23",
                Disclaimer = "Use as directed by your doctor.",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
                Category = "Women Care",
            },
            new() {
                Drug_Name = "Skin Rejuvenation Cream",
                Manufacturer = "BeautyCo",
                Image =
                "https =//rukminim2.flixcart.com/image/750/900/xif0q/fairness/i/1/y/50-skin-rejuvenation-night-cream-50g-1-staylesta-original-imagtd7z2z5fzhg9.jpeg?q=20&crop=false",
                Description =
                "A lu_xurious cream that rejuvenates and hydrates your skin, giving it a youthful glow.",
                Expiry_Date = "2025-05-20",
                Price = 407,
                Side_Effects = "May cause mild irritation in sensitive skin.",
                Disclaimer =
                "Consult with a dermatologist before use if you have sensitive skin.",
                Category = "women care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Whisper Choice Ultra-Thin Pads",
                Manufacturer = "Whisper",
                Image =
                "https =//www.quickpantry.in/cdn/shop/products/whisper-choice-ultra-sanitary-pads-extra-long-xl-6-pads-quick-pantry_512x520.jpg?v=1710538389",
                Description =
                "Supe_r absorbent ultra-thin pads for all-day comfort and protection.",
                Expiry_Date = "2025-06-30",
                Price = 49,
                Side_Effects = "None reported. If irritation occurs, discontinue use.",
                Disclaimer = "Always read the label. Use only as directed.",
                Category = "women care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Sofy Bodyfit Overnight Pads",
                Manufacturer = "ComfortPlus",
                Image =
                "https =//www.bigbasket.com/media/uploads/p/xl/40023141_3-sofy-bodyfit-overnight-pads-xxxl.jpg",
                Description =
                 "Desi_gned for maximum absorbency and comfort during the night.",
                Expiry_Date = "2025-12-31",
                Price = 78,
                Side_Effects = "None reported. If irritation occurs, discontinue use.",
                Disclaimer = "Always read the label. Use only as directed.",
                Category = "women care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Preganew()s",
                Manufacturer = "Mankind Pharma",
                Image =
                "https =//www.netmeds.com/images/product-v1/600x600/108125/prega_new()s_card_device_1s_36927_0_2.jpg",
                Description =
                "Preg_anew()s is a pregnancy test kit that provides accurate results in just 5 minutes.",
                Expiry_Date = "2025-12-31",
                Price = 60,
                Side_Effects = "No known side effects when used as directed.",
                Disclaimer =
                "This product is not a substitute for professional medical advice. Consult a healthcare provider for any health-related questions.",
                Category = "women care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "V Wash",
                Manufacturer = "CleanCare",
                Image =
                "https =//m.media-amazon.com/images/I/614EkRctkGL._AC_UF350,350_QL80_.jpg",
                Description =
                "Gent_le feminine wash with natural ingredients for daily hygiene.",
                Expiry_Date = "2024-11-15",
                Price = 114,
                Side_Effects = "Mild irritation may occur for sensitive skin.",
                Disclaimer = "For external use only. Discontinue use if irritation occurs.",
                Category = "women care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },

            // ------- Women Care End ----- \\
            // -------PERSONAL CARE ---------\\
            new() {
                Drug_Name = "Herbal Hair Oil",
                Manufacturer = "Nature's Essence",
                Image =
                "https =//www.araahskinmiracle.com/wp-content/uploads/2022/10/main-1l-hair.jpg.webp",
                Description =
                 "An a_ll-natural herbal oil that promotes hair growth and reduces hair fall.",
                Expiry_Date = "2024-12-15",
                Price = 999,
                Side_Effects = "Avoid contact with eyes; may cause eye irritation.",
                Disclaimer = "For external use only. Keep out of reach of children.",
                Category = "personal care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Vaseline Sun Protection SPF 30 Body Lotion",
                Manufacturer = "EcoBeauty",
                Image =
                "https =//images-static.nykaa.com/media/catalog/product/6/c/6c1a17cVASEL00000100_1.jpg?tr=w-500",
                Description =
                 "A de_eply hydrating body lotion that nourishes and softens the skin.",
                Expiry_Date = "2025-12-31",
                Price = 298,
                Side_Effects =
                 "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.",
                Disclaimer =
                 "Th_is_ product is not intended to diagnose, treat, cure, or prevent any disease.",

                Category = "personal care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Sunscreen SPF 50",
                Manufacturer = "SunGuard",
                Image =
                "https =//www.lotusherbals.com/cdn/shop/files/SPF50_Frontcopy3.jpg?v=1713771327",
                Description =
                "High_ protection sunscreen to shield your skin from harmful UV rays.",
                Expiry_Date = "2023-09-30",
                Price = 400,
                Side_Effects = "May cause rash or irritation in some individuals.",
                Disclaimer = "Apply generously before sun exposure.",
                Category = "personal care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "head and shoulders Shampoo",
                Manufacturer = "head and shoulders",
                Image =
                "https =//images-cdn.ubuy.co.in/64f07850e7d397721505a2f8-head-and-shoulders-dandruff-shampoo.jpg",
                Description =
                 "A na_tural shampoo enriched with herbal extracts for healthy, shiny hair.",
                Expiry_Date = "2025-12-31",
                Price = 265,
                Side_Effects = "None reported",
                Disclaimer = "For external use only. Avoid contact with eyes.",
                Category = "personal care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Dove Anti-Dandruff Shampoo",
                Manufacturer = "Dove",
                Image =
                "https =//www.quickpantry.in/cdn/shop/products/dove-dandruff-care-shampoo-quick-pantry_500x500.jpg?v=1710539099",
                Description =
                "A ge_ntle shampoo that helps control dandruff while nourishing the scalp.",
                Expiry_Date = "2024-08-15",
                Price = 299,
                Side_Effects = "May cause mild irritation if it gets into eyes.",
                Disclaimer =
                "For external use only. Rinse thoroughly if contact with eyes occurs.",
                Category = "personal care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            // // -------PERSONAL CARE End---------\\

            // // const babyCareProducts = [
            new() {
                Drug_Name = "Citaphil Baby Shampoo",
                Manufacturer = "GentleCare",
                Image =
                "https =//onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/crbtcpjcdab7csqm7l7i.jpg",
                Description = "Tear-free formula for gentle cleansing.",
                Expiry_Date = "2024-12-31",
                Price = 584,
                Side_Effects = "Mild eye irritation if it gets into eyes.",
                Disclaimer = "Rinse thoroughly to avoid residue.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Johnson's Coconut Oil Baby Body Lotion",
                Manufacturer = "SoftSkin",
                Image =
                "https =//images-cdn.ubuy.co.in/64fd8f25cc10ab0dd8722d7c-johnsons-moisturizing-pink-baby-body.jpg",
                Description = "Moisturizes and nourishes baby's skin.",
                Expiry_Date = "2025-04-15",
                Price = 499,
                Side_Effects = "Rare skin irritation in sensitive skin.",
                Disclaimer = "Test on small area before use.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Jphnson's Baby Wipes",
                Manufacturer = "CleanBaby",
                Image = "https =//m.media-amazon.com/images/I/61jXR7o-W7L.jpg",
                Description = "Gentle and effective for cleaning baby's skin.",
                Expiry_Date = "2025-08-10",
                Price = 199,
                Side_Effects = "Possible allergic reaction to fragrance.",
                Disclaimer = "Use only as directed. Discontinue if irritation occurs.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Pappers All round Protection",
                Manufacturer = "HappyTeeth",
                Image =
                "https =//www.bigbasket.com/media/uploads/p/xl/40268401_2-pampers-diaper-pants-new()-born-all-round-protection-anti-rash-blanket-new()-improved.jpg",
                Description = "Relieves teething pain and discomfort.",
                Expiry_Date = "2024-09-20",
                Price = 279,
                Side_Effects = "Possible skin irritation or diaper rash.",
                Disclaimer =
                "Change diapers frequently to avoid prolonged exposure to moisture. If irritation occurs, discontinue use and consult a pediatrician.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Manypoko Standard",
                Manufacturer = "SunSafe",
                Image =
                "https =//5.imimg.com/data5/SELLER/Default/2023/5/308799233/GZ/YB/SY/73826082/mamy-poko-pants-standard-diaper.jpg",
                Description = "Protects baby's skin from harmful UV rays.",
                Expiry_Date = "2025-05-30",
                Price = 449,
                Side_Effects = "Possible skin irritation or diaper rash.",
                Disclaimer =
                "Change diapers frequently to avoid prolonged exposure to moisture. If irritation occurs, discontinue use and consult a pediatrician.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Himalaya baby Massage Oil",
                Manufacturer = "BathTime",
                Image =
                "https =//himalayawellness.in/cdn/shop/products/Baby-Massage-Oil.jpg?v=1622100409",
                Description = "Mild and gentle formula for baby's bath time.",
                Expiry_Date = "2024-11-25",
                Price = 250,
                Side_Effects = "Possible mild eye irritation.",
                Disclaimer = "Avoid contact with eyes. Rinse thoroughly.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Johnson's Non-Sticky Oil ",
                Manufacturer = "TenderTouch",
                Image =
                "https =//www.jiomart.com/images/product/original/491947406/johnson-s-baby-cottontouch-new()born-massage-oil-100-ml-product-images-o491947406-p590514099-0-202308230923.jpg?im=Resize=(1000,1000)",
                Description = "Nourishes and relaxes baby's skin.",
                Expiry_Date = "2026-03-15",
                Price = 430,
                Side_Effects = "Rare skin irritation.",
                Disclaimer = "Test on a small area before full application.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Vapor Rub",
                Manufacturer = "BreatheEasy",
                Image = "https =//m.media-amazon.com/images/I/71bBjtfhfVL.jpg",
                Description = "Helps relieve baby's nasal congestion.",
                Expiry_Date = "2025-12-20",
                Price = 50,
                Side_Effects = "Possible skin irritation.",
                Disclaimer = "For external use only. Do not apply to broken skin.",
                Category = "Baby Care",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            // // ];
            //_ /_/ ------------ Ayurveda -------------\\
            new() {
                Drug_Name = "Triphala Churna",
                Manufacturer = "Patanjali Ayurved Limited",
                Image =
                "https =//www.patanjaliayurved.net/assets/product_images/400x500/16883660031.png",
                Description =
                 "Trip_hala Churna is a combination of three fruits and is used for digestive and detoxification purposes in Ayurveda.",
                Expiry_Date = "2025-12-31",
                Price = 150,
                Side_Effects = "No known side effects when used as directed.",
                Disclaimer = "Consult a healthcare professional before use.",
                Category = "Ayurveda",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Ashwagandha Capsules",
                Manufacturer = "Himalaya Wellness",
                Image =
                "https =//m.media-amazon.com/images/I/61eNW65rU0L._AC_UF1000,1000_QL80_.jpg",
                Description =
                 "Ashw_agandha Capsules are used to reduce stress, improve concentration, and boost energy levels.",
                Expiry_Date = "2024-11-30",
                Price = 250,
                Side_Effects =
                 "May cause mild gastrointestinal discomfort in some individuals.",
                Disclaimer = "Not recommended for pregnant or nursing women.",
                Category = "Ayurveda",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Neem Face Wash",
                Manufacturer = "Himalaya Wellness",
                Image = "https =//m.media-amazon.com/images/I/51tXjE2WQQL.jpg",
                Description =
                "Neem Face Wash is formulated with neem extracts to cleanse and purify the skin, suitable for oily and acne-prone skin types.",
                Expiry_Date = "2023-08-31",
                Price = 120,
                Side_Effects = "No known side effects when used topically.",
                Disclaimer =
                "Avoid contact with eyes; rinse thoroughly with water if contact occurs.",
                Category = "Ayurveda",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Trikatu Churna",
                Manufacturer = "Baidyanath",
                Image = "https =//m.media-amazon.com/images/I/81fbE1aS5mL.jpg",
                Description =
                 "Trikatu Churna is a blend of three pungent herbs used to support digestion, metabolism, and respiratory health in Ayurveda.",
                Expiry_Date = "2023-06-30",
                Price = 180,
                Side_Effects = "May cause a warming sensation in the stomach.",
                Disclaimer = "Consult a qualified healthcare practitioner before use.",
                Category = "Ayurveda",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Amla Juice",
                Manufacturer = "Patanjali Ayurved Limited",
                Image =
                "https =//www.patanjaliayurved.net/assets/product_images/thumbs/350_360_1690962103AmlaJuice1ltrNew()1.png",
                Description =
                 "Amla_ Juice is rich in Vitamin C and antioxidants, known for its rejuvenating and immune-boosting properties in Ayurveda.",
                Expiry_Date = "2024-09-30",
                Price = 180,
                Side_Effects = "May cause mild acidity in some individuals.",
                Disclaimer =
                 "Best consumed as per recommended dosage; excessive consumption may lead to digestive discomfort.",
                Category = "Ayurveda",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            // ------------ Ayurveda End-------------\\
            // ------------ Health Devices -------------\\
            new() {
                Drug_Name = "Blood Pressure Monitor",
                Manufacturer = "HealthTech Inc.",
                Image = "https =//m.media-amazon.com/images/I/71-qOprKrIL.jpg",
                Description = "A digital blood pressure monitor for accurate readings.",
                Expiry_Date = "N/A",
                Price = 1049,
                Side_Effects = "None",
                Disclaimer = "Consult a healthcare professional for medical advice.",
                Category = "Health Devices",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Glucometer",
                Manufacturer = "FitLife Technologies",
                Image = "https =//m.media-amazon.com/images/I/317TDpZziaL.jpg",
                Description =
                 "A digital blood glucose meter used to measure how much glucose (a type of sugar) is in the blood.",
                Expiry_Date = "N/A",
                Price = 695,
                Side_Effects = "None",
                Disclaimer = "Consult a healthcare professional for medical advice.",
                Category = "Health Devices",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Digital Thermometer",
                Manufacturer = "MediSense Innovations",
                Image =
                "https =//m.media-amazon.com/images/I/41Lz9yz0vHL._AC_UF1000,1000_QL80_.jpg",
                Description = "Accurate digital thermometer for measuring body temperature.",
                Expiry_Date = "N/A",
                Price = 199,
                Side_Effects = "None",
                Disclaimer = "Read instructions carefully before use.",
                Category = "Health Devices",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
              //_ -_------------Nutritional Drinks & Supplements---------\\
            new() {
                Drug_Name = "Protein Powder",
                Manufacturer = "FitnessNutri",
                Image = "https =//m.media-amazon.com/images/I/61ZKpqtTJ2L.jpg",
                Description = "High-quality protein powder for muscle recovery and growth.",
                Expiry_Date = "2025-12-31",
                Price = 389,
                Side_Effects = "May cause mild bloating in some individuals.",
                Disclaimer =
                 "C_onsult your doctor before starting any new() supplement regimen.",
                Category = "Nutritional Drinks & Supplements",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },  new() {
                Drug_Name = "Multivitamin Tablets",
                Manufacturer = "HealthPlus",
                Image =
                "https =//m.media-amazon.com/images/I/519FFsSSOAL._AC_UF1000,1000_QL80_.jpg",
                Description =
                 "Dail_y multivitamin tablets to support overall health and immunity.",
                Expiry_Date = "2025-09-30",
                Price = 359,
                Side_Effects = "None reported.",
                Disclaimer = "Keep out of reach of children.",
                Category = "Nutritional Drinks & Supplements",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Fish Oil Capsules",
                Manufacturer = "OmegaHealth",
                Image =
                "https =//m.media-amazon.com/images/I/71RcH-GkD6L._AC_UF894,1000_QL80_.jpg",
                Description =
                 "Omeg_a-3 fish oil capsules for heart health and joint support.",
                Expiry_Date = "2025-06-15",
                Price = 949,
                Side_Effects = "May cause fishy aftertaste.",
                Disclaimer = "Store in a cool, dry place.",
                Category = "Nutritional Drinks & Supplements",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Energy Drink Mix",
                Manufacturer = "BoostEnergy",
                Image =
                "https =//cdn.gaiagoodhealth.com/wp-content/uploads/2023/07/21133855/550x370-orange.png",
                Description = "Instant energy drink mix with vitamins and minerals.",
                Expiry_Date = "2025-11-20",
                Price = 128,
                Side_Effects =
                 "C_ontains caffeine; may cause sleeplessness if consumed late in the day.",
                Disclaimer =
                 "Not recommended for pregnant women or individuals sensitive to caffeine.",
                Category = "Nutritional Drinks & Supplements",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
            new() {
                Drug_Name = "Probiotic Yogurt",
                Manufacturer = "BioHealth",
                Image =
                "https =//english.varthabharati.in/storage/uploads/health/drinkB_vb_14.jpeg",
                Description = "Probiotic-rich yogurt for digestive health and gut balance.",
                Expiry_Date = "2025-08-05",
                Price = 100,
                Side_Effects =
                 "M_ay cause mild digestive discomfort in sensitive individuals.",
                Disclaimer = "Refrigerate after opening.",
                Category = "Nutritional Drinks & Supplements",
                Count_In_Stock = 100,
                Created_By = Roles.ADMIN,
            },
        });
    }
}
