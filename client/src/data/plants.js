const plants = [
  {
    "id": 1,
    "commonName": "Tulsi",
    "scientificName": "Botanica indica vr. 546",
    "herbalUses": [
      "Detoxifies liver",
      "Ayurvedic balancing",
      "Promotes hair growth",
      "Enhances memory"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Analgesic",
      "Antibacterial",
      "Hepatoprotective"
    ],
    "diseases": [
      "Liver disorders",
      "Common cold",
      "Diabetes"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 2,
    "commonName": "Neem",
    "scientificName": "Botanica indica vr. 275",
    "herbalUses": [
      "Promotes hair growth",
      "Ayurvedic balancing",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antioxidant",
      "Immunomodulator",
      "Anti-inflammatory",
      "Antipyretic"
    ],
    "diseases": [
      "Fever",
      "Skin infections",
      "Insomnia"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 3,
    "commonName": "Aloe Vera",
    "scientificName": "Botanica indica vr. 543",
    "herbalUses": [
      "Purifies blood",
      "Boosts immunity",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Antispasmodic",
      "Antipyretic"
    ],
    "diseases": [
      "Skin infections",
      "Arthritis",
      "Diabetes",
      "Liver disorders"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 4,
    "commonName": "Ashwagandha",
    "scientificName": "Botanica indica vr. 580",
    "herbalUses": [
      "Boosts immunity",
      "Soothes inflammation",
      "Respiratory relief",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Antipyretic",
      "Diuretic",
      "Immunomodulator",
      "Analgesic"
    ],
    "diseases": [
      "Insomnia",
      "Common cold",
      "Digestive issues"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 5,
    "commonName": "Ginger",
    "scientificName": "Botanica indica vr. 955",
    "herbalUses": [
      "Promotes hair growth",
      "Soothes inflammation",
      "Boosts immunity",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Adaptogenic",
      "Antispasmodic",
      "Analgesic"
    ],
    "diseases": [
      "Arthritis",
      "Common cold",
      "Digestive issues"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Herbal Tea",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 6,
    "commonName": "Turmeric",
    "scientificName": "Botanica indica vr. 319",
    "herbalUses": [
      "Promotes hair growth",
      "Enhances memory",
      "Reduces stress",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antioxidant",
      "Antibacterial"
    ],
    "diseases": [
      "Diabetes",
      "Digestive issues",
      "Anxiety",
      "Insomnia"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 7,
    "commonName": "Moringa",
    "scientificName": "Botanica indica vr. 405",
    "herbalUses": [
      "Reduces stress",
      "Respiratory relief",
      "Ayurvedic balancing",
      "Enhances memory"
    ],
    "medicalUses": [
      "Diuretic",
      "Analgesic",
      "Immunomodulator",
      "Antipyretic"
    ],
    "diseases": [
      "Digestive issues",
      "Arthritis",
      "Insomnia",
      "Diabetes"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 8,
    "commonName": "Brahmi",
    "scientificName": "Botanica indica vr. 475",
    "herbalUses": [
      "Boosts immunity",
      "Improves digestion",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antispasmodic",
      "Antibacterial",
      "Antipyretic"
    ],
    "diseases": [
      "Diabetes",
      "Common cold",
      "Anxiety"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 9,
    "commonName": "Amla",
    "scientificName": "Botanica indica vr. 281",
    "herbalUses": [
      "Enhances memory",
      "Respiratory relief",
      "Detoxifies liver",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Antispasmodic",
      "Anti-inflammatory",
      "Antioxidant"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Arthritis"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 10,
    "commonName": "Triphala",
    "scientificName": "Botanica indica vr. 155",
    "herbalUses": [
      "Respiratory relief",
      "Enhances memory",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Analgesic",
      "Diuretic",
      "Antipyretic"
    ],
    "diseases": [
      "Insomnia",
      "Skin infections",
      "Anxiety"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Bhasma"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 11,
    "commonName": "Shatavari",
    "scientificName": "Botanica indica vr. 189",
    "herbalUses": [
      "Purifies blood",
      "Enhances memory",
      "Reduces stress",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Diuretic",
      "Hepatoprotective",
      "Antioxidant"
    ],
    "diseases": [
      "Insomnia",
      "Fever",
      "Skin infections"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 12,
    "commonName": "Guduchi",
    "scientificName": "Botanica indica vr. 292",
    "herbalUses": [
      "Enhances memory",
      "Soothes inflammation",
      "Respiratory relief",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Adaptogenic",
      "Antioxidant"
    ],
    "diseases": [
      "Arthritis",
      "Diabetes",
      "Digestive issues"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Bhasma",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 13,
    "commonName": "Haritaki",
    "scientificName": "Botanica indica vr. 523",
    "herbalUses": [
      "Detoxifies liver",
      "Improves digestion",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Hepatoprotective",
      "Immunomodulator",
      "Antispasmodic"
    ],
    "diseases": [
      "Insomnia",
      "Liver disorders",
      "Digestive issues",
      "Skin infections"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Paste",
      "Bhasma",
      "Decoction"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 14,
    "commonName": "Bibhitaki",
    "scientificName": "Botanica indica vr. 951",
    "herbalUses": [
      "Detoxifies liver",
      "Promotes hair growth",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Diuretic",
      "Anti-inflammatory",
      "Antipyretic",
      "Antioxidant"
    ],
    "diseases": [
      "Common cold",
      "Asthma",
      "Anxiety"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 15,
    "commonName": "Vidanga",
    "scientificName": "Botanica indica vr. 541",
    "herbalUses": [
      "Purifies blood",
      "Boosts immunity",
      "Improves digestion"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antibacterial",
      "Antipyretic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Anxiety"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Bhasma",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 16,
    "commonName": "Punarnava",
    "scientificName": "Botanica indica vr. 985",
    "herbalUses": [
      "Detoxifies liver",
      "Promotes hair growth",
      "Reduces stress"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antioxidant",
      "Hepatoprotective",
      "Diuretic"
    ],
    "diseases": [
      "Skin infections",
      "Diabetes",
      "Digestive issues",
      "Anxiety"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Decoction"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 17,
    "commonName": "Shankhpushpi",
    "scientificName": "Botanica indica vr. 598",
    "herbalUses": [
      "Promotes hair growth",
      "Improves digestion",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-inflammatory",
      "Antioxidant",
      "Analgesic"
    ],
    "diseases": [
      "Anxiety",
      "Fever",
      "Arthritis"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Paste",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 18,
    "commonName": "Jatamansi",
    "scientificName": "Botanica indica vr. 273",
    "herbalUses": [
      "Purifies blood",
      "Boosts immunity",
      "Enhances memory",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antispasmodic",
      "Antibacterial",
      "Adaptogenic"
    ],
    "diseases": [
      "Arthritis",
      "Diabetes",
      "Liver disorders"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 19,
    "commonName": "Bala",
    "scientificName": "Botanica indica vr. 28",
    "herbalUses": [
      "Detoxifies liver",
      "Reduces stress",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Antibacterial",
      "Antispasmodic",
      "Diuretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Arthritis",
      "Diabetes",
      "Insomnia",
      "Asthma"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 20,
    "commonName": "Nagarmotha",
    "scientificName": "Botanica indica vr. 513",
    "herbalUses": [
      "Ayurvedic balancing",
      "Promotes hair growth",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Diuretic",
      "Anti-inflammatory",
      "Hepatoprotective"
    ],
    "diseases": [
      "Skin infections",
      "Common cold",
      "Diabetes",
      "Asthma"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 21,
    "commonName": "Arjuna",
    "scientificName": "Botanica indica vr. 445",
    "herbalUses": [
      "Ayurvedic balancing",
      "Boosts immunity",
      "Enhances memory",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Hepatoprotective",
      "Antioxidant",
      "Diuretic"
    ],
    "diseases": [
      "Insomnia",
      "Arthritis",
      "Common cold",
      "Diabetes"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Bhasma",
      "Oil Extract"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 22,
    "commonName": "Guggul",
    "scientificName": "Botanica indica vr. 687",
    "herbalUses": [
      "Improves digestion",
      "Soothes inflammation",
      "Ayurvedic balancing",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antioxidant",
      "Immunomodulator"
    ],
    "diseases": [
      "Anxiety",
      "Liver disorders",
      "Skin infections"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 23,
    "commonName": "Kutki",
    "scientificName": "Botanica indica vr. 497",
    "herbalUses": [
      "Improves digestion",
      "Purifies blood",
      "Enhances memory",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Analgesic",
      "Diuretic",
      "Antibacterial"
    ],
    "diseases": [
      "Arthritis",
      "Asthma",
      "Insomnia",
      "Anxiety"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Bhasma",
      "Oil Extract",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 24,
    "commonName": "Chirata",
    "scientificName": "Botanica indica vr. 327",
    "herbalUses": [
      "Purifies blood",
      "Enhances memory",
      "Reduces stress"
    ],
    "medicalUses": [
      "Antioxidant",
      "Anti-inflammatory",
      "Antipyretic",
      "Antibacterial"
    ],
    "diseases": [
      "Diabetes",
      "Common cold",
      "Anxiety",
      "Insomnia"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Oil Extract"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 25,
    "commonName": "Vasaka",
    "scientificName": "Botanica indica vr. 692",
    "herbalUses": [
      "Enhances memory",
      "Reduces stress",
      "Respiratory relief",
      "Improves digestion"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antioxidant",
      "Antipyretic"
    ],
    "diseases": [
      "Common cold",
      "Arthritis",
      "Liver disorders",
      "Digestive issues"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 26,
    "commonName": "Pushkarmool",
    "scientificName": "Botanica indica vr. 267",
    "herbalUses": [
      "Ayurvedic balancing",
      "Promotes hair growth",
      "Boosts immunity",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Analgesic",
      "Immunomodulator",
      "Antioxidant"
    ],
    "diseases": [
      "Skin infections",
      "Liver disorders",
      "Asthma",
      "Diabetes"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Oil Extract",
      "Decoction",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 27,
    "commonName": "Devdaru",
    "scientificName": "Botanica indica vr. 358",
    "herbalUses": [
      "Purifies blood",
      "Ayurvedic balancing",
      "Respiratory relief",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antibacterial",
      "Analgesic"
    ],
    "diseases": [
      "Skin infections",
      "Insomnia",
      "Arthritis",
      "Anxiety"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 28,
    "commonName": "Manjistha",
    "scientificName": "Botanica indica vr. 842",
    "herbalUses": [
      "Reduces stress",
      "Ayurvedic balancing",
      "Enhances memory",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Analgesic",
      "Adaptogenic",
      "Antispasmodic"
    ],
    "diseases": [
      "Skin infections",
      "Common cold",
      "Liver disorders",
      "Diabetes"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Oil Extract",
      "Bhasma"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 29,
    "commonName": "Lodhra",
    "scientificName": "Botanica indica vr. 286",
    "herbalUses": [
      "Soothes inflammation",
      "Purifies blood",
      "Enhances memory",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antipyretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Diabetes"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 30,
    "commonName": "Sariva",
    "scientificName": "Botanica indica vr. 437",
    "herbalUses": [
      "Improves digestion",
      "Promotes hair growth",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Hepatoprotective",
      "Analgesic"
    ],
    "diseases": [
      "Insomnia",
      "Common cold",
      "Asthma",
      "Fever"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 31,
    "commonName": "Chandana",
    "scientificName": "Botanica indica vr. 587",
    "herbalUses": [
      "Ayurvedic balancing",
      "Promotes hair growth",
      "Improves digestion",
      "Enhances memory"
    ],
    "medicalUses": [
      "Antioxidant",
      "Adaptogenic",
      "Analgesic",
      "Antipyretic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Asthma"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Bhasma",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 32,
    "commonName": "Yashtimadhu",
    "scientificName": "Botanica indica vr. 870",
    "herbalUses": [
      "Reduces stress",
      "Respiratory relief",
      "Improves digestion",
      "Purifies blood"
    ],
    "medicalUses": [
      "Antibacterial",
      "Immunomodulator",
      "Analgesic"
    ],
    "diseases": [
      "Anxiety",
      "Fever",
      "Skin infections"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 33,
    "commonName": "Pippali",
    "scientificName": "Botanica indica vr. 105",
    "herbalUses": [
      "Purifies blood",
      "Respiratory relief",
      "Ayurvedic balancing",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Hepatoprotective",
      "Antibacterial",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Liver disorders",
      "Insomnia",
      "Skin infections",
      "Common cold"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 34,
    "commonName": "Chitrak",
    "scientificName": "Botanica indica vr. 521",
    "herbalUses": [
      "Promotes hair growth",
      "Purifies blood",
      "Boosts immunity",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Antipyretic",
      "Hepatoprotective",
      "Analgesic"
    ],
    "diseases": [
      "Fever",
      "Diabetes",
      "Skin infections",
      "Common cold"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 35,
    "commonName": "Musta",
    "scientificName": "Botanica indica vr. 957",
    "herbalUses": [
      "Improves digestion",
      "Purifies blood",
      "Boosts immunity",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Antibacterial",
      "Anti-inflammatory",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Skin infections",
      "Liver disorders",
      "Common cold",
      "Digestive issues"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 36,
    "commonName": "Daru Haridra",
    "scientificName": "Botanica indica vr. 104",
    "herbalUses": [
      "Improves digestion",
      "Enhances memory",
      "Respiratory relief",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunomodulator",
      "Antioxidant"
    ],
    "diseases": [
      "Anxiety",
      "Diabetes",
      "Common cold"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 37,
    "commonName": "Amalaki",
    "scientificName": "Botanica indica vr. 99",
    "herbalUses": [
      "Enhances memory",
      "Respiratory relief",
      "Improves digestion"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Diuretic",
      "Analgesic"
    ],
    "diseases": [
      "Fever",
      "Skin infections",
      "Asthma"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Oil Extract"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 38,
    "commonName": "Bibhitaka",
    "scientificName": "Botanica indica vr. 424",
    "herbalUses": [
      "Ayurvedic balancing",
      "Boosts immunity",
      "Purifies blood"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Diuretic",
      "Antipyretic"
    ],
    "diseases": [
      "Arthritis",
      "Anxiety",
      "Fever",
      "Insomnia"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Capsule",
      "Oil Extract"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 39,
    "commonName": "Vidarikanda",
    "scientificName": "Botanica indica vr. 829",
    "herbalUses": [
      "Ayurvedic balancing",
      "Purifies blood",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antibacterial",
      "Antispasmodic",
      "Immunomodulator",
      "Antipyretic"
    ],
    "diseases": [
      "Digestive issues",
      "Arthritis",
      "Diabetes",
      "Asthma"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Oil Extract"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 40,
    "commonName": "Ashoka",
    "scientificName": "Botanica indica vr. 347",
    "herbalUses": [
      "Boosts immunity",
      "Soothes inflammation",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antibacterial",
      "Adaptogenic",
      "Antispasmodic"
    ],
    "diseases": [
      "Liver disorders",
      "Anxiety",
      "Digestive issues",
      "Fever"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 41,
    "commonName": "Sarpagandha",
    "scientificName": "Botanica indica vr. 114",
    "herbalUses": [
      "Ayurvedic balancing",
      "Promotes hair growth",
      "Respiratory relief",
      "Improves digestion"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antioxidant",
      "Anti-inflammatory",
      "Antibacterial"
    ],
    "diseases": [
      "Arthritis",
      "Liver disorders",
      "Digestive issues"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Decoction",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 42,
    "commonName": "Bhringraj",
    "scientificName": "Botanica indica vr. 904",
    "herbalUses": [
      "Boosts immunity",
      "Detoxifies liver",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Antioxidant",
      "Anti-inflammatory",
      "Antibacterial",
      "Antipyretic"
    ],
    "diseases": [
      "Fever",
      "Arthritis",
      "Skin infections"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 43,
    "commonName": "Methi",
    "scientificName": "Botanica indica vr. 46",
    "herbalUses": [
      "Promotes hair growth",
      "Purifies blood",
      "Reduces stress",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antispasmodic",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Arthritis"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Bhasma",
      "Capsule"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 44,
    "commonName": "Karela",
    "scientificName": "Botanica indica vr. 397",
    "herbalUses": [
      "Promotes hair growth",
      "Boosts immunity",
      "Improves digestion"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Adaptogenic",
      "Antioxidant",
      "Immunomodulator"
    ],
    "diseases": [
      "Digestive issues",
      "Arthritis",
      "Liver disorders"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Decoction"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 45,
    "commonName": "Kalmegh",
    "scientificName": "Botanica indica vr. 708",
    "herbalUses": [
      "Reduces stress",
      "Respiratory relief",
      "Improves digestion"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antibacterial",
      "Diuretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Liver disorders",
      "Diabetes",
      "Arthritis"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 46,
    "commonName": "Giloy",
    "scientificName": "Botanica indica vr. 533",
    "herbalUses": [
      "Purifies blood",
      "Boosts immunity",
      "Enhances memory",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-inflammatory",
      "Antispasmodic"
    ],
    "diseases": [
      "Digestive issues",
      "Diabetes",
      "Insomnia",
      "Liver disorders"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Paste",
      "Oil Extract",
      "Bhasma"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 47,
    "commonName": "Safed Musli",
    "scientificName": "Botanica indica vr. 185",
    "herbalUses": [
      "Ayurvedic balancing",
      "Boosts immunity",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Antibacterial",
      "Anti-inflammatory",
      "Antispasmodic"
    ],
    "diseases": [
      "Insomnia",
      "Common cold",
      "Fever",
      "Asthma"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Ayurvedic Churna",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 48,
    "commonName": "Kali Musli",
    "scientificName": "Botanica indica vr. 526",
    "herbalUses": [
      "Promotes hair growth",
      "Ayurvedic balancing",
      "Soothes inflammation",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antispasmodic",
      "Antibacterial"
    ],
    "diseases": [
      "Asthma",
      "Digestive issues",
      "Skin infections"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Paste",
      "Ayurvedic Churna",
      "Decoction"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 49,
    "commonName": "Shilajit",
    "scientificName": "Botanica indica vr. 852",
    "herbalUses": [
      "Boosts immunity",
      "Soothes inflammation",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-inflammatory",
      "Antipyretic"
    ],
    "diseases": [
      "Insomnia",
      "Digestive issues",
      "Liver disorders"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Bhasma",
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 50,
    "commonName": "Triphala Guggul",
    "scientificName": "Botanica indica vr. 832",
    "herbalUses": [
      "Enhances memory",
      "Promotes hair growth",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antispasmodic",
      "Immunomodulator",
      "Antipyretic"
    ],
    "diseases": [
      "Skin infections",
      "Insomnia",
      "Diabetes"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Oil Extract",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 51,
    "commonName": "Dashamoola",
    "scientificName": "Botanica indica vr. 884",
    "herbalUses": [
      "Respiratory relief",
      "Boosts immunity",
      "Purifies blood",
      "Enhances memory"
    ],
    "medicalUses": [
      "Analgesic",
      "Anti-inflammatory",
      "Antioxidant"
    ],
    "diseases": [
      "Skin infections",
      "Liver disorders",
      "Digestive issues",
      "Fever"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 52,
    "commonName": "Chyawanprash herbs",
    "scientificName": "Botanica indica vr. 480",
    "herbalUses": [
      "Improves digestion",
      "Purifies blood",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Diuretic",
      "Antispasmodic",
      "Immunomodulator",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Diabetes",
      "Insomnia",
      "Anxiety"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Oil Extract",
      "Bhasma",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 53,
    "commonName": "Trikatu",
    "scientificName": "Botanica indica vr. 26",
    "herbalUses": [
      "Detoxifies liver",
      "Soothes inflammation",
      "Enhances memory",
      "Improves digestion"
    ],
    "medicalUses": [
      "Diuretic",
      "Immunomodulator",
      "Antioxidant"
    ],
    "diseases": [
      "Liver disorders",
      "Common cold",
      "Fever",
      "Asthma"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 54,
    "commonName": "Hingvastak",
    "scientificName": "Botanica indica vr. 538",
    "herbalUses": [
      "Improves digestion",
      "Respiratory relief",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Diuretic",
      "Antipyretic"
    ],
    "diseases": [
      "Skin infections",
      "Liver disorders",
      "Diabetes"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 55,
    "commonName": "Panchakarma herbs",
    "scientificName": "Botanica indica vr. 718",
    "herbalUses": [
      "Improves digestion",
      "Ayurvedic balancing",
      "Detoxifies liver",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antioxidant",
      "Adaptogenic",
      "Antispasmodic",
      "Antibacterial"
    ],
    "diseases": [
      "Insomnia",
      "Common cold",
      "Asthma"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Bhasma",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 56,
    "commonName": "Rasayana herbs",
    "scientificName": "Botanica indica vr. 395",
    "herbalUses": [
      "Purifies blood",
      "Promotes hair growth",
      "Improves digestion",
      "Enhances memory"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Adaptogenic",
      "Immunomodulator",
      "Antispasmodic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Skin infections"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Decoction",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 57,
    "commonName": "Himalayan Leaf Type 56",
    "scientificName": "Botanica indica vr. 400",
    "herbalUses": [
      "Improves digestion",
      "Purifies blood",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antibacterial",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Fever",
      "Diabetes",
      "Asthma"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 58,
    "commonName": "Himalayan Root Type 57",
    "scientificName": "Botanica indica vr. 321",
    "herbalUses": [
      "Ayurvedic balancing",
      "Improves digestion",
      "Soothes inflammation",
      "Purifies blood"
    ],
    "medicalUses": [
      "Antipyretic",
      "Immunomodulator",
      "Adaptogenic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Insomnia",
      "Digestive issues"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Oil Extract",
      "Paste"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 59,
    "commonName": "Himalayan Leaf Type 58",
    "scientificName": "Botanica indica vr. 930",
    "herbalUses": [
      "Purifies blood",
      "Boosts immunity",
      "Ayurvedic balancing",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Antioxidant",
      "Diuretic",
      "Antibacterial"
    ],
    "diseases": [
      "Diabetes",
      "Arthritis",
      "Digestive issues"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 60,
    "commonName": "Himalayan Vine Type 59",
    "scientificName": "Botanica indica vr. 604",
    "herbalUses": [
      "Detoxifies liver",
      "Respiratory relief",
      "Improves digestion",
      "Ayurvedic balancing"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Diuretic",
      "Anti-inflammatory",
      "Antispasmodic"
    ],
    "diseases": [
      "Diabetes",
      "Liver disorders",
      "Insomnia"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Paste",
      "Bhasma"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 61,
    "commonName": "Himalayan Flower Type 60",
    "scientificName": "Botanica indica vr. 298",
    "herbalUses": [
      "Reduces stress",
      "Respiratory relief",
      "Soothes inflammation",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antipyretic",
      "Diuretic"
    ],
    "diseases": [
      "Digestive issues",
      "Skin infections",
      "Insomnia"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 62,
    "commonName": "Himalayan Flower Type 61",
    "scientificName": "Botanica indica vr. 267",
    "herbalUses": [
      "Enhances memory",
      "Improves digestion",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Diuretic",
      "Antibacterial",
      "Hepatoprotective",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Digestive issues",
      "Insomnia",
      "Anxiety",
      "Skin infections"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 63,
    "commonName": "Himalayan Herb Type 62",
    "scientificName": "Botanica indica vr. 877",
    "herbalUses": [
      "Ayurvedic balancing",
      "Boosts immunity",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Antipyretic",
      "Hepatoprotective",
      "Antioxidant",
      "Adaptogenic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Skin infections"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Paste",
      "Decoction",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 64,
    "commonName": "Himalayan Herb Type 63",
    "scientificName": "Botanica indica vr. 248",
    "herbalUses": [
      "Promotes hair growth",
      "Soothes inflammation",
      "Purifies blood"
    ],
    "medicalUses": [
      "Analgesic",
      "Antipyretic",
      "Antispasmodic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Diabetes",
      "Anxiety",
      "Insomnia",
      "Liver disorders"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Bhasma",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 65,
    "commonName": "Himalayan Leaf Type 64",
    "scientificName": "Botanica indica vr. 273",
    "herbalUses": [
      "Enhances memory",
      "Respiratory relief",
      "Reduces stress"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Antipyretic",
      "Analgesic"
    ],
    "diseases": [
      "Anxiety",
      "Fever",
      "Insomnia"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Paste",
      "Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 66,
    "commonName": "Himalayan Root Type 65",
    "scientificName": "Botanica indica vr. 236",
    "herbalUses": [
      "Reduces stress",
      "Improves digestion",
      "Ayurvedic balancing",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Antioxidant",
      "Diuretic",
      "Adaptogenic"
    ],
    "diseases": [
      "Fever",
      "Diabetes",
      "Digestive issues",
      "Insomnia"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Decoction"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 67,
    "commonName": "Himalayan Flower Type 66",
    "scientificName": "Botanica indica vr. 392",
    "herbalUses": [
      "Reduces stress",
      "Purifies blood",
      "Promotes hair growth",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Immunomodulator",
      "Analgesic"
    ],
    "diseases": [
      "Asthma",
      "Common cold",
      "Anxiety",
      "Diabetes"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 68,
    "commonName": "Himalayan Herb Type 67",
    "scientificName": "Botanica indica vr. 3",
    "herbalUses": [
      "Ayurvedic balancing",
      "Soothes inflammation",
      "Reduces stress",
      "Improves digestion"
    ],
    "medicalUses": [
      "Antipyretic",
      "Hepatoprotective",
      "Antioxidant",
      "Diuretic"
    ],
    "diseases": [
      "Common cold",
      "Diabetes",
      "Skin infections"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Decoction",
      "Bhasma"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 69,
    "commonName": "Himalayan Vine Type 68",
    "scientificName": "Botanica indica vr. 28",
    "herbalUses": [
      "Reduces stress",
      "Detoxifies liver",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antibacterial",
      "Diuretic"
    ],
    "diseases": [
      "Insomnia",
      "Fever",
      "Arthritis",
      "Digestive issues"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 70,
    "commonName": "Himalayan Root Type 69",
    "scientificName": "Botanica indica vr. 7",
    "herbalUses": [
      "Ayurvedic balancing",
      "Boosts immunity",
      "Enhances memory",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Antioxidant",
      "Analgesic",
      "Adaptogenic"
    ],
    "diseases": [
      "Fever",
      "Anxiety",
      "Insomnia"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Bhasma",
      "Decoction"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 71,
    "commonName": "Himalayan Leaf Type 70",
    "scientificName": "Botanica indica vr. 940",
    "herbalUses": [
      "Promotes hair growth",
      "Boosts immunity",
      "Ayurvedic balancing",
      "Enhances memory"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antispasmodic",
      "Analgesic",
      "Diuretic"
    ],
    "diseases": [
      "Diabetes",
      "Common cold",
      "Digestive issues"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 72,
    "commonName": "Himalayan Leaf Type 71",
    "scientificName": "Botanica indica vr. 971",
    "herbalUses": [
      "Improves digestion",
      "Respiratory relief",
      "Ayurvedic balancing",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Diuretic",
      "Anti-inflammatory",
      "Analgesic",
      "Antibacterial"
    ],
    "diseases": [
      "Insomnia",
      "Common cold",
      "Fever"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Oil Extract",
      "Capsule"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 73,
    "commonName": "Himalayan Herb Type 72",
    "scientificName": "Botanica indica vr. 690",
    "herbalUses": [
      "Soothes inflammation",
      "Ayurvedic balancing",
      "Respiratory relief",
      "Purifies blood"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antipyretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Liver disorders",
      "Digestive issues"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Oil Extract",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 74,
    "commonName": "Himalayan Vine Type 73",
    "scientificName": "Botanica indica vr. 644",
    "herbalUses": [
      "Detoxifies liver",
      "Ayurvedic balancing",
      "Improves digestion",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Antibacterial"
    ],
    "diseases": [
      "Asthma",
      "Fever",
      "Diabetes"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Capsule",
      "Oil Extract"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 75,
    "commonName": "Himalayan Berry Type 74",
    "scientificName": "Botanica indica vr. 292",
    "herbalUses": [
      "Boosts immunity",
      "Ayurvedic balancing",
      "Enhances memory"
    ],
    "medicalUses": [
      "Antibacterial",
      "Hepatoprotective",
      "Antipyretic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Liver disorders"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Bhasma",
      "Capsule"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 76,
    "commonName": "Himalayan Herb Type 75",
    "scientificName": "Botanica indica vr. 946",
    "herbalUses": [
      "Promotes hair growth",
      "Improves digestion",
      "Enhances memory"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Analgesic",
      "Diuretic",
      "Antioxidant"
    ],
    "diseases": [
      "Diabetes",
      "Arthritis",
      "Fever",
      "Anxiety"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 77,
    "commonName": "Himalayan Leaf Type 76",
    "scientificName": "Botanica indica vr. 1",
    "herbalUses": [
      "Enhances memory",
      "Reduces stress",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Antioxidant",
      "Analgesic",
      "Antispasmodic"
    ],
    "diseases": [
      "Diabetes",
      "Common cold",
      "Fever",
      "Asthma"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 78,
    "commonName": "Himalayan Herb Type 77",
    "scientificName": "Botanica indica vr. 440",
    "herbalUses": [
      "Reduces stress",
      "Soothes inflammation",
      "Purifies blood",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Antioxidant",
      "Adaptogenic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Anxiety",
      "Common cold",
      "Insomnia",
      "Skin infections"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Ayurvedic Churna",
      "Capsule",
      "Paste"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 79,
    "commonName": "Himalayan Herb Type 78",
    "scientificName": "Botanica indica vr. 358",
    "herbalUses": [
      "Soothes inflammation",
      "Ayurvedic balancing",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antibacterial",
      "Antioxidant"
    ],
    "diseases": [
      "Arthritis",
      "Skin infections",
      "Insomnia"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Bhasma"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 80,
    "commonName": "Himalayan Vine Type 79",
    "scientificName": "Botanica indica vr. 64",
    "herbalUses": [
      "Improves digestion",
      "Purifies blood",
      "Detoxifies liver"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antipyretic",
      "Immunomodulator",
      "Diuretic"
    ],
    "diseases": [
      "Skin infections",
      "Asthma",
      "Digestive issues"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 81,
    "commonName": "Himalayan Root Type 80",
    "scientificName": "Botanica indica vr. 623",
    "herbalUses": [
      "Ayurvedic balancing",
      "Enhances memory",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antioxidant",
      "Adaptogenic",
      "Antispasmodic"
    ],
    "diseases": [
      "Arthritis",
      "Digestive issues",
      "Liver disorders",
      "Fever"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Paste",
      "Oil Extract"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 82,
    "commonName": "Himalayan Flower Type 81",
    "scientificName": "Botanica indica vr. 101",
    "herbalUses": [
      "Ayurvedic balancing",
      "Improves digestion",
      "Enhances memory",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Analgesic",
      "Diuretic",
      "Antioxidant"
    ],
    "diseases": [
      "Diabetes",
      "Common cold",
      "Skin infections"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Herbal Tea",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 83,
    "commonName": "Himalayan Flower Type 82",
    "scientificName": "Botanica indica vr. 328",
    "herbalUses": [
      "Soothes inflammation",
      "Reduces stress",
      "Improves digestion",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Antioxidant",
      "Adaptogenic",
      "Diuretic"
    ],
    "diseases": [
      "Fever",
      "Diabetes",
      "Digestive issues",
      "Skin infections"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 84,
    "commonName": "Himalayan Root Type 83",
    "scientificName": "Botanica indica vr. 241",
    "herbalUses": [
      "Boosts immunity",
      "Respiratory relief",
      "Purifies blood",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Analgesic",
      "Anti-inflammatory",
      "Diuretic"
    ],
    "diseases": [
      "Skin infections",
      "Diabetes",
      "Fever"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Paste",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 85,
    "commonName": "Himalayan Vine Type 84",
    "scientificName": "Botanica indica vr. 734",
    "herbalUses": [
      "Soothes inflammation",
      "Improves digestion",
      "Promotes hair growth",
      "Purifies blood"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Hepatoprotective",
      "Diuretic"
    ],
    "diseases": [
      "Arthritis",
      "Fever",
      "Common cold"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Bhasma",
      "Decoction",
      "Oil Extract"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 86,
    "commonName": "Himalayan Vine Type 85",
    "scientificName": "Botanica indica vr. 587",
    "herbalUses": [
      "Purifies blood",
      "Detoxifies liver",
      "Respiratory relief",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antioxidant",
      "Antibacterial"
    ],
    "diseases": [
      "Anxiety",
      "Skin infections",
      "Diabetes",
      "Arthritis"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 87,
    "commonName": "Himalayan Leaf Type 86",
    "scientificName": "Botanica indica vr. 29",
    "herbalUses": [
      "Promotes hair growth",
      "Soothes inflammation",
      "Respiratory relief"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Diuretic",
      "Antipyretic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Arthritis"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Herbal Tea",
      "Paste"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 88,
    "commonName": "Himalayan Herb Type 87",
    "scientificName": "Botanica indica vr. 637",
    "herbalUses": [
      "Improves digestion",
      "Detoxifies liver",
      "Purifies blood",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Antipyretic",
      "Anti-inflammatory",
      "Antispasmodic"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Asthma",
      "Arthritis"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Oil Extract",
      "Paste"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 89,
    "commonName": "Himalayan Root Type 88",
    "scientificName": "Botanica indica vr. 892",
    "herbalUses": [
      "Enhances memory",
      "Reduces stress",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Analgesic",
      "Antibacterial"
    ],
    "diseases": [
      "Insomnia",
      "Skin infections",
      "Asthma",
      "Arthritis"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 90,
    "commonName": "Himalayan Herb Type 89",
    "scientificName": "Botanica indica vr. 655",
    "herbalUses": [
      "Reduces stress",
      "Improves digestion",
      "Purifies blood"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Diuretic",
      "Adaptogenic",
      "Antioxidant"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Asthma",
      "Insomnia"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Ayurvedic Churna",
      "Paste"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 91,
    "commonName": "Himalayan Herb Type 90",
    "scientificName": "Botanica indica vr. 520",
    "herbalUses": [
      "Improves digestion",
      "Respiratory relief",
      "Purifies blood",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antioxidant",
      "Diuretic"
    ],
    "diseases": [
      "Fever",
      "Insomnia",
      "Skin infections",
      "Asthma"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 92,
    "commonName": "Himalayan Flower Type 91",
    "scientificName": "Botanica indica vr. 136",
    "herbalUses": [
      "Promotes hair growth",
      "Purifies blood",
      "Enhances memory"
    ],
    "medicalUses": [
      "Analgesic",
      "Antioxidant",
      "Adaptogenic"
    ],
    "diseases": [
      "Arthritis",
      "Insomnia",
      "Anxiety",
      "Diabetes"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Bhasma",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 93,
    "commonName": "Himalayan Root Type 92",
    "scientificName": "Botanica indica vr. 64",
    "herbalUses": [
      "Enhances memory",
      "Ayurvedic balancing",
      "Soothes inflammation",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Analgesic",
      "Anti-inflammatory",
      "Immunomodulator"
    ],
    "diseases": [
      "Insomnia",
      "Diabetes",
      "Digestive issues",
      "Fever"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction",
      "Bhasma"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 94,
    "commonName": "Himalayan Herb Type 93",
    "scientificName": "Botanica indica vr. 710",
    "herbalUses": [
      "Ayurvedic balancing",
      "Purifies blood",
      "Promotes hair growth",
      "Improves digestion"
    ],
    "medicalUses": [
      "Antioxidant",
      "Analgesic",
      "Antipyretic"
    ],
    "diseases": [
      "Skin infections",
      "Arthritis",
      "Diabetes"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May lower blood sugar heavily"
    ]
  },
  {
    "id": 95,
    "commonName": "Himalayan Flower Type 94",
    "scientificName": "Botanica indica vr. 343",
    "herbalUses": [
      "Ayurvedic balancing",
      "Boosts immunity",
      "Detoxifies liver",
      "Promotes hair growth"
    ],
    "medicalUses": [
      "Analgesic",
      "Hepatoprotective",
      "Adaptogenic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Common cold",
      "Liver disorders",
      "Arthritis"
    ],
    "habitat": "Grows dynamically in moist, deciduous forests of Kerala. Thrives in direct sunlight.",
    "medicineForm": [
      "Bhasma",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Can cause mild gastric upset"
    ]
  },
  {
    "id": 96,
    "commonName": "Himalayan Berry Type 95",
    "scientificName": "Botanica indica vr. 909",
    "herbalUses": [
      "Improves digestion",
      "Promotes hair growth",
      "Soothes inflammation",
      "Enhances memory"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antipyretic",
      "Antibacterial"
    ],
    "diseases": [
      "Skin infections",
      "Liver disorders",
      "Arthritis",
      "Asthma"
    ],
    "habitat": "Native to the Himalayan foothills and tropical regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Decoction"
    ],
    "sideEffects": [
      "Do not use during pregnancy"
    ]
  },
  {
    "id": 97,
    "commonName": "Himalayan Berry Type 96",
    "scientificName": "Botanica indica vr. 876",
    "herbalUses": [
      "Purifies blood",
      "Enhances memory",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Analgesic",
      "Antibacterial"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Arthritis",
      "Insomnia"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Thrives in direct sunlight.",
    "medicineForm": [
      "Oil Extract",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 98,
    "commonName": "Himalayan Herb Type 97",
    "scientificName": "Botanica indica vr. 729",
    "herbalUses": [
      "Ayurvedic balancing",
      "Enhances memory",
      "Promotes hair growth",
      "Boosts immunity"
    ],
    "medicalUses": [
      "Antioxidant",
      "Adaptogenic",
      "Antipyretic",
      "Immunomodulator"
    ],
    "diseases": [
      "Fever",
      "Liver disorders",
      "Insomnia"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Thrives in direct sunlight.",
    "medicineForm": [
      "Paste",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 99,
    "commonName": "Himalayan Leaf Type 98",
    "scientificName": "Botanica indica vr. 820",
    "herbalUses": [
      "Enhances memory",
      "Boosts immunity",
      "Promotes hair growth",
      "Improves digestion"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antispasmodic",
      "Anti-inflammatory",
      "Diuretic"
    ],
    "diseases": [
      "Digestive issues",
      "Fever",
      "Skin infections",
      "Common cold"
    ],
    "habitat": "Cultivated widely across the Indian subcontinent. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid in high Pitta states"
    ]
  },
  {
    "id": 100,
    "commonName": "Himalayan Berry Type 99",
    "scientificName": "Botanica indica vr. 786",
    "herbalUses": [
      "Improves digestion",
      "Respiratory relief",
      "Ayurvedic balancing",
      "Soothes inflammation"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antispasmodic",
      "Antipyretic",
      "Antioxidant"
    ],
    "diseases": [
      "Common cold",
      "Fever",
      "Asthma",
      "Insomnia"
    ],
    "habitat": "Found locally in arid and semi-arid regions of Rajasthan. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Ayurvedic Churna"
    ],
    "sideEffects": [
      "Slight sedative effect"
    ]
  },
  {
    "id": 101,
    "commonName": "Ginseng",
    "scientificName": "Botanica sinensis vr. 58",
    "herbalUses": [
      "Invigorates blood",
      "Nourishes deeply",
      "Balances Qi",
      "Clears heat"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Vasodilator",
      "Anti-aging"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Liver toxicity",
      "Poor circulation"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Herbal pill"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 102,
    "commonName": "Astragalus",
    "scientificName": "Botanica sinensis vr. 705",
    "herbalUses": [
      "Dispels dampness",
      "Clears heat",
      "Nourishes deeply",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Antiviral",
      "Anti-aging",
      "Cardioprotective"
    ],
    "diseases": [
      "Cognitive decline",
      "Viral infections",
      "Heart palpitations",
      "Liver toxicity"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "Tincture"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 103,
    "commonName": "Reishi Mushroom",
    "scientificName": "Botanica sinensis vr. 983",
    "herbalUses": [
      "Invigorates blood",
      "Balances Qi",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Antioxidant",
      "Vasodilator",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Heart palpitations",
      "Kidney deficiency",
      "Fatigue"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal pill",
      "Powder",
      "Plaster"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 104,
    "commonName": "Cordyceps",
    "scientificName": "Botanica sinensis vr. 730",
    "herbalUses": [
      "Nourishes deeply",
      "Balances Qi",
      "Supports longevity"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Hypoglycemic",
      "Antiviral"
    ],
    "diseases": [
      "Fatigue",
      "Anemia",
      "Liver toxicity"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Plaster",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 105,
    "commonName": "Schisandra",
    "scientificName": "Botanica sinensis vr. 389",
    "herbalUses": [
      "Calms Shen",
      "Dispels dampness",
      "Tonifies Yin",
      "Warms meridians"
    ],
    "medicalUses": [
      "Antioxidant",
      "Vasodilator",
      "Immunostimulant"
    ],
    "diseases": [
      "Anemia",
      "Liver toxicity",
      "Hypertension",
      "Night sweats"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Herbal pill",
      "Soup additive"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 106,
    "commonName": "Dong Quai",
    "scientificName": "Botanica sinensis vr. 828",
    "herbalUses": [
      "Invigorates blood",
      "Boosts vitality",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Anti-aging",
      "Cardioprotective"
    ],
    "diseases": [
      "Kidney deficiency",
      "Fatigue",
      "Liver toxicity"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Herbal pill"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 107,
    "commonName": "Goji Berry",
    "scientificName": "Botanica sinensis vr. 48",
    "herbalUses": [
      "Calms Shen",
      "Dispels dampness",
      "Boosts vitality",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Hepatoprotective",
      "Hypoglycemic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Kidney deficiency",
      "Liver toxicity",
      "Viral infections",
      "Fatigue"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "TCM Decoction",
      "Extract"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 108,
    "commonName": "Chrysanthemum",
    "scientificName": "Botanica sinensis vr. 875",
    "herbalUses": [
      "Boosts vitality",
      "Invigorates blood",
      "Supports longevity",
      "Clears heat"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Antiviral",
      "Hypoglycemic"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Cognitive decline"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Herbal pill",
      "Plaster"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 109,
    "commonName": "Licorice Root Chinese",
    "scientificName": "Botanica sinensis vr. 316",
    "herbalUses": [
      "Dispels dampness",
      "Clears heat",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Vasodilator",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Night sweats",
      "Liver toxicity",
      "Viral infections",
      "Anemia"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Herbal pill",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 110,
    "commonName": "Rehmannia",
    "scientificName": "Botanica sinensis vr. 946",
    "herbalUses": [
      "Clears heat",
      "Dispels dampness",
      "Balances Qi",
      "Warms meridians"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Immunostimulant",
      "Antioxidant"
    ],
    "diseases": [
      "Heart palpitations",
      "Liver toxicity",
      "Cognitive decline"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Soup additive",
      "Plaster"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 111,
    "commonName": "Peony Root",
    "scientificName": "Botanica sinensis vr. 424",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Warms meridians"
    ],
    "medicalUses": [
      "Antioxidant",
      "Vasodilator",
      "Hypoglycemic"
    ],
    "diseases": [
      "Hypertension",
      "Liver toxicity",
      "Fatigue"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Extract",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 112,
    "commonName": "Coptis",
    "scientificName": "Botanica sinensis vr. 773",
    "herbalUses": [
      "Warms meridians",
      "Clears heat",
      "Invigorates blood"
    ],
    "medicalUses": [
      "Hypoglycemic",
      "Neuroprotective",
      "Vasodilator",
      "Hepatoprotective"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Anemia",
      "Viral infections"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 113,
    "commonName": "Phellodendron",
    "scientificName": "Botanica sinensis vr. 323",
    "herbalUses": [
      "Supports longevity",
      "Calms Shen",
      "Warms meridians"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Anti-aging",
      "Immunostimulant"
    ],
    "diseases": [
      "Poor circulation",
      "Hypertension",
      "Cognitive decline",
      "Anemia"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Herbal pill"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 114,
    "commonName": "Magnolia Bark",
    "scientificName": "Botanica sinensis vr. 69",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Supports longevity"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Vasodilator",
      "Hypoglycemic"
    ],
    "diseases": [
      "Cognitive decline",
      "Liver toxicity",
      "Anemia"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Extract"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 115,
    "commonName": "Acanthopanax",
    "scientificName": "Botanica sinensis vr. 237",
    "herbalUses": [
      "Boosts vitality",
      "Dispels dampness",
      "Warms meridians",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Immunostimulant",
      "Anti-inflammatory",
      "Hypoglycemic"
    ],
    "diseases": [
      "Hypertension",
      "Liver toxicity",
      "Heart palpitations",
      "Kidney deficiency"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Soup additive",
      "Extract"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 116,
    "commonName": "Atractylodes",
    "scientificName": "Botanica sinensis vr. 922",
    "herbalUses": [
      "Clears heat",
      "Invigorates blood",
      "Dispels dampness",
      "Calms Shen"
    ],
    "medicalUses": [
      "Vasodilator",
      "Anti-aging",
      "Neuroprotective",
      "Immunostimulant"
    ],
    "diseases": [
      "Heart palpitations",
      "Hypertension",
      "Kidney deficiency"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Powder",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 117,
    "commonName": "Codonopsis",
    "scientificName": "Botanica sinensis vr. 667",
    "herbalUses": [
      "Dispels dampness",
      "Invigorates blood",
      "Tonifies Yin",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Vasodilator",
      "Neuroprotective"
    ],
    "diseases": [
      "Heart palpitations",
      "Cognitive decline",
      "Viral infections",
      "Kidney deficiency"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Powder"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 118,
    "commonName": "Dioscorea",
    "scientificName": "Botanica sinensis vr. 953",
    "herbalUses": [
      "Dispels dampness",
      "Clears heat",
      "Invigorates blood"
    ],
    "medicalUses": [
      "Anti-aging",
      "Cardioprotective",
      "Vasodilator"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Hypertension",
      "Viral infections"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Herbal pill"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 119,
    "commonName": "Evodia",
    "scientificName": "Botanica sinensis vr. 237",
    "herbalUses": [
      "Supports longevity",
      "Invigorates blood",
      "Warms meridians"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Hepatoprotective",
      "Vasodilator",
      "Antioxidant"
    ],
    "diseases": [
      "Fatigue",
      "Poor circulation",
      "Heart palpitations",
      "Hypertension"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "Plaster",
      "TCM Decoction",
      "Extract"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 120,
    "commonName": "Fritillaria",
    "scientificName": "Botanica sinensis vr. 921",
    "herbalUses": [
      "Dispels dampness",
      "Clears heat",
      "Invigorates blood"
    ],
    "medicalUses": [
      "Antiviral",
      "Hypoglycemic",
      "Cardioprotective",
      "Antioxidant"
    ],
    "diseases": [
      "Fatigue",
      "Anemia",
      "Viral infections"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Tincture"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 121,
    "commonName": "Gentiana",
    "scientificName": "Botanica sinensis vr. 961",
    "herbalUses": [
      "Balances Qi",
      "Dispels dampness",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Vasodilator",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Heart palpitations",
      "Cognitive decline",
      "Poor circulation"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "Plaster",
      "Powder",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 122,
    "commonName": "Houttuynia",
    "scientificName": "Botanica sinensis vr. 554",
    "herbalUses": [
      "Invigorates blood",
      "Dispels dampness",
      "Supports longevity"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Cardioprotective",
      "Anti-inflammatory",
      "Hypoglycemic"
    ],
    "diseases": [
      "Fatigue",
      "Night sweats",
      "Viral infections"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "TCM Decoction",
      "Powder"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 123,
    "commonName": "Isatis",
    "scientificName": "Botanica sinensis vr. 65",
    "herbalUses": [
      "Supports longevity",
      "Nourishes deeply",
      "Balances Qi",
      "Warms meridians"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Antioxidant",
      "Antiviral"
    ],
    "diseases": [
      "Viral infections",
      "Heart palpitations",
      "Fatigue"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Tincture"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 124,
    "commonName": "Lonicera",
    "scientificName": "Botanica sinensis vr. 292",
    "herbalUses": [
      "Balances Qi",
      "Calms Shen",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Anti-aging",
      "Neuroprotective"
    ],
    "diseases": [
      "Hypertension",
      "Heart palpitations",
      "Anemia"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Tincture",
      "Soup additive"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 125,
    "commonName": "Lycium",
    "scientificName": "Botanica sinensis vr. 74",
    "herbalUses": [
      "Calms Shen",
      "Clears heat",
      "Invigorates blood",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Antioxidant",
      "Vasodilator",
      "Cardioprotective",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Fatigue",
      "Anemia",
      "Kidney deficiency"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Extract"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 126,
    "commonName": "Ophiopogon",
    "scientificName": "Botanica sinensis vr. 344",
    "herbalUses": [
      "Nourishes deeply",
      "Balances Qi",
      "Warms meridians",
      "Invigorates blood"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Viral infections",
      "Cognitive decline",
      "Poor circulation",
      "Night sweats"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 127,
    "commonName": "Pinellia",
    "scientificName": "Botanica sinensis vr. 43",
    "herbalUses": [
      "Invigorates blood",
      "Calms Shen",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Vasodilator",
      "Antioxidant"
    ],
    "diseases": [
      "Cognitive decline",
      "Liver toxicity",
      "Hypertension"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Soup additive"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 128,
    "commonName": "Platycodon",
    "scientificName": "Botanica sinensis vr. 964",
    "herbalUses": [
      "Warms meridians",
      "Supports longevity",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Vasodilator",
      "Immunostimulant",
      "Antiviral",
      "Antioxidant"
    ],
    "diseases": [
      "Anemia",
      "Fatigue",
      "Liver toxicity",
      "Heart palpitations"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 129,
    "commonName": "Polygala",
    "scientificName": "Botanica sinensis vr. 828",
    "herbalUses": [
      "Clears heat",
      "Invigorates blood",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Hypoglycemic"
    ],
    "diseases": [
      "Kidney deficiency",
      "Liver toxicity",
      "Night sweats",
      "Cognitive decline"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "TCM Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 130,
    "commonName": "Poria",
    "scientificName": "Botanica sinensis vr. 590",
    "herbalUses": [
      "Clears heat",
      "Calms Shen",
      "Warms meridians"
    ],
    "medicalUses": [
      "Vasodilator",
      "Antiviral",
      "Anti-inflammatory",
      "Hypoglycemic"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Hypertension"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Herbal pill",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 131,
    "commonName": "Salvia Chinese",
    "scientificName": "Botanica sinensis vr. 628",
    "herbalUses": [
      "Invigorates blood",
      "Nourishes deeply",
      "Warms meridians",
      "Balances Qi"
    ],
    "medicalUses": [
      "Antioxidant",
      "Immunostimulant",
      "Antiviral",
      "Hypoglycemic"
    ],
    "diseases": [
      "Liver toxicity",
      "Hypertension",
      "Cognitive decline",
      "Heart palpitations"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal pill",
      "Powder"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 132,
    "commonName": "Schizonepeta",
    "scientificName": "Botanica sinensis vr. 450",
    "herbalUses": [
      "Clears heat",
      "Calms Shen",
      "Tonifies Yin",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Vasodilator",
      "Antiviral",
      "Hypoglycemic",
      "Antioxidant"
    ],
    "diseases": [
      "Liver toxicity",
      "Poor circulation",
      "Kidney deficiency"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal pill",
      "Soup additive",
      "Extract"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 133,
    "commonName": "Scutellaria Chinese",
    "scientificName": "Botanica sinensis vr. 568",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Antiviral",
      "Cardioprotective"
    ],
    "diseases": [
      "Anemia",
      "Liver toxicity",
      "Kidney deficiency"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "TCM Decoction",
      "Powder"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 134,
    "commonName": "Stephania",
    "scientificName": "Botanica sinensis vr. 803",
    "herbalUses": [
      "Clears heat",
      "Balances Qi",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Antioxidant",
      "Cardioprotective",
      "Immunostimulant"
    ],
    "diseases": [
      "Hypertension",
      "Liver toxicity",
      "Kidney deficiency",
      "Poor circulation"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Herbal pill"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 135,
    "commonName": "Tribulus Chinese",
    "scientificName": "Botanica sinensis vr. 663",
    "herbalUses": [
      "Warms meridians",
      "Invigorates blood",
      "Balances Qi"
    ],
    "medicalUses": [
      "Vasodilator",
      "Antiviral",
      "Cardioprotective",
      "Anti-aging"
    ],
    "diseases": [
      "Night sweats",
      "Cognitive decline",
      "Viral infections"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "TCM Decoction",
      "Powder",
      "Plaster"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 136,
    "commonName": "Uncaria",
    "scientificName": "Botanica sinensis vr. 482",
    "herbalUses": [
      "Clears heat",
      "Tonifies Yin",
      "Invigorates blood"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Anti-aging",
      "Antioxidant",
      "Hypoglycemic"
    ],
    "diseases": [
      "Anemia",
      "Cognitive decline",
      "Night sweats",
      "Hypertension"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 137,
    "commonName": "Ziziphus",
    "scientificName": "Botanica sinensis vr. 506",
    "herbalUses": [
      "Supports longevity",
      "Tonifies Yin",
      "Clears heat",
      "Warms meridians"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Neuroprotective",
      "Antiviral"
    ],
    "diseases": [
      "Fatigue",
      "Cognitive decline",
      "Poor circulation",
      "Heart palpitations"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Soup additive"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 138,
    "commonName": "Sichuan Stalk Type 37",
    "scientificName": "Botanica sinensis vr. 65",
    "herbalUses": [
      "Invigorates blood",
      "Supports longevity",
      "Nourishes deeply",
      "Balances Qi"
    ],
    "medicalUses": [
      "Anti-aging",
      "Cardioprotective",
      "Antioxidant",
      "Hypoglycemic"
    ],
    "diseases": [
      "Liver toxicity",
      "Viral infections",
      "Kidney deficiency"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Soup additive"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 139,
    "commonName": "Sichuan Vine Type 38",
    "scientificName": "Botanica sinensis vr. 241",
    "herbalUses": [
      "Clears heat",
      "Nourishes deeply",
      "Invigorates blood"
    ],
    "medicalUses": [
      "Anti-aging",
      "Cardioprotective",
      "Antioxidant"
    ],
    "diseases": [
      "Poor circulation",
      "Anemia",
      "Hypertension",
      "Fatigue"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 140,
    "commonName": "Sichuan Stalk Type 39",
    "scientificName": "Botanica sinensis vr. 828",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Invigorates blood",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Vasodilator",
      "Neuroprotective",
      "Cardioprotective",
      "Hypoglycemic"
    ],
    "diseases": [
      "Viral infections",
      "Night sweats",
      "Hypertension",
      "Liver toxicity"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Plaster",
      "Tincture"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 141,
    "commonName": "Sichuan Root Type 40",
    "scientificName": "Botanica sinensis vr. 286",
    "herbalUses": [
      "Balances Qi",
      "Warms meridians",
      "Supports longevity"
    ],
    "medicalUses": [
      "Antioxidant",
      "Anti-aging",
      "Vasodilator"
    ],
    "diseases": [
      "Heart palpitations",
      "Hypertension",
      "Anemia"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "TCM Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 142,
    "commonName": "Sichuan Bark Type 41",
    "scientificName": "Botanica sinensis vr. 189",
    "herbalUses": [
      "Calms Shen",
      "Balances Qi",
      "Clears heat"
    ],
    "medicalUses": [
      "Anti-aging",
      "Cardioprotective",
      "Vasodilator",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Anemia",
      "Night sweats",
      "Viral infections",
      "Fatigue"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Soup additive",
      "Herbal pill"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 143,
    "commonName": "Sichuan Root Type 42",
    "scientificName": "Botanica sinensis vr. 581",
    "herbalUses": [
      "Calms Shen",
      "Invigorates blood",
      "Supports longevity",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Antioxidant",
      "Cardioprotective",
      "Hepatoprotective"
    ],
    "diseases": [
      "Poor circulation",
      "Night sweats",
      "Cognitive decline",
      "Heart palpitations"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Soup additive",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 144,
    "commonName": "Sichuan Bark Type 43",
    "scientificName": "Botanica sinensis vr. 587",
    "herbalUses": [
      "Calms Shen",
      "Balances Qi",
      "Clears heat",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Antiviral",
      "Hepatoprotective",
      "Anti-aging",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Cognitive decline",
      "Liver toxicity",
      "Anemia",
      "Viral infections"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Soup additive"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 145,
    "commonName": "Sichuan Bark Type 44",
    "scientificName": "Botanica sinensis vr. 364",
    "herbalUses": [
      "Nourishes deeply",
      "Balances Qi",
      "Supports longevity"
    ],
    "medicalUses": [
      "Antiviral",
      "Antioxidant",
      "Hypoglycemic"
    ],
    "diseases": [
      "Night sweats",
      "Poor circulation",
      "Hypertension",
      "Viral infections"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Plaster",
      "Extract",
      "Herbal pill"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 146,
    "commonName": "Sichuan Seed Type 45",
    "scientificName": "Botanica sinensis vr. 703",
    "herbalUses": [
      "Nourishes deeply",
      "Balances Qi",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Anti-aging",
      "Vasodilator",
      "Antiviral"
    ],
    "diseases": [
      "Liver toxicity",
      "Fatigue",
      "Kidney deficiency",
      "Cognitive decline"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Extract",
      "Tincture"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 147,
    "commonName": "Sichuan Root Type 46",
    "scientificName": "Botanica sinensis vr. 167",
    "herbalUses": [
      "Calms Shen",
      "Balances Qi",
      "Tonifies Yin",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Vasodilator",
      "Hypoglycemic",
      "Neuroprotective"
    ],
    "diseases": [
      "Hypertension",
      "Heart palpitations",
      "Liver toxicity"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Tincture",
      "TCM Decoction"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 148,
    "commonName": "Sichuan Vine Type 47",
    "scientificName": "Botanica sinensis vr. 456",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Anti-aging",
      "Immunostimulant",
      "Neuroprotective",
      "Hepatoprotective"
    ],
    "diseases": [
      "Fatigue",
      "Cognitive decline",
      "Kidney deficiency",
      "Liver toxicity"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "TCM Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 149,
    "commonName": "Sichuan Bark Type 48",
    "scientificName": "Botanica sinensis vr. 885",
    "herbalUses": [
      "Supports longevity",
      "Clears heat",
      "Dispels dampness",
      "Balances Qi"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Anti-inflammatory",
      "Antiviral"
    ],
    "diseases": [
      "Night sweats",
      "Hypertension",
      "Anemia"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "Extract",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 150,
    "commonName": "Sichuan Vine Type 49",
    "scientificName": "Botanica sinensis vr. 817",
    "herbalUses": [
      "Invigorates blood",
      "Tonifies Yin",
      "Balances Qi",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Antioxidant",
      "Anti-aging",
      "Antiviral",
      "Immunostimulant"
    ],
    "diseases": [
      "Heart palpitations",
      "Poor circulation",
      "Hypertension"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "Tincture"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 151,
    "commonName": "Sichuan Fungus Type 50",
    "scientificName": "Botanica sinensis vr. 884",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Hypoglycemic",
      "Anti-aging",
      "Antioxidant"
    ],
    "diseases": [
      "Viral infections",
      "Anemia",
      "Night sweats"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 152,
    "commonName": "Sichuan Root Type 51",
    "scientificName": "Botanica sinensis vr. 699",
    "herbalUses": [
      "Boosts vitality",
      "Dispels dampness",
      "Balances Qi"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-aging",
      "Hypoglycemic",
      "Immunostimulant"
    ],
    "diseases": [
      "Liver toxicity",
      "Night sweats",
      "Viral infections"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Powder",
      "Soup additive"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 153,
    "commonName": "Sichuan Stalk Type 52",
    "scientificName": "Botanica sinensis vr. 806",
    "herbalUses": [
      "Invigorates blood",
      "Clears heat",
      "Tonifies Yin",
      "Calms Shen"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Neuroprotective",
      "Cardioprotective",
      "Vasodilator"
    ],
    "diseases": [
      "Kidney deficiency",
      "Viral infections",
      "Night sweats"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal pill",
      "Soup additive"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 154,
    "commonName": "Sichuan Stalk Type 53",
    "scientificName": "Botanica sinensis vr. 256",
    "herbalUses": [
      "Boosts vitality",
      "Balances Qi",
      "Invigorates blood",
      "Clears heat"
    ],
    "medicalUses": [
      "Anti-aging",
      "Antiviral",
      "Immunostimulant",
      "Vasodilator"
    ],
    "diseases": [
      "Viral infections",
      "Hypertension",
      "Cognitive decline"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Herbal pill"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 155,
    "commonName": "Sichuan Root Type 54",
    "scientificName": "Botanica sinensis vr. 760",
    "herbalUses": [
      "Warms meridians",
      "Clears heat",
      "Invigorates blood",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Antiviral",
      "Immunostimulant",
      "Vasodilator"
    ],
    "diseases": [
      "Anemia",
      "Heart palpitations",
      "Fatigue"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Extract",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 156,
    "commonName": "Sichuan Bark Type 55",
    "scientificName": "Botanica sinensis vr. 909",
    "herbalUses": [
      "Supports longevity",
      "Boosts vitality",
      "Balances Qi",
      "Calms Shen"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Immunostimulant",
      "Antiviral",
      "Hepatoprotective"
    ],
    "diseases": [
      "Viral infections",
      "Poor circulation",
      "Hypertension"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "Herbal pill"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 157,
    "commonName": "Sichuan Fungus Type 56",
    "scientificName": "Botanica sinensis vr. 551",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Calms Shen",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Anti-aging",
      "Immunostimulant",
      "Antioxidant"
    ],
    "diseases": [
      "Fatigue",
      "Viral infections",
      "Anemia",
      "Liver toxicity"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "TCM Decoction",
      "Extract",
      "Powder"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 158,
    "commonName": "Sichuan Fungus Type 57",
    "scientificName": "Botanica sinensis vr. 388",
    "herbalUses": [
      "Dispels dampness",
      "Warms meridians",
      "Supports longevity"
    ],
    "medicalUses": [
      "Anti-aging",
      "Antioxidant",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Viral infections",
      "Anemia",
      "Fatigue",
      "Heart palpitations"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "TCM Decoction",
      "Plaster"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 159,
    "commonName": "Sichuan Fungus Type 58",
    "scientificName": "Botanica sinensis vr. 185",
    "herbalUses": [
      "Calms Shen",
      "Invigorates blood",
      "Tonifies Yin",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Immunostimulant",
      "Hepatoprotective",
      "Antiviral"
    ],
    "diseases": [
      "Viral infections",
      "Heart palpitations",
      "Hypertension"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal pill",
      "TCM Decoction",
      "Extract"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 160,
    "commonName": "Sichuan Vine Type 59",
    "scientificName": "Botanica sinensis vr. 211",
    "herbalUses": [
      "Boosts vitality",
      "Tonifies Yin",
      "Supports longevity",
      "Clears heat"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunostimulant",
      "Hepatoprotective",
      "Antiviral"
    ],
    "diseases": [
      "Poor circulation",
      "Hypertension",
      "Kidney deficiency"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Soup additive"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 161,
    "commonName": "Sichuan Root Type 60",
    "scientificName": "Botanica sinensis vr. 352",
    "herbalUses": [
      "Calms Shen",
      "Dispels dampness",
      "Boosts vitality",
      "Balances Qi"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Antiviral",
      "Hypoglycemic"
    ],
    "diseases": [
      "Poor circulation",
      "Liver toxicity",
      "Anemia"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal pill",
      "TCM Decoction",
      "Soup additive"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 162,
    "commonName": "Sichuan Stalk Type 61",
    "scientificName": "Botanica sinensis vr. 130",
    "herbalUses": [
      "Invigorates blood",
      "Clears heat",
      "Tonifies Yin",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Antioxidant",
      "Neuroprotective",
      "Cardioprotective",
      "Hepatoprotective"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Night sweats"
    ],
    "habitat": "Cultivated globally but native to East Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Tincture"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 163,
    "commonName": "Sichuan Root Type 62",
    "scientificName": "Botanica sinensis vr. 899",
    "herbalUses": [
      "Dispels dampness",
      "Calms Shen",
      "Balances Qi"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunostimulant",
      "Hypoglycemic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Fatigue",
      "Hypertension",
      "Viral infections"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Soup additive",
      "Herbal pill"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 164,
    "commonName": "Sichuan Bark Type 63",
    "scientificName": "Botanica sinensis vr. 370",
    "herbalUses": [
      "Tonifies Yin",
      "Clears heat",
      "Supports longevity",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Hypoglycemic",
      "Antioxidant"
    ],
    "diseases": [
      "Fatigue",
      "Hypertension",
      "Cognitive decline"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "TCM Decoction",
      "Powder"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 165,
    "commonName": "Sichuan Seed Type 64",
    "scientificName": "Botanica sinensis vr. 535",
    "herbalUses": [
      "Calms Shen",
      "Invigorates blood",
      "Clears heat",
      "Boosts vitality"
    ],
    "medicalUses": [
      "Vasodilator",
      "Antiviral",
      "Cardioprotective"
    ],
    "diseases": [
      "Liver toxicity",
      "Night sweats",
      "Kidney deficiency"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "TCM Decoction",
      "Soup additive"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 166,
    "commonName": "Sichuan Bark Type 65",
    "scientificName": "Botanica sinensis vr. 795",
    "herbalUses": [
      "Calms Shen",
      "Balances Qi",
      "Supports longevity"
    ],
    "medicalUses": [
      "Hypoglycemic",
      "Cardioprotective",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Anemia",
      "Hypertension"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Extract",
      "Tincture"
    ],
    "sideEffects": [
      "Not for use during acute colds"
    ]
  },
  {
    "id": 167,
    "commonName": "Sichuan Fungus Type 66",
    "scientificName": "Botanica sinensis vr. 683",
    "herbalUses": [
      "Balances Qi",
      "Clears heat",
      "Supports longevity",
      "Warms meridians"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Antiviral",
      "Anti-aging",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Heart palpitations",
      "Poor circulation",
      "Kidney deficiency"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Herbal pill"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 168,
    "commonName": "Sichuan Seed Type 67",
    "scientificName": "Botanica sinensis vr. 109",
    "herbalUses": [
      "Warms meridians",
      "Tonifies Yin",
      "Calms Shen"
    ],
    "medicalUses": [
      "Anti-aging",
      "Vasodilator",
      "Neuroprotective"
    ],
    "diseases": [
      "Kidney deficiency",
      "Anemia",
      "Cognitive decline"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Plaster",
      "Herbal pill"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 169,
    "commonName": "Sichuan Bark Type 68",
    "scientificName": "Botanica sinensis vr. 132",
    "herbalUses": [
      "Supports longevity",
      "Balances Qi",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Vasodilator",
      "Hepatoprotective",
      "Antiviral"
    ],
    "diseases": [
      "Cognitive decline",
      "Night sweats",
      "Heart palpitations"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Plaster",
      "Tincture",
      "Herbal pill"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 170,
    "commonName": "Sichuan Bark Type 69",
    "scientificName": "Botanica sinensis vr. 66",
    "herbalUses": [
      "Tonifies Yin",
      "Warms meridians",
      "Balances Qi"
    ],
    "medicalUses": [
      "Antioxidant",
      "Cardioprotective",
      "Immunostimulant"
    ],
    "diseases": [
      "Cognitive decline",
      "Viral infections",
      "Fatigue",
      "Anemia"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Tincture",
      "TCM Decoction"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 171,
    "commonName": "Sichuan Fungus Type 70",
    "scientificName": "Botanica sinensis vr. 490",
    "herbalUses": [
      "Balances Qi",
      "Clears heat",
      "Supports longevity",
      "Warms meridians"
    ],
    "medicalUses": [
      "Vasodilator",
      "Antiviral",
      "Neuroprotective"
    ],
    "diseases": [
      "Hypertension",
      "Cognitive decline",
      "Viral infections"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Soup additive",
      "Herbal pill"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 172,
    "commonName": "Sichuan Vine Type 71",
    "scientificName": "Botanica sinensis vr. 4",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Vasodilator",
      "Immunostimulant",
      "Hypoglycemic"
    ],
    "diseases": [
      "Anemia",
      "Viral infections",
      "Night sweats"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Requires well-drained soil.",
    "medicineForm": [
      "TCM Decoction",
      "Extract",
      "Powder"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 173,
    "commonName": "Sichuan Fungus Type 72",
    "scientificName": "Botanica sinensis vr. 898",
    "herbalUses": [
      "Calms Shen",
      "Clears heat",
      "Nourishes deeply"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hypoglycemic",
      "Vasodilator"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Anemia"
    ],
    "habitat": "Native to mountainous provinces of central China. Requires well-drained soil.",
    "medicineForm": [
      "Plaster",
      "Powder",
      "Herbal pill"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 174,
    "commonName": "Sichuan Fungus Type 73",
    "scientificName": "Botanica sinensis vr. 952",
    "herbalUses": [
      "Calms Shen",
      "Warms meridians",
      "Supports longevity"
    ],
    "medicalUses": [
      "Cardioprotective",
      "Vasodilator",
      "Anti-aging",
      "Antiviral"
    ],
    "diseases": [
      "Viral infections",
      "Fatigue",
      "Liver toxicity"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Extract"
    ],
    "sideEffects": [
      "Avoid with heavy dampness"
    ]
  },
  {
    "id": 175,
    "commonName": "Sichuan Root Type 74",
    "scientificName": "Botanica sinensis vr. 98",
    "herbalUses": [
      "Dispels dampness",
      "Invigorates blood",
      "Clears heat"
    ],
    "medicalUses": [
      "Hypoglycemic",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Heart palpitations",
      "Night sweats",
      "Viral infections",
      "Kidney deficiency"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "TCM Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "Can interact with blood thinners"
    ]
  },
  {
    "id": 176,
    "commonName": "Sichuan Root Type 75",
    "scientificName": "Botanica sinensis vr. 305",
    "herbalUses": [
      "Balances Qi",
      "Calms Shen",
      "Nourishes deeply",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Vasodilator",
      "Cardioprotective",
      "Antiviral",
      "Hypoglycemic"
    ],
    "diseases": [
      "Cognitive decline",
      "Hypertension",
      "Kidney deficiency",
      "Poor circulation"
    ],
    "habitat": "Grows in ancient shaded valleys of the Sichuan basin. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 177,
    "commonName": "Sichuan Fungus Type 76",
    "scientificName": "Botanica sinensis vr. 661",
    "herbalUses": [
      "Balances Qi",
      "Nourishes deeply",
      "Supports longevity",
      "Clears heat"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Antiviral"
    ],
    "diseases": [
      "Heart palpitations",
      "Anemia",
      "Hypertension"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Tincture"
    ],
    "sideEffects": [
      "May cause dry mouth"
    ]
  },
  {
    "id": 178,
    "commonName": "Sichuan Seed Type 77",
    "scientificName": "Botanica sinensis vr. 315",
    "herbalUses": [
      "Boosts vitality",
      "Invigorates blood",
      "Clears heat"
    ],
    "medicalUses": [
      "Anti-aging",
      "Hypoglycemic",
      "Antioxidant"
    ],
    "diseases": [
      "Hypertension",
      "Cognitive decline",
      "Night sweats"
    ],
    "habitat": "Native to mountainous provinces of central China. Thrives in direct sunlight.",
    "medicineForm": [
      "TCM Decoction",
      "Extract",
      "Plaster"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 179,
    "commonName": "Sichuan Stalk Type 78",
    "scientificName": "Botanica sinensis vr. 332",
    "herbalUses": [
      "Boosts vitality",
      "Supports longevity",
      "Dispels dampness"
    ],
    "medicalUses": [
      "Anti-aging",
      "Cardioprotective",
      "Vasodilator",
      "Immunostimulant"
    ],
    "diseases": [
      "Fatigue",
      "Heart palpitations",
      "Hypertension",
      "Viral infections"
    ],
    "habitat": "Cultivated globally but native to East Asia. Requires well-drained soil.",
    "medicineForm": [
      "Soup additive",
      "Tincture"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 180,
    "commonName": "Sichuan Seed Type 79",
    "scientificName": "Botanica sinensis vr. 649",
    "herbalUses": [
      "Balances Qi",
      "Supports longevity",
      "Calms Shen",
      "Tonifies Yin"
    ],
    "medicalUses": [
      "Neuroprotective",
      "Antiviral",
      "Cardioprotective"
    ],
    "diseases": [
      "Cognitive decline",
      "Liver toxicity",
      "Anemia",
      "Viral infections"
    ],
    "habitat": "Thrives in subtropical forests of southern China. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "TCM Decoction",
      "Powder"
    ],
    "sideEffects": [
      "May disrupt sleep patterns if taken late"
    ]
  },
  {
    "id": 181,
    "commonName": "Lavender",
    "scientificName": "Botanica occidentalis vr. 285",
    "herbalUses": [
      "Soothes nerves",
      "Heals minor cuts",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Sedative"
    ],
    "diseases": [
      "IBS",
      "Sinusitis",
      "Wounds",
      "Sore throat"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 182,
    "commonName": "Chamomile",
    "scientificName": "Botanica occidentalis vr. 731",
    "herbalUses": [
      "Soothes nerves",
      "Aids restful sleep",
      "Supports gut health",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Analgesic",
      "Antispasmodic",
      "Vulnerary",
      "Antiseptic"
    ],
    "diseases": [
      "Insomnia",
      "Depression",
      "Sinusitis",
      "Migraines"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Tincture"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 183,
    "commonName": "Echinacea",
    "scientificName": "Botanica occidentalis vr. 255",
    "herbalUses": [
      "Heals minor cuts",
      "Soothes nerves",
      "Aids restful sleep",
      "Supports gut health"
    ],
    "medicalUses": [
      "Vulnerary",
      "Antiseptic",
      "Expectorant",
      "Antispasmodic"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "IBS",
      "Depression"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Capsule",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 184,
    "commonName": "Valerian",
    "scientificName": "Botanica occidentalis vr. 384",
    "herbalUses": [
      "Clears sinuses",
      "Aids restful sleep",
      "Reduces bloating",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Carminative",
      "Vulnerary",
      "Expectorant"
    ],
    "diseases": [
      "PMS",
      "Depression",
      "Sinusitis",
      "IBS"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture",
      "Essential Oil"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 185,
    "commonName": "St Johns Wort",
    "scientificName": "Botanica occidentalis vr. 864",
    "herbalUses": [
      "Heals minor cuts",
      "Improves mood",
      "Soothes nerves"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Antimicrobial",
      "Sedative"
    ],
    "diseases": [
      "Anxiety",
      "PMS",
      "IBS",
      "Depression"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture",
      "Essential Oil"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 186,
    "commonName": "Milk Thistle",
    "scientificName": "Botanica occidentalis vr. 92",
    "herbalUses": [
      "Heals minor cuts",
      "Freshens breath",
      "Eases menstrual cramps",
      "Supports gut health"
    ],
    "medicalUses": [
      "Antiseptic",
      "Antispasmodic",
      "Vulnerary",
      "Expectorant"
    ],
    "diseases": [
      "PMS",
      "Insomnia",
      "Migraines"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Tincture",
      "Capsule"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 187,
    "commonName": "Dandelion",
    "scientificName": "Botanica occidentalis vr. 109",
    "herbalUses": [
      "Eases menstrual cramps",
      "Soothes nerves",
      "Aids restful sleep",
      "Freshens breath"
    ],
    "medicalUses": [
      "Carminative",
      "Antiseptic",
      "Cholagogue",
      "Expectorant"
    ],
    "diseases": [
      "Migraines",
      "Wounds",
      "Sore throat",
      "Insomnia"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Tincture",
      "Poultice"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 188,
    "commonName": "Rosemary",
    "scientificName": "Botanica occidentalis vr. 31",
    "herbalUses": [
      "Supports gut health",
      "Soothes nerves",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Analgesic",
      "Antiseptic",
      "Carminative",
      "Antimicrobial"
    ],
    "diseases": [
      "Minor burns",
      "Migraines",
      "Sore throat",
      "Sinusitis"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Lozenges",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 189,
    "commonName": "Thyme",
    "scientificName": "Botanica occidentalis vr. 580",
    "herbalUses": [
      "Supports gut health",
      "Soothes nerves",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Vulnerary",
      "Antispasmodic",
      "Expectorant"
    ],
    "diseases": [
      "Insomnia",
      "Depression",
      "Sinusitis",
      "Anxiety"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 190,
    "commonName": "Sage",
    "scientificName": "Botanica occidentalis vr. 709",
    "herbalUses": [
      "Relieves headaches",
      "Soothes nerves",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Carminative",
      "Sedative",
      "Antispasmodic"
    ],
    "diseases": [
      "Migraines",
      "Anxiety",
      "Sinusitis"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Tincture"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 191,
    "commonName": "Oregano",
    "scientificName": "Botanica occidentalis vr. 321",
    "herbalUses": [
      "Eases menstrual cramps",
      "Clears sinuses",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Carminative",
      "Sedative",
      "Vulnerary"
    ],
    "diseases": [
      "Minor burns",
      "Migraines",
      "Depression",
      "Insomnia"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Essential Oil",
      "Herbal Tea",
      "Tincture"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 192,
    "commonName": "Lemon Balm",
    "scientificName": "Botanica occidentalis vr. 334",
    "herbalUses": [
      "Soothes nerves",
      "Aids restful sleep",
      "Reduces bloating",
      "Clears sinuses"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Astringent",
      "Carminative"
    ],
    "diseases": [
      "Insomnia",
      "Anxiety",
      "Minor burns",
      "IBS"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture",
      "Capsule"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 193,
    "commonName": "Peppermint",
    "scientificName": "Botanica occidentalis vr. 28",
    "herbalUses": [
      "Supports gut health",
      "Eases menstrual cramps",
      "Soothes nerves",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Astringent",
      "Antiseptic",
      "Cholagogue"
    ],
    "diseases": [
      "IBS",
      "Anxiety",
      "Sinusitis"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Essential Oil"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 194,
    "commonName": "Spearmint",
    "scientificName": "Botanica occidentalis vr. 283",
    "herbalUses": [
      "Relieves headaches",
      "Supports gut health",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Sedative",
      "Expectorant"
    ],
    "diseases": [
      "Depression",
      "Migraines",
      "Insomnia",
      "PMS"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Essential Oil",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 195,
    "commonName": "Elderberry",
    "scientificName": "Botanica occidentalis vr. 579",
    "herbalUses": [
      "Eases menstrual cramps",
      "Soothes nerves",
      "Improves mood",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Astringent",
      "Antiseptic",
      "Carminative"
    ],
    "diseases": [
      "IBS",
      "Sore throat",
      "Migraines"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 196,
    "commonName": "Elderflower",
    "scientificName": "Botanica occidentalis vr. 748",
    "herbalUses": [
      "Aids restful sleep",
      "Eases menstrual cramps",
      "Soothes nerves",
      "Supports gut health"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Expectorant",
      "Antiseptic",
      "Sedative"
    ],
    "diseases": [
      "Wounds",
      "Anxiety",
      "Migraines",
      "Sinusitis"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Essential Oil",
      "Capsule"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 197,
    "commonName": "Calendula",
    "scientificName": "Botanica occidentalis vr. 490",
    "herbalUses": [
      "Clears sinuses",
      "Eases menstrual cramps",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Antiseptic",
      "Astringent",
      "Vulnerary"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "PMS"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Herbal Tea",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 198,
    "commonName": "Yarrow",
    "scientificName": "Botanica occidentalis vr. 566",
    "herbalUses": [
      "Heals minor cuts",
      "Aids restful sleep",
      "Improves mood",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Vulnerary",
      "Cholagogue",
      "Analgesic"
    ],
    "diseases": [
      "PMS",
      "Sinusitis",
      "Insomnia",
      "Migraines"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Tincture"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 199,
    "commonName": "Meadowsweet",
    "scientificName": "Botanica occidentalis vr. 118",
    "herbalUses": [
      "Relieves headaches",
      "Soothes nerves",
      "Improves mood"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Astringent",
      "Carminative",
      "Expectorant"
    ],
    "diseases": [
      "Insomnia",
      "Anxiety",
      "Migraines",
      "Sore throat"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Essential Oil"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 200,
    "commonName": "Feverfew",
    "scientificName": "Botanica occidentalis vr. 158",
    "herbalUses": [
      "Soothes nerves",
      "Aids restful sleep",
      "Heals minor cuts",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Sedative",
      "Antispasmodic",
      "Astringent",
      "Antiseptic"
    ],
    "diseases": [
      "Migraines",
      "Sore throat",
      "Depression"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Lozenges",
      "Poultice"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 201,
    "commonName": "Skullcap",
    "scientificName": "Botanica occidentalis vr. 185",
    "herbalUses": [
      "Eases menstrual cramps",
      "Clears sinuses",
      "Improves mood",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Astringent",
      "Antiseptic",
      "Expectorant",
      "Antimicrobial"
    ],
    "diseases": [
      "Wounds",
      "PMS",
      "Sinusitis",
      "Insomnia"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 202,
    "commonName": "Passionflower",
    "scientificName": "Botanica occidentalis vr. 84",
    "herbalUses": [
      "Clears sinuses",
      "Reduces bloating",
      "Aids restful sleep",
      "Improves mood"
    ],
    "medicalUses": [
      "Carminative",
      "Cholagogue",
      "Antimicrobial",
      "Vulnerary"
    ],
    "diseases": [
      "Anxiety",
      "Insomnia",
      "Minor burns",
      "Wounds"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Poultice"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 203,
    "commonName": "Hawthorn",
    "scientificName": "Botanica occidentalis vr. 243",
    "herbalUses": [
      "Supports gut health",
      "Freshens breath",
      "Clears sinuses"
    ],
    "medicalUses": [
      "Vulnerary",
      "Antispasmodic",
      "Analgesic",
      "Expectorant"
    ],
    "diseases": [
      "Sore throat",
      "IBS",
      "Depression"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Tincture"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 204,
    "commonName": "Motherwort",
    "scientificName": "Botanica occidentalis vr. 2",
    "herbalUses": [
      "Supports gut health",
      "Reduces bloating",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Carminative",
      "Expectorant"
    ],
    "diseases": [
      "PMS",
      "Anxiety",
      "Migraines",
      "Minor burns"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 205,
    "commonName": "Linden",
    "scientificName": "Botanica occidentalis vr. 293",
    "herbalUses": [
      "Freshens breath",
      "Eases menstrual cramps",
      "Clears sinuses"
    ],
    "medicalUses": [
      "Vulnerary",
      "Antispasmodic",
      "Antimicrobial"
    ],
    "diseases": [
      "Depression",
      "Sinusitis",
      "Minor burns"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Essential Oil"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 206,
    "commonName": "Marshmallow",
    "scientificName": "Botanica occidentalis vr. 484",
    "herbalUses": [
      "Eases menstrual cramps",
      "Heals minor cuts",
      "Freshens breath"
    ],
    "medicalUses": [
      "Astringent",
      "Antimicrobial",
      "Antiseptic",
      "Cholagogue"
    ],
    "diseases": [
      "Depression",
      "Sore throat",
      "PMS"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Poultice",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 207,
    "commonName": "Mullein",
    "scientificName": "Botanica occidentalis vr. 480",
    "herbalUses": [
      "Aids restful sleep",
      "Relieves headaches",
      "Freshens breath",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Analgesic",
      "Antimicrobial",
      "Carminative",
      "Sedative"
    ],
    "diseases": [
      "IBS",
      "Migraines",
      "Depression",
      "Wounds"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Lozenges"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 208,
    "commonName": "Plantain",
    "scientificName": "Botanica occidentalis vr. 809",
    "herbalUses": [
      "Reduces bloating",
      "Soothes nerves",
      "Improves mood"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Carminative",
      "Vulnerary"
    ],
    "diseases": [
      "Wounds",
      "Sore throat",
      "Minor burns"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Salve"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 209,
    "commonName": "Comfrey",
    "scientificName": "Botanica occidentalis vr. 155",
    "herbalUses": [
      "Soothes nerves",
      "Eases menstrual cramps",
      "Freshens breath",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Cholagogue",
      "Antiseptic",
      "Carminative",
      "Sedative"
    ],
    "diseases": [
      "IBS",
      "Depression",
      "Anxiety"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Lozenges",
      "Poultice"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 210,
    "commonName": "Arnica",
    "scientificName": "Botanica occidentalis vr. 39",
    "herbalUses": [
      "Supports gut health",
      "Relieves headaches",
      "Aids restful sleep",
      "Freshens breath"
    ],
    "medicalUses": [
      "Carminative",
      "Analgesic",
      "Expectorant"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "Sinusitis"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Poultice",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 211,
    "commonName": "Devils Claw",
    "scientificName": "Botanica occidentalis vr. 177",
    "herbalUses": [
      "Heals minor cuts",
      "Clears sinuses",
      "Aids restful sleep",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Antiseptic",
      "Expectorant",
      "Analgesic",
      "Vulnerary"
    ],
    "diseases": [
      "IBS",
      "Depression",
      "Sinusitis"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Tincture",
      "Capsule"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 212,
    "commonName": "Boswellia",
    "scientificName": "Botanica occidentalis vr. 876",
    "herbalUses": [
      "Soothes nerves",
      "Improves mood",
      "Reduces bloating",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Vulnerary",
      "Antiseptic",
      "Sedative"
    ],
    "diseases": [
      "Depression",
      "Anxiety",
      "IBS",
      "Minor burns"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Lozenges",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 213,
    "commonName": "Frankincense",
    "scientificName": "Botanica occidentalis vr. 278",
    "herbalUses": [
      "Relieves headaches",
      "Improves mood",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Analgesic",
      "Antispasmodic",
      "Sedative",
      "Antimicrobial"
    ],
    "diseases": [
      "PMS",
      "Migraines",
      "Minor burns"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Lozenges",
      "Tincture"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 214,
    "commonName": "Myrrh",
    "scientificName": "Botanica occidentalis vr. 784",
    "herbalUses": [
      "Heals minor cuts",
      "Aids restful sleep",
      "Soothes nerves"
    ],
    "medicalUses": [
      "Antiseptic",
      "Sedative",
      "Vulnerary"
    ],
    "diseases": [
      "IBS",
      "Sore throat",
      "Depression"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Salve",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 215,
    "commonName": "Cayenne",
    "scientificName": "Botanica occidentalis vr. 690",
    "herbalUses": [
      "Soothes nerves",
      "Aids restful sleep",
      "Heals minor cuts",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antiseptic",
      "Expectorant"
    ],
    "diseases": [
      "Anxiety",
      "Depression",
      "Wounds",
      "Minor burns"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Salve",
      "Capsule"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 216,
    "commonName": "Black Pepper",
    "scientificName": "Botanica occidentalis vr. 909",
    "herbalUses": [
      "Soothes nerves",
      "Supports gut health",
      "Eases menstrual cramps",
      "Heals minor cuts"
    ],
    "medicalUses": [
      "Carminative",
      "Sedative",
      "Antispasmodic",
      "Cholagogue"
    ],
    "diseases": [
      "Sore throat",
      "Wounds",
      "Depression"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Poultice",
      "Essential Oil"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 217,
    "commonName": "Clove",
    "scientificName": "Botanica occidentalis vr. 389",
    "herbalUses": [
      "Soothes nerves",
      "Aids restful sleep",
      "Heals minor cuts"
    ],
    "medicalUses": [
      "Antiseptic",
      "Vulnerary",
      "Carminative",
      "Cholagogue"
    ],
    "diseases": [
      "PMS",
      "IBS",
      "Depression",
      "Minor burns"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Herbal Tea",
      "Poultice"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 218,
    "commonName": "Nutmeg",
    "scientificName": "Botanica occidentalis vr. 71",
    "herbalUses": [
      "Clears sinuses",
      "Aids restful sleep",
      "Supports gut health",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Antiseptic",
      "Astringent",
      "Vulnerary",
      "Carminative"
    ],
    "diseases": [
      "Sore throat",
      "PMS",
      "IBS"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Poultice"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 219,
    "commonName": "Cardamom",
    "scientificName": "Botanica occidentalis vr. 993",
    "herbalUses": [
      "Soothes nerves",
      "Freshens breath",
      "Heals minor cuts",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Antiseptic",
      "Cholagogue",
      "Antispasmodic",
      "Expectorant"
    ],
    "diseases": [
      "PMS",
      "Insomnia",
      "Migraines"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 220,
    "commonName": "Fennel",
    "scientificName": "Botanica occidentalis vr. 433",
    "herbalUses": [
      "Heals minor cuts",
      "Relieves headaches",
      "Eases menstrual cramps",
      "Supports gut health"
    ],
    "medicalUses": [
      "Expectorant",
      "Antiseptic",
      "Carminative",
      "Astringent"
    ],
    "diseases": [
      "PMS",
      "Sore throat",
      "Insomnia"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Salve",
      "Poultice"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 221,
    "commonName": "Anise",
    "scientificName": "Botanica occidentalis vr. 965",
    "herbalUses": [
      "Heals minor cuts",
      "Soothes nerves",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antimicrobial",
      "Expectorant"
    ],
    "diseases": [
      "PMS",
      "Depression",
      "Sore throat",
      "Wounds"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Lozenges",
      "Tincture",
      "Poultice"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 222,
    "commonName": "Caraway",
    "scientificName": "Botanica occidentalis vr. 141",
    "herbalUses": [
      "Eases menstrual cramps",
      "Reduces bloating",
      "Clears sinuses",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Antiseptic",
      "Cholagogue",
      "Astringent"
    ],
    "diseases": [
      "Minor burns",
      "Depression",
      "Anxiety"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Essential Oil",
      "Capsule"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 223,
    "commonName": "European Wild Sprout Type 42",
    "scientificName": "Botanica occidentalis vr. 493",
    "herbalUses": [
      "Freshens breath",
      "Heals minor cuts",
      "Soothes nerves"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Analgesic",
      "Expectorant",
      "Sedative"
    ],
    "diseases": [
      "Anxiety",
      "Sore throat",
      "Sinusitis",
      "Minor burns"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Poultice",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 224,
    "commonName": "European Wild Weed Type 43",
    "scientificName": "Botanica occidentalis vr. 414",
    "herbalUses": [
      "Eases menstrual cramps",
      "Supports gut health",
      "Clears sinuses",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Vulnerary",
      "Astringent",
      "Antispasmodic"
    ],
    "diseases": [
      "Insomnia",
      "Anxiety",
      "Minor burns",
      "Migraines"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Salve"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 225,
    "commonName": "European Wild Sage Type 44",
    "scientificName": "Botanica occidentalis vr. 770",
    "herbalUses": [
      "Soothes nerves",
      "Heals minor cuts",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antiseptic",
      "Antimicrobial",
      "Vulnerary",
      "Carminative"
    ],
    "diseases": [
      "Anxiety",
      "Wounds",
      "Migraines",
      "Depression"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 226,
    "commonName": "European Wild Thyme Type 45",
    "scientificName": "Botanica occidentalis vr. 315",
    "herbalUses": [
      "Relieves headaches",
      "Supports gut health",
      "Eases menstrual cramps",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antiseptic",
      "Carminative",
      "Sedative",
      "Vulnerary"
    ],
    "diseases": [
      "Depression",
      "IBS",
      "Sore throat",
      "Anxiety"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Salve",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 227,
    "commonName": "European Wild Mint Type 46",
    "scientificName": "Botanica occidentalis vr. 682",
    "herbalUses": [
      "Heals minor cuts",
      "Improves mood",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Sedative",
      "Cholagogue",
      "Antispasmodic",
      "Antiseptic"
    ],
    "diseases": [
      "Depression",
      "PMS",
      "Anxiety"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 228,
    "commonName": "European Wild Mint Type 47",
    "scientificName": "Botanica occidentalis vr. 808",
    "herbalUses": [
      "Supports gut health",
      "Improves mood",
      "Eases menstrual cramps",
      "Clears sinuses"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antimicrobial",
      "Cholagogue",
      "Sedative"
    ],
    "diseases": [
      "Anxiety",
      "PMS",
      "Sinusitis"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Tincture",
      "Essential Oil"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 229,
    "commonName": "European Wild Mint Type 48",
    "scientificName": "Botanica occidentalis vr. 685",
    "herbalUses": [
      "Supports gut health",
      "Aids restful sleep",
      "Heals minor cuts"
    ],
    "medicalUses": [
      "Vulnerary",
      "Sedative",
      "Cholagogue"
    ],
    "diseases": [
      "Anxiety",
      "Sinusitis",
      "Sore throat",
      "Insomnia"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Tincture"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 230,
    "commonName": "European Wild Mint Type 49",
    "scientificName": "Botanica occidentalis vr. 560",
    "herbalUses": [
      "Soothes nerves",
      "Eases menstrual cramps",
      "Aids restful sleep",
      "Improves mood"
    ],
    "medicalUses": [
      "Sedative",
      "Vulnerary",
      "Astringent",
      "Cholagogue"
    ],
    "diseases": [
      "Depression",
      "IBS",
      "Anxiety",
      "Sinusitis"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Essential Oil",
      "Poultice"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 231,
    "commonName": "European Wild Thyme Type 50",
    "scientificName": "Botanica occidentalis vr. 24",
    "herbalUses": [
      "Soothes nerves",
      "Heals minor cuts",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Vulnerary",
      "Antimicrobial"
    ],
    "diseases": [
      "PMS",
      "Anxiety",
      "Wounds"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Poultice",
      "Capsule"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 232,
    "commonName": "European Wild Mint Type 51",
    "scientificName": "Botanica occidentalis vr. 418",
    "herbalUses": [
      "Relieves headaches",
      "Soothes nerves",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Astringent",
      "Cholagogue"
    ],
    "diseases": [
      "Insomnia",
      "Anxiety",
      "Migraines"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Essential Oil",
      "Lozenges"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 233,
    "commonName": "European Wild Mint Type 52",
    "scientificName": "Botanica occidentalis vr. 192",
    "herbalUses": [
      "Relieves headaches",
      "Aids restful sleep",
      "Clears sinuses"
    ],
    "medicalUses": [
      "Sedative",
      "Antispasmodic",
      "Antimicrobial"
    ],
    "diseases": [
      "IBS",
      "Depression",
      "PMS",
      "Migraines"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 234,
    "commonName": "European Wild Thyme Type 53",
    "scientificName": "Botanica occidentalis vr. 618",
    "herbalUses": [
      "Supports gut health",
      "Reduces bloating",
      "Soothes nerves"
    ],
    "medicalUses": [
      "Expectorant",
      "Cholagogue",
      "Analgesic"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "Sinusitis"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea",
      "Essential Oil"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 235,
    "commonName": "European Wild Mint Type 54",
    "scientificName": "Botanica occidentalis vr. 498",
    "herbalUses": [
      "Soothes nerves",
      "Freshens breath",
      "Aids restful sleep",
      "Supports gut health"
    ],
    "medicalUses": [
      "Astringent",
      "Antiseptic",
      "Antimicrobial",
      "Expectorant"
    ],
    "diseases": [
      "Sore throat",
      "Wounds",
      "PMS",
      "Depression"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Salve"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 236,
    "commonName": "European Wild Thyme Type 55",
    "scientificName": "Botanica occidentalis vr. 962",
    "herbalUses": [
      "Improves mood",
      "Eases menstrual cramps",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Cholagogue",
      "Analgesic",
      "Astringent"
    ],
    "diseases": [
      "Wounds",
      "Depression",
      "IBS",
      "Minor burns"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Poultice",
      "Salve"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 237,
    "commonName": "European Wild Weed Type 56",
    "scientificName": "Botanica occidentalis vr. 836",
    "herbalUses": [
      "Clears sinuses",
      "Aids restful sleep",
      "Freshens breath"
    ],
    "medicalUses": [
      "Carminative",
      "Antiseptic",
      "Expectorant"
    ],
    "diseases": [
      "Anxiety",
      "Insomnia",
      "Migraines",
      "PMS"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Poultice"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 238,
    "commonName": "European Wild Fern Type 57",
    "scientificName": "Botanica occidentalis vr. 762",
    "herbalUses": [
      "Supports gut health",
      "Soothes nerves",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Cholagogue",
      "Antimicrobial",
      "Antiseptic",
      "Expectorant"
    ],
    "diseases": [
      "Sore throat",
      "Anxiety",
      "Sinusitis",
      "Insomnia"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Essential Oil",
      "Poultice",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 239,
    "commonName": "European Wild Fern Type 58",
    "scientificName": "Botanica occidentalis vr. 237",
    "herbalUses": [
      "Relieves headaches",
      "Eases menstrual cramps",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Cholagogue",
      "Sedative"
    ],
    "diseases": [
      "Minor burns",
      "Insomnia",
      "Wounds"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Lozenges",
      "Salve"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 240,
    "commonName": "European Wild Sprout Type 59",
    "scientificName": "Botanica occidentalis vr. 254",
    "herbalUses": [
      "Heals minor cuts",
      "Soothes nerves",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Sedative",
      "Cholagogue"
    ],
    "diseases": [
      "Insomnia",
      "Anxiety",
      "Sinusitis"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Poultice"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 241,
    "commonName": "European Wild Fern Type 60",
    "scientificName": "Botanica occidentalis vr. 988",
    "herbalUses": [
      "Freshens breath",
      "Heals minor cuts",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Sedative",
      "Cholagogue"
    ],
    "diseases": [
      "Sinusitis",
      "PMS",
      "Insomnia",
      "Depression"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Poultice"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 242,
    "commonName": "European Wild Mint Type 61",
    "scientificName": "Botanica occidentalis vr. 156",
    "herbalUses": [
      "Clears sinuses",
      "Relieves headaches",
      "Improves mood",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antiseptic",
      "Antimicrobial"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "IBS"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Essential Oil",
      "Herbal Tea",
      "Poultice"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 243,
    "commonName": "European Wild Weed Type 62",
    "scientificName": "Botanica occidentalis vr. 50",
    "herbalUses": [
      "Relieves headaches",
      "Improves mood",
      "Freshens breath",
      "Soothes nerves"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Sedative",
      "Antiseptic"
    ],
    "diseases": [
      "Anxiety",
      "PMS",
      "Insomnia"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Poultice"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 244,
    "commonName": "European Wild Weed Type 63",
    "scientificName": "Botanica occidentalis vr. 917",
    "herbalUses": [
      "Clears sinuses",
      "Supports gut health",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Antispasmodic",
      "Antiseptic",
      "Analgesic"
    ],
    "diseases": [
      "Depression",
      "IBS",
      "Anxiety",
      "Wounds"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Lozenges",
      "Capsule",
      "Salve"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 245,
    "commonName": "European Wild Sage Type 64",
    "scientificName": "Botanica occidentalis vr. 594",
    "herbalUses": [
      "Eases menstrual cramps",
      "Reduces bloating",
      "Freshens breath"
    ],
    "medicalUses": [
      "Cholagogue",
      "Carminative",
      "Sedative",
      "Vulnerary"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "IBS",
      "Minor burns"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Poultice",
      "Capsule"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 246,
    "commonName": "European Wild Weed Type 65",
    "scientificName": "Botanica occidentalis vr. 643",
    "herbalUses": [
      "Reduces bloating",
      "Supports gut health",
      "Heals minor cuts",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Analgesic",
      "Vulnerary"
    ],
    "diseases": [
      "Migraines",
      "Minor burns",
      "Insomnia"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 247,
    "commonName": "European Wild Thyme Type 66",
    "scientificName": "Botanica occidentalis vr. 409",
    "herbalUses": [
      "Relieves headaches",
      "Supports gut health",
      "Freshens breath"
    ],
    "medicalUses": [
      "Cholagogue",
      "Antispasmodic",
      "Vulnerary"
    ],
    "diseases": [
      "Minor burns",
      "IBS",
      "Insomnia"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Thrives in direct sunlight.",
    "medicineForm": [
      "Essential Oil",
      "Lozenges",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 248,
    "commonName": "European Wild Weed Type 67",
    "scientificName": "Botanica occidentalis vr. 105",
    "herbalUses": [
      "Soothes nerves",
      "Heals minor cuts",
      "Supports gut health",
      "Freshens breath"
    ],
    "medicalUses": [
      "Cholagogue",
      "Astringent",
      "Vulnerary",
      "Antiseptic"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "Wounds",
      "Minor burns"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Capsule"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 249,
    "commonName": "European Wild Mint Type 68",
    "scientificName": "Botanica occidentalis vr. 827",
    "herbalUses": [
      "Freshens breath",
      "Soothes nerves",
      "Heals minor cuts",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Expectorant",
      "Antimicrobial",
      "Antispasmodic",
      "Analgesic"
    ],
    "diseases": [
      "PMS",
      "Migraines",
      "IBS",
      "Sore throat"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Capsule",
      "Essential Oil"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 250,
    "commonName": "European Wild Mint Type 69",
    "scientificName": "Botanica occidentalis vr. 987",
    "herbalUses": [
      "Supports gut health",
      "Soothes nerves",
      "Freshens breath",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Astringent",
      "Antimicrobial",
      "Carminative"
    ],
    "diseases": [
      "Anxiety",
      "IBS",
      "Migraines",
      "PMS"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule",
      "Poultice"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 251,
    "commonName": "European Wild Fern Type 70",
    "scientificName": "Botanica occidentalis vr. 385",
    "herbalUses": [
      "Heals minor cuts",
      "Relieves headaches",
      "Improves mood",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Sedative",
      "Antimicrobial"
    ],
    "diseases": [
      "Depression",
      "Anxiety",
      "PMS"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Salve"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 252,
    "commonName": "European Wild Sage Type 71",
    "scientificName": "Botanica occidentalis vr. 623",
    "herbalUses": [
      "Relieves headaches",
      "Soothes nerves",
      "Aids restful sleep",
      "Freshens breath"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Antiseptic",
      "Sedative",
      "Analgesic"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "Anxiety",
      "IBS"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Tincture"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 253,
    "commonName": "European Wild Sage Type 72",
    "scientificName": "Botanica occidentalis vr. 818",
    "herbalUses": [
      "Reduces bloating",
      "Eases menstrual cramps",
      "Freshens breath",
      "Clears sinuses"
    ],
    "medicalUses": [
      "Astringent",
      "Antiseptic",
      "Antimicrobial",
      "Carminative"
    ],
    "diseases": [
      "Insomnia",
      "Depression",
      "Migraines"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Poultice"
    ],
    "sideEffects": [
      "May cause upset stomach"
    ]
  },
  {
    "id": 254,
    "commonName": "European Wild Weed Type 73",
    "scientificName": "Botanica occidentalis vr. 716",
    "herbalUses": [
      "Aids restful sleep",
      "Reduces bloating",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Astringent",
      "Cholagogue",
      "Antiseptic",
      "Analgesic"
    ],
    "diseases": [
      "Anxiety",
      "Depression",
      "Sinusitis"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Salve"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 255,
    "commonName": "European Wild Thyme Type 74",
    "scientificName": "Botanica occidentalis vr. 198",
    "herbalUses": [
      "Improves mood",
      "Reduces bloating",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Cholagogue",
      "Antispasmodic",
      "Sedative",
      "Analgesic"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "Minor burns"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Lozenges"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 256,
    "commonName": "European Wild Weed Type 75",
    "scientificName": "Botanica occidentalis vr. 264",
    "herbalUses": [
      "Improves mood",
      "Heals minor cuts",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Analgesic",
      "Antispasmodic",
      "Carminative",
      "Cholagogue"
    ],
    "diseases": [
      "Insomnia",
      "Anxiety",
      "Sinusitis",
      "PMS"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Capsule",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can interact with antidepressants"
    ]
  },
  {
    "id": 257,
    "commonName": "European Wild Weed Type 76",
    "scientificName": "Botanica occidentalis vr. 792",
    "herbalUses": [
      "Soothes nerves",
      "Clears sinuses",
      "Aids restful sleep",
      "Relieves headaches"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Analgesic",
      "Vulnerary"
    ],
    "diseases": [
      "Sore throat",
      "Sinusitis",
      "Anxiety",
      "IBS"
    ],
    "habitat": "Grows commonly in wild European meadows and fields. Requires well-drained soil.",
    "medicineForm": [
      "Lozenges",
      "Herbal Tea",
      "Tincture"
    ],
    "sideEffects": [
      "May cause drowsiness"
    ]
  },
  {
    "id": 258,
    "commonName": "European Wild Weed Type 77",
    "scientificName": "Botanica occidentalis vr. 179",
    "herbalUses": [
      "Eases menstrual cramps",
      "Reduces bloating",
      "Clears sinuses",
      "Aids restful sleep"
    ],
    "medicalUses": [
      "Astringent",
      "Antiseptic",
      "Analgesic",
      "Antimicrobial"
    ],
    "diseases": [
      "Wounds",
      "Insomnia",
      "Migraines"
    ],
    "habitat": "Cultivated in temperate climates across North America and Europe. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Essential Oil"
    ],
    "sideEffects": [
      "Avoid if allergic to Asteraceae family"
    ]
  },
  {
    "id": 259,
    "commonName": "European Wild Sprout Type 78",
    "scientificName": "Botanica occidentalis vr. 817",
    "herbalUses": [
      "Eases menstrual cramps",
      "Clears sinuses",
      "Reduces bloating"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Analgesic",
      "Cholagogue"
    ],
    "diseases": [
      "Insomnia",
      "Migraines",
      "Sore throat"
    ],
    "habitat": "Native to the Mediterranean coastal regions. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Salve"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 260,
    "commonName": "European Wild Sprout Type 79",
    "scientificName": "Botanica occidentalis vr. 621",
    "herbalUses": [
      "Relieves headaches",
      "Heals minor cuts",
      "Soothes nerves",
      "Eases menstrual cramps"
    ],
    "medicalUses": [
      "Sedative",
      "Astringent",
      "Antispasmodic"
    ],
    "diseases": [
      "IBS",
      "Depression",
      "Anxiety",
      "Sore throat"
    ],
    "habitat": "Found heavily in ancient European woodland clearings. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause skin sensitivity in sunlight"
    ]
  },
  {
    "id": 261,
    "commonName": "African Potato",
    "scientificName": "Botanica africana vr. 590",
    "herbalUses": [
      "Treats chronic fever",
      "Boosts stamina",
      "Gut parasite cleanse",
      "Clears skin blemishes"
    ],
    "medicalUses": [
      "Antimalarial",
      "Aphrodisiac",
      "Hepatoprotective",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Skin lesions",
      "Rheumatism",
      "Chronic pain"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Chewing Stick",
      "Leaf Extract",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Not meant for continuous long-term use"
    ]
  },
  {
    "id": 262,
    "commonName": "Baobab",
    "scientificName": "Botanica africana vr. 190",
    "herbalUses": [
      "Clears skin blemishes",
      "Treats chronic fever",
      "Enhances libido",
      "Soothes oral ulcers"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Analgesic",
      "Antimicrobial",
      "Antimalarial"
    ],
    "diseases": [
      "Erectile dysfunction",
      "Chronic pain",
      "Skin lesions"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Root Powder",
      "Ointment"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 263,
    "commonName": "Buchu",
    "scientificName": "Botanica africana vr. 640",
    "herbalUses": [
      "Aids joint mobility",
      "Soothes oral ulcers",
      "Boosts stamina",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Antioxidant",
      "Analgesic",
      "Cytotoxic",
      "Antimalarial"
    ],
    "diseases": [
      "Skin lesions",
      "Malaria",
      "Gastroenteritis",
      "Erectile dysfunction"
    ],
    "habitat": "Grows wildly along the Congo river basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Leaf Extract",
      "Tincture"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 264,
    "commonName": "Devil's Claw African",
    "scientificName": "Botanica africana vr. 684",
    "herbalUses": [
      "Improves lung capacity",
      "Reduces swelling",
      "Boosts stamina"
    ],
    "medicalUses": [
      "Analgesic",
      "Antimicrobial",
      "Antioxidant"
    ],
    "diseases": [
      "Skin lesions",
      "Malaria",
      "Digestive parasites",
      "Erectile dysfunction"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Requires well-drained soil.",
    "medicineForm": [
      "Bark Decoction",
      "Root Powder",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Not meant for continuous long-term use"
    ]
  },
  {
    "id": 265,
    "commonName": "Hoodia",
    "scientificName": "Botanica africana vr. 487",
    "herbalUses": [
      "Reduces swelling",
      "Improves lung capacity",
      "Aids joint mobility",
      "Clears skin blemishes"
    ],
    "medicalUses": [
      "Cytotoxic",
      "Antioxidant",
      "Aphrodisiac",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Malaria",
      "Erectile dysfunction",
      "Rheumatism",
      "Skin lesions"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Bark Decoction",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 266,
    "commonName": "Rooibos",
    "scientificName": "Botanica africana vr. 225",
    "herbalUses": [
      "Boosts stamina",
      "Treats chronic fever",
      "Improves lung capacity",
      "Clears skin blemishes"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antimalarial",
      "Antiparasitic",
      "Antimicrobial"
    ],
    "diseases": [
      "Asthma",
      "Malaria",
      "Erectile dysfunction",
      "Skin lesions"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Requires well-drained soil.",
    "medicineForm": [
      "Bark Decoction",
      "Root Powder",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 267,
    "commonName": "African Ginger",
    "scientificName": "Botanica africana vr. 171",
    "herbalUses": [
      "Enhances libido",
      "Natural painkiller",
      "Aids joint mobility"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Antiparasitic",
      "Antimalarial"
    ],
    "diseases": [
      "Fever",
      "Erectile dysfunction",
      "Gastroenteritis",
      "Malaria"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 268,
    "commonName": "Sutherlandia",
    "scientificName": "Botanica africana vr. 301",
    "herbalUses": [
      "Aids joint mobility",
      "Soothes oral ulcers",
      "Reduces swelling"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antiparasitic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Malaria",
      "Rheumatism",
      "Skin lesions",
      "Chronic pain"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Bark Decoction",
      "Root Powder"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 269,
    "commonName": "Umckaloabo",
    "scientificName": "Botanica africana vr. 271",
    "herbalUses": [
      "Boosts stamina",
      "Treats chronic fever",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Bronchodilator",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Asthma",
      "High blood pressure",
      "Fever"
    ],
    "habitat": "Grows wildly along the Congo river basin. Requires well-drained soil.",
    "medicineForm": [
      "Leaf Extract",
      "Root Powder"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 270,
    "commonName": "Pygeum",
    "scientificName": "Botanica africana vr. 391",
    "herbalUses": [
      "Soothes oral ulcers",
      "Treats chronic fever",
      "Boosts stamina"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-inflammatory",
      "Antiparasitic"
    ],
    "diseases": [
      "Asthma",
      "Gastroenteritis",
      "Erectile dysfunction"
    ],
    "habitat": "Grows wildly along the Congo river basin. Requires well-drained soil.",
    "medicineForm": [
      "Chewing Stick",
      "Leaf Extract"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 271,
    "commonName": "Yohimbe",
    "scientificName": "Botanica africana vr. 665",
    "herbalUses": [
      "Natural painkiller",
      "Boosts stamina",
      "Reduces swelling",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Bronchodilator",
      "Antioxidant",
      "Cytotoxic",
      "Antimicrobial"
    ],
    "diseases": [
      "Skin lesions",
      "Rheumatism",
      "Gastroenteritis"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Ointment",
      "Tincture"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 272,
    "commonName": "Shea Butter plant",
    "scientificName": "Botanica africana vr. 830",
    "herbalUses": [
      "Boosts stamina",
      "Treats chronic fever",
      "Clears skin blemishes",
      "Aids joint mobility"
    ],
    "medicalUses": [
      "Antimalarial",
      "Anti-inflammatory",
      "Antiparasitic"
    ],
    "diseases": [
      "Skin lesions",
      "Rheumatism",
      "Digestive parasites",
      "High blood pressure"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Chewing Stick",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 273,
    "commonName": "Morinda African",
    "scientificName": "Botanica africana vr. 180",
    "herbalUses": [
      "Enhances libido",
      "Reduces swelling",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Antimalarial",
      "Cytotoxic",
      "Bronchodilator"
    ],
    "diseases": [
      "High blood pressure",
      "Digestive parasites",
      "Erectile dysfunction",
      "Chronic pain"
    ],
    "habitat": "Grows wildly along the Congo river basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 274,
    "commonName": "Kigelia",
    "scientificName": "Botanica africana vr. 342",
    "herbalUses": [
      "Aids joint mobility",
      "Clears skin blemishes",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Analgesic",
      "Antiparasitic"
    ],
    "diseases": [
      "Malaria",
      "High blood pressure",
      "Skin lesions",
      "Chronic pain"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Leaf Extract",
      "Root Powder",
      "Tincture"
    ],
    "sideEffects": [
      "Not meant for continuous long-term use"
    ]
  },
  {
    "id": 275,
    "commonName": "Vernonia",
    "scientificName": "Botanica africana vr. 55",
    "herbalUses": [
      "Enhances libido",
      "Aids joint mobility",
      "Clears skin blemishes"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Hepatoprotective",
      "Antiparasitic"
    ],
    "diseases": [
      "Gastroenteritis",
      "Fever",
      "Malaria"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Requires well-drained soil.",
    "medicineForm": [
      "Root Powder",
      "Bark Decoction"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 276,
    "commonName": "Warburgia",
    "scientificName": "Botanica africana vr. 597",
    "herbalUses": [
      "Gut parasite cleanse",
      "Soothes oral ulcers",
      "Aids joint mobility"
    ],
    "medicalUses": [
      "Analgesic",
      "Antimalarial",
      "Hepatoprotective"
    ],
    "diseases": [
      "Gastroenteritis",
      "Fever",
      "Digestive parasites",
      "Erectile dysfunction"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Ointment",
      "Root Powder"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 277,
    "commonName": "Mondia",
    "scientificName": "Botanica africana vr. 41",
    "herbalUses": [
      "Boosts stamina",
      "Aids joint mobility",
      "Natural painkiller",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Analgesic",
      "Antiparasitic",
      "Aphrodisiac"
    ],
    "diseases": [
      "Rheumatism",
      "Malaria",
      "High blood pressure"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Bark Decoction",
      "Tea",
      "Tincture"
    ],
    "sideEffects": [
      "Not meant for continuous long-term use"
    ]
  },
  {
    "id": 278,
    "commonName": "Zanthoxylum African",
    "scientificName": "Botanica africana vr. 841",
    "herbalUses": [
      "Aids joint mobility",
      "Clears skin blemishes",
      "Reduces swelling",
      "Soothes oral ulcers"
    ],
    "medicalUses": [
      "Analgesic",
      "Anti-inflammatory",
      "Bronchodilator"
    ],
    "diseases": [
      "Malaria",
      "Skin lesions",
      "Rheumatism",
      "Chronic pain"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Chewing Stick",
      "Tea"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 279,
    "commonName": "African Basil",
    "scientificName": "Botanica africana vr. 459",
    "herbalUses": [
      "Gut parasite cleanse",
      "Reduces swelling",
      "Clears skin blemishes",
      "Boosts stamina"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Aphrodisiac",
      "Hepatoprotective"
    ],
    "diseases": [
      "Rheumatism",
      "Digestive parasites",
      "Erectile dysfunction",
      "Chronic pain"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 280,
    "commonName": "Securidaca",
    "scientificName": "Botanica africana vr. 342",
    "herbalUses": [
      "Reduces swelling",
      "Aids joint mobility",
      "Improves lung capacity",
      "Soothes oral ulcers"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Aphrodisiac",
      "Antioxidant",
      "Bronchodilator"
    ],
    "diseases": [
      "Erectile dysfunction",
      "Asthma",
      "Digestive parasites"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Chewing Stick",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 281,
    "commonName": "Kalahari Vine Type 20",
    "scientificName": "Botanica africana vr. 420",
    "herbalUses": [
      "Natural painkiller",
      "Aids joint mobility",
      "Boosts stamina",
      "Reduces swelling"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Antimalarial",
      "Antioxidant"
    ],
    "diseases": [
      "Skin lesions",
      "Asthma",
      "Fever"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Requires well-drained soil.",
    "medicineForm": [
      "Root Powder",
      "Chewing Stick",
      "Ointment"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 282,
    "commonName": "Kalahari Bark Type 21",
    "scientificName": "Botanica africana vr. 0",
    "herbalUses": [
      "Clears skin blemishes",
      "Aids joint mobility",
      "Improves lung capacity"
    ],
    "medicalUses": [
      "Bronchodilator",
      "Antimicrobial",
      "Antiparasitic",
      "Antimalarial"
    ],
    "diseases": [
      "Chronic pain",
      "Erectile dysfunction",
      "Malaria"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Bark Decoction",
      "Leaf Extract",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 283,
    "commonName": "Kalahari Shrub Type 22",
    "scientificName": "Botanica africana vr. 699",
    "herbalUses": [
      "Natural painkiller",
      "Treats chronic fever",
      "Improves lung capacity"
    ],
    "medicalUses": [
      "Antimalarial",
      "Anti-inflammatory",
      "Hepatoprotective",
      "Antimicrobial"
    ],
    "diseases": [
      "Malaria",
      "Digestive parasites",
      "Gastroenteritis"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Requires well-drained soil.",
    "medicineForm": [
      "Root Powder",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 284,
    "commonName": "Kalahari Bulb Type 23",
    "scientificName": "Botanica africana vr. 851",
    "herbalUses": [
      "Boosts stamina",
      "Enhances libido",
      "Soothes oral ulcers"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Antimalarial",
      "Bronchodilator"
    ],
    "diseases": [
      "Asthma",
      "Gastroenteritis",
      "Digestive parasites"
    ],
    "habitat": "Grows wildly along the Congo river basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Chewing Stick",
      "Bark Decoction"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 285,
    "commonName": "Kalahari Vine Type 24",
    "scientificName": "Botanica africana vr. 44",
    "herbalUses": [
      "Treats chronic fever",
      "Clears skin blemishes",
      "Enhances libido"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Antimicrobial",
      "Bronchodilator"
    ],
    "diseases": [
      "Digestive parasites",
      "Rheumatism",
      "Asthma"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Thrives in direct sunlight.",
    "medicineForm": [
      "Chewing Stick",
      "Leaf Extract",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 286,
    "commonName": "Kalahari Root Type 25",
    "scientificName": "Botanica africana vr. 18",
    "herbalUses": [
      "Aids joint mobility",
      "Treats chronic fever",
      "Enhances libido",
      "Natural painkiller"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antimalarial",
      "Antimicrobial"
    ],
    "diseases": [
      "Malaria",
      "Chronic pain",
      "Asthma"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Bark Decoction",
      "Ointment"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 287,
    "commonName": "Kalahari Bulb Type 26",
    "scientificName": "Botanica africana vr. 340",
    "herbalUses": [
      "Clears skin blemishes",
      "Improves lung capacity",
      "Soothes oral ulcers"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antimalarial",
      "Cytotoxic",
      "Antiparasitic"
    ],
    "diseases": [
      "Skin lesions",
      "Malaria",
      "Asthma",
      "Rheumatism"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Root Powder"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 288,
    "commonName": "Kalahari Bark Type 27",
    "scientificName": "Botanica africana vr. 765",
    "herbalUses": [
      "Aids joint mobility",
      "Treats chronic fever",
      "Improves lung capacity"
    ],
    "medicalUses": [
      "Cytotoxic",
      "Bronchodilator",
      "Hepatoprotective"
    ],
    "diseases": [
      "Skin lesions",
      "Gastroenteritis",
      "Asthma",
      "Malaria"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Ointment"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 289,
    "commonName": "Kalahari Vine Type 28",
    "scientificName": "Botanica africana vr. 359",
    "herbalUses": [
      "Natural painkiller",
      "Boosts stamina",
      "Enhances libido"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antimalarial",
      "Antiparasitic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Gastroenteritis",
      "Rheumatism",
      "Erectile dysfunction",
      "Malaria"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Requires well-drained soil.",
    "medicineForm": [
      "Leaf Extract",
      "Root Powder",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 290,
    "commonName": "Kalahari Vine Type 29",
    "scientificName": "Botanica africana vr. 974",
    "herbalUses": [
      "Clears skin blemishes",
      "Reduces swelling",
      "Aids joint mobility",
      "Enhances libido"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-inflammatory",
      "Antimicrobial"
    ],
    "diseases": [
      "Malaria",
      "High blood pressure",
      "Asthma",
      "Skin lesions"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Requires well-drained soil.",
    "medicineForm": [
      "Root Powder",
      "Ointment"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 291,
    "commonName": "Kalahari Shrub Type 30",
    "scientificName": "Botanica africana vr. 157",
    "herbalUses": [
      "Aids joint mobility",
      "Reduces swelling",
      "Clears skin blemishes",
      "Improves lung capacity"
    ],
    "medicalUses": [
      "Cytotoxic",
      "Hepatoprotective",
      "Bronchodilator"
    ],
    "diseases": [
      "Rheumatism",
      "Fever",
      "Gastroenteritis"
    ],
    "habitat": "Grows wildly along the Congo river basin. Requires well-drained soil.",
    "medicineForm": [
      "Ointment",
      "Root Powder",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 292,
    "commonName": "Kalahari Seed Type 31",
    "scientificName": "Botanica africana vr. 432",
    "herbalUses": [
      "Reduces swelling",
      "Treats chronic fever",
      "Boosts stamina",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Anti-inflammatory",
      "Analgesic"
    ],
    "diseases": [
      "Chronic pain",
      "Erectile dysfunction",
      "Malaria",
      "Fever"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Chewing Stick",
      "Ointment"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 293,
    "commonName": "Kalahari Seed Type 32",
    "scientificName": "Botanica africana vr. 930",
    "herbalUses": [
      "Improves lung capacity",
      "Clears skin blemishes",
      "Treats chronic fever",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Cytotoxic"
    ],
    "diseases": [
      "Rheumatism",
      "Skin lesions",
      "High blood pressure"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Ointment",
      "Tea"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 294,
    "commonName": "Kalahari Vine Type 33",
    "scientificName": "Botanica africana vr. 978",
    "herbalUses": [
      "Soothes oral ulcers",
      "Boosts stamina",
      "Treats chronic fever",
      "Aids joint mobility"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Bronchodilator",
      "Hepatoprotective"
    ],
    "diseases": [
      "Gastroenteritis",
      "Erectile dysfunction",
      "Skin lesions"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Requires well-drained soil.",
    "medicineForm": [
      "Ointment",
      "Root Powder",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Not meant for continuous long-term use"
    ]
  },
  {
    "id": 295,
    "commonName": "Kalahari Root Type 34",
    "scientificName": "Botanica africana vr. 346",
    "herbalUses": [
      "Clears skin blemishes",
      "Treats chronic fever",
      "Aids joint mobility"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Anti-inflammatory",
      "Cytotoxic"
    ],
    "diseases": [
      "Skin lesions",
      "Gastroenteritis",
      "Asthma",
      "High blood pressure"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Thrives in direct sunlight.",
    "medicineForm": [
      "Tea",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 296,
    "commonName": "Kalahari Vine Type 35",
    "scientificName": "Botanica africana vr. 419",
    "herbalUses": [
      "Treats chronic fever",
      "Aids joint mobility",
      "Soothes oral ulcers",
      "Natural painkiller"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Hepatoprotective",
      "Analgesic"
    ],
    "diseases": [
      "Skin lesions",
      "High blood pressure",
      "Malaria"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Leaf Extract",
      "Ointment",
      "Root Powder"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 297,
    "commonName": "Kalahari Bark Type 36",
    "scientificName": "Botanica africana vr. 353",
    "herbalUses": [
      "Enhances libido",
      "Soothes oral ulcers",
      "Reduces swelling",
      "Boosts stamina"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Hepatoprotective",
      "Anti-inflammatory",
      "Analgesic"
    ],
    "diseases": [
      "Erectile dysfunction",
      "Chronic pain",
      "Skin lesions"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Tea"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 298,
    "commonName": "Kalahari Vine Type 37",
    "scientificName": "Botanica africana vr. 324",
    "herbalUses": [
      "Soothes oral ulcers",
      "Clears skin blemishes",
      "Enhances libido",
      "Reduces swelling"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antimalarial",
      "Antimicrobial",
      "Cytotoxic"
    ],
    "diseases": [
      "Rheumatism",
      "Digestive parasites",
      "Fever"
    ],
    "habitat": "Grows wildly along the Congo river basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Chewing Stick",
      "Tincture"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 299,
    "commonName": "Kalahari Seed Type 38",
    "scientificName": "Botanica africana vr. 404",
    "herbalUses": [
      "Aids joint mobility",
      "Enhances libido",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Bronchodilator",
      "Antioxidant",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Skin lesions",
      "Erectile dysfunction",
      "Digestive parasites"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Bark Decoction",
      "Leaf Extract",
      "Chewing Stick"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 300,
    "commonName": "Kalahari Shrub Type 39",
    "scientificName": "Botanica africana vr. 802",
    "herbalUses": [
      "Soothes oral ulcers",
      "Boosts stamina",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Antimalarial",
      "Hepatoprotective"
    ],
    "diseases": [
      "Chronic pain",
      "Digestive parasites",
      "Fever",
      "Skin lesions"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Tea",
      "Ointment",
      "Bark Decoction"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 301,
    "commonName": "Kalahari Root Type 40",
    "scientificName": "Botanica africana vr. 185",
    "herbalUses": [
      "Enhances libido",
      "Improves lung capacity",
      "Natural painkiller"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Antimalarial"
    ],
    "diseases": [
      "Malaria",
      "Rheumatism",
      "Digestive parasites"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Thrives in direct sunlight.",
    "medicineForm": [
      "Tea",
      "Tincture",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 302,
    "commonName": "Kalahari Shrub Type 41",
    "scientificName": "Botanica africana vr. 638",
    "herbalUses": [
      "Clears skin blemishes",
      "Soothes oral ulcers",
      "Aids joint mobility",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Bronchodilator",
      "Cytotoxic",
      "Antiparasitic"
    ],
    "diseases": [
      "Asthma",
      "Malaria",
      "Gastroenteritis"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Requires well-drained soil.",
    "medicineForm": [
      "Chewing Stick",
      "Tincture",
      "Root Powder"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 303,
    "commonName": "Kalahari Shrub Type 42",
    "scientificName": "Botanica africana vr. 660",
    "herbalUses": [
      "Treats chronic fever",
      "Aids joint mobility",
      "Improves lung capacity",
      "Reduces swelling"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antimalarial",
      "Bronchodilator",
      "Aphrodisiac"
    ],
    "diseases": [
      "Gastroenteritis",
      "Skin lesions",
      "Erectile dysfunction"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Ointment",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 304,
    "commonName": "Kalahari Vine Type 43",
    "scientificName": "Botanica africana vr. 807",
    "herbalUses": [
      "Treats chronic fever",
      "Clears skin blemishes",
      "Improves lung capacity"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Bronchodilator",
      "Hepatoprotective"
    ],
    "diseases": [
      "Malaria",
      "Gastroenteritis",
      "Skin lesions"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Thrives in direct sunlight.",
    "medicineForm": [
      "Bark Decoction",
      "Root Powder"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 305,
    "commonName": "Kalahari Seed Type 44",
    "scientificName": "Botanica africana vr. 890",
    "herbalUses": [
      "Boosts stamina",
      "Treats chronic fever",
      "Enhances libido",
      "Gut parasite cleanse"
    ],
    "medicalUses": [
      "Antiparasitic",
      "Antimalarial",
      "Antioxidant",
      "Analgesic"
    ],
    "diseases": [
      "Malaria",
      "Asthma",
      "Digestive parasites",
      "Rheumatism"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Tea"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 306,
    "commonName": "Kalahari Bark Type 45",
    "scientificName": "Botanica africana vr. 351",
    "herbalUses": [
      "Aids joint mobility",
      "Natural painkiller",
      "Improves lung capacity",
      "Clears skin blemishes"
    ],
    "medicalUses": [
      "Analgesic",
      "Antimalarial",
      "Anti-inflammatory",
      "Bronchodilator"
    ],
    "diseases": [
      "Asthma",
      "Erectile dysfunction",
      "Malaria",
      "Skin lesions"
    ],
    "habitat": "Thrives in the dry savannas of Sub-Saharan Africa. Thrives in direct sunlight.",
    "medicineForm": [
      "Ointment",
      "Root Powder",
      "Leaf Extract"
    ],
    "sideEffects": [
      "May accelerate heart rate limit"
    ]
  },
  {
    "id": 307,
    "commonName": "Kalahari Root Type 46",
    "scientificName": "Botanica africana vr. 769",
    "herbalUses": [
      "Enhances libido",
      "Boosts stamina",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Antioxidant",
      "Aphrodisiac",
      "Antimalarial"
    ],
    "diseases": [
      "Asthma",
      "Digestive parasites",
      "Chronic pain"
    ],
    "habitat": "Native to tropical African high-altitude grasslands. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Toxic in extremely high doses"
    ]
  },
  {
    "id": 308,
    "commonName": "Kalahari Bark Type 47",
    "scientificName": "Botanica africana vr. 852",
    "herbalUses": [
      "Gut parasite cleanse",
      "Natural painkiller",
      "Enhances libido",
      "Aids joint mobility"
    ],
    "medicalUses": [
      "Cytotoxic",
      "Anti-inflammatory",
      "Antimalarial"
    ],
    "diseases": [
      "Digestive parasites",
      "Asthma",
      "Chronic pain"
    ],
    "habitat": "Endemic to the southern African Kalahari region. Requires well-drained soil.",
    "medicineForm": [
      "Chewing Stick",
      "Tea",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause mild dizziness"
    ]
  },
  {
    "id": 309,
    "commonName": "Kalahari Bark Type 48",
    "scientificName": "Botanica africana vr. 882",
    "herbalUses": [
      "Aids joint mobility",
      "Boosts stamina",
      "Treats chronic fever"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Bronchodilator",
      "Antiparasitic",
      "Antimalarial"
    ],
    "diseases": [
      "Rheumatism",
      "Chronic pain",
      "Malaria",
      "Fever"
    ],
    "habitat": "Grows wildly along the Congo river basin. Thrives in direct sunlight.",
    "medicineForm": [
      "Ointment",
      "Bark Decoction"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 310,
    "commonName": "Kalahari Shrub Type 49",
    "scientificName": "Botanica africana vr. 126",
    "herbalUses": [
      "Gut parasite cleanse",
      "Aids joint mobility",
      "Clears skin blemishes",
      "Natural painkiller"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Bronchodilator",
      "Antioxidant",
      "Antiparasitic"
    ],
    "diseases": [
      "Malaria",
      "Rheumatism",
      "Gastroenteritis",
      "Erectile dysfunction"
    ],
    "habitat": "Grows wildly along the Congo river basin. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Not meant for continuous long-term use"
    ]
  },
  {
    "id": 311,
    "commonName": "Cat's Claw",
    "scientificName": "Botanica amazonica vr. 938",
    "herbalUses": [
      "Supports immune defense",
      "Boosts cognitive focus",
      "Deep systemic detox"
    ],
    "medicalUses": [
      "Stimulant",
      "Immunomodulator",
      "Antiviral",
      "Antirheumatic"
    ],
    "diseases": [
      "Arthritis",
      "Low blood pressure",
      "Lupus symptoms",
      "Viral infections"
    ],
    "habitat": "Grows dynamically in South American coastal tropical zones. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Resin"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 312,
    "commonName": "Pau D'Arco",
    "scientificName": "Botanica amazonica vr. 991",
    "herbalUses": [
      "Soothes nerve pain",
      "Eases joint stiffness",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunomodulator",
      "Antirheumatic",
      "Stimulant"
    ],
    "diseases": [
      "Viral infections",
      "Digestive sluggishness",
      "Chronic fatigue",
      "Nerve pain"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Elixir",
      "Tincture"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 313,
    "commonName": "Guarana",
    "scientificName": "Botanica amazonica vr. 222",
    "herbalUses": [
      "Elevates energy levels",
      "Deep systemic detox",
      "Eases joint stiffness"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antirheumatic",
      "Vasodilator"
    ],
    "diseases": [
      "Memory lethargy",
      "Nerve pain",
      "Gout",
      "Chronic fatigue"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Elixir",
      "Powder",
      "Extract"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 314,
    "commonName": "Maca",
    "scientificName": "Botanica amazonica vr. 541",
    "herbalUses": [
      "Cleanses the blood",
      "Supports immune defense",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Antineoplastic",
      "Immunomodulator",
      "Stimulant",
      "Analgesic"
    ],
    "diseases": [
      "Viral infections",
      "Arthritis",
      "Lupus symptoms",
      "Chronic fatigue"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Brewed Tea",
      "Powder"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 315,
    "commonName": "Muira Puama",
    "scientificName": "Botanica amazonica vr. 980",
    "herbalUses": [
      "Cleanses the blood",
      "Deep systemic detox",
      "Supports immune defense",
      "Eases joint stiffness"
    ],
    "medicalUses": [
      "Antioxidant",
      "Stimulant",
      "Antirheumatic",
      "Immunomodulator"
    ],
    "diseases": [
      "Low blood pressure",
      "Gout",
      "Nerve pain"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Brewed Tea",
      "Powder"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 316,
    "commonName": "Catuaba",
    "scientificName": "Botanica amazonica vr. 393",
    "herbalUses": [
      "Cleanses the blood",
      "Supports immune defense",
      "Enhances vitality"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antineoplastic",
      "Vasodilator"
    ],
    "diseases": [
      "Lupus symptoms",
      "Low blood pressure",
      "Asthma",
      "Nerve pain"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Brewed Tea",
      "Tincture"
    ],
    "sideEffects": [
      "Avoid with stimulant medications"
    ]
  },
  {
    "id": 317,
    "commonName": "Suma Root",
    "scientificName": "Botanica amazonica vr. 964",
    "herbalUses": [
      "Cleanses the blood",
      "Enhances vitality",
      "Promotes stamina",
      "Deep systemic detox"
    ],
    "medicalUses": [
      "Stimulant",
      "Antirheumatic",
      "Antineoplastic",
      "Antioxidant"
    ],
    "diseases": [
      "Nerve pain",
      "Viral infections",
      "Chronic fatigue",
      "Asthma"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Extract",
      "Brewed Tea"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 318,
    "commonName": "Amazon herbs",
    "scientificName": "Botanica amazonica vr. 999",
    "herbalUses": [
      "Boosts cognitive focus",
      "Enhances vitality",
      "Cleanses the blood",
      "Aids metabolic speed"
    ],
    "medicalUses": [
      "Antineoplastic",
      "Vasodilator",
      "Stimulant",
      "Antirheumatic"
    ],
    "diseases": [
      "Lupus symptoms",
      "Viral infections",
      "Nerve pain"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Brewed Tea",
      "Extract",
      "Powder"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 319,
    "commonName": "Chuchuhuasi",
    "scientificName": "Botanica amazonica vr. 972",
    "herbalUses": [
      "Deep systemic detox",
      "Enhances vitality",
      "Eases joint stiffness",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunomodulator",
      "Vasodilator",
      "Antineoplastic"
    ],
    "diseases": [
      "Viral infections",
      "Asthma",
      "Gout"
    ],
    "habitat": "Grows dynamically in South American coastal tropical zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Powder",
      "Elixir"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 320,
    "commonName": "Graviola",
    "scientificName": "Botanica amazonica vr. 513",
    "herbalUses": [
      "Boosts cognitive focus",
      "Promotes stamina",
      "Deep systemic detox",
      "Soothes nerve pain"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antirheumatic",
      "Analgesic"
    ],
    "diseases": [
      "Chronic fatigue",
      "Low blood pressure",
      "Gout",
      "Asthma"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Elixir"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 321,
    "commonName": "Sangre de Drago",
    "scientificName": "Botanica amazonica vr. 328",
    "herbalUses": [
      "Cleanses the blood",
      "Aids metabolic speed",
      "Deep systemic detox"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Stimulant",
      "Antineoplastic"
    ],
    "diseases": [
      "Gout",
      "Digestive sluggishness",
      "Lupus symptoms"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Elixir"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 322,
    "commonName": "Camu Camu",
    "scientificName": "Botanica amazonica vr. 478",
    "herbalUses": [
      "Boosts cognitive focus",
      "Enhances vitality",
      "Aids metabolic speed"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antineoplastic",
      "Analgesic"
    ],
    "diseases": [
      "Digestive sluggishness",
      "Nerve pain",
      "Low blood pressure"
    ],
    "habitat": "Grows dynamically in South American coastal tropical zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Tincture"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 323,
    "commonName": "Sacha Inchi",
    "scientificName": "Botanica amazonica vr. 302",
    "herbalUses": [
      "Aids metabolic speed",
      "Cleanses the blood",
      "Supports immune defense"
    ],
    "medicalUses": [
      "Stimulant",
      "Antineoplastic",
      "Antioxidant",
      "Immunomodulator"
    ],
    "diseases": [
      "Low blood pressure",
      "Chronic fatigue",
      "Asthma",
      "Lupus symptoms"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Capsule"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 324,
    "commonName": "Lucuma",
    "scientificName": "Botanica amazonica vr. 449",
    "herbalUses": [
      "Elevates energy levels",
      "Deep systemic detox",
      "Aids metabolic speed",
      "Eases joint stiffness"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antineoplastic",
      "Immunomodulator"
    ],
    "diseases": [
      "Low blood pressure",
      "Chronic fatigue",
      "Arthritis"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Brewed Tea",
      "Powder",
      "Extract"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 325,
    "commonName": "Huanarpo Macho",
    "scientificName": "Botanica amazonica vr. 504",
    "herbalUses": [
      "Enhances vitality",
      "Eases joint stiffness",
      "Promotes stamina",
      "Soothes nerve pain"
    ],
    "medicalUses": [
      "Stimulant",
      "Vasodilator",
      "Immunomodulator"
    ],
    "diseases": [
      "Asthma",
      "Memory lethargy",
      "Gout",
      "Digestive sluggishness"
    ],
    "habitat": "Found deep in the Brazilian Atlantic forest. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Powder",
      "Brewed Tea"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 326,
    "commonName": "Vilcacora",
    "scientificName": "Botanica amazonica vr. 462",
    "herbalUses": [
      "Elevates energy levels",
      "Boosts cognitive focus",
      "Deep systemic detox",
      "Soothes nerve pain"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Analgesic",
      "Stimulant",
      "Adaptogenic"
    ],
    "diseases": [
      "Chronic fatigue",
      "Gout",
      "Lupus symptoms",
      "Asthma"
    ],
    "habitat": "Found deep in the Brazilian Atlantic forest. Requires well-drained soil.",
    "medicineForm": [
      "Resin",
      "Elixir"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 327,
    "commonName": "Clavo Huasca",
    "scientificName": "Botanica amazonica vr. 870",
    "herbalUses": [
      "Deep systemic detox",
      "Promotes stamina",
      "Soothes nerve pain"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antiviral",
      "Vasodilator"
    ],
    "diseases": [
      "Nerve pain",
      "Asthma",
      "Low blood pressure"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Resin",
      "Extract"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 328,
    "commonName": "Amazonian Nut Type 17",
    "scientificName": "Botanica amazonica vr. 482",
    "herbalUses": [
      "Enhances vitality",
      "Eases joint stiffness",
      "Deep systemic detox"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antineoplastic",
      "Antirheumatic"
    ],
    "diseases": [
      "Digestive sluggishness",
      "Low blood pressure",
      "Memory lethargy"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Powder",
      "Elixir"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 329,
    "commonName": "Amazonian Berry Type 18",
    "scientificName": "Botanica amazonica vr. 711",
    "herbalUses": [
      "Soothes nerve pain",
      "Promotes stamina",
      "Enhances vitality",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Antirheumatic",
      "Analgesic",
      "Immunomodulator"
    ],
    "diseases": [
      "Low blood pressure",
      "Nerve pain",
      "Viral infections"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Resin",
      "Powder",
      "Brewed Tea"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 330,
    "commonName": "Amazonian Vine Type 19",
    "scientificName": "Botanica amazonica vr. 293",
    "herbalUses": [
      "Eases joint stiffness",
      "Enhances vitality",
      "Supports immune defense",
      "Aids metabolic speed"
    ],
    "medicalUses": [
      "Analgesic",
      "Vasodilator",
      "Antirheumatic",
      "Antiviral"
    ],
    "diseases": [
      "Nerve pain",
      "Viral infections",
      "Low blood pressure"
    ],
    "habitat": "Found deep in the Brazilian Atlantic forest. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Brewed Tea",
      "Resin"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 331,
    "commonName": "Amazonian Vine Type 20",
    "scientificName": "Botanica amazonica vr. 582",
    "herbalUses": [
      "Elevates energy levels",
      "Boosts cognitive focus",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Antineoplastic",
      "Stimulant",
      "Anti-inflammatory",
      "Vasodilator"
    ],
    "diseases": [
      "Chronic fatigue",
      "Nerve pain",
      "Memory lethargy",
      "Arthritis"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Extract",
      "Brewed Tea"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 332,
    "commonName": "Amazonian Berry Type 21",
    "scientificName": "Botanica amazonica vr. 9",
    "herbalUses": [
      "Supports immune defense",
      "Boosts cognitive focus",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antirheumatic",
      "Anti-inflammatory",
      "Immunomodulator"
    ],
    "diseases": [
      "Low blood pressure",
      "Digestive sluggishness",
      "Gout",
      "Viral infections"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Capsule"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 333,
    "commonName": "Amazonian Berry Type 22",
    "scientificName": "Botanica amazonica vr. 626",
    "herbalUses": [
      "Promotes stamina",
      "Elevates energy levels",
      "Boosts cognitive focus",
      "Eases joint stiffness"
    ],
    "medicalUses": [
      "Antioxidant",
      "Vasodilator",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Memory lethargy",
      "Viral infections",
      "Digestive sluggishness",
      "Arthritis"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Elixir",
      "Resin"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 334,
    "commonName": "Amazonian Bark Type 23",
    "scientificName": "Botanica amazonica vr. 585",
    "herbalUses": [
      "Aids metabolic speed",
      "Eases joint stiffness",
      "Supports immune defense"
    ],
    "medicalUses": [
      "Antirheumatic",
      "Stimulant",
      "Adaptogenic",
      "Immunomodulator"
    ],
    "diseases": [
      "Asthma",
      "Low blood pressure",
      "Lupus symptoms"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Extract",
      "Capsule"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 335,
    "commonName": "Amazonian Vine Type 24",
    "scientificName": "Botanica amazonica vr. 958",
    "herbalUses": [
      "Elevates energy levels",
      "Deep systemic detox",
      "Boosts cognitive focus"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Immunomodulator",
      "Antioxidant"
    ],
    "diseases": [
      "Digestive sluggishness",
      "Low blood pressure",
      "Memory lethargy",
      "Chronic fatigue"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Elixir",
      "Capsule"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 336,
    "commonName": "Amazonian Bark Type 25",
    "scientificName": "Botanica amazonica vr. 246",
    "herbalUses": [
      "Cleanses the blood",
      "Soothes nerve pain",
      "Aids metabolic speed"
    ],
    "medicalUses": [
      "Analgesic",
      "Antineoplastic",
      "Antiviral"
    ],
    "diseases": [
      "Gout",
      "Arthritis",
      "Digestive sluggishness"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Powder",
      "Resin"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 337,
    "commonName": "Amazonian Berry Type 26",
    "scientificName": "Botanica amazonica vr. 683",
    "herbalUses": [
      "Aids metabolic speed",
      "Deep systemic detox",
      "Boosts cognitive focus"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Antioxidant",
      "Adaptogenic"
    ],
    "diseases": [
      "Chronic fatigue",
      "Gout",
      "Low blood pressure",
      "Arthritis"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Brewed Tea",
      "Extract"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 338,
    "commonName": "Amazonian Fern Type 27",
    "scientificName": "Botanica amazonica vr. 55",
    "herbalUses": [
      "Deep systemic detox",
      "Soothes nerve pain",
      "Boosts cognitive focus"
    ],
    "medicalUses": [
      "Stimulant",
      "Antirheumatic",
      "Antineoplastic"
    ],
    "diseases": [
      "Chronic fatigue",
      "Arthritis",
      "Lupus symptoms",
      "Digestive sluggishness"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Elixir",
      "Powder",
      "Resin"
    ],
    "sideEffects": [
      "Avoid with stimulant medications"
    ]
  },
  {
    "id": 339,
    "commonName": "Amazonian Vine Type 28",
    "scientificName": "Botanica amazonica vr. 59",
    "herbalUses": [
      "Elevates energy levels",
      "Boosts cognitive focus",
      "Supports immune defense",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Stimulant",
      "Immunomodulator",
      "Analgesic"
    ],
    "diseases": [
      "Gout",
      "Nerve pain",
      "Chronic fatigue"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Elixir"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 340,
    "commonName": "Amazonian Bark Type 29",
    "scientificName": "Botanica amazonica vr. 785",
    "herbalUses": [
      "Soothes nerve pain",
      "Enhances vitality",
      "Deep systemic detox",
      "Boosts cognitive focus"
    ],
    "medicalUses": [
      "Antirheumatic",
      "Antioxidant",
      "Vasodilator"
    ],
    "diseases": [
      "Viral infections",
      "Memory lethargy",
      "Lupus symptoms",
      "Digestive sluggishness"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Brewed Tea",
      "Extract",
      "Resin"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 341,
    "commonName": "Amazonian Vine Type 30",
    "scientificName": "Botanica amazonica vr. 593",
    "herbalUses": [
      "Elevates energy levels",
      "Boosts cognitive focus",
      "Eases joint stiffness"
    ],
    "medicalUses": [
      "Immunomodulator",
      "Antiviral",
      "Vasodilator",
      "Adaptogenic"
    ],
    "diseases": [
      "Digestive sluggishness",
      "Viral infections",
      "Gout"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Elixir",
      "Extract",
      "Brewed Tea"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 342,
    "commonName": "Amazonian Vine Type 31",
    "scientificName": "Botanica amazonica vr. 530",
    "herbalUses": [
      "Eases joint stiffness",
      "Promotes stamina",
      "Supports immune defense"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Stimulant",
      "Immunomodulator",
      "Antiviral"
    ],
    "diseases": [
      "Memory lethargy",
      "Low blood pressure",
      "Viral infections"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Capsule",
      "Elixir"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 343,
    "commonName": "Amazonian Bark Type 32",
    "scientificName": "Botanica amazonica vr. 691",
    "herbalUses": [
      "Elevates energy levels",
      "Deep systemic detox",
      "Aids metabolic speed",
      "Boosts cognitive focus"
    ],
    "medicalUses": [
      "Antiviral",
      "Analgesic",
      "Stimulant"
    ],
    "diseases": [
      "Lupus symptoms",
      "Chronic fatigue",
      "Digestive sluggishness"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Capsule",
      "Elixir"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 344,
    "commonName": "Amazonian Bark Type 33",
    "scientificName": "Botanica amazonica vr. 428",
    "herbalUses": [
      "Enhances vitality",
      "Cleanses the blood",
      "Deep systemic detox"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antioxidant",
      "Antirheumatic",
      "Antineoplastic"
    ],
    "diseases": [
      "Low blood pressure",
      "Chronic fatigue",
      "Asthma"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Tincture",
      "Extract"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 345,
    "commonName": "Amazonian Bark Type 34",
    "scientificName": "Botanica amazonica vr. 891",
    "herbalUses": [
      "Enhances vitality",
      "Deep systemic detox",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Antioxidant",
      "Analgesic",
      "Vasodilator",
      "Immunomodulator"
    ],
    "diseases": [
      "Low blood pressure",
      "Viral infections",
      "Lupus symptoms",
      "Gout"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Resin",
      "Capsule"
    ],
    "sideEffects": [
      "Not recommended for children"
    ]
  },
  {
    "id": 346,
    "commonName": "Amazonian Nut Type 35",
    "scientificName": "Botanica amazonica vr. 964",
    "herbalUses": [
      "Deep systemic detox",
      "Eases joint stiffness",
      "Cleanses the blood",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Antineoplastic",
      "Stimulant",
      "Immunomodulator",
      "Analgesic"
    ],
    "diseases": [
      "Asthma",
      "Viral infections",
      "Gout"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Tincture",
      "Powder"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 347,
    "commonName": "Amazonian Vine Type 36",
    "scientificName": "Botanica amazonica vr. 433",
    "herbalUses": [
      "Cleanses the blood",
      "Boosts cognitive focus",
      "Promotes stamina",
      "Enhances vitality"
    ],
    "medicalUses": [
      "Antioxidant",
      "Stimulant",
      "Analgesic",
      "Adaptogenic"
    ],
    "diseases": [
      "Chronic fatigue",
      "Digestive sluggishness",
      "Arthritis",
      "Gout"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Brewed Tea",
      "Extract"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 348,
    "commonName": "Amazonian Berry Type 37",
    "scientificName": "Botanica amazonica vr. 873",
    "herbalUses": [
      "Deep systemic detox",
      "Enhances vitality",
      "Aids metabolic speed",
      "Elevates energy levels"
    ],
    "medicalUses": [
      "Antiviral",
      "Antineoplastic",
      "Antirheumatic",
      "Adaptogenic"
    ],
    "diseases": [
      "Low blood pressure",
      "Viral infections",
      "Lupus symptoms"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Resin"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 349,
    "commonName": "Amazonian Vine Type 38",
    "scientificName": "Botanica amazonica vr. 436",
    "herbalUses": [
      "Supports immune defense",
      "Cleanses the blood",
      "Boosts cognitive focus"
    ],
    "medicalUses": [
      "Analgesic",
      "Immunomodulator",
      "Antineoplastic",
      "Stimulant"
    ],
    "diseases": [
      "Digestive sluggishness",
      "Low blood pressure",
      "Viral infections",
      "Nerve pain"
    ],
    "habitat": "Found deep in the Brazilian Atlantic forest. Requires well-drained soil.",
    "medicineForm": [
      "Resin",
      "Powder",
      "Brewed Tea"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 350,
    "commonName": "Amazonian Berry Type 39",
    "scientificName": "Botanica amazonica vr. 146",
    "herbalUses": [
      "Deep systemic detox",
      "Enhances vitality",
      "Eases joint stiffness",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Antineoplastic",
      "Vasodilator",
      "Adaptogenic",
      "Antioxidant"
    ],
    "diseases": [
      "Digestive sluggishness",
      "Gout",
      "Nerve pain",
      "Memory lethargy"
    ],
    "habitat": "Grows dynamically in South American coastal tropical zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Brewed Tea",
      "Extract"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 351,
    "commonName": "Amazonian Berry Type 40",
    "scientificName": "Botanica amazonica vr. 589",
    "herbalUses": [
      "Soothes nerve pain",
      "Elevates energy levels",
      "Promotes stamina",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Vasodilator",
      "Antioxidant",
      "Anti-inflammatory",
      "Analgesic"
    ],
    "diseases": [
      "Lupus symptoms",
      "Chronic fatigue",
      "Asthma",
      "Arthritis"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Powder",
      "Brewed Tea",
      "Resin"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 352,
    "commonName": "Amazonian Berry Type 41",
    "scientificName": "Botanica amazonica vr. 850",
    "herbalUses": [
      "Boosts cognitive focus",
      "Deep systemic detox",
      "Enhances vitality",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Antiviral",
      "Vasodilator",
      "Adaptogenic"
    ],
    "diseases": [
      "Nerve pain",
      "Low blood pressure",
      "Lupus symptoms"
    ],
    "habitat": "Grows dynamically in South American coastal tropical zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Elixir"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 353,
    "commonName": "Amazonian Vine Type 42",
    "scientificName": "Botanica amazonica vr. 373",
    "herbalUses": [
      "Elevates energy levels",
      "Boosts cognitive focus",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antirheumatic",
      "Antioxidant"
    ],
    "diseases": [
      "Lupus symptoms",
      "Arthritis",
      "Memory lethargy",
      "Asthma"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Elixir",
      "Resin",
      "Brewed Tea"
    ],
    "sideEffects": [
      "Avoid with stimulant medications"
    ]
  },
  {
    "id": 354,
    "commonName": "Amazonian Bark Type 43",
    "scientificName": "Botanica amazonica vr. 632",
    "herbalUses": [
      "Eases joint stiffness",
      "Elevates energy levels",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Antirheumatic",
      "Stimulant",
      "Immunomodulator"
    ],
    "diseases": [
      "Asthma",
      "Chronic fatigue",
      "Memory lethargy"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Extract",
      "Resin"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 355,
    "commonName": "Amazonian Berry Type 44",
    "scientificName": "Botanica amazonica vr. 574",
    "herbalUses": [
      "Eases joint stiffness",
      "Enhances vitality",
      "Promotes stamina"
    ],
    "medicalUses": [
      "Antirheumatic",
      "Immunomodulator",
      "Vasodilator",
      "Antioxidant"
    ],
    "diseases": [
      "Memory lethargy",
      "Chronic fatigue",
      "Arthritis"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Powder",
      "Brewed Tea"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 356,
    "commonName": "Amazonian Vine Type 45",
    "scientificName": "Botanica amazonica vr. 80",
    "herbalUses": [
      "Deep systemic detox",
      "Elevates energy levels",
      "Aids metabolic speed",
      "Cleanses the blood"
    ],
    "medicalUses": [
      "Stimulant",
      "Antioxidant",
      "Adaptogenic",
      "Antiviral"
    ],
    "diseases": [
      "Lupus symptoms",
      "Digestive sluggishness",
      "Low blood pressure"
    ],
    "habitat": "Found deep in the Brazilian Atlantic forest. Requires well-drained soil.",
    "medicineForm": [
      "Extract",
      "Capsule",
      "Resin"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 357,
    "commonName": "Amazonian Bark Type 46",
    "scientificName": "Botanica amazonica vr. 420",
    "herbalUses": [
      "Deep systemic detox",
      "Enhances vitality",
      "Soothes nerve pain"
    ],
    "medicalUses": [
      "Antiviral",
      "Antirheumatic",
      "Vasodilator",
      "Stimulant"
    ],
    "diseases": [
      "Arthritis",
      "Chronic fatigue",
      "Digestive sluggishness",
      "Memory lethargy"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Brewed Tea",
      "Tincture",
      "Extract"
    ],
    "sideEffects": [
      "May cause gastrointestinal distress"
    ]
  },
  {
    "id": 358,
    "commonName": "Amazonian Vine Type 47",
    "scientificName": "Botanica amazonica vr. 264",
    "herbalUses": [
      "Soothes nerve pain",
      "Boosts cognitive focus",
      "Enhances vitality"
    ],
    "medicalUses": [
      "Antiviral",
      "Vasodilator",
      "Antineoplastic",
      "Immunomodulator"
    ],
    "diseases": [
      "Chronic fatigue",
      "Arthritis",
      "Lupus symptoms"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Elixir",
      "Resin"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 359,
    "commonName": "Amazonian Root Type 48",
    "scientificName": "Botanica amazonica vr. 658",
    "herbalUses": [
      "Promotes stamina",
      "Soothes nerve pain",
      "Deep systemic detox"
    ],
    "medicalUses": [
      "Antiviral",
      "Vasodilator",
      "Stimulant",
      "Antioxidant"
    ],
    "diseases": [
      "Memory lethargy",
      "Nerve pain",
      "Digestive sluggishness",
      "Lupus symptoms"
    ],
    "habitat": "Native to the lush Amazon rainforest canopy. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Resin"
    ],
    "sideEffects": [
      "May cause insomnia if taken late"
    ]
  },
  {
    "id": 360,
    "commonName": "Amazonian Vine Type 49",
    "scientificName": "Botanica amazonica vr. 838",
    "herbalUses": [
      "Elevates energy levels",
      "Cleanses the blood",
      "Boosts cognitive focus",
      "Aids metabolic speed"
    ],
    "medicalUses": [
      "Vasodilator",
      "Analgesic",
      "Adaptogenic",
      "Antiviral"
    ],
    "diseases": [
      "Lupus symptoms",
      "Low blood pressure",
      "Memory lethargy",
      "Gout"
    ],
    "habitat": "Thrives natively in the high altitude Andes mountains. Thrives in direct sunlight.",
    "medicineForm": [
      "Extract",
      "Capsule"
    ],
    "sideEffects": [
      "Can elevate heart rate excessively"
    ]
  },
  {
    "id": 361,
    "commonName": "Black Seed Nigella",
    "scientificName": "Botanica arabica vr. 679",
    "herbalUses": [
      "Antiseptic wash",
      "Enhances respiratory flow",
      "Soothes throat lining",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Carminative",
      "Expectorant",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Bronchitis",
      "Immune deficiency",
      "Psoriasis"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Capsule",
      "Spice Powder"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 362,
    "commonName": "Fenugreek",
    "scientificName": "Botanica arabica vr. 247",
    "herbalUses": [
      "Purifies skin pores",
      "Enhances respiratory flow",
      "Promotes scalp health",
      "Relieves chest congestion"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Galactagogue",
      "Antispasmodic"
    ],
    "diseases": [
      "High cholesterol",
      "Indigestion",
      "Immune deficiency"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 363,
    "commonName": "Pomegranate",
    "scientificName": "Botanica arabica vr. 39",
    "herbalUses": [
      "Aids milk production",
      "Boosts metabolic fire",
      "Relieves chest congestion",
      "Antiseptic wash"
    ],
    "medicalUses": [
      "Astringent",
      "Carminative",
      "Anti-inflammatory",
      "Hepatoprotective"
    ],
    "diseases": [
      "Cough",
      "High cholesterol",
      "Diabetes type 2"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Thrives in direct sunlight.",
    "medicineForm": [
      "Infusion",
      "Spice Powder",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 364,
    "commonName": "Olive Leaf",
    "scientificName": "Botanica arabica vr. 374",
    "herbalUses": [
      "Reduces systemic heat",
      "Balances digestion",
      "Aids milk production",
      "Relieves chest congestion"
    ],
    "medicalUses": [
      "Expectorant",
      "Hepatoprotective",
      "Antispasmodic",
      "Antimicrobial"
    ],
    "diseases": [
      "High cholesterol",
      "Hair loss",
      "Indigestion"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Capsule",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 365,
    "commonName": "Za'atar",
    "scientificName": "Botanica arabica vr. 88",
    "herbalUses": [
      "Relieves chest congestion",
      "Balances digestion",
      "Soothes throat lining"
    ],
    "medicalUses": [
      "Antioxidant",
      "Astringent",
      "Diaphoretic",
      "Carminative"
    ],
    "diseases": [
      "Skin wounds",
      "Cough",
      "Hair loss"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Essential Oil",
      "Spice Powder",
      "Syrup"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 366,
    "commonName": "Sumac",
    "scientificName": "Botanica arabica vr. 973",
    "herbalUses": [
      "Boosts metabolic fire",
      "Balances digestion",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Galactagogue",
      "Astringent",
      "Antispasmodic"
    ],
    "diseases": [
      "Cough",
      "Hair loss",
      "High cholesterol",
      "Psoriasis"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Requires well-drained soil.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Syrup"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 367,
    "commonName": "Saffron",
    "scientificName": "Botanica arabica vr. 297",
    "herbalUses": [
      "Purifies skin pores",
      "Balances digestion",
      "Soothes throat lining",
      "Aids milk production"
    ],
    "medicalUses": [
      "Antioxidant",
      "Galactagogue",
      "Antispasmodic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Indigestion",
      "Asthma",
      "High cholesterol"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Cold-pressed Oil",
      "Infusion"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 368,
    "commonName": "Hyssop",
    "scientificName": "Botanica arabica vr. 698",
    "herbalUses": [
      "Soothes throat lining",
      "Enhances respiratory flow",
      "Balances digestion"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Expectorant",
      "Antimicrobial",
      "Carminative"
    ],
    "diseases": [
      "Cough",
      "High cholesterol",
      "Asthma"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Infusion",
      "Essential Oil",
      "Spice Powder"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 369,
    "commonName": "Carob",
    "scientificName": "Botanica arabica vr. 777",
    "herbalUses": [
      "Enhances respiratory flow",
      "Antiseptic wash",
      "Reduces systemic heat"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Galactagogue",
      "Astringent"
    ],
    "diseases": [
      "Indigestion",
      "Diabetes type 2",
      "Immune deficiency",
      "Cough"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Syrup",
      "Essential Oil",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 370,
    "commonName": "Mastic",
    "scientificName": "Botanica arabica vr. 930",
    "herbalUses": [
      "Soothes throat lining",
      "Boosts metabolic fire",
      "Aids milk production",
      "Balances digestion"
    ],
    "medicalUses": [
      "Diaphoretic",
      "Antimicrobial",
      "Expectorant"
    ],
    "diseases": [
      "Psoriasis",
      "Bronchitis",
      "Indigestion",
      "Immune deficiency"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Requires well-drained soil.",
    "medicineForm": [
      "Spice Powder",
      "Cold-pressed Oil",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 371,
    "commonName": "Thyme Greek",
    "scientificName": "Botanica arabica vr. 460",
    "herbalUses": [
      "Relieves chest congestion",
      "Promotes scalp health",
      "Aids milk production",
      "Enhances respiratory flow"
    ],
    "medicalUses": [
      "Antioxidant",
      "Galactagogue",
      "Carminative"
    ],
    "diseases": [
      "High cholesterol",
      "Skin wounds",
      "Psoriasis"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Spice Powder",
      "Infusion"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 372,
    "commonName": "Oregano Greek",
    "scientificName": "Botanica arabica vr. 342",
    "herbalUses": [
      "Balances digestion",
      "Soothes throat lining",
      "Reduces systemic heat"
    ],
    "medicalUses": [
      "Galactagogue",
      "Hepatoprotective",
      "Diaphoretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Asthma",
      "Immune deficiency",
      "Diabetes type 2"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Spice Powder",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 373,
    "commonName": "Sage Dalmatian",
    "scientificName": "Botanica arabica vr. 568",
    "herbalUses": [
      "Boosts metabolic fire",
      "Aids milk production",
      "Soothes throat lining",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Antioxidant",
      "Diaphoretic",
      "Expectorant"
    ],
    "diseases": [
      "Psoriasis",
      "High cholesterol",
      "Cough"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Infusion",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 374,
    "commonName": "Rose Hip",
    "scientificName": "Botanica arabica vr. 415",
    "herbalUses": [
      "Balances digestion",
      "Enhances respiratory flow",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Astringent",
      "Anti-inflammatory",
      "Expectorant"
    ],
    "diseases": [
      "Asthma",
      "Skin wounds",
      "Indigestion",
      "Psoriasis"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Essential Oil",
      "Syrup",
      "Spice Powder"
    ],
    "sideEffects": [
      "Can cause mild heartburn"
    ]
  },
  {
    "id": 375,
    "commonName": "Sea Buckthorn",
    "scientificName": "Botanica arabica vr. 728",
    "herbalUses": [
      "Purifies skin pores",
      "Aids milk production",
      "Antiseptic wash"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Anti-inflammatory",
      "Antioxidant"
    ],
    "diseases": [
      "Skin wounds",
      "Bronchitis",
      "Hair loss"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Syrup",
      "Poultice"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 376,
    "commonName": "Milk Vetch",
    "scientificName": "Botanica arabica vr. 377",
    "herbalUses": [
      "Relieves chest congestion",
      "Aids milk production",
      "Soothes throat lining"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Astringent",
      "Hepatoprotective",
      "Antioxidant"
    ],
    "diseases": [
      "High cholesterol",
      "Bronchitis",
      "Cough"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Syrup"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 377,
    "commonName": "Desert Spice Type 16",
    "scientificName": "Botanica arabica vr. 69",
    "herbalUses": [
      "Soothes throat lining",
      "Boosts metabolic fire",
      "Enhances respiratory flow"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antimicrobial",
      "Diaphoretic"
    ],
    "diseases": [
      "Psoriasis",
      "High cholesterol",
      "Diabetes type 2"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Infusion"
    ],
    "sideEffects": [
      "Can cause mild heartburn"
    ]
  },
  {
    "id": 378,
    "commonName": "Desert Spice Type 17",
    "scientificName": "Botanica arabica vr. 520",
    "herbalUses": [
      "Boosts metabolic fire",
      "Enhances respiratory flow",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Diaphoretic",
      "Antioxidant",
      "Antimicrobial"
    ],
    "diseases": [
      "Skin wounds",
      "High cholesterol",
      "Cough",
      "Bronchitis"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Spice Powder",
      "Infusion"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 379,
    "commonName": "Desert Seed Type 18",
    "scientificName": "Botanica arabica vr. 97",
    "herbalUses": [
      "Reduces systemic heat",
      "Soothes throat lining",
      "Relieves chest congestion"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Carminative",
      "Expectorant",
      "Astringent"
    ],
    "diseases": [
      "Immune deficiency",
      "Hair loss",
      "Bronchitis",
      "Asthma"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Requires well-drained soil.",
    "medicineForm": [
      "Spice Powder",
      "Cold-pressed Oil",
      "Poultice"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 380,
    "commonName": "Desert Leaf Type 19",
    "scientificName": "Botanica arabica vr. 826",
    "herbalUses": [
      "Enhances respiratory flow",
      "Antiseptic wash",
      "Balances digestion",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Carminative",
      "Galactagogue",
      "Diaphoretic"
    ],
    "diseases": [
      "Asthma",
      "Hair loss",
      "Indigestion"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Syrup",
      "Capsule"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 381,
    "commonName": "Desert Spice Type 20",
    "scientificName": "Botanica arabica vr. 550",
    "herbalUses": [
      "Balances digestion",
      "Antiseptic wash",
      "Enhances respiratory flow",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Antioxidant",
      "Galactagogue",
      "Expectorant"
    ],
    "diseases": [
      "Bronchitis",
      "Asthma",
      "Immune deficiency",
      "Cough"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 382,
    "commonName": "Desert Berry Type 21",
    "scientificName": "Botanica arabica vr. 711",
    "herbalUses": [
      "Aids milk production",
      "Enhances respiratory flow",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Diaphoretic",
      "Antimicrobial"
    ],
    "diseases": [
      "Bronchitis",
      "Asthma",
      "Diabetes type 2",
      "Indigestion"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Infusion",
      "Syrup",
      "Poultice"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 383,
    "commonName": "Desert Seed Type 22",
    "scientificName": "Botanica arabica vr. 471",
    "herbalUses": [
      "Enhances respiratory flow",
      "Antiseptic wash",
      "Relieves chest congestion",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Carminative",
      "Expectorant"
    ],
    "diseases": [
      "Asthma",
      "Immune deficiency",
      "Indigestion",
      "Cough"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Thrives in direct sunlight.",
    "medicineForm": [
      "Syrup",
      "Spice Powder"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 384,
    "commonName": "Desert Seed Type 23",
    "scientificName": "Botanica arabica vr. 659",
    "herbalUses": [
      "Aids milk production",
      "Balances digestion",
      "Purifies skin pores"
    ],
    "medicalUses": [
      "Galactagogue",
      "Expectorant",
      "Antioxidant",
      "Antimicrobial"
    ],
    "diseases": [
      "Diabetes type 2",
      "Asthma",
      "Bronchitis",
      "Skin wounds"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Spice Powder",
      "Syrup",
      "Poultice"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 385,
    "commonName": "Desert Shrub Type 24",
    "scientificName": "Botanica arabica vr. 702",
    "herbalUses": [
      "Purifies skin pores",
      "Boosts metabolic fire",
      "Soothes throat lining"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antispasmodic",
      "Galactagogue"
    ],
    "diseases": [
      "Bronchitis",
      "Skin wounds",
      "Asthma"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Infusion",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 386,
    "commonName": "Desert Seed Type 25",
    "scientificName": "Botanica arabica vr. 47",
    "herbalUses": [
      "Soothes throat lining",
      "Aids milk production",
      "Enhances respiratory flow",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Expectorant",
      "Diaphoretic"
    ],
    "diseases": [
      "Bronchitis",
      "Skin wounds",
      "Cough",
      "Asthma"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Syrup",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 387,
    "commonName": "Desert Spice Type 26",
    "scientificName": "Botanica arabica vr. 341",
    "herbalUses": [
      "Relieves chest congestion",
      "Aids milk production",
      "Reduces systemic heat"
    ],
    "medicalUses": [
      "Expectorant",
      "Astringent",
      "Antimicrobial",
      "Galactagogue"
    ],
    "diseases": [
      "Psoriasis",
      "Bronchitis",
      "Asthma"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Infusion",
      "Essential Oil",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 388,
    "commonName": "Desert Spice Type 27",
    "scientificName": "Botanica arabica vr. 111",
    "herbalUses": [
      "Reduces systemic heat",
      "Boosts metabolic fire",
      "Balances digestion"
    ],
    "medicalUses": [
      "Astringent",
      "Carminative",
      "Anti-inflammatory",
      "Hepatoprotective"
    ],
    "diseases": [
      "Skin wounds",
      "Immune deficiency",
      "Cough",
      "High cholesterol"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Poultice",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 389,
    "commonName": "Desert Leaf Type 28",
    "scientificName": "Botanica arabica vr. 639",
    "herbalUses": [
      "Reduces systemic heat",
      "Antiseptic wash",
      "Promotes scalp health",
      "Purifies skin pores"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Galactagogue",
      "Anti-inflammatory",
      "Hepatoprotective"
    ],
    "diseases": [
      "Diabetes type 2",
      "High cholesterol",
      "Hair loss",
      "Immune deficiency"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Spice Powder",
      "Essential Oil"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 390,
    "commonName": "Desert Berry Type 29",
    "scientificName": "Botanica arabica vr. 558",
    "herbalUses": [
      "Purifies skin pores",
      "Soothes throat lining",
      "Promotes scalp health"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Hepatoprotective",
      "Antioxidant",
      "Astringent"
    ],
    "diseases": [
      "Asthma",
      "Bronchitis",
      "Cough",
      "Hair loss"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Spice Powder"
    ],
    "sideEffects": [
      "Can cause mild heartburn"
    ]
  },
  {
    "id": 391,
    "commonName": "Desert Spice Type 30",
    "scientificName": "Botanica arabica vr. 387",
    "herbalUses": [
      "Reduces systemic heat",
      "Purifies skin pores",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Expectorant",
      "Diaphoretic",
      "Antispasmodic"
    ],
    "diseases": [
      "Immune deficiency",
      "Hair loss",
      "Diabetes type 2"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Syrup",
      "Cold-pressed Oil",
      "Poultice"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 392,
    "commonName": "Desert Leaf Type 31",
    "scientificName": "Botanica arabica vr. 40",
    "herbalUses": [
      "Purifies skin pores",
      "Antiseptic wash",
      "Balances digestion"
    ],
    "medicalUses": [
      "Antioxidant",
      "Diaphoretic",
      "Galactagogue"
    ],
    "diseases": [
      "Cough",
      "Skin wounds",
      "High cholesterol",
      "Indigestion"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Essential Oil"
    ],
    "sideEffects": [
      "Can cause mild heartburn"
    ]
  },
  {
    "id": 393,
    "commonName": "Desert Resin Type 32",
    "scientificName": "Botanica arabica vr. 933",
    "herbalUses": [
      "Enhances respiratory flow",
      "Antiseptic wash",
      "Relieves chest congestion",
      "Reduces systemic heat"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Anti-inflammatory"
    ],
    "diseases": [
      "High cholesterol",
      "Indigestion",
      "Immune deficiency",
      "Asthma"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Requires well-drained soil.",
    "medicineForm": [
      "Syrup",
      "Poultice",
      "Spice Powder"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 394,
    "commonName": "Desert Resin Type 33",
    "scientificName": "Botanica arabica vr. 534",
    "herbalUses": [
      "Aids milk production",
      "Promotes scalp health",
      "Purifies skin pores"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Anti-inflammatory",
      "Hepatoprotective",
      "Antimicrobial"
    ],
    "diseases": [
      "Bronchitis",
      "Asthma",
      "Hair loss",
      "Psoriasis"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Essential Oil"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 395,
    "commonName": "Desert Leaf Type 34",
    "scientificName": "Botanica arabica vr. 408",
    "herbalUses": [
      "Balances digestion",
      "Reduces systemic heat",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Astringent",
      "Carminative",
      "Galactagogue",
      "Antispasmodic"
    ],
    "diseases": [
      "Indigestion",
      "High cholesterol",
      "Cough",
      "Psoriasis"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Infusion"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 396,
    "commonName": "Desert Shrub Type 35",
    "scientificName": "Botanica arabica vr. 429",
    "herbalUses": [
      "Reduces systemic heat",
      "Enhances respiratory flow",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Astringent",
      "Antimicrobial",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Immune deficiency",
      "Diabetes type 2",
      "Cough",
      "Hair loss"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Requires well-drained soil.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Essential Oil"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 397,
    "commonName": "Desert Seed Type 36",
    "scientificName": "Botanica arabica vr. 879",
    "herbalUses": [
      "Enhances respiratory flow",
      "Aids milk production",
      "Relieves chest congestion",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Carminative",
      "Expectorant",
      "Anti-inflammatory"
    ],
    "diseases": [
      "High cholesterol",
      "Bronchitis",
      "Cough",
      "Asthma"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Infusion",
      "Spice Powder"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 398,
    "commonName": "Desert Shrub Type 37",
    "scientificName": "Botanica arabica vr. 803",
    "herbalUses": [
      "Enhances respiratory flow",
      "Balances digestion",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Hepatoprotective",
      "Antioxidant"
    ],
    "diseases": [
      "Indigestion",
      "Immune deficiency",
      "Skin wounds",
      "Psoriasis"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Infusion",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 399,
    "commonName": "Desert Berry Type 38",
    "scientificName": "Botanica arabica vr. 958",
    "herbalUses": [
      "Reduces systemic heat",
      "Purifies skin pores",
      "Antiseptic wash"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Hepatoprotective",
      "Carminative",
      "Expectorant"
    ],
    "diseases": [
      "Bronchitis",
      "High cholesterol",
      "Asthma",
      "Skin wounds"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Requires well-drained soil.",
    "medicineForm": [
      "Spice Powder",
      "Cold-pressed Oil",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 400,
    "commonName": "Desert Spice Type 39",
    "scientificName": "Botanica arabica vr. 773",
    "herbalUses": [
      "Soothes throat lining",
      "Purifies skin pores",
      "Reduces systemic heat",
      "Balances digestion"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Antispasmodic",
      "Astringent",
      "Expectorant"
    ],
    "diseases": [
      "Diabetes type 2",
      "Indigestion",
      "Cough",
      "Asthma"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Thrives in direct sunlight.",
    "medicineForm": [
      "Syrup",
      "Essential Oil",
      "Spice Powder"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 401,
    "commonName": "Desert Seed Type 40",
    "scientificName": "Botanica arabica vr. 912",
    "herbalUses": [
      "Antiseptic wash",
      "Boosts metabolic fire",
      "Aids milk production"
    ],
    "medicalUses": [
      "Carminative",
      "Antimicrobial",
      "Galactagogue",
      "Antioxidant"
    ],
    "diseases": [
      "Psoriasis",
      "High cholesterol",
      "Skin wounds"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Spice Powder",
      "Infusion"
    ],
    "sideEffects": [
      "Can cause mild heartburn"
    ]
  },
  {
    "id": 402,
    "commonName": "Desert Seed Type 41",
    "scientificName": "Botanica arabica vr. 221",
    "herbalUses": [
      "Antiseptic wash",
      "Enhances respiratory flow",
      "Boosts metabolic fire"
    ],
    "medicalUses": [
      "Galactagogue",
      "Astringent",
      "Antispasmodic",
      "Antioxidant"
    ],
    "diseases": [
      "Cough",
      "Asthma",
      "Hair loss",
      "Skin wounds"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Syrup",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "May slow blood clotting"
    ]
  },
  {
    "id": 403,
    "commonName": "Desert Berry Type 42",
    "scientificName": "Botanica arabica vr. 237",
    "herbalUses": [
      "Purifies skin pores",
      "Aids milk production",
      "Reduces systemic heat"
    ],
    "medicalUses": [
      "Astringent",
      "Carminative",
      "Anti-inflammatory",
      "Hepatoprotective"
    ],
    "diseases": [
      "Indigestion",
      "High cholesterol",
      "Immune deficiency"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Requires well-drained soil.",
    "medicineForm": [
      "Syrup",
      "Spice Powder",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 404,
    "commonName": "Desert Leaf Type 43",
    "scientificName": "Botanica arabica vr. 961",
    "herbalUses": [
      "Promotes scalp health",
      "Enhances respiratory flow",
      "Reduces systemic heat",
      "Balances digestion"
    ],
    "medicalUses": [
      "Expectorant",
      "Antimicrobial",
      "Antispasmodic",
      "Galactagogue"
    ],
    "diseases": [
      "Immune deficiency",
      "High cholesterol",
      "Psoriasis"
    ],
    "habitat": "Thrives in rocky, calcareous soils of the Levant. Thrives in direct sunlight.",
    "medicineForm": [
      "Spice Powder",
      "Syrup",
      "Infusion"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 405,
    "commonName": "Desert Resin Type 44",
    "scientificName": "Botanica arabica vr. 11",
    "herbalUses": [
      "Relieves chest congestion",
      "Reduces systemic heat",
      "Purifies skin pores",
      "Soothes throat lining"
    ],
    "medicalUses": [
      "Antioxidant",
      "Galactagogue",
      "Anti-inflammatory",
      "Astringent"
    ],
    "diseases": [
      "Immune deficiency",
      "Diabetes type 2",
      "High cholesterol",
      "Bronchitis"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Cold-pressed Oil",
      "Spice Powder",
      "Syrup"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 406,
    "commonName": "Desert Shrub Type 45",
    "scientificName": "Botanica arabica vr. 841",
    "herbalUses": [
      "Soothes throat lining",
      "Aids milk production",
      "Enhances respiratory flow"
    ],
    "medicalUses": [
      "Antioxidant",
      "Astringent",
      "Antispasmodic"
    ],
    "diseases": [
      "Psoriasis",
      "Immune deficiency",
      "Skin wounds",
      "Hair loss"
    ],
    "habitat": "Cultivated heavily across Mediterranean coastal zones. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Cold-pressed Oil",
      "Spice Powder"
    ],
    "sideEffects": [
      "Not recommended during early pregnancy"
    ]
  },
  {
    "id": 407,
    "commonName": "Desert Resin Type 46",
    "scientificName": "Botanica arabica vr. 540",
    "herbalUses": [
      "Boosts metabolic fire",
      "Enhances respiratory flow",
      "Promotes scalp health",
      "Aids milk production"
    ],
    "medicalUses": [
      "Carminative",
      "Antimicrobial",
      "Expectorant",
      "Astringent"
    ],
    "diseases": [
      "Bronchitis",
      "Asthma",
      "Indigestion"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Thrives in direct sunlight.",
    "medicineForm": [
      "Essential Oil",
      "Cold-pressed Oil"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 408,
    "commonName": "Desert Seed Type 47",
    "scientificName": "Botanica arabica vr. 170",
    "herbalUses": [
      "Enhances respiratory flow",
      "Balances digestion",
      "Antiseptic wash"
    ],
    "medicalUses": [
      "Expectorant",
      "Galactagogue",
      "Hepatoprotective"
    ],
    "diseases": [
      "Immune deficiency",
      "Indigestion",
      "Hair loss",
      "Asthma"
    ],
    "habitat": "Native to the arid Middle Eastern deserts and scrublands. Requires well-drained soil.",
    "medicineForm": [
      "Syrup",
      "Poultice",
      "Infusion"
    ],
    "sideEffects": [
      "Can cause mild heartburn"
    ]
  },
  {
    "id": 409,
    "commonName": "Desert Leaf Type 48",
    "scientificName": "Botanica arabica vr. 735",
    "herbalUses": [
      "Enhances respiratory flow",
      "Balances digestion",
      "Soothes throat lining",
      "Reduces systemic heat"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Carminative",
      "Astringent"
    ],
    "diseases": [
      "High cholesterol",
      "Hair loss",
      "Immune deficiency"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Infusion",
      "Syrup"
    ],
    "sideEffects": [
      "May lower blood sugar rapidly combined with meds"
    ]
  },
  {
    "id": 410,
    "commonName": "Desert Shrub Type 49",
    "scientificName": "Botanica arabica vr. 920",
    "herbalUses": [
      "Boosts metabolic fire",
      "Enhances respiratory flow",
      "Relieves chest congestion"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Anti-inflammatory",
      "Carminative",
      "Expectorant"
    ],
    "diseases": [
      "Psoriasis",
      "Skin wounds",
      "Hair loss",
      "High cholesterol"
    ],
    "habitat": "Grows wild across Persian historical trade routes. Requires well-drained soil.",
    "medicineForm": [
      "Infusion",
      "Cold-pressed Oil",
      "Syrup"
    ],
    "sideEffects": [
      "Avoid applying undiluted oil to skin"
    ]
  },
  {
    "id": 411,
    "commonName": "Tongkat Ali",
    "scientificName": "Botanica asiatica vr. 855",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Relieves gout pain",
      "Aids deep sleep"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antidiabetic",
      "Aphrodisiac"
    ],
    "diseases": [
      "High blood pressure",
      "Stomach ulcers",
      "Dengue fever recovery",
      "Erectile dysfunction"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Fresh Juice",
      "Poultice"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 412,
    "commonName": "Andrographis",
    "scientificName": "Botanica asiatica vr. 753",
    "herbalUses": [
      "Promotes digestion",
      "Reduces metabolic sugar",
      "Enhances skin brightness",
      "Detoxifies kidneys"
    ],
    "medicalUses": [
      "Gastroprotective",
      "Antioxidant",
      "Aphrodisiac"
    ],
    "diseases": [
      "Insomnia",
      "Dengue fever recovery",
      "Kidney stones"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Leaf Extract",
      "Capsule"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 413,
    "commonName": "Centella Asiatica",
    "scientificName": "Botanica asiatica vr. 14",
    "herbalUses": [
      "Reduces metabolic sugar",
      "Boosts male vitality",
      "Enhances skin brightness",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antipyretic",
      "Diuretic"
    ],
    "diseases": [
      "Bacterial infections",
      "Erectile dysfunction",
      "Dengue fever recovery",
      "Insomnia"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 414,
    "commonName": "Kaffir Lime",
    "scientificName": "Botanica asiatica vr. 374",
    "herbalUses": [
      "Promotes digestion",
      "Soothes stomach ulcers",
      "Aids deep sleep",
      "Drops systemic fever"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Diuretic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Malaria",
      "Diabetes",
      "Bacterial infections"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 415,
    "commonName": "Galangal",
    "scientificName": "Botanica asiatica vr. 244",
    "herbalUses": [
      "Drops systemic fever",
      "Boosts male vitality",
      "Reduces metabolic sugar"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Hepatoprotective",
      "Gastroprotective",
      "Adaptogenic"
    ],
    "diseases": [
      "Kidney stones",
      "Stomach ulcers",
      "Insomnia"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Capsule"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 416,
    "commonName": "Lemongrass",
    "scientificName": "Botanica asiatica vr. 820",
    "herbalUses": [
      "Boosts male vitality",
      "Aids deep sleep",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antimicrobial",
      "Adaptogenic"
    ],
    "diseases": [
      "Malaria",
      "Gout",
      "Insomnia"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Fresh Juice",
      "Leaf Extract"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 417,
    "commonName": "Pandan",
    "scientificName": "Botanica asiatica vr. 563",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Repels local insects",
      "Relieves gout pain",
      "Enhances skin brightness"
    ],
    "medicalUses": [
      "Antidiabetic",
      "Diuretic",
      "Aphrodisiac",
      "Hepatoprotective"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Erectile dysfunction",
      "High blood pressure",
      "Diabetes"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea",
      "Root Decoction"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 418,
    "commonName": "Butterfly Pea",
    "scientificName": "Botanica asiatica vr. 104",
    "herbalUses": [
      "Reduces metabolic sugar",
      "Detoxifies kidneys",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Antipyretic",
      "Gastroprotective",
      "Antidiabetic"
    ],
    "diseases": [
      "High blood pressure",
      "Stomach ulcers",
      "Bacterial infections"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 419,
    "commonName": "Banaba",
    "scientificName": "Botanica asiatica vr. 887",
    "herbalUses": [
      "Drops systemic fever",
      "Detoxifies kidneys",
      "Boosts male vitality",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Hepatoprotective",
      "Antipyretic",
      "Diuretic"
    ],
    "diseases": [
      "Bacterial infections",
      "Dengue fever recovery",
      "Malaria",
      "Erectile dysfunction"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 420,
    "commonName": "Sambong",
    "scientificName": "Botanica asiatica vr. 659",
    "herbalUses": [
      "Repels local insects",
      "Detoxifies kidneys",
      "Reduces metabolic sugar",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antidiabetic",
      "Gastroprotective"
    ],
    "diseases": [
      "Stomach ulcers",
      "Bacterial infections",
      "Insomnia"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Herbal Tea",
      "Fresh Juice"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 421,
    "commonName": "Lagundi",
    "scientificName": "Botanica asiatica vr. 597",
    "herbalUses": [
      "Relieves gout pain",
      "Drops systemic fever",
      "Repels local insects"
    ],
    "medicalUses": [
      "Gastroprotective",
      "Antidiabetic",
      "Antioxidant"
    ],
    "diseases": [
      "Malaria",
      "Dengue fever recovery",
      "Erectile dysfunction"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 422,
    "commonName": "Guava Leaf",
    "scientificName": "Botanica asiatica vr. 46",
    "herbalUses": [
      "Enhances skin brightness",
      "Aids deep sleep",
      "Drops systemic fever"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Adaptogenic",
      "Antimicrobial"
    ],
    "diseases": [
      "Malaria",
      "Dengue fever recovery",
      "Erectile dysfunction"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 423,
    "commonName": "Papaya Leaf",
    "scientificName": "Botanica asiatica vr. 162",
    "herbalUses": [
      "Drops systemic fever",
      "Enhances skin brightness",
      "Soothes stomach ulcers"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Antimicrobial",
      "Hepatoprotective",
      "Antidiabetic"
    ],
    "diseases": [
      "Gout",
      "Erectile dysfunction",
      "Kidney stones"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 424,
    "commonName": "Soursop Leaf",
    "scientificName": "Botanica asiatica vr. 370",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Reduces metabolic sugar",
      "Enhances skin brightness"
    ],
    "medicalUses": [
      "Antioxidant",
      "Antidiabetic",
      "Adaptogenic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Erectile dysfunction",
      "High blood pressure",
      "Malaria"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Poultice"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 425,
    "commonName": "Noni",
    "scientificName": "Botanica asiatica vr. 858",
    "herbalUses": [
      "Drops systemic fever",
      "Aids deep sleep",
      "Soothes stomach ulcers",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antipyretic",
      "Adaptogenic",
      "Anti-inflammatory",
      "Antidiabetic"
    ],
    "diseases": [
      "High blood pressure",
      "Stomach ulcers",
      "Gout"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Poultice",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 426,
    "commonName": "Mangosteen",
    "scientificName": "Botanica asiatica vr. 308",
    "herbalUses": [
      "Drops systemic fever",
      "Aids deep sleep",
      "Promotes digestion",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Antioxidant",
      "Gastroprotective",
      "Adaptogenic"
    ],
    "diseases": [
      "Stomach ulcers",
      "Bacterial infections",
      "Dengue fever recovery"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Tincture",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 427,
    "commonName": "Bitter Gourd",
    "scientificName": "Botanica asiatica vr. 788",
    "herbalUses": [
      "Enhances skin brightness",
      "Promotes digestion",
      "Aids deep sleep"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Antipyretic",
      "Antidiabetic"
    ],
    "diseases": [
      "Insomnia",
      "Gout",
      "Diabetes"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 428,
    "commonName": "Holy Basil Thai",
    "scientificName": "Botanica asiatica vr. 622",
    "herbalUses": [
      "Drops systemic fever",
      "Relieves gout pain",
      "Enhances skin brightness",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antipyretic",
      "Antioxidant",
      "Hepatoprotective"
    ],
    "diseases": [
      "Erectile dysfunction",
      "Gout",
      "Dengue fever recovery"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Leaf Extract",
      "Root Decoction"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 429,
    "commonName": "Fingerroot",
    "scientificName": "Botanica asiatica vr. 139",
    "herbalUses": [
      "Drops systemic fever",
      "Promotes digestion",
      "Reduces metabolic sugar",
      "Enhances skin brightness"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Aphrodisiac",
      "Antimicrobial"
    ],
    "diseases": [
      "Bacterial infections",
      "Dengue fever recovery",
      "Diabetes"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Root Decoction"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 430,
    "commonName": "Thai Ginger",
    "scientificName": "Botanica asiatica vr. 869",
    "herbalUses": [
      "Boosts male vitality",
      "Soothes stomach ulcers",
      "Drops systemic fever",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antioxidant",
      "Aphrodisiac"
    ],
    "diseases": [
      "Gout",
      "Diabetes",
      "Insomnia",
      "Stomach ulcers"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea",
      "Capsule"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 431,
    "commonName": "Tropical Fruit Type 20",
    "scientificName": "Botanica asiatica vr. 720",
    "herbalUses": [
      "Drops systemic fever",
      "Boosts male vitality",
      "Detoxifies kidneys",
      "Aids deep sleep"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antipyretic",
      "Antidiabetic"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Kidney stones",
      "Gout"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Fresh Juice",
      "Tincture",
      "Poultice"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 432,
    "commonName": "Tropical Flower Type 21",
    "scientificName": "Botanica asiatica vr. 972",
    "herbalUses": [
      "Boosts male vitality",
      "Drops systemic fever",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Antidiabetic",
      "Hepatoprotective",
      "Antipyretic"
    ],
    "diseases": [
      "Gout",
      "Diabetes",
      "Kidney stones"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 433,
    "commonName": "Tropical Fruit Type 22",
    "scientificName": "Botanica asiatica vr. 252",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Reduces metabolic sugar",
      "Aids deep sleep",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antioxidant",
      "Aphrodisiac",
      "Antidiabetic",
      "Antimicrobial"
    ],
    "diseases": [
      "Gout",
      "Erectile dysfunction",
      "Stomach ulcers"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Poultice"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 434,
    "commonName": "Tropical Leaf Type 23",
    "scientificName": "Botanica asiatica vr. 799",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Reduces metabolic sugar",
      "Boosts male vitality",
      "Repels local insects"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Antidiabetic",
      "Adaptogenic",
      "Antioxidant"
    ],
    "diseases": [
      "Bacterial infections",
      "Gout",
      "Diabetes"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Requires well-drained soil.",
    "medicineForm": [
      "Fresh Juice",
      "Root Decoction"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 435,
    "commonName": "Tropical Bark Type 24",
    "scientificName": "Botanica asiatica vr. 332",
    "herbalUses": [
      "Reduces metabolic sugar",
      "Soothes stomach ulcers",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antimicrobial",
      "Aphrodisiac",
      "Antioxidant"
    ],
    "diseases": [
      "Gout",
      "High blood pressure",
      "Dengue fever recovery"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Leaf Extract",
      "Tincture",
      "Poultice"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 436,
    "commonName": "Tropical Flower Type 25",
    "scientificName": "Botanica asiatica vr. 886",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Drops systemic fever",
      "Relieves gout pain",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antidiabetic",
      "Diuretic",
      "Adaptogenic"
    ],
    "diseases": [
      "Kidney stones",
      "Malaria",
      "Diabetes",
      "Stomach ulcers"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Thrives in direct sunlight.",
    "medicineForm": [
      "Fresh Juice",
      "Capsule"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 437,
    "commonName": "Tropical Fruit Type 26",
    "scientificName": "Botanica asiatica vr. 358",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Boosts male vitality",
      "Enhances skin brightness"
    ],
    "medicalUses": [
      "Antidiabetic",
      "Antioxidant",
      "Gastroprotective",
      "Adaptogenic"
    ],
    "diseases": [
      "Bacterial infections",
      "Stomach ulcers",
      "Insomnia"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Requires well-drained soil.",
    "medicineForm": [
      "Tincture",
      "Leaf Extract",
      "Fresh Juice"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 438,
    "commonName": "Tropical Leaf Type 27",
    "scientificName": "Botanica asiatica vr. 259",
    "herbalUses": [
      "Aids deep sleep",
      "Drops systemic fever",
      "Soothes stomach ulcers",
      "Reduces metabolic sugar"
    ],
    "medicalUses": [
      "Adaptogenic",
      "Antipyretic",
      "Antidiabetic"
    ],
    "diseases": [
      "Insomnia",
      "High blood pressure",
      "Gout",
      "Kidney stones"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 439,
    "commonName": "Tropical Leaf Type 28",
    "scientificName": "Botanica asiatica vr. 85",
    "herbalUses": [
      "Aids deep sleep",
      "Drops systemic fever",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antipyretic",
      "Diuretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Gout",
      "Dengue fever recovery",
      "Stomach ulcers",
      "Malaria"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Fresh Juice"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 440,
    "commonName": "Tropical Leaf Type 29",
    "scientificName": "Botanica asiatica vr. 605",
    "herbalUses": [
      "Boosts male vitality",
      "Repels local insects",
      "Enhances skin brightness"
    ],
    "medicalUses": [
      "Hepatoprotective",
      "Antimicrobial",
      "Antioxidant"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Erectile dysfunction",
      "High blood pressure",
      "Kidney stones"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Fresh Juice",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 441,
    "commonName": "Tropical Flower Type 30",
    "scientificName": "Botanica asiatica vr. 339",
    "herbalUses": [
      "Reduces metabolic sugar",
      "Drops systemic fever",
      "Detoxifies kidneys",
      "Aids deep sleep"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Aphrodisiac",
      "Antioxidant"
    ],
    "diseases": [
      "Malaria",
      "Diabetes",
      "Insomnia",
      "Stomach ulcers"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 442,
    "commonName": "Tropical Flower Type 31",
    "scientificName": "Botanica asiatica vr. 989",
    "herbalUses": [
      "Drops systemic fever",
      "Aids deep sleep",
      "Promotes digestion",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antidiabetic",
      "Adaptogenic"
    ],
    "diseases": [
      "Diabetes",
      "Insomnia",
      "Erectile dysfunction"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 443,
    "commonName": "Tropical Fruit Type 32",
    "scientificName": "Botanica asiatica vr. 573",
    "herbalUses": [
      "Drops systemic fever",
      "Aids deep sleep",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antipyretic",
      "Anti-inflammatory",
      "Antidiabetic"
    ],
    "diseases": [
      "Insomnia",
      "Gout",
      "High blood pressure"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Fresh Juice",
      "Tincture"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 444,
    "commonName": "Tropical Bark Type 33",
    "scientificName": "Botanica asiatica vr. 91",
    "herbalUses": [
      "Reduces metabolic sugar",
      "Relieves gout pain",
      "Promotes digestion",
      "Soothes stomach ulcers"
    ],
    "medicalUses": [
      "Antidiabetic",
      "Antimicrobial",
      "Antipyretic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Kidney stones",
      "Gout",
      "Diabetes",
      "Bacterial infections"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Poultice",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 445,
    "commonName": "Tropical Flower Type 34",
    "scientificName": "Botanica asiatica vr. 919",
    "herbalUses": [
      "Enhances skin brightness",
      "Reduces metabolic sugar",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antidiabetic",
      "Antioxidant",
      "Adaptogenic"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Malaria",
      "Kidney stones",
      "Erectile dysfunction"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Fresh Juice",
      "Capsule",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 446,
    "commonName": "Tropical Fruit Type 35",
    "scientificName": "Botanica asiatica vr. 395",
    "herbalUses": [
      "Repels local insects",
      "Soothes stomach ulcers",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antimicrobial",
      "Antioxidant",
      "Gastroprotective"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Diabetes",
      "High blood pressure"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Leaf Extract",
      "Tincture"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 447,
    "commonName": "Tropical Flower Type 36",
    "scientificName": "Botanica asiatica vr. 686",
    "herbalUses": [
      "Soothes stomach ulcers",
      "Drops systemic fever",
      "Boosts male vitality"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Antipyretic",
      "Adaptogenic"
    ],
    "diseases": [
      "Kidney stones",
      "Bacterial infections",
      "Dengue fever recovery"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Leaf Extract",
      "Capsule"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 448,
    "commonName": "Tropical Flower Type 37",
    "scientificName": "Botanica asiatica vr. 263",
    "herbalUses": [
      "Repels local insects",
      "Soothes stomach ulcers",
      "Enhances skin brightness"
    ],
    "medicalUses": [
      "Antipyretic",
      "Antioxidant",
      "Hepatoprotective",
      "Gastroprotective"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Kidney stones",
      "Erectile dysfunction"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Leaf Extract",
      "Fresh Juice",
      "Capsule"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 449,
    "commonName": "Tropical Vine Type 38",
    "scientificName": "Botanica asiatica vr. 127",
    "herbalUses": [
      "Enhances skin brightness",
      "Aids deep sleep",
      "Soothes stomach ulcers"
    ],
    "medicalUses": [
      "Diuretic",
      "Gastroprotective",
      "Aphrodisiac"
    ],
    "diseases": [
      "Bacterial infections",
      "Malaria",
      "Stomach ulcers"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Fresh Juice"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 450,
    "commonName": "Tropical Root Type 39",
    "scientificName": "Botanica asiatica vr. 510",
    "herbalUses": [
      "Repels local insects",
      "Boosts male vitality",
      "Detoxifies kidneys",
      "Soothes stomach ulcers"
    ],
    "medicalUses": [
      "Gastroprotective",
      "Hepatoprotective",
      "Antipyretic",
      "Antioxidant"
    ],
    "diseases": [
      "High blood pressure",
      "Stomach ulcers",
      "Malaria",
      "Insomnia"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Leaf Extract"
    ],
    "sideEffects": [
      "Avoid mixing with commercial diabetic drugs"
    ]
  },
  {
    "id": 451,
    "commonName": "Tropical Root Type 40",
    "scientificName": "Botanica asiatica vr. 982",
    "herbalUses": [
      "Aids deep sleep",
      "Relieves gout pain",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Antioxidant",
      "Gastroprotective",
      "Antidiabetic"
    ],
    "diseases": [
      "Stomach ulcers",
      "Bacterial infections",
      "Dengue fever recovery"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Leaf Extract",
      "Root Decoction"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 452,
    "commonName": "Tropical Leaf Type 41",
    "scientificName": "Botanica asiatica vr. 248",
    "herbalUses": [
      "Boosts male vitality",
      "Soothes stomach ulcers",
      "Enhances skin brightness",
      "Drops systemic fever"
    ],
    "medicalUses": [
      "Gastroprotective",
      "Aphrodisiac",
      "Antidiabetic"
    ],
    "diseases": [
      "Dengue fever recovery",
      "Gout",
      "Bacterial infections"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Requires well-drained soil.",
    "medicineForm": [
      "Root Decoction",
      "Capsule"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 453,
    "commonName": "Tropical Root Type 42",
    "scientificName": "Botanica asiatica vr. 779",
    "herbalUses": [
      "Drops systemic fever",
      "Boosts male vitality",
      "Promotes digestion",
      "Aids deep sleep"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Antioxidant",
      "Diuretic",
      "Aphrodisiac"
    ],
    "diseases": [
      "High blood pressure",
      "Insomnia",
      "Stomach ulcers"
    ],
    "habitat": "Cultivated near riverbanks and marshlands across Thailand. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea",
      "Fresh Juice"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 454,
    "commonName": "Tropical Vine Type 43",
    "scientificName": "Botanica asiatica vr. 585",
    "herbalUses": [
      "Reduces metabolic sugar",
      "Boosts male vitality",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Gastroprotective",
      "Antidiabetic"
    ],
    "diseases": [
      "Bacterial infections",
      "Erectile dysfunction",
      "Dengue fever recovery",
      "Diabetes"
    ],
    "habitat": "Native to dense, humid tropical jungles of Southeast Asia. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Poultice",
      "Leaf Extract"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 455,
    "commonName": "Tropical Flower Type 44",
    "scientificName": "Botanica asiatica vr. 646",
    "herbalUses": [
      "Repels local insects",
      "Soothes stomach ulcers",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Aphrodisiac",
      "Diuretic",
      "Hepatoprotective"
    ],
    "diseases": [
      "Malaria",
      "Dengue fever recovery",
      "Kidney stones",
      "Erectile dysfunction"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule",
      "Poultice"
    ],
    "sideEffects": [
      "May induce mild sweating"
    ]
  },
  {
    "id": 456,
    "commonName": "Tropical Vine Type 45",
    "scientificName": "Botanica asiatica vr. 805",
    "herbalUses": [
      "Detoxifies kidneys",
      "Drops systemic fever",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Antipyretic",
      "Anti-inflammatory",
      "Adaptogenic",
      "Gastroprotective"
    ],
    "diseases": [
      "Gout",
      "Malaria",
      "Diabetes",
      "Stomach ulcers"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 457,
    "commonName": "Tropical Root Type 46",
    "scientificName": "Botanica asiatica vr. 916",
    "herbalUses": [
      "Repels local insects",
      "Relieves gout pain",
      "Promotes digestion"
    ],
    "medicalUses": [
      "Diuretic",
      "Aphrodisiac",
      "Adaptogenic"
    ],
    "diseases": [
      "Diabetes",
      "Bacterial infections",
      "Insomnia"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Requires well-drained soil.",
    "medicineForm": [
      "Poultice",
      "Tincture",
      "Leaf Extract"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 458,
    "commonName": "Tropical Root Type 47",
    "scientificName": "Botanica asiatica vr. 691",
    "herbalUses": [
      "Aids deep sleep",
      "Detoxifies kidneys",
      "Drops systemic fever",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Gastroprotective",
      "Aphrodisiac",
      "Antipyretic"
    ],
    "diseases": [
      "Insomnia",
      "Bacterial infections",
      "Gout"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Thrives in direct sunlight.",
    "medicineForm": [
      "Leaf Extract",
      "Fresh Juice",
      "Root Decoction"
    ],
    "sideEffects": [
      "Not suitable for nursing mothers"
    ]
  },
  {
    "id": 459,
    "commonName": "Tropical Fruit Type 48",
    "scientificName": "Botanica asiatica vr. 304",
    "herbalUses": [
      "Drops systemic fever",
      "Boosts male vitality",
      "Reduces metabolic sugar"
    ],
    "medicalUses": [
      "Antioxidant",
      "Hepatoprotective",
      "Adaptogenic",
      "Diuretic"
    ],
    "diseases": [
      "Diabetes",
      "Malaria",
      "Gout"
    ],
    "habitat": "Grows organically in the volcanic soils of Indonesia. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Decoction",
      "Fresh Juice",
      "Leaf Extract"
    ],
    "sideEffects": [
      "May upset extremely sensitive stomachs"
    ]
  },
  {
    "id": 460,
    "commonName": "Tropical Flower Type 49",
    "scientificName": "Botanica asiatica vr. 964",
    "herbalUses": [
      "Aids deep sleep",
      "Drops systemic fever",
      "Relieves gout pain"
    ],
    "medicalUses": [
      "Antioxidant",
      "Anti-inflammatory",
      "Aphrodisiac"
    ],
    "diseases": [
      "Gout",
      "Bacterial infections",
      "Dengue fever recovery"
    ],
    "habitat": "Found naturally trailing through the Malaysian peninsula. Thrives in direct sunlight.",
    "medicineForm": [
      "Capsule",
      "Root Decoction",
      "Fresh Juice"
    ],
    "sideEffects": [
      "Can cause mild insomnia"
    ]
  },
  {
    "id": 461,
    "commonName": "Black Cohosh",
    "scientificName": "Botanica americana vr. 933",
    "herbalUses": [
      "Supports prostate health",
      "Calms nerve tension",
      "Clears lung buildup",
      "Soothes skin irritations"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunostimulant",
      "Expectorant",
      "Antispasmodic"
    ],
    "diseases": [
      "UTI",
      "Rheumatism",
      "Minor topical burns"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Lozenges"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 462,
    "commonName": "Blue Cohosh",
    "scientificName": "Botanica americana vr. 326",
    "herbalUses": [
      "Relieves menstrual spasms",
      "Supports prostate health",
      "Clears lung buildup",
      "Aids urinary tract"
    ],
    "medicalUses": [
      "Expectorant",
      "Diuretic",
      "Nervine",
      "Immunostimulant"
    ],
    "diseases": [
      "Rheumatism",
      "Prostate enlargement",
      "Eczema"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule",
      "Tincture"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 463,
    "commonName": "Goldenseal",
    "scientificName": "Botanica americana vr. 45",
    "herbalUses": [
      "Aids urinary tract",
      "Heals mucous membranes",
      "Supports prostate health",
      "Soothes skin irritations"
    ],
    "medicalUses": [
      "Anti-inflammatory",
      "Immunostimulant",
      "Diuretic"
    ],
    "diseases": [
      "Rheumatism",
      "Bronchitis",
      "Anxiety",
      "Minor topical burns"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Root Powder",
      "Capsule"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 464,
    "commonName": "American Ginseng",
    "scientificName": "Botanica americana vr. 161",
    "herbalUses": [
      "Clears lung buildup",
      "Reduces joint swelling",
      "Aids urinary tract"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Diuretic",
      "Vulnerary"
    ],
    "diseases": [
      "Anxiety",
      "Bronchitis",
      "Minor topical burns",
      "Sore throat"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Capsule"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 465,
    "commonName": "Wild Yam",
    "scientificName": "Botanica americana vr. 778",
    "herbalUses": [
      "Soothes skin irritations",
      "Calms nerve tension",
      "Purifies lymphatic system",
      "Supports prostate health"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Nervine",
      "Immunostimulant",
      "Astringent"
    ],
    "diseases": [
      "Sore throat",
      "UTI",
      "Anxiety",
      "Prostate enlargement"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule",
      "Root Powder"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 466,
    "commonName": "Saw Palmetto",
    "scientificName": "Botanica americana vr. 495",
    "herbalUses": [
      "Clears lung buildup",
      "Heals mucous membranes",
      "Purifies lymphatic system"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Diuretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Sore throat",
      "Muscle spasms",
      "Minor topical burns",
      "UTI"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 467,
    "commonName": "Cranberry",
    "scientificName": "Botanica americana vr. 824",
    "herbalUses": [
      "Reduces joint swelling",
      "Clears lung buildup",
      "Soothes skin irritations"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Immunostimulant",
      "Astringent"
    ],
    "diseases": [
      "Sore throat",
      "Rheumatism",
      "Muscle spasms"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Salve"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 468,
    "commonName": "Blueberry Leaf",
    "scientificName": "Botanica americana vr. 95",
    "herbalUses": [
      "Soothes skin irritations",
      "Relieves menstrual spasms",
      "Reduces joint swelling",
      "Clears lung buildup"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Astringent",
      "Antimicrobial"
    ],
    "diseases": [
      "UTI",
      "Prostate enlargement",
      "Menopause symptoms",
      "Anxiety"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 469,
    "commonName": "Witch Hazel",
    "scientificName": "Botanica americana vr. 272",
    "herbalUses": [
      "Clears lung buildup",
      "Soothes skin irritations",
      "Reduces joint swelling"
    ],
    "medicalUses": [
      "Nervine",
      "Anti-inflammatory",
      "Immunostimulant"
    ],
    "diseases": [
      "Minor topical burns",
      "Menopause symptoms",
      "Bronchitis"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Salve",
      "Capsule"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 470,
    "commonName": "Slippery Elm",
    "scientificName": "Botanica americana vr. 344",
    "herbalUses": [
      "Boosts internal immunity",
      "Soothes skin irritations",
      "Heals mucous membranes"
    ],
    "medicalUses": [
      "Astringent",
      "Vulnerary",
      "Expectorant",
      "Antispasmodic"
    ],
    "diseases": [
      "Eczema",
      "Rheumatism",
      "Anxiety"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Salve"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 471,
    "commonName": "American Elderberry",
    "scientificName": "Botanica americana vr. 93",
    "herbalUses": [
      "Boosts internal immunity",
      "Soothes skin irritations",
      "Aids urinary tract",
      "Calms nerve tension"
    ],
    "medicalUses": [
      "Astringent",
      "Vulnerary",
      "Anti-inflammatory",
      "Nervine"
    ],
    "diseases": [
      "Rheumatism",
      "Prostate enlargement",
      "Menopause symptoms"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Salve",
      "Tincture",
      "Capsule"
    ],
    "sideEffects": [
      "May cause slight drowsiness"
    ]
  },
  {
    "id": 472,
    "commonName": "Boneset",
    "scientificName": "Botanica americana vr. 710",
    "herbalUses": [
      "Soothes skin irritations",
      "Calms nerve tension",
      "Aids urinary tract"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Antimicrobial"
    ],
    "diseases": [
      "Rheumatism",
      "Anxiety",
      "Menopause symptoms"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Salve"
    ],
    "sideEffects": [
      "May cause slight drowsiness"
    ]
  },
  {
    "id": 473,
    "commonName": "Bloodroot",
    "scientificName": "Botanica americana vr. 441",
    "herbalUses": [
      "Supports prostate health",
      "Relieves menstrual spasms",
      "Aids urinary tract",
      "Reduces joint swelling"
    ],
    "medicalUses": [
      "Expectorant",
      "Nervine",
      "Anti-inflammatory",
      "Antimicrobial"
    ],
    "diseases": [
      "Sore throat",
      "UTI",
      "Eczema",
      "Anxiety"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture",
      "Lozenges"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 474,
    "commonName": "Lobelia",
    "scientificName": "Botanica americana vr. 817",
    "herbalUses": [
      "Reduces joint swelling",
      "Soothes skin irritations",
      "Calms nerve tension"
    ],
    "medicalUses": [
      "Expectorant",
      "Alterative",
      "Vulnerary"
    ],
    "diseases": [
      "UTI",
      "Minor topical burns",
      "Bronchitis",
      "Rheumatism"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Tincture",
      "Salve"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 475,
    "commonName": "Osha Root",
    "scientificName": "Botanica americana vr. 646",
    "herbalUses": [
      "Supports prostate health",
      "Relieves menstrual spasms",
      "Reduces joint swelling"
    ],
    "medicalUses": [
      "Expectorant",
      "Anti-inflammatory",
      "Alterative"
    ],
    "diseases": [
      "Anxiety",
      "Rheumatism",
      "Bronchitis"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May cause slight drowsiness"
    ]
  },
  {
    "id": 476,
    "commonName": "Yerba Santa",
    "scientificName": "Botanica americana vr. 106",
    "herbalUses": [
      "Heals mucous membranes",
      "Aids urinary tract",
      "Boosts internal immunity"
    ],
    "medicalUses": [
      "Diuretic",
      "Expectorant",
      "Antispasmodic"
    ],
    "diseases": [
      "Sore throat",
      "UTI",
      "Prostate enlargement"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Thrives in direct sunlight.",
    "medicineForm": [
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 477,
    "commonName": "Chaparral",
    "scientificName": "Botanica americana vr. 695",
    "herbalUses": [
      "Supports prostate health",
      "Heals mucous membranes",
      "Aids urinary tract",
      "Boosts internal immunity"
    ],
    "medicalUses": [
      "Astringent",
      "Expectorant",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Sore throat",
      "Rheumatism",
      "Bronchitis"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Herbal Tea",
      "Decoction"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 478,
    "commonName": "Uva Ursi",
    "scientificName": "Botanica americana vr. 18",
    "herbalUses": [
      "Relieves menstrual spasms",
      "Supports prostate health",
      "Heals mucous membranes"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Vulnerary",
      "Anti-inflammatory",
      "Diuretic"
    ],
    "diseases": [
      "Rheumatism",
      "Bronchitis",
      "Menopause symptoms",
      "Anxiety"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Decoction"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 479,
    "commonName": "North Woods Plum Type 18",
    "scientificName": "Botanica americana vr. 66",
    "herbalUses": [
      "Reduces joint swelling",
      "Heals mucous membranes",
      "Relieves menstrual spasms",
      "Supports prostate health"
    ],
    "medicalUses": [
      "Immunostimulant",
      "Nervine",
      "Alterative"
    ],
    "diseases": [
      "UTI",
      "Eczema",
      "Prostate enlargement"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 480,
    "commonName": "North Woods Berry Type 19",
    "scientificName": "Botanica americana vr. 627",
    "herbalUses": [
      "Calms nerve tension",
      "Relieves menstrual spasms",
      "Supports prostate health",
      "Purifies lymphatic system"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Diuretic",
      "Expectorant",
      "Immunostimulant"
    ],
    "diseases": [
      "Bronchitis",
      "Menopause symptoms",
      "Anxiety",
      "Minor topical burns"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Tincture"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 481,
    "commonName": "North Woods Berry Type 20",
    "scientificName": "Botanica americana vr. 409",
    "herbalUses": [
      "Aids urinary tract",
      "Relieves menstrual spasms",
      "Supports prostate health",
      "Purifies lymphatic system"
    ],
    "medicalUses": [
      "Alterative",
      "Immunostimulant",
      "Astringent",
      "Expectorant"
    ],
    "diseases": [
      "Anxiety",
      "Bronchitis",
      "Menopause symptoms",
      "Eczema"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Tincture",
      "Root Powder"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 482,
    "commonName": "North Woods Berry Type 21",
    "scientificName": "Botanica americana vr. 591",
    "herbalUses": [
      "Aids urinary tract",
      "Soothes skin irritations",
      "Heals mucous membranes"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Muscle spasms",
      "Anxiety",
      "Rheumatism"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Tincture",
      "Root Powder"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 483,
    "commonName": "North Woods Plum Type 22",
    "scientificName": "Botanica americana vr. 632",
    "herbalUses": [
      "Aids urinary tract",
      "Purifies lymphatic system",
      "Clears lung buildup",
      "Reduces joint swelling"
    ],
    "medicalUses": [
      "Alterative",
      "Astringent",
      "Nervine",
      "Expectorant"
    ],
    "diseases": [
      "UTI",
      "Sore throat",
      "Prostate enlargement"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Tincture",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 484,
    "commonName": "North Woods Vine Type 23",
    "scientificName": "Botanica americana vr. 374",
    "herbalUses": [
      "Clears lung buildup",
      "Boosts internal immunity",
      "Aids urinary tract"
    ],
    "medicalUses": [
      "Diuretic",
      "Nervine",
      "Immunostimulant"
    ],
    "diseases": [
      "Rheumatism",
      "UTI",
      "Sore throat"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Requires well-drained soil.",
    "medicineForm": [
      "Root Powder",
      "Salve",
      "Capsule"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 485,
    "commonName": "North Woods Plum Type 24",
    "scientificName": "Botanica americana vr. 500",
    "herbalUses": [
      "Heals mucous membranes",
      "Boosts internal immunity",
      "Purifies lymphatic system",
      "Reduces joint swelling"
    ],
    "medicalUses": [
      "Nervine",
      "Astringent",
      "Anti-inflammatory",
      "Antispasmodic"
    ],
    "diseases": [
      "Sore throat",
      "Anxiety",
      "Menopause symptoms"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Root Powder",
      "Tincture"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 486,
    "commonName": "North Woods Root Type 25",
    "scientificName": "Botanica americana vr. 965",
    "herbalUses": [
      "Boosts internal immunity",
      "Calms nerve tension",
      "Relieves menstrual spasms",
      "Supports prostate health"
    ],
    "medicalUses": [
      "Alterative",
      "Nervine",
      "Vulnerary"
    ],
    "diseases": [
      "Muscle spasms",
      "Eczema",
      "UTI"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Salve",
      "Root Powder"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 487,
    "commonName": "North Woods Root Type 26",
    "scientificName": "Botanica americana vr. 530",
    "herbalUses": [
      "Clears lung buildup",
      "Relieves menstrual spasms",
      "Supports prostate health"
    ],
    "medicalUses": [
      "Nervine",
      "Immunostimulant",
      "Alterative",
      "Diuretic"
    ],
    "diseases": [
      "Rheumatism",
      "Prostate enlargement",
      "Sore throat",
      "Minor topical burns"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Requires well-drained soil.",
    "medicineForm": [
      "Root Powder",
      "Herbal Tea",
      "Salve"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 488,
    "commonName": "North Woods Leaf Type 27",
    "scientificName": "Botanica americana vr. 926",
    "herbalUses": [
      "Clears lung buildup",
      "Soothes skin irritations",
      "Reduces joint swelling",
      "Purifies lymphatic system"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Alterative",
      "Vulnerary"
    ],
    "diseases": [
      "UTI",
      "Sore throat",
      "Minor topical burns",
      "Prostate enlargement"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Thrives in direct sunlight.",
    "medicineForm": [
      "Decoction",
      "Tincture",
      "Salve"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 489,
    "commonName": "North Woods Root Type 28",
    "scientificName": "Botanica americana vr. 960",
    "herbalUses": [
      "Relieves menstrual spasms",
      "Heals mucous membranes",
      "Soothes skin irritations",
      "Boosts internal immunity"
    ],
    "medicalUses": [
      "Diuretic",
      "Vulnerary",
      "Antispasmodic",
      "Expectorant"
    ],
    "diseases": [
      "Sore throat",
      "Rheumatism",
      "Bronchitis",
      "Eczema"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Requires well-drained soil.",
    "medicineForm": [
      "Decoction",
      "Salve",
      "Lozenges"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 490,
    "commonName": "North Woods Vine Type 29",
    "scientificName": "Botanica americana vr. 769",
    "herbalUses": [
      "Supports prostate health",
      "Aids urinary tract",
      "Reduces joint swelling",
      "Calms nerve tension"
    ],
    "medicalUses": [
      "Nervine",
      "Diuretic",
      "Antimicrobial"
    ],
    "diseases": [
      "Anxiety",
      "Sore throat",
      "Bronchitis",
      "Rheumatism"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Salve",
      "Root Powder"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 491,
    "commonName": "North Woods Berry Type 30",
    "scientificName": "Botanica americana vr. 29",
    "herbalUses": [
      "Heals mucous membranes",
      "Boosts internal immunity",
      "Clears lung buildup"
    ],
    "medicalUses": [
      "Expectorant",
      "Anti-inflammatory",
      "Nervine",
      "Immunostimulant"
    ],
    "diseases": [
      "UTI",
      "Prostate enlargement",
      "Rheumatism"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 492,
    "commonName": "North Woods Root Type 31",
    "scientificName": "Botanica americana vr. 311",
    "herbalUses": [
      "Relieves menstrual spasms",
      "Reduces joint swelling",
      "Supports prostate health"
    ],
    "medicalUses": [
      "Expectorant",
      "Vulnerary",
      "Anti-inflammatory",
      "Immunostimulant"
    ],
    "diseases": [
      "UTI",
      "Rheumatism",
      "Menopause symptoms",
      "Anxiety"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Capsule",
      "Tincture"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 493,
    "commonName": "North Woods Vine Type 32",
    "scientificName": "Botanica americana vr. 91",
    "herbalUses": [
      "Boosts internal immunity",
      "Heals mucous membranes",
      "Relieves menstrual spasms"
    ],
    "medicalUses": [
      "Alterative",
      "Immunostimulant",
      "Antimicrobial"
    ],
    "diseases": [
      "UTI",
      "Prostate enlargement",
      "Rheumatism",
      "Eczema"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Herbal Tea",
      "Capsule",
      "Root Powder"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 494,
    "commonName": "North Woods Berry Type 33",
    "scientificName": "Botanica americana vr. 410",
    "herbalUses": [
      "Clears lung buildup",
      "Supports prostate health",
      "Reduces joint swelling",
      "Boosts internal immunity"
    ],
    "medicalUses": [
      "Alterative",
      "Vulnerary",
      "Antispasmodic",
      "Antimicrobial"
    ],
    "diseases": [
      "Menopause symptoms",
      "Prostate enlargement",
      "Eczema"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Herbal Tea"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 495,
    "commonName": "North Woods Root Type 34",
    "scientificName": "Botanica americana vr. 963",
    "herbalUses": [
      "Relieves menstrual spasms",
      "Purifies lymphatic system",
      "Supports prostate health"
    ],
    "medicalUses": [
      "Antimicrobial",
      "Vulnerary",
      "Astringent",
      "Antispasmodic"
    ],
    "diseases": [
      "Prostate enlargement",
      "UTI",
      "Minor topical burns"
    ],
    "habitat": "Grows optimally in the damp soils of the Pacific Northwest. Requires well-drained soil.",
    "medicineForm": [
      "Lozenges",
      "Tincture",
      "Root Powder"
    ],
    "sideEffects": [
      "May cause slight drowsiness"
    ]
  },
  {
    "id": 496,
    "commonName": "North Woods Berry Type 35",
    "scientificName": "Botanica americana vr. 940",
    "herbalUses": [
      "Calms nerve tension",
      "Clears lung buildup",
      "Purifies lymphatic system"
    ],
    "medicalUses": [
      "Antispasmodic",
      "Astringent",
      "Nervine"
    ],
    "diseases": [
      "Sore throat",
      "Menopause symptoms",
      "Bronchitis",
      "Prostate enlargement"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Requires well-drained soil.",
    "medicineForm": [
      "Herbal Tea",
      "Salve",
      "Decoction"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  },
  {
    "id": 497,
    "commonName": "North Woods Vine Type 36",
    "scientificName": "Botanica americana vr. 858",
    "herbalUses": [
      "Aids urinary tract",
      "Boosts internal immunity",
      "Relieves menstrual spasms",
      "Purifies lymphatic system"
    ],
    "medicalUses": [
      "Vulnerary",
      "Anti-inflammatory",
      "Antimicrobial",
      "Diuretic"
    ],
    "diseases": [
      "Minor topical burns",
      "Eczema",
      "Bronchitis",
      "Menopause symptoms"
    ],
    "habitat": "Found widely scattered across open plains and prairies. Thrives in direct sunlight.",
    "medicineForm": [
      "Root Powder",
      "Tincture",
      "Salve"
    ],
    "sideEffects": [
      "May lower blood pressure"
    ]
  },
  {
    "id": 498,
    "commonName": "North Woods Root Type 37",
    "scientificName": "Botanica americana vr. 17",
    "herbalUses": [
      "Heals mucous membranes",
      "Purifies lymphatic system",
      "Relieves menstrual spasms"
    ],
    "medicalUses": [
      "Astringent",
      "Antispasmodic",
      "Diuretic",
      "Anti-inflammatory"
    ],
    "diseases": [
      "Eczema",
      "Sore throat",
      "Prostate enlargement"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Thrives in direct sunlight.",
    "medicineForm": [
      "Salve",
      "Tincture"
    ],
    "sideEffects": [
      "Can cause minor digestive upset"
    ]
  },
  {
    "id": 499,
    "commonName": "North Woods Bark Type 38",
    "scientificName": "Botanica americana vr. 818",
    "herbalUses": [
      "Reduces joint swelling",
      "Aids urinary tract",
      "Calms nerve tension"
    ],
    "medicalUses": [
      "Nervine",
      "Immunostimulant",
      "Diuretic",
      "Alterative"
    ],
    "diseases": [
      "Anxiety",
      "Rheumatism",
      "Eczema",
      "Bronchitis"
    ],
    "habitat": "Native to the Eastern North American deciduous woodlands. Thrives in direct sunlight.",
    "medicineForm": [
      "Lozenges",
      "Tincture"
    ],
    "sideEffects": [
      "May interact with hormonal medications"
    ]
  },
  {
    "id": 500,
    "commonName": "North Woods Plum Type 39",
    "scientificName": "Botanica americana vr. 79",
    "herbalUses": [
      "Clears lung buildup",
      "Heals mucous membranes",
      "Soothes skin irritations"
    ],
    "medicalUses": [
      "Expectorant",
      "Anti-inflammatory",
      "Vulnerary",
      "Diuretic"
    ],
    "diseases": [
      "Anxiety",
      "Menopause symptoms",
      "Rheumatism"
    ],
    "habitat": "Thrives along North American wetland borders and rivers. Requires well-drained soil.",
    "medicineForm": [
      "Capsule",
      "Lozenges"
    ],
    "sideEffects": [
      "Avoid during pregnancy"
    ]
  }
];

export default plants;