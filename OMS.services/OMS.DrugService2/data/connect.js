import { connect } from "mongoose";
import Drug from "../models/drugModel.js";



export const connectDb = async (uri) => {
    try {
        await connect(uri);
        console.log('connected to OMS_DrugService DB');
    } catch (err) {
        throw err;
    }
}



const drugs = [
    {
        drug_Name: "Atorvastatin",
        manufacturer: "Pfizer Inc.",
        image:
        "https://cdn01.pharmeasy.in/dam/products/J21424/atorvastatin-10-mg-tablet-10-medlife-pure-generics-combo-3-1626532296.jpg",
        description: "Used to lower cholesterol and triglyceride levels.",
        consume_Type: "Oral",
        expiry_Date: "2025-1-15",
        price: 60,
        side_Effects: "Muscle pain, nausea, headache",
        disclaimer: "Consult your doctor before use.",
        category: "HMG-CoA reductase inhibitors, or statins.",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Amoxicillin",
        manufacturer: "GlaxoSmithKline plc",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/332350358/SI/JT/VF/98283251/amoxicillin-drugs3.jpg",
        description: "Antibiotic used to treat bacterial infections.",
        consume_Type: "Oral",
        expiry_Date: "2024-12-01",
        price: 62,
        side_Effects: "Diarrhea, rash, nausea.",
        disclaimer: "Complete the full course as prescribed.",
        category: "antibiotics",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Lisinopril",
        manufacturer: "AstraZeneca plc",
        image:
        "https://encrypted-tbn0.gstatic.com/images?:tbn:ANd9GcRquzMUwap3aIcmZQhZ4FOztWQorUZSonP4wg&s",
        description: "Treats high blood pressure and heart failure.",
        consume_Type: "Oral",
        expiry_Date: "2025-06-30",
        price: 40,
        side_Effects: "Dizziness, headache, fatigue.",
        disclaimer: "Monitor blood pressure regularly.",
        category: "blood pressure ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Metformin",
        manufacturer: " Merck & Co., Inc.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/332774949/NY/WA/ZJ/6299000/metformin-hydrochloride-tablets.jpeg",
        description: "Used to control blood sugar levels in type 2 diabetes.",
        consume_Type: "Oral",
        expiry_Date: "2025-04-10",
        price: 31,
        side_Effects: "Stomach upset, diarrhea, nausea.",
        disclaimer: "Follow your diet and exercise program.",
        category: " Diabetes",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Omeprazole",
        manufacturer: "Novartis AG",
        image:
        "https://5.imimg.com/data5/JD/FH/VU/SELLER-5478572/omeprazole-capsules-20mg.jpeg",
        description: "Treats gastroesophageal reflux disease (GERD).",
        consume_Type: "Oral",
        expiry_Date: "2024-09-20",
        price: 75,
        side_Effects: "Headache, stomach pain, nausea.",
        disclaimer: "Do not exceed the recommended dose.",
        category: "gastroesophageal ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Amlodipine",
        manufacturer: "Pfizer Inc.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/1/CP/LY/QV/88793954/amlodipine-tablets-ip.jpeg",
        description: "Used to treat high blood pressure and angina.",
        consume_Type: "Oral",
        expiry_Date: "2025-08-15",
        price: 20,
        side_Effects: "Swelling, dizziness, fatigue.",
        disclaimer: "Avoid sudden discontinuation.",
        category: " blood pressure",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Zolpidem",
        manufacturer: "Sanofi S.A.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/9/342848763/LR/GK/WN/197293575/zolpidem-10-mg-tablet.jpg",
        description: "Treats insomnia.",
        consume_Type: "Oral",
        expiry_Date: "2024-11-30",
        price: 70,
        side_Effects: "Drowsiness, dizziness, diarrhea.",
        disclaimer: "Use only when you can get a full night's sleep.",
        category: "Insomnia ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Clonazepam",
        manufacturer: "F. Hoffmann-La Roche AG",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2021/5/CR/QB/QR/3184985/clonvul0-5.jpg",
        description: "Used to treat seizure and panic disorders.",
        consume_Type: "Oral",
        expiry_Date: "2025-05-10",
        price: 350,
        side_Effects: "Drowsiness, dizziness, fatigue.",
        disclaimer: "May be habit-forming, use as prescribed.",
        category: "depression ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Montelukast",
        manufacturer: "Merck & Co., Inc.",
        image:
        "https://www.glamrisdermacare.com/wp-content/uploads/2021/08/0000s_0006_BILAZIL-M-min.jpg",
        description: "Used to treat allergies and prevent asthma attacks.",
        consume_Type: "Oral",
        expiry_Date: "2024-12-05",
        price: 150,
        side_Effects: "Headache, stomach pain, cough.",
        disclaimer: "Not for use in an acute asthma attack",
        category: "allergy ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Gabapentin",
        manufacturer: "Pfizer Inc.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/311267943/ZR/MT/QJ/69086821/gabapentin-100mg-tablet-500x500.jpg",
        description: " Used to treat nerve pain and seizures.",
        consume_Type: "Oral",
        expiry_Date: "2025-07-25",
        price: 131,
        side_Effects: "Dizziness, drowsiness, coordination problems.",
        disclaimer: "Avoid alcohol while taking this medication.",
        category: "anticonvulsants",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Albuterol",
        manufacturer: "Teva Pharmaceutical Industries Ltd.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/337313153/HK/FV/II/57623134/buy-albuterol-hfa-90-mcg-inhaler-online.jpg",
        description: "Used to treat bronchospasm.",
        consume_Type: "Inhalation",
        expiry_Date: "2024-10-10",
        price: 34,
        side_Effects: "Nervousness, shaking, headache.",
        disclaimer: " Use only as prescribed by your doctor.",
        category: "Inhaler",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Loratadine",
        manufacturer: "Bayer AG",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/332709645/ER/VU/LD/6299000/loratadine-10-mg-tablets.jpeg",
        description: "Antihistamine used to relieve allergy symptoms.",
        consume_Type: "Oral",
        expiry_Date: "2025-03-01",
        price: 62,
        side_Effects: " Dry mouth, headache, drowsiness.",
        disclaimer: " Do not exceed the recommended dose.",
        category: " Antihistamine",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Ibuprofen",
        manufacturer: " Johnson & Johnson",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/319597573/MH/NE/SR/135658020/ibuprofen-400-mg-bp-tablets.jpg",
        description: "Used to reduce fever and treat pain or inflammation.",
        consume_Type: "Oral",
        expiry_Date: "2025-09-15",
        price: 70,
        side_Effects: "Stomach pain, heartburn, nausea.",
        disclaimer: "Do not exceed the recommended dose.",
        category: " inflammatory",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Warfarin",
        manufacturer: "Bristol-Myers Squibb Company",
        image: "https://www.careformulationlabs.com/uploaded_files/warfarin-5.png",
        description: "Used to prevent blood clots.",
        consume_Type: "Oral",
        expiry_Date: "2025-02-28",
        price: 71,
        side_Effects: "Bleeding, bruising, nausea.",
        disclaimer: "Regular blood tests are required.",
        category: "blood pressure",
        count_In_Stock: 100,
        created_By: "admin"
    }, 
    {
        drug_Name: "Cetirizine",
        manufacturer: "UCB S.A.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/311971664/FU/KT/PV/11858298/cetirizine-tablet.webp",
        description: "Antihistamine used to treat allergy symptoms.",
        consume_Type: "Oral",
        expiry_Date: " 2025-05-15",
        price: 26,
        side_Effects: "Drowsiness, dry mouth, fatigue.",
        disclaimer: "Do not use machinery if drowsy.",
        category: "Antihistamine",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Sertraline",
        manufacturer: " Pfizer Inc.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/337366367/KI/RJ/BA/7034457/sertraline-100-mg-tablets.jpg",
        description: "Antidepressant used to treat depression and anxiety.",
        consume_Type: "Oral",
        expiry_Date: "2025-06-10",
        price: 260,
        side_Effects: "Nausea, insomnia, dry mouth.",
        disclaimer: "May take several weeks to feel the full benefit.",
        category: "depression",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Tramadol",
        manufacturer: " Janssen Pharmaceuticals",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/331683629/YW/EW/FV/1359917/tramadol-hydrochloride-paracetamol-tablets.jpg",
        description: " Used to treat moderate to severe pain.",
        consume_Type: "Oral",
        expiry_Date: "2025-08-20",
        price: 17,
        side_Effects: "Dizziness, nausea, constipation.",
        disclaimer: "Can be habit-forming, use only as prescribed.",
        category: "Pain Killer ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Tamsulosin",
        manufacturer: " Boehringer Ingelheim GmbH",
        image:
        "https://5.imimg.com/data5/GLADMIN/Default/2024/1/382027832/MW/YF/DV/37869803/tamsulosin-hydrochloride-tablet.png",
        description: "Used to treat symptoms of an enlarged prostate.",
        consume_Type: "Oral",
        expiry_Date: "2025-04-05",
        price: 85,
        side_Effects: "Dizziness, headache, runny nose.",
        disclaimer: " Take 30 minutes after the same meal each day.",
        category: " Gynaecology",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Oxycodone",
        manufacturer: " Purdue Pharma L.P.",
        image:
        "https://tajgenerics.com/wp-content/uploads/cache/images/Oxycodone_7_5mg__Acetaminophen_375mg_Tablet_Exporters-scaled/Oxycodone_7_5mg__Acetaminophen_375mg_Tablet_Exporters-scaled-3481289551.jpg",
        description: "Used to treat moderate to severe pain.",
        consume_Type: "Oral",
        expiry_Date: "2025-07-30",
        price: 230,
        side_Effects: "Nausea, drowsiness, constipation.",
        disclaimer: "High potential for abuse, use as prescribed.",
        category: "Pain Killer",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Prednisone",
        manufacturer: " Mylan N.V.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2022/12/CE/BE/CW/23808697/prednisone-500x500.JPG",
        description: "Corticosteroid used to treat inflammation.",
        consume_Type: "Oral",
        expiry_Date: "2025-09-01",
        price: 12,
        side_Effects: "Insomnia, mood changes, weight gain.",
        disclaimer: " Do not stop taking abruptly.",
        category: "corticosteroid",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Fluoxetine",
        manufacturer: "Eli Lilly and Company",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2022/9/GN/LY/IE/154048565/fluoxetine-10mg-tablet.png",
        description: " Antidepressant used to treat depression and OCD.",
        consume_Type: "Oral",
        expiry_Date: "2025-10-10",
        price: 442,
        side_Effects: "Nausea, drowsiness, insomnia.",
        disclaimer: "May take several weeks to feel the full effect.",
        category: " depression",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Metoprolol",
        manufacturer: " AstraZeneca plc",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/UO/RS/FG/161638739/metoprolol-tartrate-50-mg.jpg",
        description: " Used to treat high blood pressure and angina.",
        consume_Type: "Oral",
        expiry_Date: "2025-02-15",
        price: 48,
        side_Effects: "Dizziness, tiredness, depression.",
        disclaimer: " Do not stop taking abruptly",
        category: " blood pressure",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Furosemide",
        manufacturer: " Sanofi S.A.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/8/333795220/XM/UX/IJ/6299000/furosemide-tablet.jpeg",
        description: "Diuretic used to treat fluid retention and swelling.",
        consume_Type: "Oral",
        expiry_Date: "2025-05-25",
        price: 14,
        side_Effects: "Dehydration, electrolyte imbalance, dizziness.",
        disclaimer: "Monitor electrolyte levels regularly.",
        category: " oop diuretics",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Duloxetine",
        manufacturer: "Eli Lilly and Company",
        image:
        "https://5.imimg.com/data5/AL/LG/MY-6299000/duloxetine-30-mg-capsules.jpg",
        description: "Used to treat depression and anxiety.",
        consume_Type: "Oral",
        expiry_Date: "2025-11-05",
        price: 100,
        side_Effects: "Nausea, dry mouth, drowsiness.",
        disclaimer: "May take several weeks to feel the full effect.",
        category: "depression ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Simvastatin",
        manufacturer: " Merck & Co., Inc.",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/357085613/HL/RR/GE/50963842/simvastatin-tablet-ups-20-mg.jpg",
        description: "Used to lower cholesterol and triglycerides.",
        consume_Type: "Oral",
        expiry_Date: "2025-08-10",
        price: 100,
        side_Effects: "Muscle pain, headache, nausea.",
        disclaimer: "Follow a cholesterol-lowering diet plan.",
        category: "cholesterol ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Losartan",
        manufacturer: " Bayer AG",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/12/373066330/IL/GL/IT/180648134/losartan-potassium-tablets-ip-500x500.jpg",
        description: "Used to treat high blood pressure.",
        consume_Type: "Oral",
        expiry_Date: "2025-01-25",
        price: 38,
        side_Effects: "Dizziness, back pain, nasal congestion.",
        disclaimer: "Monitor blood pressure regularly.",
        category: "blood pressure ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Clopidogrel",
        manufacturer: " Sanofi S.A",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/3/293106006/NJ/NS/EB/29765627/clopidogrel-75mg-aspirin-75mg-tab-500x500.jpg",
        description: "Used to prevent blood clots.",
        consume_Type: "Oral",
        expiry_Date: "2025-03-20",
        price: 54,
        side_Effects: "Bleeding, bruising, headache.",
        disclaimer: "Regular blood tests are required.",
        category: "antiplatelet",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Hydrocodone",
        manufacturer: " AbbVie Inc.",
        image:
        "https://t4.ftcdn.net/jpg/02/93/25/13/360_F_293251390_jBCMpaDN1V1ipxcqpthTt3yikZPAZMr8.jpg",
        description: "Used to treat severe pain.",
        consume_Type: "Oral",
        expiry_Date: "2025-07-05",
        price: 259,
        side_Effects: " Nausea, drowsiness, constipation.",
        disclaimer: "High potential for abuse, use as prescribed.",
        category: "Pain killer ",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Trazodone",
        manufacturer: " Teva Pharmaceutical Industries Ltd.",
        image:
        "https://c8.alamy.com/comp/GJ7J4D/molipaxin-100mg-capsules-antidepresant-trazodone-hydrochloride-GJ7J4D.jpg",
        description: " Antidepressant used to treat depression and insomnia.",
        consume_Type: "Oral",
        expiry_Date: "2025-06-15",
        price: 185,
        side_Effects: " Drowsiness, dry mouth, dizziness.",
        disclaimer: "May take several weeks to feel the full effect.",
        category: " Depression",
        count_In_Stock: 100,
        created_By: "admin"
    },
    {
        drug_Name: "Ranitidine",
        manufacturer: "GlaxoSmithKline plc",
        image:
        "https://wellonapharma.com/admincms/product_img/product_actual_img/Ranitidine%20Tablets_27-01-2017-08:47:41.jpg",
        description: "Used to reduce stomach acid and treat ulcers.",
        consume_Type: "Oral",
        expiry_Date: "2024-12-20",
        price: 30,
        side_Effects: " Headache, constipation, nausea.",
        disclaimer: "Use as directed by your doctor.",
        category: " H2 blockers",
        count_In_Stock: 100,
        created_By: "admin"
    },
    // ------ Dermatology  ------- \\
    {
        Image:
        "https://tiimg.tistatic.com/fp/1/006/419/tazarotene-cream-0-1--641.jpg",
        drug_Name: "Tazarotene",
        description: "This medication is a retinoid, prescribed for psoriasis and acne. It may decrease skin inflammation and skin changes associated with psoriasis.",
        consume_Type: "Adult: Topical- As 0.05 or 0.1% cream/gel: Apply once in the evening.",
        side_Effects: "Ski_D: Itching, burning/stinging, redness, skin peeling, irritation, worsening of psoriasis, rash, dry skin, bleeding, localized swelling, high cholesterol levels, desquamation, contact dermatitis, discoloration of skin and photosensitivity.",
        price: 420,
        expiry_Date: "2025-02-02",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image: "https://i.postimg.cc/D0VJ7Lr1/iso.jpg",
        drug_Name: "Isotretinoin ",
        description:
           "This medication is a retinoid, prescribed for acne and other skin disorders. It reduces skin oil production, changing the characteristics of the skin oil, and preventing abnormal hardening of the skin.",
        consume_Type:
        "Adult- PO- The recommended dose range is 0.5 to 1.0 mg/kg/day given in two divided doses with food for 15 to 20 weeks.",
        side_Effects: "Allergic reactions, fast heart rate and stroke.",
        price:299,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image: "https://i.postimg.cc/JhvtQZdS/mino.png",
        drug_Name: "Minocycline",
        description:
        "Minocycline is a broad spectrum tetracycline antibiotic. It acts by inhibiting the growth of bacteria in the body, It may be effective in other infections as well, however several bacteria have developed resistance to the drug, It may be used in patients who are allergic to the penicillin group of drugs as an alternative.",
        consume_Type:
        "Children over 12 years: 50mg every 12 hours, Adults The usual  dosage is 100 mg every 12 hours. The  dosage and duration varies according to the type of infection.For local use in the gums, the dose is 1mg given beneath the gums.",
        side_Effects:
        "Los_D of appetite, nausea, vomiting, diarrhea, indigestion, mouth ulcer, discoloration of the tongue and difficulty in swallowing.",
        price: 300,
        expiry_Date: "2025-02-02",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image: "https://i.postimg.cc/L6x9TjJv/calamine.jpg",
        drug_Name: "Calamine Lotion",
        description:
        "This medication is an anti-itch medication that contains mixture of zinc oxide (ZnO) with about 0.5% iron (III) oxide, prescribed for itching skin conditions. This medication in some cases is used as a mild antiseptic to arrest infections caused by scratching the affected area. Calamine is proved to be an effective medication in acne treatment.",
        consume_Type: "Adult: Topical- Apply 1-4 times/day.",
        side_Effects: "Rash or irritation.",
        price: 240,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image: "https://i.postimg.cc/K8K2DwSv/dim.jpg",
        drug_Name: "Dimethicone",
        description:
        "This medication is an emollient, prescribed for pediculosis, and other skin conditions.",
        consume_Type: "Apply as directed by Physician",
        side_Effects:
        "Rare_ly, redness, pain and irritation at the site of application.",
        price: 220,
        expiry_Date: "2024-12-20",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image: "https://i.postimg.cc/90x6GtL7/ss.jpg",
        drug_Name: "Sucralfate",
        description:
        "This medication is a gastric protective agent, prescribed for intestinal ulcers.",
        consume_Type:
            "Adult- PO- The recommended  dosage for duodenal ulcer is 1 g four times per day on an empty stomach.",
        side_Effects:
            "Dia_Drhea, nausea, vomiting, gastric discomfort, indigestion, flatulence and dry mouth, Itching and rash, Dizziness, sleeplessness, sleepiness and unsteadiness,Back pain and headache.",
        price: 190,
        expiry_Date: "2025-02-02",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image: "https://i.postimg.cc/WbgzwdMH/adap.jpg",
        drug_Name: "Adapalene",
        description:
        "Adapalene is a topical retinoid-like compound used to treat mild to moderate acne by preventing the formation of pimples acting deeply in the source.It also prevents the formation of acne by restoring skin texture and tone.",
        consume_Type:
            "Topical- A thin film of gel should be applied once a day to affected areas after washing the skin.",
        side_Effects:
            "A b_Dief sensation of warmth or stinging may occur immediately after applying the medication, redness, dryness, itching of the skin and scaling, mild burning, or worsening of acne may occur during the first 2-4 weeks of using the medication.",
        price: 320,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },

    {
        Image: "https://i.postimg.cc/NjNxBC5T/nad.png",
        drug_Name: "Nadifloxacin",
        description:
        "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
        consume_Type:
            "Topical- Apply a thin layer to the affected area as directed by your physician.",
        side_Effects:
            "Itc_Ding, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
        price: 285,
        expiry_Date: "2025-02-02",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },

    {
        Image: "https://i.postimg.cc/nhMDYFhj/oxy.jpg",
        drug_Name: "Oxytetracycline",
        description:
        "This medication is an antibiotic, prescribed for various infections such as acne, dermatitis, gonorrhea, etc.",
        consume_Type:
            "PO- The recommended dose range is 250 to 1.5gm in divided doses.Topical-Apply a thin layer over the affected skin 4 times per day.",
        side_Effects:
            "Los_D of appetite, nausea, vomiting, diarrhea, tongue inflammation, difficulty in swallowing and inflammatory lesions.",
        price: 225,
        expiry_Date: "2025-02-02",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    {
        Image:
        "https://5.imimg.com/data5/FY/GY/MY-39084219/nadifloxacin-cream-500x500.jpg",
        drug_Name: "Nadifloxacin",
        description:
        "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
        consume_Type: "as directed by your physician.",
        side_Effects:
            "Itch_ing, irritation, redness, flushes, papules, feeling of warmth, increased sweating, contact dermatitis and dryness of the skin.",
        price: 200,
        expiry_Date: "2024-12-20",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dermatology",
    },
    // ------ Dermatology End ------- \\
    // ------ Diabetes ------- \\
    {
        Image:
        "https://www.empr.com/wp-content/uploads/sites/7/2018/12/ac752944889a4c6494dae4f478ea8237-nesina_405478.jpg",
        drug_Name: "Alogliptin",
        description:
        "Alogliptin is prescribed to reduce high blood sugar level in patients with type 2 diabetes along with diet control and exercise.It should not be used in treating diabetic ketoacidosis or type 1 diabetes.  ",
        consume_Type:
            "PO - The initial dose is based on patient's condition. Maximum recommended dose is 25/2000mg.",
        side_Effects:
            "Upp_Dr respiratory tract infection, heart attack, throat inflammation, diarrhea, high blood pressure, headache, back pain and urinary tract infection.",
        price: 405,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://5.imimg.com/data5/ZJ/FV/VB/SELLER-104814248/alogliptin-500x500.jpg",
        drug_Name: "Alogliptin and Metformin",
        description:
        "Alogliptin and Metformin combination is used along with diet and exercise to improve blood sugar control or to treat hyperglycemia in patients with type 2 diabetes.High blood sugar level can cause damage to the eyes, kidney, and nerves.This combination medication contains alogliptin, a dipeptidyl-peptidase-4 (DPP-4) inhibitor and metformin, a biguanide.",
        consume_Type: "(125mg/500mg)- Dose is based on patientâ€™s condition.",
        side_Effects:
        "Lact_ic Acidosis and pancreatitis.Most Common: Upper respiratory tract infection, nasopharyngitis, diarrhea, hypertension, headache, back pain and urinary tract infection.",
        price: 500,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },  
    {
        Image:
        "https://www.empr.com/wp-content/uploads/sites/7/2018/12/5a26069609d944038725ae95e761a5f1-oseni_405485.jpg",
        drug_Name: "Alogliptin and Pioglitazone",
        description:
        "Alogliptin and Pioglitazone combination is used to treat high blood sugar level in patients with type 2 diabetes along with diet control and exercise. This combination should not be used to treat type 1 diabetes.This combination medication contains pioglitazone, a thiazolidinedione agent and alogliptin, a DPP-4 inhibitor.",
        consume_Type:
            "Dose is based on patientâ€™s condition. Maximum recommended dose is 25/45mg.",
        side_Effects:
            "Inf_Dammation of throat and nasal passages, back pain and upper respiratory tract infection.",
        price: 450,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://5.imimg.com/data5/MR/OX/MY-18174683/sulisent-28canagliflozin-100mg-29-tablet-500x500.jpg",
        drug_Name: "Canagliflozin",
        description:
        "This medication is an antidiabetic (sodium glucose co-transporter 2 (SGLT2) inhibitor), prescribed for type 2 diabetes mellitus along with diet and exercise. For patients with type 2 diabetes along with diabetic kidney disease, physicians should consider using an SGLT2 inhibitor when the eGFR is at or above 30, especially with albuminuria above 300 mg/g, to lower renal and CV risk as per A.D.A recommendations.",
        consume_Type: "PO- The recommended initial dose is 100 mg once daily.",
        side_Effects:
        "Fema_le genital mycotic infections, urinary tract infection and increased urination.",
        price: 298,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://encrypted-tbn0.gstatic.com/images?:tbn:ANd9GcSKl6UBEBhkp0cUc7ciO3VVRoBjtAf7cA-QPOTggzDmit4AYegpA3mcl9haEtf6nfB5diw&usq:CAU",
        drug_Name: "Diabinese",
        description:
        "This medication is a sulfonylurea antidiabetic drug, prescribed for type 2 diabetes. This medication helps to keep blood sugar levels under control.",
        consume_Type:
            "PO- The recommended initial dose is 250mg/day. It may be adjusted based on patientâ€™s condition.",
        side_Effects:
            "Bod_D as a Whole : Low blood sugar, Disulfiram-like,Central Nervous System : Dizziness and headache, Gastrointestinal : Diarrhea, nausea, vomiting, loss of appetite and hunger, Liver : Jaundice, Skin : Itching and hives, Blood : Anemia and decrease in blood counts.",
        price: 345,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://www.prestoimages.net/store30/rd14324/14324_pd3794145_1_.jpg",
        drug_Name: "Colesevelam HCL",
        description:
        "This medication is a bile acid sequestrant, prescribed for familial hypercholesterolesmia and type 2 diabetes with other medications.",
        consume_Type:
            "For hypercholesterolesmia- The recommended dose is one 3.75-gram packet once daily or one 1.875-gram packet twice daily.For Type 2 Diabetes- The recommended dose is 6 tablets once daily or 3 tablets twice daily.",
        side_Effects:
            "Hea_Dache, fatigue, increased level of liver enzyme, runny nose, vomiting, constipation, indigestion, difficulty in swallowinglow blood sugar, nausea and high blood pressure..",
        price: 400,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://emedz.net/blog/wp-content/uploads/2020/01/Steglatro-ertugliflozin-696x484.jpg",
        drug_Name: "Steglatro",
        description:
        "Ertugliflozin tablet is a sodium glucose co-transporter 2 (SGLT2) inhibitor which is prescribed for adult patients with type 2 diabetes as an adjunct therapy to diet control and exercise with a focus to improve glycemic control.It is prescribed either as a monotherapy or in combination with metformin or sitagliptin.  ",
        consume_Type:
            "The recommended initial dose of ertugliflozin tablets is 5 mg to be taken once a day.The dose of ertugliflozin can be increased to 15 mg once daily to achieve adequate glycemic control",
        side_Effects:
            "Com_Don: Frequent urination, low blood sugar level, genital fungal infections, Gastrointestinal: Nausea, pain in the stomach, vomiting, Cardiovascular: Low blood volume, low blood pressure, faster heartbeat, increased LDL-cholesterol level in blood, Nervous system: Confusion, dizziness, headache, irritability, weakness, Respiratory: Difficulty in breathing, nasopharyngitis, Kidney: Urinary tract infections (pyelonephritis, urosepsis or bladder infections), pain or burning sensation while passing urine, blood in urine, reduced kidney function, Others: Foot ulcers or sores, fever, pain or tenderness in the lower limbs, pain in the back, reduced weight, increased thirst",
        price: 500,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://5.imimg.com/data5/SELLER/Default/2021/2/KR/IZ/EH/123113767/byetta-10mcg-500x500.jpg",
        drug_Name: "Byetta",
        description:
        "This medication is a incretin mimetic, prescribed for type 2 diabetes with diet and exercise, either alone or with other medications. For patients with chronic kidney disease who are at elevated risk for CV events, a glucagon-like peptide 1 receptor agonist may lower risk for albuminuria progression and/or CV events, according to (2019)recommendations of The American Diabetes Association It works by stimulating the pancreas to secrete insulin in hyperglycemic condition.  ",
        consume_Type:
            "Adult- The initial dose is 5 mcg injected under the skin (subcutaneously) twice daily, 60 minutes before breakfast or dinner.",
        side_Effects:
            "Mos_D Common: Nausea.Central Nervous System: Dizziness or lightheadedness, nervousness, mood changes, weakness, shakiness, confusion, epilepsy and loss of consciousness.Gastrointestinal: Extreme thirst, extreme hunger, stomach upset, vomiting, diarrhea and difficulty in swallowing. Skin: Rash, hives and itching. Allergic reactions: Swelling of the face, throat, tongue, lips, eyes, hands, feet, ankles, or lower legs and difficulty in breathing.",
        price: 395,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    {
        Image:
        "https://5.imimg.com/data5/QY/WA/MY-29865653/glibenclamide-tablets-500x500.jpg",
        drug_Name: "Glibenclamide",
        description:
        "TGlibenclamide is an oral hypoglycemic (glucose lowering) drug used to control blood sugar levels in patients with type 2 diabetes in addition to diet and exercise.It belongs to the chemical group of sulfonylureas",
        consume_Type:
            "The treatment is started with a low dose of 2.5 mg per day, and increased up to a maximum of 20 mg per day according to the blood glucose levels.",
        side_Effects:
            "Dig_Dstive tract: Nausea, vomiting, flatulence, abdominal fullness, diarrhea, constipation, heartburn, liver dysfunction, Skin: Rash, skin swelling, photosensitivity reactions (skin reactions following exposure to sunlight) including porphyria cutanea tarda (which is associated with an enzyme deficiency, Blood: Low blood counts, low blood glucose levels, low blood sodium levels, Others: Tiredness, weakness, fever, other allergic reactions, weight gain, joint or muscle pain.",
        price: 456,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Diabetes",
    },
    // // ------ Diabetes End------- \\
    // // ------- Depression ------- \\

    {
        Image: "https://i.postimg.cc/Z5Y1wQGy/Ademetionine.jpg",
        drug_Name: "Ademetionine",
        description:
        "Ademetionine is used for treating chronic liver disease such as intrahepatic cholestasis.",
        consume_Type: " Oral: 400-1600 mg per day",
        side_Effects:
            "Nerv_ous system disorders: Headache, insomnia, dizziness, nervousness",
        price: 345,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Depression",
    },
    {
        Image: "https://i.postimg.cc/KYkpVhJ4/Alprazolam.jpg",
        drug_Name: "Alprazolam",
        description:
        "This medication is a benzodiazepine, prescribed for anxiety and panic disorders.",
        consume_Type:
            "The starting dose for treating anxiety is 0.25-0.5 mg, 3 times daily using immediate release tablets.",
        side_Effects:
            "Gas_Drointestinal : Dry mouth, constipation, diarrhea, nausea/vomiting and increased salivation.",
        price: 765,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Depression",
    },

    {
        Image: "https://i.postimg.cc/TYtk33sp/Amitriptyline.jpg",
        drug_Name: "Amitriptyline",
        description:
        "This medication is a tricyclic antidepressant, prescribed for depression.",
        consume_Type:
            "Adult: PO- Depression- Initial:50-75 mg/day; up to 150 mg/day if needed.",
        side_Effects:
            "All_Drgic : Skin rash, hives, photosensitivity, swelling of the face and tongue.",
        price: 987,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Depression",
    },
    // ------- Dental  ------- \\
    {
        Image: "https://i.postimg.cc/nrDHcWFL/Chlorhexidine.jpg",
        drug_Name: "Chlorhexidine",
        description:
        "This medication is a chemical antiseptic, prescribed for gingivitis, cleansing skin and wound areas.",
        consume_Type: "As 0.2% solution: Rinse with 10 ml for 1 min 2-3 times/day.",
        side_Effects:
            "Skin_ sensitivity, irritation of eye, mucosal irritation and staining of the teeth and tongue.",
        price: 300,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dental",
    },
    {
        Image: "https://i.postimg.cc/W4ztcXkd/Feracrylum.jpg",
        drug_Name: "Feracrylum",
        description:
        "Feracrylum is used as a hemostatic (to stop bleeding) and an anti-septic for the management of post-operative wounds, cuts.",
        consume_Type:
            "Feracrylum is available as a 1% sterile solution (1% w/v feracrylum), as 50 and 15 gm gel tubes (1% w/w feracrylum) and tulle ( 3% w/v feracrylum).",
        side_Effects: "Gastrointestinal: Nausea, stomach pain.",
        price: 620,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dental",
    },
    {
        Image: "https://i.postimg.cc/FH7Q9qTX/Gensparin.jpg",
        drug_Name: "Gensparin",
        description:
        "Gensparin prevents the formation of blood clots and is hence used for the treatment of thrombolytic disorders.",
        consume_Type: "The recommended dose of the drug is 20mg/0.2ml injection.",
        side_Effects: " Skin: Rashes, pale skin, clots at the puncture site.",
        price: 854,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dental",
    },
    {    
        Image: "https://i.postimg.cc/3r1M276H/Multivitamin.jpg",
        drug_Name: "Multivitamin",
        description:
        "This medication is an essential nutrient, prescribed for patients with vitamin deficiency.  Normally provided in combination with dietary minerals.",
        consume_Type: "Dose is based on patientâ€™s condition.",
        side_Effects: "Slight nausea and unpleasant taste.",
        price: 790,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Dental",
    },
        // ------- Dental End ------- \\
        //_ -_---- Fracture ------ \\
    {
        Image: "https://i.postimg.cc/MGStsfM3/Abaloparatide.jpg",
        drug_Name: "Abaloparatide",
        description:
        "Abaloparatide is prescribed to treat osteoporosis in postmenopausal women who are at a high risk for fracture.",
        consume_Type:
            " The recommended adult dose is 80 mcg to be given subcutaneously (just under the skin) once a day",
        side_Effects:
            "â€¢_D Gastrointestinal: Nausea, pain in upper abdominal area, constipation, upset stomach.",
        price: 350,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Fracture",
    },

    {
        Image: "https://i.postimg.cc/C5XsbRpN/Aspirin-and-Oxycodone.jpg",
        drug_Name: "Aspirin and Oxycodone ",
        description:
        "This combination medication is used to relieve moderate to severe pain.",
        consume_Type:
            "The usual dosage is one tablet every 6 hours as needed for pain.",
        side_Effects:
            " Mo_Dt common : Lightheadedness, dizziness, drowsiness or sedation, nausea and vomiting.",
        price: 705,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Fracture",
    },

    {
        Image: "https://i.postimg.cc/g0syNSPr/Metamizole.jpg",
        drug_Name: "Metamizole",
        description:
        "Metamizole is a painkiller used for the treatment of fever, headache, toothache, postoperative pain and other painful conditions.",
        consume_Type:
            "The recommended oral adult dose for metamizole is 500 mg 3-4 times up to a maximum dose of 4000 mg/day.",
        side_Effects: "Skin: Severe skin reactions like toxic epidermal necrolysis",
        price: 432,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Fracture",
    },
    // ----- Fracture End ----- \\
    // // ------- Women Care ----- \\
    {
        Image:
        "https://ssets.apollo247.com/pub/media/catalog/product/s/u/sus0048.jpg",
        drug_Name: "Progesterone",
        description:
        "This medication is a hormone, prescribed for replacement therapy in women who have passed menopause. It is also used to prevent uterine cancer.",
        consume_Type: "Adult- The recommended dose range is 25 to 400 mg/day.",
        side_Effects:
        "Gast_rointestinal : Abdominal pain, nausea, vomiting, abdominal distension and constipation. General : Fatigue. Central Nervous System : Headache.urinary tract infections.",
        price: 285,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Women Care",
    },
    {
        Image: "https://i.postimg.cc/rpZgNVWK/de.jpg",
        drug_Name: "Dehydroepiandrosterone",
        description:
        "Adrenal insufficiency, where the adrenal gland does not produce enough hormones, To improve aging skin, Depression",
        consume_Type:
            "The dose varies according to the condition.The usual recommended oral dose for dehydroepiandrosterone is 50 to 75 mg/day. Higher doses of 50 mg three times a day have been used for adrenal insufficiency.",
        side_Effects: "Changes in blood pressure, reduced HDL cholesterol levels",
        price: 420,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Women Care",
    },
    {
        Image: "https://i.postimg.cc/8zB0Mgt6/es.jpg",
        drug_Name: "Estrogen",
        manufacturer: " Bayer AG",
        iescription:
        "This medication is prescribed for severe vasomotor symptoms due to menopause, ovarian failure, osteoporosis, uterine bleeding, delayed puberty and prostate cancer.",
        consume_Type: "Adult- IV/IM/PO: The recommended dose range is 0.3 to 25mg.",
        side_Effects:
            "Gas_Drointestinal : Stomach upset, vomiting, heartburn, constipation, diarrhea and gas. Central Nervous System : Nervousness, depression, dizziness, tight muscles, weakness, tingling and movement disorders. Metabolic : Weight gain or loss and loss of appetite. Skin : Hair loss, unwanted hair growth and darkening of the skin, Musculoskeletal : Leg cramps and joint pain. Allergic Reactions : Rash, blisters, hives, itching, swelling of the eyes, face, tongue, throat, hands, arms, feet, ankles or lower legs, hoarseness, difficulty in breathing or swallowing. Miscellaneous : Sore throat, fever, chills, cough and other signs of infection.",
        price: 320,
        expiry_Date: "2025-12-23",
        disclaimer: "Use as directed by your doctor.",
        count_In_Stock: 100,
        created_By: "admin",
        category: "Women Care",
    },
    {
        drug_Name: "Skin Rejuvenation Cream",
        manufacturer: "BeautyCo",
        image:
        "https://rukminim2.flixcart.com/image/750/900/xif0q/fairness/i/1/y/50-skin-rejuvenation-night-cream-50g-1-staylesta-original-imagtd7z2z5fzhg9.jpeg?:20&cro:false",
        description:
        "A lu_xurious cream that rejuvenates and hydrates your skin, giving it a youthful glow.",
        expiry_Date: "2025-05-20",
        price: 407,
        side_Effects: "May cause mild irritation in sensitive skin.",
        disclaimer:
        "Consult with a dermatologist before use if you have sensitive skin.",
        category: "women care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Whisper Choice Ultra-Thin Pads",
        manufacturer: "Whisper",
        image:
        "https://www.quickpantry.in/cdn/shop/products/whisper-choice-ultra-sanitary-pads-extra-long-xl-6-pads-quick-pantry_512x520.jpg?:1710538389",
        description:
        "Supe_r absorbent ultra-thin pads for all-day comfort and protection.",
        expiry_Date: "2025-06-30",
        price: 49,
        side_Effects: "None reported. If irritation occurs, discontinue use.",
        disclaimer: "Always read the label. Use only as directed.",
        category: "women care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Sofy Bodyfit Overnight Pads",
        manufacturer: "ComfortPlus",
        image:
        "https://www.bigbasket.com/media/uploads/p/xl/40023141_3-sofy-bodyfit-overnight-pads-xxxl.jpg",
        description:
            "Desi_gned for maximum absorbency and comfort during the night.",
        expiry_Date: "2025-12-31",
        price: 78,
        side_Effects: "None reported. If irritation occurs, discontinue use.",
        disclaimer: "Always read the label. Use only as directed.",
        category: "women care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Prega",
        manufacturer: "Mankind Pharma",
        image:
        "https://www.netmeds.com/images/product-v1/600x600/108125/prega__card_device_1s_36927_0_2.jpg",
        description:
        "Preg_a is a pregnancy test kit that provides accurate results in just 5 minutes.",
        expiry_Date: "2025-12-31",
        price: 60,
        side_Effects: "No known side effects when used as directed.",
        disclaimer:
        "This product is not a substitute for professional medical advice. Consult a healthcare provider for any health-related questions.",
        category: "women care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "V Wash",
        manufacturer: "CleanCare",
        image:
        "https://m.media-amazon.com/images/I/614EkRctkGL._AC_UF350,350_QL80_.jpg",
        description:
        "Gent_le feminine wash with natural ingredients for daily hygiene.",
        expiry_Date: "2024-11-15",
        price: 114,
        side_Effects: "Mild irritation may occur for sensitive skin.",
        disclaimer: "For external use only. Discontinue use if irritation occurs.",
        category: "women care",
        count_In_Stock: 100,
        created_By: "admin",
    },

    // ------- Women Care End ----- \\
    // -------PERSONAL CARE ---------\\
    {
        drug_Name: "Herbal Hair Oil",
        manufacturer: "Nature's Essence",
        image:
        "https://www.araahskinmiracle.com/wp-content/uploads/2022/10/main-1l-hair.jpg.webp",
        description:
            "An a_ll-natural herbal oil that promotes hair growth and reduces hair fall.",
        expiry_Date: "2024-12-15",
        price: 999,
        side_Effects: "Avoid contact with eyes; may cause eye irritation.",
        disclaimer: "For external use only. Keep out of reach of children.",
        category: "personal care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Vaseline Sun Protection SPF 30 Body Lotion",
        manufacturer: "EcoBeauty",
        image:
        "https://images-static.nykaa.com/media/catalog/product/6/c/6c1a17cVASEL00000100_1.jpg?t:w-500",
        description:
            "A de_eply hydrating body lotion that nourishes and softens the skin.",
        expiry_Date: "2025-12-31",
        price: 298,
        side_Effects:
            "For external use only. Avoid contact with eyes. Discontinue use if irritation occurs.",
        disclaimer:
            "Th_is_ product is not intended to diagnose, treat, cure, or prevent any disease.",

        category: "personal care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Sunscreen SPF 50",
        manufacturer: "SunGuard",
        image:
        "https://www.lotusherbals.com/cdn/shop/files/SPF50_Frontcopy3.jpg?:1713771327",
        description:
        "High_ protection sunscreen to shield your skin from harmful UV rays.",
        expiry_Date: "2023-09-30",
        price: 400,
        side_Effects: "May cause rash or irritation in some individuals.",
        disclaimer: "Apply generously before sun exposure.",
        category: "personal care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "head and shoulders Shampoo",
        manufacturer: "head and shoulders",
        image:
        "https://images-cdn.ubuy.co.in/64f07850e7d397721505a2f8-head-and-shoulders-dandruff-shampoo.jpg",
        description:
            "A na_tural shampoo enriched with herbal extracts for healthy, shiny hair.",
        expiry_Date: "2025-12-31",
        price: 265,
        side_Effects: "None reported",
        disclaimer: "For external use only. Avoid contact with eyes.",
        category: "personal care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Dove Anti-Dandruff Shampoo",
        manufacturer: "Dove",
        image:
        "https://www.quickpantry.in/cdn/shop/products/dove-dandruff-care-shampoo-quick-pantry_500x500.jpg?:1710539099",
        description:
        "A ge_ntle shampoo that helps control dandruff while nourishing the scalp.",
        expiry_Date: "2024-08-15",
        price: 299,
        side_Effects: "May cause mild irritation if it gets into eyes.",
        disclaimer:
        "For external use only. Rinse thoroughly if contact with eyes occurs.",
        category: "personal care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    // // -------PERSONAL CARE End---------\\

    // // const babyCareProducts: [
    {
        drug_Name: "Citaphil Baby Shampoo",
        manufacturer: "GentleCare",
        image:
        "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/crbtcpjcdab7csqm7l7i.jpg",
        description: "Tear-free formula for gentle cleansing.",
        expiry_Date: "2024-12-31",
        price: 584,
        side_Effects: "Mild eye irritation if it gets into eyes.",
        disclaimer: "Rinse thoroughly to avoid residue.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Johnson's Coconut Oil Baby Body Lotion",
        manufacturer: "SoftSkin",
        image:
        "https://images-cdn.ubuy.co.in/64fd8f25cc10ab0dd8722d7c-johnsons-moisturizing-pink-baby-body.jpg",
        description: "Moisturizes and nourishes baby's skin.",
        expiry_Date: "2025-04-15",
        price: 499,
        side_Effects: "Rare skin irritation in sensitive skin.",
        disclaimer: "Test on small area before use.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Jphnson's Baby Wipes",
        manufacturer: "CleanBaby",
        image: "https://m.media-amazon.com/images/I/61jXR7o-W7L.jpg",
        description: "Gentle and effective for cleaning baby's skin.",
        expiry_Date: "2025-08-10",
        price: 199,
        side_Effects: "Possible allergic reaction to fragrance.",
        disclaimer: "Use only as directed. Discontinue if irritation occurs.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Pappers All round Protection",
        manufacturer: "HappyTeeth",
        image:
        "https://www.bigbasket.com/media/uploads/p/xl/40268401_2-pampers-diaper-pants-born-all-round-protection-anti-rash-blanket-improved.jpg",
        description: "Relieves teething pain and discomfort.",
        expiry_Date: "2024-09-20",
        price: 279,
        side_Effects: "Possible skin irritation or diaper rash.",
        disclaimer:
        "Change diapers frequently to avoid prolonged exposure to moisture. If irritation occurs, discontinue use and consult a pediatrician.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Manypoko Standard",
        manufacturer: "SunSafe",
        image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/308799233/GZ/YB/SY/73826082/mamy-poko-pants-standard-diaper.jpg",
        description: "Protects baby's skin from harmful UV rays.",
        expiry_Date: "2025-05-30",
        price: 449,
        side_Effects: "Possible skin irritation or diaper rash.",
        disclaimer:
        "Change diapers frequently to avoid prolonged exposure to moisture. If irritation occurs, discontinue use and consult a pediatrician.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Himalaya baby Massage Oil",
        manufacturer: "BathTime",
        image:
        "https://himalayawellness.in/cdn/shop/products/Baby-Massage-Oil.jpg?:1622100409",
        description: "Mild and gentle formula for baby's bath time.",
        expiry_Date: "2024-11-25",
        price: 250,
        side_Effects: "Possible mild eye irritation.",
        disclaimer: "Avoid contact with eyes. Rinse thoroughly.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Johnson's Non-Sticky Oil ",
        manufacturer: "TenderTouch",
        image:
        "https://www.jiomart.com/images/product/original/491947406/johnson-s-baby-cottontouch-orn-massage-oil-100-ml-product-images-o491947406-p590514099-0-202308230923.jpg?i:Resiz:(1000,1000)",
        description: "Nourishes and relaxes baby's skin.",
        expiry_Date: "2026-03-15",
        price: 430,
        side_Effects: "Rare skin irritation.",
        disclaimer: "Test on a small area before full application.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Vapor Rub",
        manufacturer: "BreatheEasy",
        image: "https://m.media-amazon.com/images/I/71bBjtfhfVL.jpg",
        description: "Helps relieve baby's nasal congestion.",
        expiry_Date: "2025-12-20",
        price: 50,
        side_Effects: "Possible skin irritation.",
        disclaimer: "For external use only. Do not apply to broken skin.",
        category: "Baby Care",
        count_In_Stock: 100,
        created_By: "admin",
    },
    // // ];
    //_ /_/ ------------ Ayurveda -------------\\
    {
        drug_Name: "Triphala Churna",
        manufacturer: "Patanjali Ayurved Limited",
        image:
        "https://www.patanjaliayurved.net/assets/product_images/400x500/16883660031.png",
        description:
            "Trip_hala Churna is a combination of three fruits and is used for digestive and detoxification purposes in Ayurveda.",
        expiry_Date: "2025-12-31",
        price: 150,
        side_Effects: "No known side effects when used as directed.",
        disclaimer: "Consult a healthcare professional before use.",
        category: "Ayurveda",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Ashwagandha Capsules",
        manufacturer: "Himalaya Wellness",
        image:
        "https://m.media-amazon.com/images/I/61eNW65rU0L._AC_UF1000,1000_QL80_.jpg",
        description:
            "Ashw_agandha Capsules are used to reduce stress, improve concentration, and boost energy levels.",
        expiry_Date: "2024-11-30",
        price: 250,
        side_Effects:
            "May cause mild gastrointestinal discomfort in some individuals.",
        disclaimer: "Not recommended for pregnant or nursing women.",
        category: "Ayurveda",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Neem Face Wash",
        manufacturer: "Himalaya Wellness",
        image: "https://m.media-amazon.com/images/I/51tXjE2WQQL.jpg",
        description:
        "Neem Face Wash is formulated with neem extracts to cleanse and purify the skin, suitable for oily and acne-prone skin types.",
        expiry_Date: "2023-08-31",
        price: 120,
        side_Effects: "No known side effects when used topically.",
        disclaimer:
        "Avoid contact with eyes; rinse thoroughly with water if contact occurs.",
        category: "Ayurveda",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Trikatu Churna",
        manufacturer: "Baidyanath",
        image: "https://m.media-amazon.com/images/I/81fbE1aS5mL.jpg",
        description:
            "Trikatu Churna is a blend of three pungent herbs used to support digestion, metabolism, and respiratory health in Ayurveda.",
        expiry_Date: "2023-06-30",
        price: 180,
        side_Effects: "May cause a warming sensation in the stomach.",
        disclaimer: "Consult a qualified healthcare practitioner before use.",
        category: "Ayurveda",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Amla Juice",
        manufacturer: "Patanjali Ayurved Limited",
        image:
        "https://www.patanjaliayurved.net/assets/product_images/thumbs/350_360_1690962103AmlaJuice1ltr.png",
        description:
            "Amla_ Juice is rich in Vitamin C and antioxidants, known for its rejuvenating and immune-boosting properties in Ayurveda.",
        expiry_Date: "2024-09-30",
        price: 180,
        side_Effects: "May cause mild acidity in some individuals.",
        disclaimer:
            "Best consumed as per recommended dosage; excessive consumption may lead to digestive discomfort.",
        category: "Ayurveda",
        count_In_Stock: 100,
        created_By: "admin",
    },
    // ------------ Ayurveda End-------------\\
    // ------------ Health Devices -------------\\
    {
        drug_Name: "Blood Pressure Monitor",
        manufacturer: "HealthTech Inc.",
        image: "https://m.media-amazon.com/images/I/71-qOprKrIL.jpg",
        description: "A digital blood pressure monitor for accurate readings.",
        expiry_Date: "N/A",
        price: 1049,
        side_Effects: "None",
        disclaimer: "Consult a healthcare professional for medical advice.",
        category: "Health Devices",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Glucometer",
        manufacturer: "FitLife Technologies",
        image: "https://m.media-amazon.com/images/I/317TDpZziaL.jpg",
        description:
            "A digital blood glucose meter used to measure how much glucose (a type of sugar) is in the blood.",
        expiry_Date: "N/A",
        price: 695,
        side_Effects: "None",
        disclaimer: "Consult a healthcare professional for medical advice.",
        category: "Health Devices",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Digital Thermometer",
        manufacturer: "MediSense Innovations",
        image:
        "https://m.media-amazon.com/images/I/41Lz9yz0vHL._AC_UF1000,1000_QL80_.jpg",
        description: "Accurate digital thermometer for measuring body temperature.",
        expiry_Date: "N/A",
        price: 199,
        side_Effects: "None",
        disclaimer: "Read instructions carefully before use.",
        category: "Health Devices",
        count_In_Stock: 100,
        created_By: "admin",
    },
        //_ -_------------Nutritional Drinks & Supplements---------\\
    {
        drug_Name: "Protein Powder",
        manufacturer: "FitnessNutri",
        image: "https://m.media-amazon.com/images/I/61ZKpqtTJ2L.jpg",
        description: "High-quality protein powder for muscle recovery and growth.",
        expiry_Date: "2025-12-31",
        price: 389,
        side_Effects: "May cause mild bloating in some individuals.",
        disclaimer:
            "C_onsult your doctor before starting any supplement regimen.",
        category: "Nutritional Drinks & Supplements",
        count_In_Stock: 100,
        created_By: "admin",
    },  
    {
        drug_Name: "Multivitamin Tablets",
        manufacturer: "HealthPlus",
        image:
        "https://m.media-amazon.com/images/I/519FFsSSOAL._AC_UF1000,1000_QL80_.jpg",
        description:
            "Dail_y multivitamin tablets to support overall health and immunity.",
        expiry_Date: "2025-09-30",
        price: 359,
        side_Effects: "None reported.",
        disclaimer: "Keep out of reach of children.",
        category: "Nutritional Drinks & Supplements",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Fish Oil Capsules",
        manufacturer: "OmegaHealth",
        image:
        "https://m.media-amazon.com/images/I/71RcH-GkD6L._AC_UF894,1000_QL80_.jpg",
        description:
            "Omeg_a-3 fish oil capsules for heart health and joint support.",
        expiry_Date: "2025-06-15",
        price: 949,
        side_Effects: "May cause fishy aftertaste.",
        disclaimer: "Store in a cool, dry place.",
        category: "Nutritional Drinks & Supplements",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Energy Drink Mix",
        manufacturer: "BoostEnergy",
        image:
        "https://cdn.gaiagoodhealth.com/wp-content/uploads/2023/07/21133855/550x370-orange.png",
        description: "Instant energy drink mix with vitamins and minerals.",
        expiry_Date: "2025-11-20",
        price: 128,
        side_Effects:
            "C_ontains caffeine; may cause sleeplessness if consumed late in the day.",
        disclaimer:
            "Not recommended for pregnant women or individuals sensitive to caffeine.",
        category: "Nutritional Drinks & Supplements",
        count_In_Stock: 100,
        created_By: "admin",
    },
    {
        drug_Name: "Probiotic Yogurt",
        manufacturer: "BioHealth",
        image:
        "https://english.varthabharati.in/storage/uploads/health/drinkB_vb_14.jpeg",
        description: "Probiotic-rich yogurt for digestive health and gut balance.",
        expiry_Date: "2025-08-05",
        price: 100,
        side_Effects:
            "M_ay cause mild digestive discomfort in sensitive individuals.",
        disclaimer: "Refrigerate after opening.",
        category: "Nutritional Drinks & Supplements",
        count_In_Stock: 100,
        created_By: "admin",
    }
];

export const Migration = async () => {
  try {
    console.log("Migration started!")
    await Drug.insertMany(drugs);
    console.log("Data migrated successfully!");
  } catch {
    console.log("Migration Failed!");
    throw err;
  }
} 